import { Github, Linkedin, Mail, Heart, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Contact */}
        <div className="mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Me Contacter</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:yanis.zidazi@mediaschool.me" className="text-white font-medium hover:text-cyan-400 transition-colors">
                      yanis.zidazi@mediaschool.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Téléphone</p>
                    <a href="tel:0767286123" className="text-white font-medium hover:text-cyan-400 transition-colors">
                      07 67 28 61 23
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localisation</p>
                    <p className="text-white font-medium">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Réseaux Sociaux</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/yanis-zidazi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-all duration-300 border border-cyan-500/30"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Blackazerty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-all duration-300 border border-cyan-500/30"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cyan-500/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Yanis ZIDAZI. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Fait avec <Heart className="w-4 h-4 mx-1 text-cyan-400" /> et React
          </p>
        </div>
      </div>
    </footer>
  );
}
