// Types for local storage
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  icon: string;
  github?: string;
  demo?: string;
  order_index: number;
  visible: boolean;
  file_url?: string;
  file_type?: string;
  created_at: string;
  updated_at: string;
}

export interface VeilleArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  icon: string;
  link: string;
  order_index: number;
  visible: boolean;
  file_url?: string;
  file_type?: string;
  created_at: string;
  updated_at: string;
}

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  icon: string;
  description: string;
  link?: string;
  order_index: number;
  visible: boolean;
  file_url?: string;
  file_type?: string;
  created_at: string;
  updated_at: string;
}

// Local Storage Helper Class
class LocalStorageManager {
  private readonly PREFIX = 'portfolio_';

  // Projects
  getProjects(): Project[] {
    try {
      const data = localStorage.getItem(`${this.PREFIX}projects`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  setProjects(projects: Project[]): void {
    localStorage.setItem(`${this.PREFIX}projects`, JSON.stringify(projects));
  }

  addProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Project {
    const newProject: Project = {
      ...project,
      id: `proj_${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const projects = this.getProjects();
    projects.push(newProject);
    this.setProjects(projects);
    return newProject;
  }

  updateProject(id: string, updates: Partial<Project>): void {
    const projects = this.getProjects();
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
      projects[index] = {
        ...projects[index],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      this.setProjects(projects);
    }
  }

  deleteProject(id: string): void {
    const projects = this.getProjects();
    this.setProjects(projects.filter(p => p.id !== id));
  }

  // Certificates
  getCertificates(): Certificate[] {
    try {
      const data = localStorage.getItem(`${this.PREFIX}certificates`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  setCertificates(certificates: Certificate[]): void {
    localStorage.setItem(`${this.PREFIX}certificates`, JSON.stringify(certificates));
  }

  addCertificate(certificate: Omit<Certificate, 'id' | 'created_at' | 'updated_at'>): Certificate {
    const newCert: Certificate = {
      ...certificate,
      id: `cert_${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const certificates = this.getCertificates();
    certificates.push(newCert);
    this.setCertificates(certificates);
    return newCert;
  }

  updateCertificate(id: string, updates: Partial<Certificate>): void {
    const certificates = this.getCertificates();
    const index = certificates.findIndex(c => c.id === id);
    if (index !== -1) {
      certificates[index] = {
        ...certificates[index],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      this.setCertificates(certificates);
    }
  }

  deleteCertificate(id: string): void {
    const certificates = this.getCertificates();
    this.setCertificates(certificates.filter(c => c.id !== id));
  }

  // Veille Articles
  getVeilleArticles(): VeilleArticle[] {
    try {
      const data = localStorage.getItem(`${this.PREFIX}veille_articles`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  setVeilleArticles(articles: VeilleArticle[]): void {
    localStorage.setItem(`${this.PREFIX}veille_articles`, JSON.stringify(articles));
  }

  addVeilleArticle(article: Omit<VeilleArticle, 'id' | 'created_at' | 'updated_at'>): VeilleArticle {
    const newArticle: VeilleArticle = {
      ...article,
      id: `veille_${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const articles = this.getVeilleArticles();
    articles.push(newArticle);
    this.setVeilleArticles(articles);
    return newArticle;
  }

  updateVeilleArticle(id: string, updates: Partial<VeilleArticle>): void {
    const articles = this.getVeilleArticles();
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
      articles[index] = {
        ...articles[index],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      this.setVeilleArticles(articles);
    }
  }

  deleteVeilleArticle(id: string): void {
    const articles = this.getVeilleArticles();
    this.setVeilleArticles(articles.filter(a => a.id !== id));
  }

  // Contact Messages
  getContactMessages(): ContactMessage[] {
    try {
      const data = localStorage.getItem(`${this.PREFIX}contact_messages`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  addContactMessage(message: Omit<ContactMessage, 'id' | 'created_at' | 'read'>): ContactMessage {
    const newMessage: ContactMessage = {
      ...message,
      id: `msg_${Date.now()}`,
      created_at: new Date().toISOString(),
      read: false,
    };
    const messages = this.getContactMessages();
    messages.push(newMessage);
    localStorage.setItem(`${this.PREFIX}contact_messages`, JSON.stringify(messages));
    return newMessage;
  }

  // Clear all data
  clearAll(): void {
    localStorage.removeItem(`${this.PREFIX}projects`);
    localStorage.removeItem(`${this.PREFIX}certificates`);
    localStorage.removeItem(`${this.PREFIX}veille_articles`);
    localStorage.removeItem(`${this.PREFIX}contact_messages`);
  }
}

export const storage = new LocalStorageManager();
