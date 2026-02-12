import { useState, useEffect } from 'react';
import { Shield, Cpu, HardDrive, Wifi, TrendingUp } from 'lucide-react';
import { VeilleArticle, storage } from '../lib/localStorage';

// Veille technologique complète - Chronologie et évolution du hardware
const fallbackArticles: VeilleArticle[] = [
  // === PROCESSEURS (CPU/GPU) ===
  {
    id: 'cpu-hist-1',
    title: 'Intel Pentium (1993) : La révolution 32-bit',
    category: 'CPU - Historique',
    date: '1993-03',
    summary:
      'Lancement du Pentium, premier processeur grand public avec deux unités de calcul entier. Puissance : 60 MHz, TDP 3.3W. Marque le début de la suprématie Intel.',
    icon: 'Cpu',
    link: '#',
    order_index: 1,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1993-03-01T00:00:00Z',
    updated_at: '1993-03-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-2',
    title: 'AMD Athlon XP (2000) : Le défi à Intel',
    category: 'CPU - Historique',
    date: '2000-06',
    summary:
      'AMD lance l\'Athlon XP avec ses premières vraies performances concurrentes. Fréquence : 1.3 GHz. Marque le début d\'une vraie concurrence CPU.',
    icon: 'Cpu',
    link: '#',
    order_index: 2,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2000-06-01T00:00:00Z',
    updated_at: '2000-06-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-3',
    title: 'Intel Core 2 Duo (2006) : L\'ère multi-cœur',
    category: 'CPU - Historique',
    date: '2006-07',
    summary:
      'Révolution ! Le Core 2 Duo introduit 2 cœurs sur une seule puce avec architecture 64-bit. Fréquence : 1.86-2.93 GHz. TDP : 65W. Début du multi-threading.',
    icon: 'Cpu',
    link: '#',
    order_index: 3,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2006-07-01T00:00:00Z',
    updated_at: '2006-07-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-4',
    title: 'Intel Core i7 (2008) : Quad-Core Dominant',
    category: 'CPU - Historique',
    date: '2008-11',
    summary:
      'Le Core i7 arrive avec 4 cœurs, technologie Hyperthreading et Turbo Boost. Fréquence : 2.66-3.33 GHz. TDP : 130W. Devient le standard gaming/workstation.',
    icon: 'Cpu',
    link: '#',
    order_index: 4,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2008-11-01T00:00:00Z',
    updated_at: '2008-11-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-5',
    title: 'AMD Ryzen (2017) : Révolution multi-cœurs',
    category: 'CPU - AMD',
    date: '2017-03',
    summary:
      'AMD revient en force avec Ryzen : 8 cœurs/16 threads pour le prix d\'un i7. Ryzen 7 1700 : 3.0 GHz, TDP 65W. Rupture des prix, fin du monopole Intel.',
    icon: 'Cpu',
    link: '#',
    order_index: 5,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2017-03-01T00:00:00Z',
    updated_at: '2017-03-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-6',
    title: 'Intel Core 10e Gen (2019) : Retour à 10 cœurs',
    category: 'CPU - Intel',
    date: '2019-10',
    summary:
      'Intel répond avec 10 cœurs/20 threads sur i9-9900K. Fréquence : 3.6-4.0 GHz boost. TDP : 95W. Réafcerne les performances gaming mais consomme plus.',
    icon: 'Cpu',
    link: '#',
    order_index: 6,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2019-10-01T00:00:00Z',
    updated_at: '2019-10-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-7',
    title: 'AMD Ryzen 5000 (2020) : Architecture Zen 3',
    category: 'CPU - AMD',
    date: '2020-11',
    summary:
      'Ryzen 5 5600X : 6 cœurs 4.6 GHz boost, TDP 65W. Prend les meilleures notes gaming. Intel riposte avec 11e gen mais reste derrière en efficacité énergétique.',
    icon: 'Cpu',
    link: '#',
    order_index: 7,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2020-11-01T00:00:00Z',
    updated_at: '2020-11-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-8',
    title: 'Intel 12e Gen (2021) : Performance + Efficiency Cores',
    category: 'CPU - Intel',
    date: '2021-11',
    summary:
      'Architecture hybride révolutionnaire : P-cores (performance) + E-cores (efficiency). i9-12900K : 8+8 cœurs. Consommation TDP : 125W mais résultats mitigés.',
    icon: 'Cpu',
    link: '#',
    order_index: 8,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2021-11-01T00:00:00Z',
    updated_at: '2021-11-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-9',
    title: 'AMD Ryzen 7000 (2022) : Socket AM5 et Zen 4',
    category: 'CPU - AMD',
    date: '2022-09',
    summary:
      'Ryzen 9 7950X : 16 cœurs/32 threads, 4.5 GHz, TDP 105W. Nouvelle socket AM5 (compatible jusqu\'à Zen 5). DDR5 obligatoire. Devient leader en multithreading.',
    icon: 'Cpu',
    link: '#',
    order_index: 9,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2022-09-01T00:00:00Z',
    updated_at: '2022-09-01T00:00:00Z',
  },
  {
    id: 'cpu-hist-10',
    title: 'AMD Ryzen 9000 Series (2024) : Zen 5 et iGPU Radeon',
    category: 'CPU - AMD',
    date: '2024-07',
    summary:
      'Ryzen 9 9950X : 16 cœurs Zen 5, jusqu\'à 5.7 GHz, TDP 120W. GPU Radeon 880M intégré. Efficacité énergétique de 30% comparé à Zen 4. 3nm TSMC.',
    icon: 'Cpu',
    link: '#',
    order_index: 10,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-07-01T00:00:00Z',
    updated_at: '2024-07-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-1',
    title: 'NVIDIA GeForce 256 (1999) : La première GPU 3D',
    category: 'GPU - Historique',
    date: '1999-10',
    summary:
      'Lancement de la première GeForce avec transformation T&L (Transform & Lighting) matérielle. 32 Mo SDRAM. Révolutionne le jeu 3D en temps réel.',
    icon: 'Code',
    link: '#',
    order_index: 11,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1999-10-01T00:00:00Z',
    updated_at: '1999-10-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-2',
    title: 'GeForce GTX 480 (2010) : Architecture Fermi',
    category: 'GPU - NVIDIA',
    date: '2010-03',
    summary:
      'Premier GPU NVIDIA avec support CUDA complet. 512 cœurs CUDA, 1.5 GB GDDR5. TDP 250W ! Commence l\'ère compute généraliste sur GPU.',
    icon: 'Code',
    link: '#',
    order_index: 12,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2010-03-01T00:00:00Z',
    updated_at: '2010-03-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-3',
    title: 'AMD Radeon R9 290X (2013) : Puissance brute',
    category: 'GPU - AMD',
    date: '2013-10',
    summary:
      'R9 290X : 2816 stream processors, 4GB GDDR5. TDP 290W. Excellent rapport prix/perf mais très bruyant et chaud. AMD redevient compétitif.',
    icon: 'Code',
    link: '#',
    order_index: 13,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2013-10-01T00:00:00Z',
    updated_at: '2013-10-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-4',
    title: 'NVIDIA GTX Titan X (Maxwell - 2015) : 3072 CUDA Cores',
    category: 'GPU - NVIDIA',
    date: '2015-03',
    summary:
      'Titan X (Maxwell) : 3072 CUDA cores, 12GB GDDR5, TDP 250W. Excellent pour calcul et gaming. ~$999. Devient benchmark de luxe.',
    icon: 'Code',
    link: '#',
    order_index: 14,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2015-03-01T00:00:00Z',
    updated_at: '2015-03-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-5',
    title: 'NVIDIA RTX 2080 Ti (2018) : Ray Tracing Real-time',
    category: 'GPU - NVIDIA',
    date: '2018-09',
    summary:
      'RTX 2080 Ti : 4352 CUDA cores, 11GB GDDR6, RT cores. TDP 250W. Introduit le ray tracing temps réel en gaming. Prix : ~$1200. Révolution graphique.',
    icon: 'Code',
    link: '#',
    order_index: 15,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2018-09-01T00:00:00Z',
    updated_at: '2018-09-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-6',
    title: 'AMD RX 5700 XT (2019) : RDNA Arrive',
    category: 'GPU - AMD',
    date: '2019-07',
    summary:
      'RX 5700 XT : 2560 stream processors, 8GB GDDR6. TDP 225W. Architecture RDNA entièrement nouvelle. Rivalise avec RTX 2070 Super à moindre prix.',
    icon: 'Code',
    link: '#',
    order_index: 16,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2019-07-01T00:00:00Z',
    updated_at: '2019-07-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-7',
    title: 'NVIDIA RTX 3090 (2020) : Ampere Architecture',
    category: 'GPU - NVIDIA',
    date: '2020-09',
    summary:
      'RTX 3090 : 10496 CUDA cores, 24GB GDDR6X. TDP 350W. Performance x2 vs RTX 2080 Ti. Prix : $1499. Pénurie due aux cryptominers.',
    icon: 'Code',
    link: '#',
    order_index: 17,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2020-09-01T00:00:00Z',
    updated_at: '2020-09-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-8',
    title: 'AMD RX 6800 XT (2020) : RDNA 2 Puissante',
    category: 'GPU - AMD',
    date: '2020-11',
    summary:
      'RX 6800 XT : 4608 stream processors, 16GB GDDR6. TDP 300W. Rivalise avec RTX 3070 à meilleur prix. Architecture RDNA 2 plus efficace.',
    icon: 'Code',
    link: '#',
    order_index: 18,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2020-11-01T00:00:00Z',
    updated_at: '2020-11-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-9',
    title: 'NVIDIA RTX 4090 (2022) : Ada Lovelace',
    category: 'GPU - NVIDIA',
    date: '2022-10',
    summary:
      'RTX 4090 : 16384 CUDA cores, 24GB GDDR6X. TDP 450W (mais efficace). 2-3x performance RTX 3090. Prix retail $1599, marché noir $2000+.',
    icon: 'Code',
    link: '#',
    order_index: 19,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2022-10-01T00:00:00Z',
    updated_at: '2022-10-01T00:00:00Z',
  },
  {
    id: 'gpu-hist-10',
    title: 'NVIDIA RTX 5090 (2025) : Blackwell Flagship',
    category: 'GPU - NVIDIA',
    date: '2025-01',
    summary:
      'RTX 5090 : 21760 CUDA cores, 32GB GDDR7 576-bit. TDP 575W. Performance 2-3x RTX 4090. Ray tracing 4e génération. DLSS 4 avec frame generation. ~$1999.',
    icon: 'Code',
    link: '#',
    order_index: 20,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2025-01-15T00:00:00Z',
    updated_at: '2025-01-15T00:00:00Z',
  },

  // === MÉMOIRE RAM ===
  {
    id: 'ram-hist-1',
    title: 'SDRAM (1995) : Synchronisée sur l\'horloge',
    category: 'RAM - Historique',
    date: '1995-06',
    summary:
      'SDRAM remplace FPM RAM. Synchronisation sur horloge système. Vitesses : 66-100 MHz. Apporte la stabilité et l\'évolutivité. Standard pendant 10 ans.',
    icon: 'Shield',
    link: '#',
    order_index: 21,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1995-06-01T00:00:00Z',
    updated_at: '1995-06-01T00:00:00Z',
  },
  {
    id: 'ram-hist-2',
    title: 'DDR SDRAM (2000) : Double Débit',
    category: 'RAM - Historique',
    date: '2000-06',
    summary:
      'DDR SDRAM introduit transfer de données sur front montant ET descendant. Vitesses : 200-400 MHz (DDR200-400). Capacités : 128 MB à 1 GB. Puissance : 2.5V.',
    icon: 'Shield',
    link: '#',
    order_index: 22,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2000-06-01T00:00:00Z',
    updated_at: '2000-06-01T00:00:00Z',
  },
  {
    id: 'ram-hist-3',
    title: 'DDR2 (2003) : 2x Fréquence, 4x Débit',
    category: 'RAM - Historique',
    date: '2003-02',
    summary:
      'DDR2 quadruple le débit de données. Vitesses : 400-1066 MHz. Capacités : jusqu\'à 4 GB. Puissance réduite : 1.8V. Standard PC pendant 5 ans.',
    icon: 'Shield',
    link: '#',
    order_index: 23,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2003-02-01T00:00:00Z',
    updated_at: '2003-02-01T00:00:00Z',
  },
  {
    id: 'ram-hist-4',
    title: 'DDR3 (2007) : 1600 MHz et 8GB accessible',
    category: 'RAM - Historique',
    date: '2007-06',
    summary:
      'DDR3 octruple le débit vs DDR. Vitesses : 800-1600 MHz. Capacités : 2-8 GB standards. Puissance : 1.5V. Latence réduite (CAS 5-9). Standard jusqu\'à 2017.',
    icon: 'Shield',
    link: '#',
    order_index: 24,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2007-06-01T00:00:00Z',
    updated_at: '2007-06-01T00:00:00Z',
  },
  {
    id: 'ram-hist-5',
    title: 'DDR4 (2014) : Capacités 16-32 GB',
    category: 'RAM - Historique',
    date: '2014-09',
    summary:
      'DDR4 atteint 2133-3200 MHz. Capacités : 8-32 GB. Puissance réduite : 1.2V (économies 40%). Meilleure gestion thermique. Standard gaming/workstation 10 ans.',
    icon: 'Shield',
    link: '#',
    order_index: 25,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2014-09-01T00:00:00Z',
    updated_at: '2014-09-01T00:00:00Z',
  },
  {
    id: 'ram-hist-6',
    title: 'DDR5 (2022) : 4800-6400 MHz, +33% bande passante',
    category: 'RAM - Historique',
    date: '2022-01',
    summary:
      'DDR5 double la fréquence : 4800-6400 MHz (jusqu\'à 8533 MHz OC). Bande passante 51.2-102.4 GB/s. Capacités : 8-128 GB. Puissance : 1.1V. Deux canaux par DIMM.',
    icon: 'Shield',
    link: '#',
    order_index: 26,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2022-01-01T00:00:00Z',
    updated_at: '2022-01-01T00:00:00Z',
  },
  {
    id: 'ram-hist-7',
    title: 'Comparaison DDR4 vs DDR5 (2024) : Débat tarifaire',
    category: 'RAM - Comparaison',
    date: '2024-01',
    summary:
      'DDR5 32 GB = 150-200€ vs DDR4 32 GB = 80-120€. Performance réelle en gaming : +5-10% seulement. Pour travail : DDR4 reste pertinent jusqu\'à 2027.',
    icon: 'Shield',
    link: '#',
    order_index: 27,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'ram-hist-8',
    title: 'SK Hynix alerte : DDR5 tendu jusqu\'en 2028',
    category: 'RAM - Actualité',
    date: '2025-01',
    summary:
      'Demande IA/datacenter absorbe 70% production. Prix DDR5 stabilisés. DDR4 devient vintage. Pénurie prévisible Q3-Q4 2025 en petites capacités.',
    icon: 'Shield',
    link: '#',
    order_index: 28,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },

  // === STOCKAGE ===
  {
    id: 'storage-hist-1',
    title: 'Disques Durs HDD 3.5" (1980s) : Les débuts',
    category: 'Stockage - Historique',
    date: '1980-01',
    summary:
      'Seagate ST506 : 5 MB, 3.5" physiques. 40 Hz de vibrations. MTBF 30 000 heures. Bruyants, fragmentés, lents. Révolution vs cassettes 8-bit.',
    icon: 'HardDrive',
    link: '#',
    order_index: 29,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1980-01-01T00:00:00Z',
    updated_at: '1980-01-01T00:00:00Z',
  },
  {
    id: 'storage-hist-2',
    title: 'IDE/PATA (1986) : Énorme bondissement',
    category: 'Stockage - Historique',
    date: '1986-03',
    summary:
      'Norme IDE remplace MFM/RLL. Capacité 10-40 MB. Interface IDE simple 40-pin. Vitesse : ~4.16 MB/s. Démocratise l\'informatique domestique.',
    icon: 'HardDrive',
    link: '#',
    order_index: 30,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1986-03-01T00:00:00Z',
    updated_at: '1986-03-01T00:00:00Z',
  },
  {
    id: 'storage-hist-3',
    title: 'SATA 1.0 (2003) : Disques de 1-2 TB',
    category: 'Stockage - Historique',
    date: '2003-01',
    summary:
      'SATA remplace PATA. Vitesse 1.5 Gbps. Câbles minces. Disques atteignent 200 GB. Interface hot-plug. Lancement transition massive.',
    icon: 'HardDrive',
    link: '#',
    order_index: 31,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2003-01-01T00:00:00Z',
    updated_at: '2003-01-01T00:00:00Z',
  },
  {
    id: 'storage-hist-4',
    title: 'SSD SLC (2006) : Les premiers SSDs',
    category: 'Stockage - Historique',
    date: '2006-05',
    summary:
      'Kingston SSDNow : 64 MB/s lecture, 1 bit/cellule (SLC). Capacité 32 GB. Prix : ~500€ (inconcevable). 500 000 cycles d\'écriture. MTBF illimité.',
    icon: 'HardDrive',
    link: '#',
    order_index: 32,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2006-05-01T00:00:00Z',
    updated_at: '2006-05-01T00:00:00Z',
  },
  {
    id: 'storage-hist-5',
    title: 'SSD MLC & SATA (2009) : Arrivée massive',
    category: 'Stockage - Historique',
    date: '2009-03',
    summary:
      'Intel X25-M : MLC 2 bits/cellule, 250 MB/s, 160 GB. Prix baisse à 2€/GB. TLC arrive : 3 bits/cellule. HDD commence déclin lent.',
    icon: 'HardDrive',
    link: '#',
    order_index: 33,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2009-03-01T00:00:00Z',
    updated_at: '2009-03-01T00:00:00Z',
  },
  {
    id: 'storage-hist-6',
    title: 'SSD M.2 NVMe (2014) : 3500 MB/s',
    category: 'Stockage - Historique',
    date: '2014-08',
    summary:
      'Samsung 950 Pro : M.2 form factor, PCIe 3.0 NVMe. 3500 MB/s lecture, 2100 MB/s écriture. Capacité 256 GB-1 TB. Prix : 200€ le 256 GB.',
    icon: 'HardDrive',
    link: '#',
    order_index: 34,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2014-08-01T00:00:00Z',
    updated_at: '2014-08-01T00:00:00Z',
  },
  {
    id: 'storage-hist-7',
    title: 'NVMe PCIe 4.0 (2019) : 7500 MB/s',
    category: 'Stockage - Historique',
    date: '2019-07',
    summary:
      'Samsung 980 Pro : PCIe 4.0 NVMe. 7100 MB/s lecture. TLC 256-bit. 5 ans warranty. Prix 1 TB = 100€. Devient mainstream pour gaming/création.',
    icon: 'HardDrive',
    link: '#',
    order_index: 35,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2019-07-01T00:00:00Z',
    updated_at: '2019-07-01T00:00:00Z',
  },
  {
    id: 'storage-hist-8',
    title: 'NVMe PCIe 5.0 (2024) : 14000 MB/s',
    category: 'Stockage - Actualité',
    date: '2024-06',
    summary:
      'Samsung 990 EVO Plus : PCIe 5.0, 12 000 MB/s. WD Black SN850X : 12 GB/s débit séquentiel. Prix 1 TB = 100-150€. Overkill gaming, essentiel pour créateurs.',
    icon: 'HardDrive',
    link: '#',
    order_index: 36,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-06-01T00:00:00Z',
    updated_at: '2024-06-01T00:00:00Z',
  },
  {
    id: 'storage-hist-9',
    title: 'HDD vs SSD (2025) : L\'extinction du HDD',
    category: 'Stockage - Tendance',
    date: '2025-01',
    summary:
      'HDD 4 TB = 60€ (15€/TB) vs SSD 1 TB = 50€ (50€/TB). HDD pour backup/NAS seulement. SSD gaming mainstream. HDD disparaîtra d\'ici 5 ans du grand public.',
    icon: 'HardDrive',
    link: '#',
    order_index: 37,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },

  // === CARTES MÈRES ===
  {
    id: 'mobo-hist-1',
    title: 'Socket 7 (1995-2000) : La standardisation',
    category: 'Cartes Mères - Historique',
    date: '1995-06',
    summary:
      'Socket 7 standardise Pentium/K6/Cyrix. Support 100 MHz bus FSB. Chipsets : Intel 430/440 TX. PCIe n\'existe pas. Slots ISA/PCI seuls.',
    icon: 'Network',
    link: '#',
    order_index: 38,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1995-06-01T00:00:00Z',
    updated_at: '1995-06-01T00:00:00Z',
  },
  {
    id: 'mobo-hist-2',
    title: 'LGA 775 / LGA 1150 (2004-2017) : L\'ère P4/Core',
    category: 'Cartes Mères - Historique',
    date: '2004-05',
    summary:
      'LGA 775 remplace Socket. Support Pentium 4/Core 2 Duo. FSB 533-1333 MHz. PCIe x16 pour GPU. Durée : 13 ans de compatibilité accrue.',
    icon: 'Network',
    link: '#',
    order_index: 39,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2004-05-01T00:00:00Z',
    updated_at: '2004-05-01T00:00:00Z',
  },
  {
    id: 'mobo-hist-3',
    title: 'Socket AM3 / AM4 (2009-2025) : AMD Dominance',
    category: 'Cartes Mères - Historique',
    date: '2009-05',
    summary:
      'AM3 introduit CPU DDR3-ready. AM4 (2016) : 16 générations support (Ryzen-Ryzen9000). Meilleure longévité que Intel. WiFi 6E + PCIe 5.0 en 2024.',
    icon: 'Network',
    link: '#',
    order_index: 40,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2009-05-01T00:00:00Z',
    updated_at: '2009-05-01T00:00:00Z',
  },
  {
    id: 'mobo-hist-4',
    title: 'Z790 Intel (2022) : DDR5 + PCIe 5.0',
    category: 'Cartes Mères - Intel',
    date: '2022-10',
    summary:
      'Z790 pour 12e gen Intel. DDR5 obligatoire. PCIe 5.0 SSD support. Coût : 250-400€. VRM 16-24 phases. Courte durée : remplacé par Z890.',
    icon: 'Network',
    link: '#',
    order_index: 41,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2022-10-01T00:00:00Z',
    updated_at: '2022-10-01T00:00:00Z',
  },
  {
    id: 'mobo-hist-5',
    title: 'X870E AMD (2024) : PCIe 5.0 GPU + SSD',
    category: 'Cartes Mères - AMD',
    date: '2024-09',
    summary:
      'X870E pour Ryzen 9000. Dual PCIe 5.0 slots (GPU + SSD). 24 phases VRM. WiFi 7. Coût : 350-500€. AM5 compatible jusqu\'à Zen 6 (2026-2027).',
    icon: 'Network',
    link: '#',
    order_index: 42,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-09-01T00:00:00Z',
    updated_at: '2024-09-01T00:00:00Z',
  },

  // === ALIMENTATION ===
  {
    id: 'psu-hist-1',
    title: 'ATX (1995) : Révolution de la forme',
    category: 'Alimentation - Historique',
    date: '1995-06',
    summary:
      'Norme ATX 300W standardise connecteurs. Remplace baby-AT. Taille 150x86x140mm. Efficacité 50-60%. Certification non-existante.',
    icon: 'Zap',
    link: '#',
    order_index: 43,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1995-06-01T00:00:00Z',
    updated_at: '1995-06-01T00:00:00Z',
  },
  {
    id: 'psu-hist-2',
    title: '80+ Bronze (2005) : Premières certifications',
    category: 'Alimentation - Historique',
    date: '2005-01',
    summary:
      'Certification 80+ obligatoire : 80% efficacité min. Bronze 81-85%. Silver 85-89%. Réduction des coûts électrique long-terme. 600-1000W standards.',
    icon: 'Zap',
    link: '#',
    order_index: 44,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2005-01-01T00:00:00Z',
    updated_at: '2005-01-01T00:00:00Z',
  },
  {
    id: 'psu-hist-3',
    title: '80+ Gold (2015) : Efficacité 87-90%',
    category: 'Alimentation - Historique',
    date: '2015-08',
    summary:
      'Gold atteint 87-90% efficacité. 750-850W pour gaming mid-high. Prix : 100-150€. Corsair RM750x devient référence. Bruit minimisé grâce semi-fanless.',
    icon: 'Zap',
    link: '#',
    order_index: 45,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2015-08-01T00:00:00Z',
    updated_at: '2015-08-01T00:00:00Z',
  },
  {
    id: 'psu-hist-4',
    title: '80+ Platinum (2022) : 90-92% efficacité',
    category: 'Alimentation - Actualité',
    date: '2022-06',
    summary:
      'Platinum PSU 90-92% efficacité. 850-1000W pour RTX 4090. Prix : 180-230€. EVGA SuperNOVA Platinum. Économise 30-50€/an électricité.',
    icon: 'Zap',
    link: '#',
    order_index: 46,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2022-06-01T00:00:00Z',
    updated_at: '2022-06-01T00:00:00Z',
  },
  {
    id: 'psu-hist-5',
    title: 'PCIe 5.0 12V-2x6 (2024) : RTX 5090 Connector',
    category: 'Alimentation - Actualité',
    date: '2024-12',
    summary:
      'Nouveau connecteur 12V-2x6 supporte 600W par pin (vs 75W ancien). 1200W PSU recommandé RTX 5090. Corsair HX1200i 12V-2x6 ready. Changement obligatoire.',
    icon: 'Zap',
    link: '#',
    order_index: 47,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-12-01T00:00:00Z',
    updated_at: '2024-12-01T00:00:00Z',
  },

  // === REFROIDISSEMENT ===
  {
    id: 'cooling-hist-1',
    title: 'Refroidissement passif (1980s) : Heatsink aluminium',
    category: 'Refroidissement - Historique',
    date: '1980-01',
    summary:
      'Radiateurs passifs en aluminium. TDP CPU : <5W. Pas de ventilateur. Efficace pour Pentium 100. Limitation : thermique monte rapidement.',
    icon: 'Wind',
    link: '#',
    order_index: 48,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1980-01-01T00:00:00Z',
    updated_at: '1980-01-01T00:00:00Z',
  },
  {
    id: 'cooling-hist-2',
    title: 'Ventilation actif (1998) : Fan + Heatsink',
    category: 'Refroidissement - Historique',
    date: '1998-03',
    summary:
      'Fan + heatsink combo sur Pentium II/III. TDP 35W. Socket 370. 60mm fans premiers. Bruit acceptable. Permet overclocking début.',
    icon: 'Wind',
    link: '#',
    order_index: 49,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1998-03-01T00:00:00Z',
    updated_at: '1998-03-01T00:00:00Z',
  },
  {
    id: 'cooling-hist-3',
    title: 'Watercooling AIO (2005) : Corsair H50',
    category: 'Refroidissement - Historique',
    date: '2005-10',
    summary:
      'Corsair H50 : systeme eau tout-en-un 120mm radiateur. Pâte thermique Arctic MX-2 (2.5 W/mK). Core i7 TDP 130W refroidi correctement. Révolution.',
    icon: 'Wind',
    link: '#',
    order_index: 50,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2005-10-01T00:00:00Z',
    updated_at: '2005-10-01T00:00:00Z',
  },
  {
    id: 'cooling-hist-4',
    title: 'Air Tower (2020) : Noctua NH-D15 Champion',
    category: 'Refroidissement - Actualité',
    date: '2020-05',
    summary:
      'Noctua NH-D15 : 2x120mm, 280W dissipation. Pâte NT-H2 4.0 W/mK. Silence 24 dB. Meilleur air cooler jamais. Prix 100€ mais durée 20 ans.',
    icon: 'Wind',
    link: '#',
    order_index: 51,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2020-05-01T00:00:00Z',
    updated_at: '2020-05-01T00:00:00Z',
  },
  {
    id: 'cooling-hist-5',
    title: 'Custom Watercooling & Pâtes ultimes (2024)',
    category: 'Refroidissement - Actualité',
    date: '2024-11',
    summary:
      'Ryzen 9 9950X TDP 120W nécessite bon cooler. Pâte Thermal Grizzly Kryonaut 5.5 W/mK premium. AIO 360mm = 15°C mieux qu\'air tower. Gaming : 65°C stable.',
    icon: 'Wind',
    link: '#',
    order_index: 52,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-11-01T00:00:00Z',
    updated_at: '2024-11-01T00:00:00Z',
  },

  // === RÉSEAU ===
  {
    id: 'network-hist-1',
    title: 'Ethernet 10 Mbps (1985) : TCP/IP Débuts',
    category: 'Réseau - Historique',
    date: '1985-05',
    summary:
      '3Com 3C500 carte Ethernet 10Base-T 10 Mbps. Coaxial épais. RJ-45 remplace coax. Taux collision 50%. Révolution vs modem dial-up 56k.',
    icon: 'Wifi',
    link: '#',
    order_index: 53,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1985-05-01T00:00:00Z',
    updated_at: '1985-05-01T00:00:00Z',
  },
  {
    id: 'network-hist-2',
    title: 'Fast Ethernet 100 Mbps (1995) : 10x Faster',
    category: 'Réseau - Historique',
    date: '1995-09',
    summary:
      '100Base-TX / 100Base-T4 standards. Intel InBusiness Ethernet 10/100 combo. Cabling Category 5 UTP. Domotique intégrée commence.',
    icon: 'Wifi',
    link: '#',
    order_index: 54,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1995-09-01T00:00:00Z',
    updated_at: '1995-09-01T00:00:00Z',
  },
  {
    id: 'network-hist-3',
    title: 'Gigabit Ethernet 1000 Mbps (1998) : 1 Gbps',
    category: 'Réseau - Historique',
    date: '1998-06',
    summary:
      '1000Base-T (Gigabit Ethernet) : 1000 Mbps sur Cat5e. Latence <1ms. Révolutionne LAN gaming. Serveurs atteignent 10 Gbps avec fibre.',
    icon: 'Wifi',
    link: '#',
    order_index: 55,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1998-06-01T00:00:00Z',
    updated_at: '1998-06-01T00:00:00Z',
  },
  {
    id: 'network-hist-4',
    title: 'WiFi 802.11b (1999) : Wireless 11 Mbps',
    category: 'Réseau - Historique',
    date: '1999-09',
    summary:
      'WiFi 11 Mbps sur 2.4 GHz ISM. Linksys WPC11 premiere carte WiFi. Bande passante partagée. Interférence microwaves. Taux erreur 20%.',
    icon: 'Wifi',
    link: '#',
    order_index: 56,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '1999-09-01T00:00:00Z',
    updated_at: '1999-09-01T00:00:00Z',
  },
  {
    id: 'network-hist-5',
    title: 'WiFi 802.11ac (2013) : AC1200 Wave 1',
    category: 'Réseau - Actualité',
    date: '2013-01',
    summary:
      '802.11ac 5 GHz jusqu\'à 1300 Mbps (AC1200). MIMO 3x3. Pénétration murs réduite. Asus RT-AC68U routeur référence. Compatibilité Android/iOS robuste.',
    icon: 'Wifi',
    link: '#',
    order_index: 57,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2013-01-01T00:00:00Z',
    updated_at: '2013-01-01T00:00:00Z',
  },
  {
    id: 'network-hist-6',
    title: 'WiFi 6E (802.11ax) (2021) : WiFi 6 GHz',
    category: 'Réseau - Actualité',
    date: '2021-01',
    summary:
      'WiFi 6E 1200+ Mbps 2.4GHz + 5GHz + 6GHz (nouveau). OFDMA reduce latency. Intel AX210 adopte rapidement. Asus ROG Rapture AX12000 référence.',
    icon: 'Wifi',
    link: '#',
    order_index: 58,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2021-01-01T00:00:00Z',
    updated_at: '2021-01-01T00:00:00Z',
  },
  {
    id: 'network-hist-7',
    title: 'WiFi 7 (802.11be) (2023) : 30 Gbps Théorique',
    category: 'Réseau - Actualité',
    date: '2023-06',
    summary:
      'WiFi 7 2.4/5/6 GHz tri-bande. 30 Gbps théorique (4x WiFi 6). Multi-link opération reduit latency. ASUS RT-BE19000 gaming ready. Coût 300€+.',
    icon: 'Wifi',
    link: '#',
    order_index: 59,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2023-06-01T00:00:00Z',
    updated_at: '2023-06-01T00:00:00Z',
  },
  {
    id: 'network-hist-8',
    title: 'Ethernet 10 Gbps / 25 Gbps (2024) : Hyperconnected',
    category: 'Réseau - Actualité',
    date: '2024-06',
    summary:
      '10G Ethernet filaire gaming arrive. Aquantia AQC111 PCIe 5.0. Cat8 cables supportent 40 Gbps théorique. Latency <0.1ms. Gaming compétitif benchmark.',
    icon: 'Wifi',
    link: '#',
    order_index: 60,
    visible: true,
    file_url: undefined,
    file_type: undefined,
    created_at: '2024-06-01T00:00:00Z',
    updated_at: '2024-06-01T00:00:00Z',
  },
];

export default function Veille() {
  const [displayedText, setDisplayedText] = useState('');
  const [articles, setArticles] = useState<VeilleArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const terminalText =
    '> Veille Technologique - Chronologie du Hardware PC & Portables (1980 - 2025)...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= terminalText.length) {
        setDisplayedText(terminalText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Charger les articles depuis localStorage, ou utiliser les articles par défaut
    const stored = storage.getVeilleArticles();
    if (stored.length === 0) {
      storage.setVeilleArticles(fallbackArticles);
      setArticles(fallbackArticles);
    } else {
      setArticles(stored.filter(a => a.visible));
    }
    setLoading(false);
  }, []);

  // Grouper articles par catégorie
  const categories = Array.from(new Set(articles.map(a => a.category)));
  const filteredArticles = selectedCategory
    ? articles.filter(a => a.category === selectedCategory)
    : articles;

  return (
    <section id="veille" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Veille Technologique
          </span>
        </h2>

        <div className="mb-12 bg-gray-900 rounded-lg p-6 border border-cyan-500/30 font-mono">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-500 text-sm ml-4">terminal</span>
          </div>
          <div className="text-green-400 text-sm md:text-base">
            {displayedText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Chronologie complète de l'évolution du matériel informatique depuis 1980. Découvrez l'histoire des processeurs (CPU/GPU), 
          mémoire RAM, stockage SSD/HDD, cartes mères, alimentations, refroidissement et connectivité réseau. 
          Comparaisons AMD vs Intel, évolution des technologies, performances et utilisation.
        </p>

        {/* Filtres par catégorie */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Filtrer par catégorie</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-cyan-500 text-black'
                  : 'bg-gray-800/50 text-gray-300 border border-cyan-500/30 hover:border-cyan-500/50'
              }`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black'
                    : 'bg-gray-800/50 text-gray-300 border border-cyan-500/30 hover:border-cyan-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            Aucun article pour le moment
          </div>
        ) : (
          <>
            {/* Timeline view */}
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

              {/* Timeline items */}
              <div className="space-y-8">
                {filteredArticles.map((article, index) => (
                  <div key={article.id} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="w-1/2 px-8">
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30 font-semibold">
                            {article.category}
                          </span>
                          <span className="text-gray-400 text-sm font-mono">{article.date}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-0 flex justify-center relative">
                      <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-black absolute top-6"></div>
                    </div>

                    {/* Spacer */}
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-20 grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm">Processeurs</p>
                <p className="text-2xl font-bold text-cyan-400 mt-1">20 eras</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mx-auto mb-3">
                  <HardDrive className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm">Stockage</p>
                <p className="text-2xl font-bold text-cyan-400 mt-1">9 générations</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mx-auto mb-3">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm">Mémoire</p>
                <p className="text-2xl font-bold text-cyan-400 mt-1">DDR-DDR5</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-full mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm">Évolution</p>
                <p className="text-2xl font-bold text-cyan-400 mt-1">45 ans</p>
              </div>
            </div>
          </>
        )}

        {/* Legend */}
        <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Résumé de l'Évolution Hardware</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-cyan-400" />
                CPU/GPU : Du MHz au GHz
              </h4>
              <p className="text-gray-300 text-sm">Pentium 60MHz (1993) → Ryzen 9 5.7 GHz (2024). Multiplication x95 en 31 ans!</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                RAM : De MB à GB
              </h4>
              <p className="text-gray-300 text-sm">SDRAM 128MB (1995) → DDR5 128GB (2025). Capacité x1000 en 30 ans!</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <HardDrive className="w-5 h-5 mr-2 text-cyan-400" />
                Stockage : HDD vs SSD
              </h4>
              <p className="text-gray-300 text-sm">HDD 5MB (1980) → NVMe 14GB/s (2024). Vitesse x2,800,000. SSD remplace HDD.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Wifi className="w-5 h-5 mr-2 text-cyan-400" />
                Réseau : WiFi 11Mbps à WiFi7 30Gbps
              </h4>
              <p className="text-gray-300 text-sm">Ethernet 10Mbps (1985) → WiFi7 30Gbps théorique (2023). Révolution mobile/IoT.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
