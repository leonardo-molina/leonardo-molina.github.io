import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    company: 'Tex-Tube Steel',
    role: 'Project Engineering Intern',
    period: 'May 2026 – August 2026',
    location: 'Houston, TX',
    bullets: [
      'Developed Python automation tools to digitize manufacturing workflows, reducing manual data entry and optimizing internal data flow.',
      'Automated engineering processes by integrating custom software solutions directly with enterprise SAP systems to increase process reliability.',
      'Collaborated with plant engineers to audit data acquisition bottlenecks across steel pipe production lines.'
    ],
    technologies: ['Python', 'SAP ERP', 'Process Automation', 'Data Systems']
  },
  {
    company: 'SOMTECH Robotics',
    role: 'Mechanical Lead / End Effector Lead',
    period: 'September 2024 – Present',
    location: 'College Station, TX',
    bullets: [
      'Directed the mechanical engineering team for the University Rover Challenge Mars rover, overseeing system architecture, CAD analysis, and mechanical integration.',
      'Led design and prototyping of an underactuated robotic gripper end-effector for specialized object manipulation.',
      'Collaborated with electrical and software teams to integrate multi-axis actuation, sensing networks, and control loops into a cohesive platform.'
    ],
    technologies: ['SolidWorks', 'System Architecture', 'C++', 'Kinematics', 'Mechatronics']
  },
  {
    company: 'Texas A&M University at Qatar',
    role: 'AI/ML Research Intern',
    period: 'May 2023 – July 2023',
    location: 'Al Rayyan, Qatar',
    bullets: [
      'Built, trained, and evaluated machine learning models using TensorFlow and Python to explore neural network convergence.',
      'Applied hyperparameter tuning and metric-driven evaluations to improve baseline model classification accuracy.'
    ],
    technologies: ['TensorFlow', 'Python', 'Machine Learning', 'Data Analysis']
  }
];
