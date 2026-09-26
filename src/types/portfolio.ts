export type ProjectCategory = 'All' | 'Data Analytics' | 'Power BI' | 'Tableau' | 'AI' | 'Full-Stack';

export interface Project {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  features: string[];
  concepts?: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  type: 'AI Platform' | 'AI Assistant' | 'Learning Platform' | 'Power BI Dashboard' | 'Tableau Dashboard';
  analyticalAreas?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ToolkitItem {
  id: string;
  name: string;
  role: string;
  description: string;
  highlight: string;
  accentColor: string;
  badge: string;
  interactiveType: 'sql' | 'excel' | 'powerbi' | 'tableau' | 'python';
}

export interface ExperienceItem {
  organization: string;
  course: string;
  description: string;
  location: string;
  status: string;
  keyLearnings: string[];
}

export interface HackathonItem {
  title: string;
  role: string;
  year?: string;
  description: string;
  themes: string[];
  badge?: string;
}

export interface CertificationItem {
  issuer: string;
  title: string;
  category: string;
  verifiedBadge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  branch: string;
  duration: string;
  currentYear: string;
  location: string;
  highlights: string[];
}
