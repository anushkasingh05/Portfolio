export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  tools: string[];
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}