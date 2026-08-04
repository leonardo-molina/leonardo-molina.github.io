export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Robotics' | 'Embedded' | 'Controls' | 'AI / Automation';
  featured: boolean;
  specifications: {
    duration: string;
    role: string;
    teamSize: string;
    languages: string[];
    hardware: string[];
    software: string[];
    status: 'Completed' | 'In Development' | 'Maintained';
  };
  images?: {
    overview?: { src: string; caption: string };
    approach?: { src: string; caption: string };
    hardware?: { src: string; caption: string };
    software?: { src: string; caption: string };
    results?: { src: string; caption: string };
  };
  sections: {
    overview: string;
    approach: string;
    hardware?: string;
    software?: string;
    results: string;
  };
  githubUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; description: string; level: 'Proficient' | 'Advanced' | 'Expert' }[];
}
