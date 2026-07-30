import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: 'scuttle-search-and-rescue',
    title: 'SCUTTLE Search & Rescue AMR',
    shortDescription: 'Autonomous mobile robot with differential kinematics, multi-loop PID, LiDAR SLAM, and finite-state navigation.',
    fullDescription: 'Designed and deployed an autonomous search-and-rescue robot capable of real-time mapping, dynamic obstacle avoidance, and target recognition in GPS-denied environments.',
    category: 'Robotics',
    featured: true,
    specifications: {
      duration: '4 Months',
      role: 'Robotics & Controls Lead',
      teamSize: '4 Engineers',
      languages: ['Python', 'C++'],
      hardware: ['RPi 4', 'RPLiDAR A1', 'RGB Camera', 'High-Torque DC Motors'],
      software: ['ROS 2', 'OpenCV', 'Linux', 'Gazebo'],
      status: 'Completed'
    },
    sections: {
      problem: 'Emergency response personnel need low-cost, rapidly deployable mapping platforms to navigate collapsed structures without risking human life.',
      requirements: [
        'Real-time 2D SLAM mapping in unknown indoor areas.',
        'Dynamic obstacle avoidance at speeds up to 1.2 m/s.',
        'Closed-loop trajectory tracking using wheel encoders and IMU telemetry.'
      ],
      mechanicalDesign: 'Differential drive chassis optimized for payload capacity and low center of gravity. Integrated custom 3D-printed sensor mounts with vibration isolation.',
      electricalDesign: 'Multi-rail power distribution network converting 12V LiFePO4 to 5V/3A for compute and isolated motor controller power.',
      softwareArchitecture: 'ROS 2 navigation stack utilizing Nav2, custom finite-state machine nodes for search logic, and OpenCV for vision processing.',
      algorithms: 'Multi-loop PID velocity controller, Extended Kalman Filter (EKF) sensor fusion, and dynamic window approach (DWA) for local path planning.',
      results: 'Successfully mapped a 2,500 sq ft facility autonomously while pinpointing target markers with under 5cm location error.'
    },
    githubUrl: 'https://github.com/leonardo-molina'
  },
  {
    slug: 'vision-guided-amr',
    title: 'Vision-Guided Autonomous Mobile Robot',
    shortDescription: 'Linux/Python real-time processing pipeline on Raspberry Pi with closed-loop PID velocity control and HSV color tracking.',
    fullDescription: 'Custom embedded AMR leveraging high-speed vision telemetry and inertial sensors for automated trajectory correction.',
    category: 'Controls',
    featured: true,
    specifications: {
      duration: '3 Months',
      role: 'Embedded Systems Lead',
      teamSize: 'Individual Project',
      languages: ['Python', 'C'],
      hardware: ['Raspberry Pi', 'L298N Driver', 'Optical Encoders', 'IMU (MPU6050)'],
      software: ['OpenCV', 'Linux Hardware PWM', 'I2C/SPI'],
      status: 'Completed'
    },
    sections: {
      problem: 'High-speed object tracking in mobile platforms often suffers from latency between vision pipelines and motor control loops.',
      requirements: [
        'Deterministic execution of sensor sampling and velocity correction at 50Hz.',
        'Real-time color-space filtering with minimal frame latency.',
        'Hardware-level PWM signal generation for precise motor response.'
      ],
      results: 'Achieved sub-10ms loop latency, enabling zero-overshoot trajectory correction during visual line-following at 1.5 m/s.'
    }
  },
  {
    slug: 'mars-rover-end-effector',
    title: 'University Rover Challenge End-Effector',
    shortDescription: 'Underactuated robotic gripper with integrated multi-axis sensing, CAD system architecture, and control loops.',
    fullDescription: 'Lead mechanical engineer for Texas A&M SOMTECH University Rover Challenge team, designing specialized manipulation systems for planetary exploration.',
    category: 'Robotics',
    featured: true,
    specifications: {
      duration: 'Ongoing',
      role: 'Mechanical Lead',
      teamSize: '12 Engineers',
      languages: ['C++', 'Python'],
      hardware: ['Custom Gearboxes', 'Load Cells', 'STM32 Microcontrollers'],
      software: ['SolidWorks', 'ROS 2', 'CAN bus'],
      status: 'Maintained'
    },
    sections: {
      problem: 'The URC requires an end-effector capable of handling diverse tasks: pressing buttons, toggling switches, lifting 5kg payloads, and picking up delicate soil samples.',
      requirements: [
        'Underactuated finger mechanism to conform to irregular objects.',
        'Integrated force feedback to avoid crushing delicate equipment.',
        'High force-to-weight ratio payload capacity.'
      ],
      results: 'Successfully passed field qualification tests, demonstrating reliable grip adaptability on varied surface geometries.'
    }
  },
  {
    slug: 'manufacturing-process-automation',
    title: 'SAP & Power Platform Industrial Automation',
    shortDescription: 'Enterprise Python automation tools integrated directly into SAP systems to digitize heavy industrial manufacturing workflows.',
    fullDescription: 'Engineering internship project at Tex-Tube Steel focused on eliminating manual data pipelines, reducing human error, and optimizing process reliability.',
    category: 'AI / Automation',
    featured: false,
    specifications: {
      duration: 'Summer 2026',
      role: 'Project Engineering Intern',
      teamSize: '3 Engineers',
      languages: ['Python', 'SQL'],
      hardware: ['Industrial Gateway Servers'],
      software: ['SAP ERP', 'Power Platform', 'REST APIs'],
      status: 'Completed'
    },
    sections: {
      problem: 'Manual entry of mill test data introduced delay and risk into quality control verification pipelines.',
      requirements: [
        'Automated extraction and formatting of mill test measurements.',
        'Direct transactional integration with enterprise SAP database.',
        'Audit-ready error logging and exception handling.'
      ],
      results: 'Reduced manual processing time by over 80% while ensuring 100% data fidelity across manufacturing logs.'
    }
  }
];
