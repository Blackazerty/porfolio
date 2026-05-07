import { Briefcase, Network, Package } from 'lucide-react';

const projet1PdfPath = '/E6%20-%20Projet%201%20_%20SESSION%202026.pdf';
const projet2PdfPath = '/E6%20-%20Projet%202%20_%20SESSION%202026.pdf';

const projects = [
  {
    number: 1,
    label: 'Projet 1',
    icon: Network,
    title: 'Gestion des Réseaux Sociaux et Médias',
    contexte:
      "L'équipe marketing et communication avait besoin d'un accès réseau performant et dédié pour la gestion des réseaux sociaux, le transfert de fichiers multimédias volumineux et la veille informationnelle.",
    description:
      "Un VLAN 50 a été alloué à ce service, avec un Wi-Fi dédié \"Com-Wifi\" pour garantir une bonne bande passante. Une GPO a été déployée pour mapper le lecteur M:, pointant vers un serveur de stockage pour les médias (photos, vidéos, créations graphiques).",
    steps: [
      { label: 'Segmentation réseau', detail: 'Déploiement du VLAN 50 pour le service communication.' },
      { label: 'Déploiement Wi-Fi', detail: 'Mise en service du SSID "Com-Wifi" pour les postes de l\'équipe.' },
      { label: 'Configuration GPO', detail: 'Application d\'une GPO pour le mappage automatique du lecteur réseau M:.' },
    ],
    skills: ['Déploiement Wi-Fi', 'Segmentation VLAN', 'GPO de mappage de lecteur'],
    schema: 'Le poste de l\'équipe marketing accède au serveur de médias via le réseau dédié.',
  },
  {
    number: 2,
    label: 'Projet 2',
    icon: Package,
    title: 'Inventaire Matériel Créatif et Suivi',
    contexte:
      "L'équipe marketing utilise du matériel spécifique et coûteux (stations de PAO, Mac, appareils photo). Ce parc doit être inventorié précisément. La coordination des campagnes se fait par email.",
    description:
      "L'inventaire des stations de Publication Assistée par Ordinateur (PAO) et autres équipements créatifs est géré via OCS/GLPI. La coordination des projets et des campagnes est assurée par des listes de diffusion sur Zimbra.",
    steps: [
      { label: 'Inventaire OCS/GLPI', detail: 'Déploiement de l\'agent OCS sur les stations de travail (PC et Mac) pour un suivi détaillé du matériel et des logiciels de création.' },
      { label: 'Coordination Zimbra', detail: 'Création de listes de diffusion par projet pour fluidifier la communication au sein de l\'équipe et avec les autres services.' },
      { label: 'Support GLPI', detail: 'Utilisation de GLPI pour le suivi des demandes de support logiciel (ex\u00a0: mise à jour de la suite Adobe) ou matériel.' },
    ],
    skills: ['OCS/GLPI (inventaire parc hétérogène PC/Mac)', 'Zimbra (coordination de projets)'],
    schema: 'Une station de travail créative remonte ses informations matérielles et logicielles à GLPI via l\'agent OCS.',
  },
];

export default function EpreuveE6() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Épreuve E6
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300 mb-2">
           — Marketing &amp; Communication —
        </h2>
        <p className="text-center text-gray-400 mb-12">Administration des Systèmes et des Réseaux (Option SISR)</p>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h3>
          <p className="text-gray-300 leading-relaxed">
            L'épreuve E6 présente ma capacité à concevoir, déployer et maintenir des solutions d'infrastructure
            systèmes et réseaux dans un contexte professionnel. Les deux projets réalisés au sein d'une entreprise
            fictive dans le secteur du marketing illustrent ma méthode, mes compétences techniques et ma capacité
            à répondre à des besoins concrets d'une équipe métier.
          </p>
        </div>

        {/* Projets pratiques */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Projets pratiques
          </h3>
          <div className="space-y-10">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.number}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* En-tête */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <span className="inline-block bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-500/30 mb-2">
                        {project.label}
                      </span>
                      <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                    </div>
                  </div>

                  {/* Contexte */}
                  <div className="mb-5">
                    <h5 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Contexte</h5>
                    <p className="text-gray-300 leading-relaxed">{project.contexte}</p>
                  </div>

                  {/* Description */}
                  <div className="mb-5">
                    <h5 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Description</h5>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Étapes */}
                  <div className="mb-5">
                    <h5 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Étapes de mise en place</h5>
                    <ol className="space-y-2">
                      {project.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-gray-300 leading-relaxed">
                            <span className="font-semibold text-white">{step.label} : </span>
                            {step.detail}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {project.number === 1 ? (
                    <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/50">
                      <h5 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Dossier PDF</h5>
                      <a
                        href={projet1PdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 underline"
                      >
                        E6 - Projet 1 _ SESSION 2026.pdf
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/50">
                        <h5 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Dossier PDF</h5>
                        <a
                          href={projet2PdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 underline"
                        >
                          E6 - Projet 2 _ SESSION 2026.pdf
                        </a>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

