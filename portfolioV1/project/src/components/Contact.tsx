import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Me Contacter
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          N'hésitez pas à me contacter pour toute question ou opportunité professionnelle
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">yanis.prv@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Téléphone</p>
                      <p className="text-white font-medium">07 67 28 61 23</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localisation</p>
                    <p className="text-white font-medium">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Réseaux Sociaux</h3>

              <div className="flex flex-wrap gap-4">
                <a
                    href="https://www.linkedin.com/in/yanis-zidazi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-cyan-500/30"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/Blackazerty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-cyan-500/30"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Disponibilité</h3>
              <p className="text-gray-400">
                Actuellement en recherche de stage/alternance pour l'année 2025-2026.
                Ouvert aux opportunités en administration système et cybersécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
