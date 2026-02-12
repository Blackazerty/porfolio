import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Code, Shield } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  // Fond noir simple, sans animation

  const handleEnter = () => {
    navigate('/accueil');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="mb-8 flex items-center justify-center space-x-4 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50 animate-pulse"></div>
            <Terminal className="w-20 h-20 text-cyan-400 relative animate-spin-slow" />
          </div>
          <Code className="w-16 h-16 text-blue-400 animate-bounce-slow" />
          <Shield className="w-16 h-16 text-cyan-300 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-gradient">
            Yanis ZIDAZI
          </span>
        </h1>

        <div className="text-xl md:text-2xl mb-2 text-cyan-300 font-light flex justify-center">
          <div className="typewriter">
            BTS SIO - Option SISR
          </div>
        </div>

        <p className="text-gray-400 mb-8 text-center max-w-md">
          Solutions d'Infrastructure, Systèmes et Réseaux
        </p>

        <button
          onClick={handleEnter}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
        >
          <span className="relative z-10">Entrer dans le portfolio</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}
