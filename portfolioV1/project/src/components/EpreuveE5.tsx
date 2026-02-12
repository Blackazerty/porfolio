import { Target, Clock, Users, Award, Briefcase, FileText } from 'lucide-react';

export default function EpreuveE5() {
  const objectives = [
    'Gérer le patrimoine informatique',
    'Répondre aux incidents et demandes d\'assistance et d\'évolution',
    'Développer la présence en ligne de l\'organisation',
    'Travailler en mode projet',
    'Mettre à disposition des utilisateurs un service informatique',
    'Organiser son développement professionnel',
  ];

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

        {/* Objectif */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
            <Target className="w-8 h-8 mr-3" />
            Objectif
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Cette épreuve vise à évaluer l'acquisition des compétences décrites dans le bloc de compétences 
            <span className="text-cyan-400 font-semibold"> « Support et mise à disposition de services informatiques »</span>.
          </p>
        </div>

        {/* Compétences évaluées */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3" />
            Compétences évaluées
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 flex items-start"
              >
                <span className="text-cyan-400 font-bold mr-3 text-lg flex-shrink-0">✓</span>
                <span className="text-gray-300">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modalités d'évaluation */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Clock className="w-8 h-8 mr-3" />
            Modalités d'évaluation : Forme Ponctuelle Orale
          </h3>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-6">
                <h4 className="text-xl font-semibold text-white mb-2">Durée totale : 40 minutes</h4>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h4 className="text-xl font-semibold text-white mb-3">Phase 1 : Présentation (10 minutes maximum)</h4>
                <p className="text-gray-300">
                  La personne candidate présente son parcours de professionnalisation et justifie les modalités 
                  d'acquisition des compétences du bloc « Support et mise à disposition de services informatiques ».
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h4 className="text-xl font-semibold text-white mb-3">Phase 2 : Échange avec le jury (30 minutes)</h4>
                <p className="text-gray-300 mb-3">
                  L'entretien permet :
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>D'expliciter et d'apprécier le parcours de professionnalisation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>D'approfondir une ou plusieurs réalisations décrites dans le dossier numérique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>D'apprécier la capacité à mobiliser les compétences visées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>De rendre compte d'un travail réalisé au sein d'une équipe en mettant clairement en évidence sa contribution personnelle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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

        {/* Contexte */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Users className="w-6 h-6 mr-3" />
            Contexte professionnel
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Tous ces projets ont été réalisés au sein de l'entreprise fictive <span className="text-cyan-400 font-semibold">StadiumCompany</span>, 
            un gestionnaire de stade accueillant des événements sportifs, culturels et professionnels. Ces réalisations témoignent 
            de ma capacité à gérer une infrastructure informatique complexe, à supporter les utilisateurs et à déployer des services 
            informatiques de qualité au sein d'une organisation.
          </p>
        </div>

        {/* Projet Tutoré */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Projet Tutoré
          </h3>
        </div>

        {/* Réalisations en milieu professionnel */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Users className="w-8 h-8 mr-3" />
            Réalisations en milieu professionnel
          </h3>
        </div>

        {/* Portefeuille de Compétences */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3" />
            Portefeuille de Compétences
          </h3>
        </div>
      </div>
    </section>
  );
}
