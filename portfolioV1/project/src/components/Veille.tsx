export default function Veille() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Veille Technologique
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300 mb-12">
          Cybersécurité et IA : Shadow IT, failles de code et contre-mesures
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <p className="text-gray-200 leading-relaxed mb-4">
              C'est une excellente idée de sujet pour ton BTS ! Le croisement entre la cybersécurité et l'IA est de loin l'un des domaines les plus dynamiques et critiques aujourd'hui en 2026.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ton idée de départ est <strong className="text-cyan-300">très pertinente et ancrée dans la réalité</strong>, mais pour un niveau BTS, il faut la nuancer et la formuler de manière plus technique pour impressionner le jury.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Voici l'analyse de cette idée et comment la transformer en un thème percutant.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">1. Décryptage de l'idée (et correction technique)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              La démocratisation de l'IA permet à n'importe qui, même sans bagage technique, de générer des sites, des applications ou des scripts.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-cyan-300">Cependant, la réalité technique est légèrement différente :</strong> les plateformes de création de sites en “1 clic” ont souvent une infrastructure de base sécurisée par l'hébergeur.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">La vraie faille apparaît quand des novices utilisent une IA (ChatGPT, Claude, Gemini, GitHub Copilot) pour :</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li><strong>Générer du code sur mesure</strong> qui fonctionne mais peut contenir des failles (injection SQL, XSS).</li>
              <li><strong>Configurer des bases de données</strong> sans restriction de droits d'accès, laissant parfois la base ouverte sur internet.</li>
              <li><strong>Laisser traîner des secrets</strong> (clés API codées en dur puis copiées-collées en production).</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Ce phénomène correspond à l'explosion du <strong className="text-cyan-300">Shadow IT</strong>, propulsée par l'IA.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">2. Propositions de thèmes impactants</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-300 leading-relaxed">
              <li>
                <strong>Option 1 (Focus utilisateur) :</strong> « La face cachée du développement assisté par l'IA : quand la simplicité du code généré engendre des vulnérabilités critiques. »
              </li>
              <li>
                <strong>Option 2 (Focus entreprise) :</strong> « Le Shadow IT à l'ère de l'IA : la prolifération des fuites de données liées aux développeurs novices. »
              </li>
              <li>
                <strong>Option 3 (Focus technique) :</strong> « L'illusion de la sécurité : analyse des failles de configuration et de code introduites par l'usage des IA génératives. »
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">3. Structure de la veille</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-300 leading-relaxed">
              <li>
                <strong>Axe Constat (le problème) :</strong> montée des “Citizen Developers” et hausse des fuites de données liées aux services cloud mal configurés (ex. buckets AWS S3 ou bases Firebase ouvertes).
              </li>
              <li>
                <strong>Axe Technique (comment ça arrive) :</strong> les modèles d'IA visent un résultat fonctionnel, pas forcément sécurisé.
              </li>
              <li>
                <strong>Axe Solution (la parade) :</strong> adoption d'une approche DevSecOps avec relecture et scan automatique du code généré avant mise en ligne.
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">4. Pistes complémentaires</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-300 leading-relaxed">
              <li>
                <strong>L'automatisation des attaques (IA offensive) :</strong> phishing hyper-personnalisé, malwares polymorphes, clonage vocal et arnaques au président.
              </li>
              <li>
                <strong>L'IA comme cible :</strong> empoisonnement des données, prompt injection et contournement des mécanismes de sécurité.
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg p-6">
            <p className="text-gray-200 leading-relaxed">
              <strong className="text-cyan-300">Conclusion :</strong> le thème retenu est « L'illusion de la sécurité : analyse des failles de configuration et de code introduites par l'usage des IA génératives. »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
