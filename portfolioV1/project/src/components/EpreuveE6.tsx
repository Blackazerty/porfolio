import { Target, Clock, Briefcase, Award } from 'lucide-react';

export default function EpreuveE6() {
  const objectives = [
    'Concevoir une solution d\'infrastructure réseau',
    'Installer, tester et déployer une solution d\'infrastructure réseau',
    'Exploiter, dépanner et superviser une infrastructure réseau',
  ];

  const phases = [
    {
      title: 'Première phase',
      duration: '30 min préparation + 20 min entretien',
      description: 'Sur la base d\'une expression de besoins remise à la personne candidate et étudiée pendant le premier temps de préparation',
    },
    {
      title: 'Deuxième phase',
      duration: '1h préparation + 20 min entretien',
      description: 'Le deuxième temps de préparation permet à la personne candidate de réaliser, en autonomie et de manière individuelle',
    },
  ];

  const projects = [
    {
      number: 1,
      title: 'Création et intégration d\'un nouveau groupe d\'utilisateur dans l\'Active Directory',
      description: 'L\'Active Directory est un annuaire LDAP (Lightweight Directory Access Protocol) pour les systèmes d\'exploitation Windows.',
      details: [
        'Annuaire contenant différents objets de différents types (utilisateurs, ordinateurs, etc.)',
        'Centralisation de l\'identification et l\'authentification au sein du système d\'information',
      ],
      interests: [
        'Administration centralisée et simplifiée',
        'Unifier l\'authentification',
        'Identifier les objets sur le réseau',
        'Référencer les utilisateurs et ordinateurs',
      ],
    },
    {
      number: 2,
      title: 'Intégration d\'un nouveau groupe d\'utilisateur dans l\'outil de gestion de ticket (GLPI)',
      description: 'GLPI et OCS Inventory sont deux logiciels open source utilisés pour la gestion de parc informatique et la surveillance des actifs informatiques.',
      toolsDetails: [
        {
          name: 'GLPI',
          fullName: 'Gestionnaire Libre de Parc Informatique',
          features: [
            'Gestion des actifs informatiques',
            'Gestion des incidents et demandes d\'assistance',
            'Gestion des contrats et licences logicielles',
            'Gestion des tâches et projets',
          ],
        },
        {
          name: 'OCS Inventory',
          fullName: 'Open Computer and Software Inventory',
          features: [
            'Collecte d\'informations sur les ordinateurs',
            'Suivi des périphériques',
            'Inventaire des logiciels installés',
            'Intégration centralisée avec GLPI',
          ],
        },
      ],
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

        {/* Objectif */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
            <Target className="w-8 h-8 mr-3" />
            Objectif
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Cette épreuve vise à évaluer l'acquisition des compétences décrites dans le bloc de compétences 
            <span className="text-cyan-400 font-semibold"> « Administration des systèmes et des réseaux »</span> propre à l'option 
            <span className="text-cyan-400 font-semibold"> « Solutions d'infrastructure, systèmes et réseaux »</span>.
          </p>
        </div>

        {/* Compétences évaluées */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3" />
            Compétences évaluées
          </h3>
          <div className="grid md:grid-cols-1 gap-4">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 flex items-start"
              >
                <span className="text-cyan-400 font-bold mr-3 text-lg flex-shrink-0">{index + 1}.</span>
                <span className="text-gray-300">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modalités d'évaluation */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Clock className="w-8 h-8 mr-3" />
            Modalités d'évaluation
          </h3>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-6">
            <p className="text-gray-300 leading-relaxed mb-6">
              L'épreuve prend appui sur deux réalisations professionnelles composant le dossier remis par la personne candidate. 
              Ces réalisations professionnelles mobilisent les ressources décrites dans le référentiel de certification pour le bloc 
              <span className="text-cyan-400 font-semibold"> « Administration des systèmes et des réseaux »</span>.
            </p>
          </div>

          <h4 className="text-2xl font-bold text-cyan-300 mb-6">Forme Ponctuelle Pratique et Orale : 40 min + 1h30 de préparation</h4>
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-white">{phase.title}</h4>
                  <span className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
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

                {/* Détails */}
                {project.details && (
                  <div className="mb-6">
                    <h5 className="text-cyan-400 font-semibold mb-3">Caractéristiques :</h5>
                    <ul className="space-y-2 ml-4">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-3">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Intérêts */}
                {project.interests && (
                  <div className="mb-6">
                    <h5 className="text-cyan-400 font-semibold mb-3">Intérêts :</h5>
                    <ul className="space-y-2 ml-4">
                      {project.interests.map((interest, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-3">✓</span>
                          <span>{interest}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Détails des outils */}
                {project.toolsDetails && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.toolsDetails.map((tool, idx) => (
                      <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/10">
                        <h5 className="text-cyan-400 font-semibold mb-2">{tool.name}</h5>
                        <p className="text-gray-400 text-sm mb-3">{tool.fullName}</p>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          {tool.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start">
                              <span className="text-cyan-400 mr-2">→</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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

