import { useEffect, useState } from 'react';

export default function Veille() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Veille Technologique
          </span>
        </h1>

        <h2 className="mx-auto max-w-5xl text-2xl md:text-3xl font-semibold text-center text-cyan-300">
          L'évolution de l'ingénierie sociale en 2026 : l'Intelligence Artificielle au service de la cybercriminalité
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => setSelectedImage({ src: '/graphiques.png', alt: 'graph cybercriminalité' })}
            className="bg-gray-900/40 rounded-lg p-3 flex flex-col items-center text-left transition-transform duration-200 hover:-translate-y-1"
          >
            <img src="/graphiques.png" alt="graph cybercriminalité" className="w-full h-auto max-h-80 md:max-h-96 object-contain rounded-md mb-4" />
            <p className="w-full text-center text-sm md:text-base text-cyan-100 leading-relaxed">
              L'explosion financière et le volume des attaques.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedImage({ src: '/WormGPT.png', alt: 'wormgpt' })}
            className="bg-gray-900/40 rounded-lg p-3 flex flex-col items-center text-left transition-transform duration-200 hover:-translate-y-1"
          >
            <img src="/WormGPT.png" alt="wormgpt" className="w-full h-auto max-h-80 md:max-h-96 object-contain rounded-md mb-4" />
            <p className="w-full text-center text-sm md:text-base text-cyan-100 leading-relaxed">
              WormGPT
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedImage({ src: '/Fraude au Président.png', alt: 'schema attaque' })}
            className="bg-gray-900/40 rounded-lg p-3 flex flex-col items-center text-left transition-transform duration-200 hover:-translate-y-1"
          >
            <img src="/Fraude au Président.png" alt="schema attaque" className="w-full h-auto max-h-80 md:max-h-96 object-contain rounded-md mb-4" />
            <p className="w-full text-center text-sm md:text-base text-cyan-100 leading-relaxed">
              L'attaque finale sur l'entreprise avec le Deepfake.
            </p>
          </button>
        </div>

        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Fermer l'image"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Fermer
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="mx-auto max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        ) : null}

        <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-gray-900/40 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 text-center">
            Sources
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              'https://www.bleepingcomputer.com',
              'https://thehackernews.com',
              'https://www.proofpoint.com',
              'https://fr.bellingcat.com',
              'https://www.malwarebytes.com',
              'https://www.lemagit.fr',
              'https://www.zataz.com',
              'https://www.youtube.com/@Sandozprod',
              'https://cyber.gouv.fr',
              'https://www.cybermalveillance.gouv.fr',
              'https://www.cnil.fr',
            ].map((source) => (
              <a
                key={source}
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm md:text-base text-cyan-100 break-all transition-colors hover:border-cyan-300/40 hover:bg-black/50 hover:text-white"
              >
                {source}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
