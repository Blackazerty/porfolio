import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Parser from 'rss-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputFile = path.join(projectRoot, 'public', 'veille.json');

const parser = new Parser({
  timeout: 15000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; VeilleRSS/1.0; +https://netlify.com)',
  },
});

const translationCache = new Map();
const translationEndpoint = 'https://translate.googleapis.com/translate_a/single';

const FEEDS = [
  { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/feed/' },
  { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews' },
  { name: 'Proofpoint', url: 'https://www.proofpoint.com/us/rss.xml' },
  { name: 'Bellingcat (FR)', url: 'https://fr.bellingcat.com/feed/' },
  { name: 'Malwarebytes', url: 'https://www.malwarebytes.com/blog/feed' },
  { name: 'LeMagIT', url: 'https://www.lemagit.fr/rss/Toutes-les-actualites.xml' },
  { name: 'Zataz', url: 'https://www.zataz.com/feed/' },
];

const KEYWORDS = ['ingénierie sociale', 'social engineering', 'broutage', 'phishing'];

function stripHtml(value = '') {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(value = '') {
  return stripHtml(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function truncate(value = '', maxLength = 220) {
  const cleanValue = stripHtml(value);
  if (cleanValue.length <= maxLength) {
    return cleanValue;
  }

  return `${cleanValue.slice(0, maxLength).trimEnd()}...`;
}

function cleanupTranslatedText(value = '') {
  return stripHtml(value)
    .replace(/\s+en\s+[0-9.]+\s+en$/i, '')
    .replace(/\s+en\s+[0-9.]+$/i, '')
    .replace(/\s+en$/i, '')
    .trim();
}

function matchesKeywords(text = '') {
  const normalizedText = normalize(text);
  return KEYWORDS.some((keyword) => normalizedText.includes(normalize(keyword)));
}

function formatDate(dateValue) {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toISOString().slice(0, 10);
}

async function translateToFrench(value) {
  const cleanValue = stripHtml(value);

  if (!cleanValue) {
    return '';
  }

  const cachedValue = translationCache.get(cleanValue);
  if (cachedValue) {
    return cachedValue;
  }

  try {
    const url = `${translationEndpoint}?client=gtx&sl=auto&tl=fr&dt=t&q=${encodeURIComponent(cleanValue)}`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; VeilleRSS/1.0; +https://netlify.com)',
      },
    });

    if (!response.ok) {
      throw new Error(`Status code ${response.status}`);
    }

    const data = await response.json();
    const translatedText = cleanupTranslatedText(
      Array.isArray(data) && Array.isArray(data[0])
        ? data[0].map((segment) => segment?.[0]).filter(Boolean).join('')
        : cleanValue,
    );

    translationCache.set(cleanValue, translatedText);
    return translatedText;
  } catch (error) {
    console.warn(`[veille] Traduction indisponible, conservation du texte original : ${error.message}`);
    translationCache.set(cleanValue, cleanValue);
    return cleanValue;
  }
}

function getItemText(item) {
  return [item.title, item.contentSnippet, item['content:encoded'], item.content, item.summary, item.description]
    .filter(Boolean)
    .map((value) => stripHtml(String(value)))
    .join(' ');
}

function getArticleLink(item) {
  return item.link || item.guid || item.url || '';
}

async function readExistingArticles() {
  try {
    const content = await fs.readFile(outputFile, 'utf8');
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function cleanAndDeduplicateArticles(articles) {
  const seenLinks = new Set();
  const seenTitles = new Set();
  const cleaned = [];

  for (const article of articles) {
    if (!article?.title || !article?.link || !article?.pubDate) {
      continue;
    }

    const linkKey = normalize(article.link);
    const titleKey = normalize(article.title);

    if (!linkKey || !titleKey) {
      continue;
    }

    if (seenLinks.has(linkKey) || seenTitles.has(titleKey)) {
      continue;
    }

    seenLinks.add(linkKey);
    seenTitles.add(titleKey);
    cleaned.push({
      title: await translateToFrench(article.title),
      link: article.link,
      pubDate: article.pubDate,
      source: stripHtml(article.source || 'Source inconnue'),
      summary: await translateToFrench(truncate(article.summary || article.title)),
    });
  }

  return cleaned;
}

async function fetchFeedArticles(feed) {
  try {
    const parsedFeed = await parser.parseURL(feed.url);

    const translatedArticles = [];

    for (const item of parsedFeed.items) {
        const title = stripHtml(String(item.title || '')).trim();
        const link = getArticleLink(item).trim();
        const content = getItemText(item);

        if (!title || !link || !matchesKeywords(`${title} ${content}`)) {
          continue;
        }

        const pubDate = formatDate(item.isoDate || item.pubDate || item.pubdate || item.published || item.updated);

        if (!pubDate) {
          continue;
        }

        const translatedTitle = await translateToFrench(title);
        const translatedSummary = await translateToFrench(truncate(content || title));

        translatedArticles.push({
          title: translatedTitle,
          link,
          pubDate,
          source: feed.name,
          summary: translatedSummary,
        });
    }

    return translatedArticles;
  } catch (error) {
    console.warn(`[veille] Flux indisponible: ${feed.name} - ${error.message}`);
    return [];
  }
}

async function main() {
  await fs.mkdir(path.dirname(outputFile), { recursive: true });

  const existingArticles = await cleanAndDeduplicateArticles(await readExistingArticles());
  const seenLinks = new Set(existingArticles.map((article) => normalize(article.link)));
  const seenTitles = new Set(existingArticles.map((article) => normalize(article.title)));
  const freshArticles = [];

  for (const feed of FEEDS) {
    const articles = await fetchFeedArticles(feed);

    for (const article of articles) {
      const linkKey = normalize(article.link);
      const titleKey = normalize(article.title);

      if (!linkKey || !titleKey || seenLinks.has(linkKey) || seenTitles.has(titleKey)) {
        continue;
      }

      seenLinks.add(linkKey);
      seenTitles.add(titleKey);
      freshArticles.push(article);
    }
  }

  const finalArticles = [...existingArticles, ...freshArticles].sort(
    (left, right) => new Date(right.pubDate).getTime() - new Date(left.pubDate).getTime(),
  );

  await fs.writeFile(outputFile, `${JSON.stringify(finalArticles, null, 2)}\n`, 'utf8');
  console.log(`[veille] ${freshArticles.length} nouvel(s) article(s), ${finalArticles.length} au total.`);
}

main().catch((error) => {
  console.error('[veille] Erreur inattendue, génération ignorée:', error);
  process.exitCode = 0;
});
