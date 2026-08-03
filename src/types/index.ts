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
    problem?: { src: string; caption: string };
    requirements?: { src: string; caption: string };
    mechanicalDesign?: { src: string; caption: string };
    electricalDesign?: { src: string; caption: string };
    softwareArchitecture?: { src: string; caption: string };
    algorithms?: { src: string; caption: string };
    results?: { src: string; caption: string };
  };
  sections: {
    problem: string;
    requirements: string[];
    mechanicalDesign?: string;
    electricalDesign?: string;
    softwareArchitecture?: string;
    algorithms?: string;
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
