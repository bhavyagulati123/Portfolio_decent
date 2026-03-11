export interface Project {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
  featured?: boolean;
  featureHighlight?: { main: string; sub: string };
  github?: string;
  live?: string;
}

export interface Experience {
  date: string;
  role: string;
  company: string;
  points: string[];
}

export interface Blog {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  grade: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface Stat {
  number: string;
  label: string;
}
