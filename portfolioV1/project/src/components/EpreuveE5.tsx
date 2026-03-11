import { Briefcase, FileText } from 'lucide-react';

export default function EpreuveE5() {
  const projects = [
    {
      name: 'Gestion et administration d\'une forêt Active Directory',
      pdf: 'Gestion et administration d\'une forêt Active Directory.pdf'
    },
    {
      name: 'Apache',
      pdf: 'Apache.pdf'
    },
    {
      name: 'Supervision de l\'infrastructure de Stadiumcompagny (Nagios XI)',
      pdf: 'Supervision de l\'infrastructure de Stadiumcompagny (Nagios XI).pdf'
    },
    {
      name: 'Implémentation d\'une solution de travail collaboratif (Zimbra)',
      pdf: 'Implémentation d\'une solution de travail collaboratif (Zimbra).pdf'
    },
    {
      name: 'Administration et gestion du patrimoine informatique de Stadiumcompagny (GLPI)',
      pdf: 'Administration et gestion du patrimoine informatique de Stadiumcompagny (GLPI).pdf'
    },
    {
      name: 'Administration et gestion du patrimoine informatique de Stadiumcompagny (OCS)',
      pdf: 'Administration et gestion du patrimoine informatique de Stadiumcompagny (OCS).pdf'
    },
    {
      name: 'Sécurisation des communications entre sites et en interne (SSH/VPN/ACL/DACL/Firewall PFSENSE)',
      pdf: 'Sécurisation des communications entre sites et en interne.pdf'
    },
    {
      name: 'Restructuration de l\'infrastructure Stadiumcompagny (VLAN, Routage inter-vlan, Routage Statique)',
      pdf: 'Restructuration de l\'infrastructure Stadiumcompagny.pdf'
    },
    {
      name: 'Restructuration de l\'infrastructure Stadiumcompagny (VTP)',
      pdf: 'Restructuration de l\'infrastructure Stadiumcompagny (VTP).pdf'
    },
    {
      name: 'Redondance et haute disponibilité des éléments d\'interconnexions de Stadiumcompagny (HSRP)',
      pdf: 'Redondance et haute disponibilité des éléments d\'interconnexions de Stadiumcompagny (HSRP).pdf'
    },
    {
      name: 'Déploiement d\'une solution d\'accès sans fil des utilisateurs mobiles de Stadiumcompagny (Wifi)',
      pdf: 'Déploiement d\'une solution d\'accès sans fil des utilisateurs mobiles de Stadiumcompagny (Wifi).pdf'
    },
    {
      name: 'OSPF-RIP',
      pdf: 'OSPF-RIP.pdf'
    },
    {
      name: 'Filtrage ACL',
      pdf: 'Filtrage ACL.pdf'
    },
    {
      name: 'NAT',
      pdf: 'NAT.pdf'
    },
    {
      name: 'Optimiser le réferencement du site web avec SEO (Search Engin Optimisation)',
      pdf: 'Optimiser le réferencement du site web avec SEO (Search Engin Optimisation).pdf'
    },
  ];

  const handleOpenPDF = (pdfName: string) => {
    window.open(`/${pdfName}`, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Épreuve E5
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300 mb-12">
          Support et Mise à Disposition de Services Informatiques
        </h2>

        {/* Introduction courte */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h3>
          <p className="text-gray-300 leading-relaxed">
            L'épreuve E5 met en avant ma capacité à analyser un besoin, déployer des solutions techniques et assurer le
            support des utilisateurs dans un contexte professionnel. Cette page regroupe mes réalisations principales,
            avec les livrables associés qui illustrent concrètement mon parcours de professionnalisation.
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

        {/* Projets professionnels */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Projets professionnels réalisés
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleOpenPDF(project.pdf)}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70 cursor-pointer hover:scale-105 transform"
              >
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{project.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
