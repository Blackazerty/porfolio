import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function AccueilPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="relative w-full min-h-screen bg-black py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Colonne Gauche */}
            <div className="space-y-6">
              {/* Badge Disponibilité */}
              <div className="flex items-center space-x-2 w-fit bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-medium text-sm">Disponible pour de nouvelles opportunités</span>
              </div>

              {/* Titre Principal */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  Yanis ZIDAZI
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Étudiant BTS SIO SISR
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed">
                Passionné par les réseaux, les systèmes et la cybersécurité. Je recherche une opportunité pour mettre en pratique mes compétences et développer mon expertise technique.
              </p>

              {/* Boutons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate('/epreuve-e5')}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  Voir mes projets
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
                >
                  Me contacter
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">E5 & E6</div>
                  <div className="text-gray-400 text-sm">Dossiers prêts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">SISR</div>
                  <div className="text-gray-400 text-sm">Réseaux & Systèmes</div>
                </div>
              </div>
            </div>

            {/* Colonne Droite */}
            <div className="flex flex-col items-center justify-center space-y-8">
              {/* Photo Profil */}
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-lg overflow-hidden bg-gray-800 shadow-2xl border border-cyan-500/30">
                  <img 
                    src="/ProfilePro.png" 
                    alt="Photo profil Yanis ZIDAZI" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Infos Expertise */}
              <div className="w-full max-w-xs space-y-4">
                <h3 className="text-xl font-bold text-white mb-3">Domaines d'expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-cyan-400 font-semibold">Sécurité & supervision réseau</p>
                      <p className="text-gray-400 text-sm">Configuration et monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-blue-400 font-semibold">Virtualisation & Cloud</p>
                      <p className="text-gray-400 text-sm">Infrastructure et déploiement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-cyan-300 font-semibold">Documentation & support</p>
                      <p className="text-gray-400 text-sm">Accompagnement utilisateur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
