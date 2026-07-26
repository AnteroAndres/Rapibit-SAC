export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  sector: string;
  description: string;
  solutions: string[];
  technologies: string[];
  result: string;
  visibility: "public" | "anonymous" | "confidential";
  featured: boolean;
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
}

export interface Technology {
  name: string;
  icon: string;
  category: "backend" | "frontend" | "cloud" | "database" | "devops" | "security" | "ai" | "integration";
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SectorSolution {
  sector: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface MethodologyStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  ruc?: string;
  email: string;
  phone: string;
  organizationType: string;
  serviceRequired: string;
  budget?: string;
  message: string;
  attachment?: File;
  consent: boolean;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface AISolution {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  icon: string;
  featured: boolean;
  order: number;
}
