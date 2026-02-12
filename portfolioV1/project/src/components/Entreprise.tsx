import { Building2, Wrench, Network, Printer, Cable, MonitorSmartphone, Shield, Zap } from 'lucide-react';

export default function Entreprise() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Mon Entreprise
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300 mb-12">
          SERRYBAT
        </h2>

        {/* Présentation de l'entreprise */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-12">
          <div className="flex items-center mb-6">
            <Building2 className="w-10 h-10 text-cyan-400 mr-4" />
            <h3 className="text-3xl font-bold text-white">Présentation de l'entreprise</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="text-cyan-400 font-semibold">SERRYBAT</span> est une entreprise 
            spécialisée dans la <strong className="text-white">rénovation énergétique</strong> des bâtiments résidentiels 
            et professionnels. Notre expertise couvre l'ensemble des travaux permettant d'améliorer la performance 
            énergétique et le confort des habitations.
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">Nos domaines d'intervention :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Isolation thermique</p>
                  <p className="text-gray-400 text-sm">Murs, combles, planchers bas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Climatisation réversible</p>
                  <p className="text-gray-400 text-sm">Installation et maintenance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Ravalement de façade</p>
                  <p className="text-gray-400 text-sm">Rénovation extérieure</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Plancher bas</p>
                  <p className="text-gray-400 text-sm">Isolation et rénovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mon rôle dans l'entreprise */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <MonitorSmartphone className="w-8 h-8 mr-3" />
            Mon rôle : Gestion du parc informatique
          </h3>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Au sein de SERRYBAT, j'assure la <strong className="text-white">gestion complète du parc informatique</strong> composé 
              de <span className="text-cyan-400 font-semibold">10 postes de travail</span>. Mon rôle est crucial pour 
              le bon fonctionnement quotidien de l'entreprise.
            </p>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mt-4">
              <p className="text-cyan-300 italic flex items-start">
                <Shield className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Rôle stratégique :</strong> Sans accès à Internet, l'entreprise est en stand-by. 
                  Je joue donc un rôle majeur dans la continuité de l'activité, en garantissant la disponibilité 
                  et la fiabilité de l'infrastructure informatique.
                </span>
              </p>
            </div>
          </div>

          {/* Missions techniques */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Maintenance des PC */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <MonitorSmartphone className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Maintenance des postes</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Mise à jour des systèmes d'exploitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Installation et configuration de logiciels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Résolution des problèmes matériels et logiciels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Optimisation des performances</span>
                </li>
              </ul>
            </div>

            {/* Réseau et connectivité */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Network className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Réseau et connectivité</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Gestion de la connexion Internet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Configuration du réseau local</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Diagnostic et résolution de problèmes réseau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Sécurisation de l'accès Wi-Fi</span>
                </li>
              </ul>
            </div>

            {/* Brassage et câblage */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Cable className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Câblage et infrastructure</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Brassage de câbles réseau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Installation de nouveaux postes de travail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Organisation du câblage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Tests de connectivité</span>
                </li>
              </ul>
            </div>

            {/* Périphériques et imprimantes */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Printer className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Gestion des périphériques</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Reconnexion d'imprimantes au réseau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Configuration des pilotes d'impression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Partage de périphériques réseau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Maintenance préventive</span>
                </li>
              </ul>
            </div>

            {/* Support utilisateurs */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Support technique</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Assistance aux utilisateurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Formation aux outils informatiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Résolution des incidents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Documentation des procédures</span>
                </li>
              </ul>
            </div>

            {/* Sécurité */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Sécurité informatique</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Installation et mise à jour d'antivirus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Sauvegardes régulières des données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Gestion des accès et permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>Sensibilisation à la cybersécurité</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exemple de cas pratique */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30 mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
            <Cable className="w-7 h-7 mr-3" />
            Cas pratique : Mon arrivée dans l'entreprise
          </h3>
          <div className="bg-gray-900/50 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Lors de mon arrivée chez SERRYBAT, j'ai dû <strong className="text-white">brasser un câble réseau</strong> afin 
              de connecter mon poste de travail au réseau de l'entreprise. Cette intervention technique a nécessité :
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">1.</span>
                <span>Identification du point de brassage dans la baie de brassage</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">2.</span>
                <span>Connexion du câble entre le switch et la prise murale RJ45</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">3.</span>
                <span>Test de connectivité et configuration IP</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">4.</span>
                <span>Vérification de l'accès Internet et au réseau local</span>
              </li>
            </ul>
            <p className="text-cyan-300 mt-4 italic">
              Cette intervention démontre ma capacité à intervenir de manière autonome sur l'infrastructure réseau 
              et à garantir la connectivité des postes de travail.
            </p>
          </div>
        </div>

        {/* Impact et conclusion */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Impact de mon rôle</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Dans une entreprise comme SERRYBAT, où l'activité dépend fortement des outils numériques (devis, facturation, 
            gestion de projets, communication client), <strong className="text-cyan-400">la disponibilité de 
            l'infrastructure informatique est critique</strong>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Mon intervention rapide et ma connaissance du système d'information permettent de <strong className="text-white">minimiser 
            les temps d'arrêt</strong> et d'assurer une continuité d'activité essentielle au bon fonctionnement 
            de l'entreprise.
          </p>
        </div>
      </div>
    </section>
  );
}

