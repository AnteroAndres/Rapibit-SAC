export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  sector: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string;
  image: string;
  link?: string;
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
  category: "backend" | "frontend" | "cloud" | "database" | "devops" | "security" | "ai";
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
