import { Briefcase } from 'lucide-react';

export default function EpreuveE6() {
  const projects = [
    {
      number: 1,
      title: 'Création et intégration d\'un nouveau groupe d\'utilisateur dans l\'Active Directory',
      description: 'L\'Active Directory est un annuaire LDAP (Lightweight Directory Access Protocol) pour les systèmes d\'exploitation Windows.',
      summary: 'Ce projet m\'a permis de structurer l\'organisation des comptes, centraliser l\'authentification et améliorer la gestion des utilisateurs au sein du réseau de l\'entreprise.',
    },
    {
      number: 2,
      title: 'Intégration d\'un nouveau groupe d\'utilisateur dans l\'outil de gestion de ticket (GLPI)',
      description: 'GLPI et OCS Inventory sont deux logiciels open source utilisés pour la gestion de parc informatique et la surveillance des actifs informatiques.',
      summary: 'Dans ce projet, j\'ai configuré l\'intégration entre GLPI et OCS Inventory afin de centraliser la gestion des équipements, améliorer le suivi des incidents et fiabiliser l\'inventaire du parc informatique.',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Épreuve E6
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300 mb-12">
          Administration des Systèmes et des Réseaux (Option SISR)
        </h2>

        {/* Introduction courte */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h3>
          <p className="text-gray-300 leading-relaxed">
            L'épreuve E6 présente ma capacité à concevoir, déployer et maintenir des solutions d'infrastructure
            systèmes et réseaux dans un contexte professionnel. Les projets ci-dessous illustrent ma méthode,
            mes compétences techniques et ma capacité à répondre à des besoins concrets.
          </p>
        </div>

        {/* Projets pratiques */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Projets pratiques
          </h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* En-tête du projet */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-500/30 mb-3">
                      Projet {project.number}
                    </span>
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                {/* Résumé */}
                {project.summary && (
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed">{project.summary}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

