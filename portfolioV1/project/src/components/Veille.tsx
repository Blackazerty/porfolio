import { useEffect, useState } from 'react';

type VeilleArticle = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  summary: string;
};

const fallbackArticles: VeilleArticle[] = [
  {
    title: "Signal renforce sa sécurité face aux attaques d'ingénierie sociale et de phishing",
    link: 'https://www.bleepingcomputer.com/news/security/signal-adds-security-warnings-for-social-engineering-phishing-attacks/',
    pubDate: '2026-05-12',
    source: 'BleepingComputer',
    summary:
      "L'application de messagerie intègre de nouvelles alertes pour contrecarrer les hackers russes se faisant passer pour le \"Support Signal\". Ces mesures introduisent des avertissements visuels pour ralentir les utilisateurs et empêcher les pirates d'associer frauduleusement leurs appareils aux comptes des victimes.",
  },
  {
    title: 'Vol de données Azure via le détournement de la réinitialisation de mots de passe Microsoft',
    link: 'https://www.bleepingcomputer.com/news/security/microsoft-self-service-password-reset-abused-in-azure-data-theft-attacks/',
    pubDate: '2026-05-19',
    source: 'BleepingComputer',
    summary:
      "Le groupe Storm-2949 se fait passer pour le support informatique afin de piéger les employés disposant de privilèges élevés. Ils parviennent à faire valider de fausses requêtes MFA lors de la réinitialisation des mots de passe, leur permettant d'exfiltrer des données critiques depuis Microsoft 365 et Azure.",
  },
  {
    title: 'Analyse approfondie du fonctionnement des attaques ClickFix et FileFix',
    link: 'https://www.bleepingcomputer.com/news/security/inside-a-real-clickfix-attack-how-this-social-engineering-hack-unfolds/',
    pubDate: '2025-07-31',
    source: 'BleepingComputer',
    summary:
      "La méthode ClickFix manipule à l'insu de l'utilisateur son presse-papiers en dissimulant du code malveillant derrière de faux tests CAPTCHA. Une fois le code collé par la victime manipulée, les attaquants peuvent déployer des malwares et prendre le contrôle total de la machine cible.",
  },
  {
    title: 'Marks & Spencer frappé par un ransomware suite à une attaque par ingénierie sociale',
    link: 'https://www.bleepingcomputer.com/news/security/mands-confirms-social-engineering-led-to-massive-ransomware-attack/',
    pubDate: '2025-07-08',
    source: 'BleepingComputer',
    summary:
      "L'enseigne britannique a subi une compromission majeure de son réseau menant au déploiement du ransomware DragonForce. Les pirates ont réussi leur coup en usurpant de façon sophistiquée l'identité d'un employé auprès d'un prestataire informatique tiers pour faire réinitialiser ses accès.",
  },
  {
    title: "Des hackers étatiques adoptent la tactique d'ingénierie sociale ClickFix",
    link: 'https://www.bleepingcomputer.com/news/security/state-sponsored-hackers-embrace-clickfix-social-engineering-tactic/',
    pubDate: '2025-04-20',
    source: 'BleepingComputer',
    summary:
      "Plusieurs groupes de pirates parrainés par des États utilisent de fausses pages d'erreur (ClickFix) pour tromper les utilisateurs. Ils incitent les victimes à copier et exécuter manuellement un script malveillant afin de \"réparer\" leur ordinateur, facilitant ainsi l'espionnage et l'infiltration.",
  },
];

export default function Veille() {
  const [articles, setArticles] = useState<VeilleArticle[]>(fallbackArticles);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [showMoreArticles, setShowMoreArticles] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const frenchDateFormatter = new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRecentArticles() {
      try {
        const response = await fetch('/veille.json', {
          signal: controller.signal,
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (controller.signal.aborted) {
          return;
        }

        if (Array.isArray(data) && data.length > 0) {
          setArticles(data);
          setLoadError(null);
          return;
        }

        setArticles(fallbackArticles);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setLoadError('Le fichier local n’a pas pu être chargé. Les articles de secours sont affichés.');
        setArticles(fallbackArticles);
        console.error('Impossible de charger veille.json :', error);
      }
    }

    loadRecentArticles();

    return () => controller.abort();
  }, []);

  const recentArticles = articles.slice(0, 3);
  const olderArticles = articles.slice(3);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Veille Technologique
          </span>
        </h1>

        <h2 className="mx-auto max-w-5xl text-2xl md:text-3xl font-semibold text-center text-cyan-300">
          L'évolution de l'ingénierie sociale en 2026 : l'Intelligence Artificielle au service de la cybercriminalité
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => setSelectedImage({ src: '/graphiques.png', alt: 'graph cybercriminalité' })}
            className="bg-gray-900/40 rounded-lg p-3 flex flex-col items-center text-left transition-transform duration-200 hover:-translate-y-1"
          >
            <img src="/graphiques.png" alt="graph cybercriminalité" className="w-full h-auto max-h-80 md:max-h-96 object-contain rounded-md mb-4" />
            <p className="w-full text-center text-sm md:text-base text-cyan-100 leading-relaxed">
              L'explosion financière et le volume des attaques.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedImage({ src: '/WormGPT.png', alt: 'wormgpt' })}
            className="bg-gray-900/40 rounded-lg p-3 flex flex-col items-center text-left transition-transform duration-200 hover:-translate-y-1"
          >
            <img src="/WormGPT.png" alt="wormgpt" className="w-full h-auto max-h-80 md:max-h-96 object-contain rounded-md mb-4" />
            <p className="w-full text-center text-sm md:text-base text-cyan-100 leading-relaxed">
              WormGPT
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedImage({ src: '/Fraude au Président.png', alt: 'schema attaque' })}
            className="bg-gray-900/40 rounded-lg p-3 flex flex-col items-center text-left transition-transform duration-200 hover:-translate-y-1"
          >
            <img src="/Fraude au Président.png" alt="schema attaque" className="w-full h-auto max-h-80 md:max-h-96 object-contain rounded-md mb-4" />
            <p className="w-full text-center text-sm md:text-base text-cyan-100 leading-relaxed">
              L'attaque finale sur l'entreprise avec le Deepfake.
            </p>
          </button>
        </div>

        <div className="mt-8 prose text-cyan-100/90 max-w-4xl mx-auto text-center">
          <p>
            Les récents cas soulignent que l'intelligence artificielle amplifie et automatise
            l'ingénierie sociale : deepfakes plus convaincants, messages hyper-personnalisés
            et manipulations du presse-papiers facilitent la compromission. La meilleure
            défense reste la vigilance des utilisateurs, la formation continue, l'usage
            systématique de l'authentification multifacteur et des alertes côté services.
          </p>
        </div>
        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Fermer l'image"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Fermer
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="mx-auto max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        ) : null}

        <div id="actualites-recentes" className="mt-16 rounded-2xl border border-cyan-500/20 bg-gray-900/40 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 text-center">
            Actualités récentes
          </h3>
          {loadError ? (
            <p className="mt-4 text-center text-sm text-amber-200">{loadError}</p>
          ) : null}
          <div className="mt-6 grid grid-cols-1 gap-4">
            {recentArticles.map((article) => (
              <article
                key={`${article.pubDate}-${article.link}`}
                className="rounded-xl border border-white/10 bg-black/30 p-4 md:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-wide text-cyan-300">{article.source}</span>
                  <time className="text-xs text-cyan-100/70">
                    {frenchDateFormatter.format(new Date(`${article.pubDate}T00:00:00`))}
                  </time>
                </div>
                <h4 className="mt-3 text-lg font-semibold text-white leading-snug">{article.title}</h4>
                <p className="mt-3 text-sm md:text-base text-cyan-100/90 leading-relaxed">{article.summary}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex rounded-lg border border-cyan-400/40 px-3 py-2 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-300 hover:text-white"
                >
                  Lire la suite
                </a>
              </article>
            ))}
          </div>

          {olderArticles.length > 0 ? (
            <div className="mt-6 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={() => setShowMoreArticles((currentValue) => !currentValue)}
                className="mx-auto flex items-center gap-2 rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-300 hover:text-white"
              >
                {showMoreArticles ? 'Voir moins' : 'Voir plus'}
                <span aria-hidden="true">{showMoreArticles ? '−' : '+'}</span>
              </button>

              {showMoreArticles ? (
                <div className="mt-6 grid grid-cols-1 gap-4">
                  {olderArticles.map((article) => (
                    <article
                      key={`${article.pubDate}-${article.link}`}
                      className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold tracking-wide text-cyan-300">{article.source}</span>
                        <time className="text-xs text-cyan-100/70">
                          {frenchDateFormatter.format(new Date(`${article.pubDate}T00:00:00`))}
                        </time>
                      </div>
                      <h4 className="mt-3 text-lg font-semibold text-white leading-snug">{article.title}</h4>
                      <p className="mt-3 text-sm md:text-base text-cyan-100/90 leading-relaxed">{article.summary}</p>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex rounded-lg border border-cyan-400/40 px-3 py-2 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-300 hover:text-white"
                      >
                        Lire la suite
                      </a>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-gray-900/40 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 text-center">
            Sources
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              'https://www.bleepingcomputer.com',
              'https://thehackernews.com',
              'https://www.proofpoint.com',
              'https://fr.bellingcat.com',
              'https://www.malwarebytes.com',
              'https://www.lemagit.fr',
              'https://www.zataz.com',
              'https://www.youtube.com/@Sandozprod',
              'https://cyber.gouv.fr',
              'https://www.cybermalveillance.gouv.fr',
              'https://www.cnil.fr',
            ].map((source) => (
              <a
                key={source}
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm md:text-base text-cyan-100 break-all transition-colors hover:border-cyan-300/40 hover:bg-black/50 hover:text-white"
              >
                {source}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
