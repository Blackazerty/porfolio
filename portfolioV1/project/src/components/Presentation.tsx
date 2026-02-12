import { X } from 'lucide-react';
import { useState } from 'react';

export default function Presentation() {
  const [showFullscreen, setShowFullscreen] = useState(false);
  return (
    <section id="presentation" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            À propos
          </span>
        </h2>

        {/* Présentation & Parcours */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">Présentation & parcours</h3>
          <p className="text-cyan-300 text-lg font-semibold mb-4">
            Étudiant en BTS SIO option SISR, orienté administration systèmes, réseaux et cybersécurité.
          </p>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Je m'appelle Yanis ZIDAZI, étudiant en BTS Services Informatiques aux Organisations (SIO), option SISR. Je me forme à l'administration des systèmes et des réseaux, à la sécurisation des infrastructures et au support informatique.
            </p>
            <p>
              Je réalise actuellement mon alternance au sein de l'entreprise Rely, joint-venture entre Technip Energies et John Cockerill Hydrogen, en tant que IT Support. Cette expérience me permet de développer des compétences techniques et professionnelles en environnement réel.
            </p>
            <p>
              Mon objectif est de poursuivre dans les domaines des systèmes, réseaux et de la cybersécurité, avec une approche rigoureuse, orientée sécurité et qualité de service.
            </p>
          </div>
        </div>

        {/* Curriculum Vitae */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            <a 
              href="/cv%20yanis%20alternance%20.pdf" 
              download
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </a>
          </h3>
          <p className="text-gray-300 mb-8">
            Mon CV présente mon parcours scolaire, mes expériences professionnelles et mes compétences techniques. Cliquez sur l'image pour l'agrandir en plein écran.
          </p>
          <div className="flex justify-center">
            <div 
              className="relative group cursor-pointer max-w-xl"
              onClick={() => setShowFullscreen(true)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative rounded-lg overflow-hidden bg-gray-800 shadow-2xl">
                <img src="/CV.png" alt="CV Yanis ZIDAZI" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen CV Modal */}
        {showFullscreen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src="/CV.png" 
              alt="CV Yanis ZIDAZI" 
              className="max-h-[90vh] max-w-[95vw] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
