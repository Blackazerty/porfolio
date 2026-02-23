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

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">Tableau de synthese</h3>
          <a
            href="/Tableau%20de%20synth%C3%A8se%20ZIDAZI%20Yanis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 underline transition-colors duration-300"
          >
            Ouvrir le tableau de synthese
          </a>
        </div>
      </div>
    </section>
  );
}

