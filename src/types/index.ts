export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  category: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
  icon: string;
  color: string;
}

// export interface Experience {
//   id: string;
//   company: string;
//   position: string;
//   period: string;
//   description: string[];
//   technologies: string[];
//   logo: string;
// }

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