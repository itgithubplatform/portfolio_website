export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;               // Emoji fallback
  imageUrl?: string;           // Real image path
  featured: boolean;
  category: string[];
  status: 'Completed' | 'In Progress' | 'Archived';
  year: string;
  highlights?: string[];       // Key achievements / bullet points shown in popup
  metrics?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'frontend' | 'backend' | 'ai' | 'database' | 'cloud' | 'tools' | 'specialized';
  icon: string;
  color: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}