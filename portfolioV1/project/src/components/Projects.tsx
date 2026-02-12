import { useState, useEffect } from 'react';
import { Server, Network, Shield, Database, Cloud, Terminal, Code, Lock } from 'lucide-react';
import { Project, storage } from '../lib/localStorage';

const iconMap: { [key: string]: JSX.Element } = {
  Server: <Server className="w-8 h-8" />,
  Network: <Network className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  Terminal: <Terminal className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Lock: <Lock className="w-8 h-8" />,
};

// Projets par défaut
const fallbackProjects: Project[] = [
  // 1ère Année (5 projets)
  {
    id: 'year1-1',
    title: 'Installation et configuration Windows Server 2022',
    description: 'Mise en place d\'un serveur Windows Server 2022 avec Active Directory, DNS et DHCP pour gérer un réseau d\'entreprise.',
    category: 'year1',
    technologies: ['Windows Server', 'Active Directory', 'DNS', 'DHCP'],
    icon: 'Server',
    github: undefined,
    demo: undefined,
    order_index: 1,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-09-01T00:00:00Z',
    updated_at: '2024-09-01T00:00:00Z',
  },
  {
    id: 'year1-2',
    title: 'Configuration réseau local (LAN)',
    description: 'Conception et déploiement d\'un réseau local avec adressage IP, segmentation VLAN et configuration de switchs Cisco.',
    category: 'year1',
    technologies: ['Cisco', 'VLAN', 'TCP/IP', 'Packet Tracer'],
    icon: 'Network',
    github: undefined,
    demo: undefined,
    order_index: 2,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-09-15T00:00:00Z',
    updated_at: '2024-09-15T00:00:00Z',
  },
  {
    id: 'year1-3',
    title: 'Déploiement d\'un serveur Web Apache',
    description: 'Installation et sécurisation d\'un serveur web Apache sur Linux Ubuntu avec certificat SSL et hébergement multi-sites.',
    category: 'year1',
    technologies: ['Apache', 'Linux Ubuntu', 'SSL/TLS', 'Virtual Hosts'],
    icon: 'Terminal',
    github: undefined,
    demo: undefined,
    order_index: 3,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-10-01T00:00:00Z',
    updated_at: '2024-10-01T00:00:00Z',
  },
  {
    id: 'year1-4',
    title: 'Sauvegarde et restauration de données',
    description: 'Mise en place d\'une stratégie de sauvegarde automatisée avec Windows Server Backup et planification de tâches.',
    category: 'year1',
    technologies: ['Windows Server Backup', 'PowerShell', 'Planification'],
    icon: 'Database',
    github: undefined,
    demo: undefined,
    order_index: 4,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-10-20T00:00:00Z',
    updated_at: '2024-10-20T00:00:00Z',
  },
  {
    id: 'year1-5',
    title: 'Supervision réseau avec PRTG',
    description: 'Installation et configuration de PRTG Network Monitor pour surveiller l\'état des serveurs, la bande passante et les services réseau.',
    category: 'year1',
    technologies: ['PRTG', 'SNMP', 'Monitoring', 'Alertes'],
    icon: 'Network',
    github: undefined,
    demo: undefined,
    order_index: 5,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-11-10T00:00:00Z',
    updated_at: '2024-11-10T00:00:00Z',
  },

  // 2ème Année (7 projets)
  {
    id: 'year2-1',
    title: 'Infrastructure virtualisée avec VMware ESXi',
    description: 'Déploiement d\'une infrastructure de virtualisation avec VMware ESXi : création de machines virtuelles, gestion des ressources et haute disponibilité.',
    category: 'year2',
    technologies: ['VMware ESXi', 'vSphere', 'Virtualisation', 'HA'],
    icon: 'Cloud',
    github: undefined,
    demo: undefined,
    order_index: 6,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-09-05T00:00:00Z',
    updated_at: '2024-09-05T00:00:00Z',
  },
  {
    id: 'year2-2',
    title: 'Sécurisation d\'infrastructure avec pfSense',
    description: 'Configuration d\'un firewall pfSense avec règles de filtrage, VPN site-à-site, détection d\'intrusions (Snort) et proxy web.',
    category: 'year2',
    technologies: ['pfSense', 'Firewall', 'VPN', 'IDS/IPS', 'Snort'],
    icon: 'Shield',
    github: undefined,
    demo: undefined,
    order_index: 7,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-10-01T00:00:00Z',
    updated_at: '2024-10-01T00:00:00Z',
  },
  {
    id: 'year2-3',
    title: 'Conteneurisation d\'applications avec Docker',
    description: 'Déploiement d\'applications web conteneurisées avec Docker et orchestration multi-conteneurs avec Docker Compose.',
    category: 'year2',
    technologies: ['Docker', 'Docker Compose', 'Conteneurisation', 'Linux'],
    icon: 'Code',
    github: undefined,
    demo: undefined,
    order_index: 8,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-11-01T00:00:00Z',
    updated_at: '2024-11-01T00:00:00Z',
  },
  {
    id: 'year2-4',
    title: 'Mise en place d\'un serveur de messagerie Postfix',
    description: 'Installation et configuration d\'un serveur mail avec Postfix, Dovecot et gestion anti-spam/antivirus (SpamAssassin, ClamAV).',
    category: 'year2',
    technologies: ['Postfix', 'Dovecot', 'SpamAssassin', 'ClamAV', 'Linux'],
    icon: 'Server',
    github: undefined,
    demo: undefined,
    order_index: 9,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-11-20T00:00:00Z',
    updated_at: '2024-11-20T00:00:00Z',
  },
  {
    id: 'year2-5',
    title: 'Déploiement automatisé avec Ansible',
    description: 'Automatisation du déploiement et de la configuration de serveurs Linux avec Ansible : playbooks, rôles et inventaires.',
    category: 'year2',
    technologies: ['Ansible', 'Automation', 'YAML', 'Linux', 'DevOps'],
    icon: 'Terminal',
    github: undefined,
    demo: undefined,
    order_index: 10,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-12-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
  },
  {
    id: 'year2-6',
    title: 'Infrastructure Cloud avec AWS',
    description: 'Déploiement d\'une infrastructure cloud sur AWS : EC2, S3, VPC, Load Balancer et gestion des accès IAM.',
    category: 'year2',
    technologies: ['AWS', 'EC2', 'S3', 'VPC', 'IAM', 'Cloud'],
    icon: 'Cloud',
    github: undefined,
    demo: undefined,
    order_index: 11,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-12-15T00:00:00Z',
    updated_at: '2024-12-15T00:00:00Z',
  },
  {
    id: 'year2-7',
    title: 'Système de ticketing avec GLPI',
    description: 'Installation et configuration de GLPI pour la gestion du parc informatique, des incidents et des demandes utilisateurs.',
    category: 'year2',
    technologies: ['GLPI', 'ITIL', 'Ticketing', 'Gestion de parc', 'MySQL'],
    icon: 'Database',
    github: undefined,
    demo: undefined,
    order_index: 12,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2025-01-10T00:00:00Z',
    updated_at: '2025-01-10T00:00:00Z',
  },

  // Projets Personnels (2 projets)
  {
    id: 'personal-1',
    title: 'Serveur multimédia personnel (Plex)',
    description: 'Installation d\'un serveur Plex sur Raspberry Pi pour centraliser et diffuser contenus multimédias en streaming sur le réseau local.',
    category: 'personal',
    technologies: ['Plex', 'Raspberry Pi', 'Linux', 'Streaming', 'NAS'],
    icon: 'Server',
    github: undefined,
    demo: undefined,
    order_index: 13,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-08-01T00:00:00Z',
    updated_at: '2024-08-01T00:00:00Z',
  },
  {
    id: 'personal-2',
    title: 'Lab de sécurité avec Kali Linux',
    description: 'Création d\'un laboratoire de tests de sécurité avec Kali Linux : tests de pénétration, analyse de vulnérabilités et capture de trafic réseau.',
    category: 'personal',
    technologies: ['Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Pentest'],
    icon: 'Lock',
    github: undefined,
    demo: undefined,
    order_index: 14,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-07-15T00:00:00Z',
    updated_at: '2024-07-15T00:00:00Z',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger les projets depuis localStorage, ou utiliser les projets par défaut
    const stored = storage.getProjects();
    if (stored.length === 0) {
      storage.setProjects(fallbackProjects);
      setProjects(fallbackProjects);
    } else {
      setProjects(stored.filter(p => p.visible));
    }
    setLoading(false);
  }, []);

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'year1', label: '1ère Année' },
    { id: 'year2', label: '2ème Année' },
    { id: 'personal', label: 'Projets Personnels' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <section id="projects" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Mes Projets
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Découvrez mes réalisations en infrastructure système et réseau, de la formation aux projets personnels
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${filter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            Aucun projet dans cette catégorie
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="flex items-center space-x-3 p-2 hover:bg-gray-800/30 rounded-lg transition-colors">
                <div className="text-cyan-400 flex-shrink-0">
                  {iconMap[project.icon] || iconMap['Code']}
                </div>
                <a
                  href={`/documents/${project.id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-white hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400"
                >
                  {project.title}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}