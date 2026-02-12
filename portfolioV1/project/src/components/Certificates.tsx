import { useState, useEffect } from 'react';
import { Award, Download, ExternalLink, Shield, Code, Star, Lock } from 'lucide-react';
import { Certificate, storage } from '../lib/localStorage';

const iconMap: { [key: string]: JSX.Element } = {
  Award: <Award className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Star: <Star className="w-8 h-8" />,
  Lock: <Lock className="w-8 h-8" />,
};

// Certifications par défaut
const fallbackCertificates: Certificate[] = [
  {
    id: 'cert-1',
    name: 'MOOC ANSSI – Sensibilisation à la cybersécurité',
    organization: 'ANSSI (Agence Nationale de la Sécurité des Systèmes d\'Information)',
    date: '2025-01',
    description: 'Formation en ligne complète sur les principes fondamentaux de la cybersécurité. Certification obtenue avec succès.',
    icon: 'Shield',
    link: '/certification mooc ANSSI.pdf',
    visible: true,
    order_index: 1,
    file_url: '/certification mooc ANSSI.pdf',
    file_type: 'pdf',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 'cert-2',
    name: 'CISCO - Introduction à la cybersécurité',
    organization: 'CISCO Networking Academy',
    date: '2025-02',
    description: 'Formation en cours sur les fondamentaux de la sécurité réseau et les principes CISCO. Status : En progression.',
    icon: 'Code',
    link: 'https://www.netacad.com/fr/courses/introduction-to-cybersecurity?courseLang=fr-FR',
    visible: true,
    order_index: 2,
    file_url: '/certification CISCO intro.pdf',
    file_type: 'pdf',
    created_at: '2025-02-01T00:00:00Z',
    updated_at: '2025-02-01T00:00:00Z',
  },
  {
    id: 'cert-3',
    name: 'CCNA',
    organization: 'CISCO Networking Academy',
    date: '2025-06',
    description: 'Certification professionnelle en cours de préparation. CCNA (Cisco Certified Network Associate) pour valider les compétences en infrastructure réseau.',
    icon: 'Award',
    link: 'https://www.netacad.com/courses/ccna-introduction-networks?courseLang=fr-FR',
    visible: true,
    order_index: 3,
    file_url: '/CCNA certification.pdf',
    file_type: 'pdf',
    created_at: '2025-06-01T00:00:00Z',
    updated_at: '2025-06-01T00:00:00Z',
  },
];

export default function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = () => {
    try {
      let data = storage.getCertificates();
      if (data.length === 0) {
        storage.setCertificates(fallbackCertificates);
        data = fallbackCertificates;
      }
      const visible = data.filter(c => c.visible).sort((a, b) => a.order_index - b.order_index);
      setCertificates(visible);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadCertificate = (cert: Certificate) => {
    if (cert.file_url) {
      const link = document.createElement('a');
      link.href = cert.file_url;
      link.download = `${cert.name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="certificates" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Certifications & Formations
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Certifications professionnelles et formations continues en cybersécurité et infrastructure
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : certificates.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            Aucun certificat pour le moment
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {iconMap[cert.icon] || iconMap['Award']}
                    </div>
                    <span className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h3>

                  <p className="text-cyan-300 text-sm font-medium mb-3">
                    {cert.organization}
                  </p>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex space-x-2">
                    {cert.file_url && (
                      <button
                        onClick={() => downloadCertificate(cert)}
                        className="flex-1 flex items-center justify-center space-x-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-colors duration-300 border border-cyan-500/30"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Télécharger</span>
                      </button>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-colors duration-300 border border-cyan-500/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Formation Continue</h3>
              <p className="text-gray-400">
                Engagé dans l'apprentissage permanent pour rester à jour avec les dernières technologies
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl font-bold text-cyan-400">{certificates.length}</div>
              <div className="text-gray-400 text-center">Certifications<br />en cours</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mb-3">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Sécurité</h4>
            <p className="text-gray-400 text-sm">MOOC ANSSI, CISCO Cybersecurity</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mb-3">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Infrastructure</h4>
            <p className="text-gray-400 text-sm">CCNA en préparation</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mb-3">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Progression</h4>
            <p className="text-gray-400 text-sm">Certifications validées et en cours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
