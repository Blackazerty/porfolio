import { Server, Shield, Network, Database, Lock, Monitor } from 'lucide-react';

export default function BtsSio() {
  const sisrCompetences = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Administration Systèmes',
      description: 'Installation, configuration et maintenance de serveurs Windows et Linux',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Gestion Réseaux',
      description: 'Configuration de routeurs, switches et mise en place d\'architectures réseau',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sécurité Informatique',
      description: 'Mise en place de pare-feu, VPN et politiques de sécurité',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Virtualisation',
      description: 'Déploiement et gestion d\'environnements virtualisés (VMware, Hyper-V)',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Cybersécurité',
      description: 'Détection des vulnérabilités, gestion des incidents de sécurité',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Supervision',
      description: 'Monitoring des infrastructures et mise en place d\'outils de surveillance',
    },
  ];

  return (
    <section id="bts-sio" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            BTS SIO - Option SISR
          </span>
        </h2>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Le BTS Services Informatiques aux Organisations option SISR (Solutions d'Infrastructure,
            Systèmes et Réseaux) forme des techniciens capables de gérer et maintenir les infrastructures
            informatiques d'une entreprise.
          </p>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg p-6">
            <p className="text-cyan-300 font-semibold mb-2">Mission principale</p>
            <p className="text-gray-400">
              Assurer la disponibilité, la sécurité et la performance des systèmes d'information en
              gérant les serveurs, réseaux, et en garantissant la continuité de service.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-cyan-400 text-center mb-12">
          Compétences Développées
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sisrCompetences.map((competence, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {competence.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{competence.title}</h4>
              <p className="text-gray-400 leading-relaxed">{competence.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            Parcours de Formation
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center">
                <span className="w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                Première Année
              </h4>
              <ul className="space-y-2 text-gray-300 ml-11">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Fondamentaux des réseaux et systèmes
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Installation de postes clients et serveurs
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Configuration d'équipements réseau
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Support utilisateurs et maintenance
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-black rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                Deuxième Année
              </h4>
              <ul className="space-y-2 text-gray-300 ml-11">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Administration avancée de serveurs
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Sécurisation des infrastructures
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Virtualisation et Cloud Computing
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  Supervision et optimisation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
