import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: 'scuttle-search-and-rescue',
    title: 'SCUTTLE Search & Rescue AMR',
    shortDescription: 'Autonomous mobile robot developed for search and rescue operations featuring LiDAR mapping, HSV color-based object detection, and a custom 3D-printed parallel gripper.',
    fullDescription: 'Designed and deployed an autonomous search-and-rescue robot capable of real-time mapping, dynamic obstacle avoidance, and target recognition in GPS-denied environments.',
    category: 'Robotics',
    featured: true,
    specifications: {
      duration: '4 Months',
      role: 'Robotics & Controls Project Lead',
      teamSize: '4 Engineers',
      languages: ['Python', 'C++'],
      hardware: ['RPi 4', 'RPLiDAR A1', 'RGB Camera', 'High-Torque DC Motors'],
      software: ['ROS 2', 'OpenCV', 'Linux', 'Gazebo', 'Flask'],
      status: 'Completed'
    },
    images: {
      overview: {
        src: '/SCUTTLERobot.jpg', 
        caption: 'Figure 1: The Helen-Searcher SCUTTLE AMR during testing.'
      },
      hardware: {
        src: '/Gripper.jpg',
        caption: 'Figure 2: Custom 3D-printed parallel gripper mechanism.'
      },
      software: [
        {
          src: '/ComputerScuttleVision.jpg',
          caption: 'Figure 3: Multi-threaded state management architecture.'
        },
        {
          src: '/SCUTTLEDashboard.jpg',
          caption: 'Figure 4: Live mission dashboard showing the occupancy grid, robot pose, and detected targets.'
        }
      ]
    },
    sections: {
      overview: 'I engineered the Helen-Searcher, an autonomous SCUTTLE robot designed to execute search and rescue missions within a simulated environment. The system was built to operate completely without user intervention, relying on real-time decision-making to navigate, avoid obstacles, map its surroundings, and secure designated targets. The primary objective was to scan the environment to locate and retrieve red targets (representing survivors) while ignoring blue targets. To handle the complex stream of sensory data, I developed a modular, multi-threaded software architecture in Python running on a Raspberry Pi 4, encapsulating navigation, mapping, detection, safe-zone control, and telemetry into dedicated background threads coordinated through a shared, lock-protected RobotState store.',
      approach: 'My approach split the mission into three coordinated engineering efforts. On the hardware side, I designed a custom gripper mechanism built to reliably secure lightweight, smooth-surfaced targets. On the software side, I built a perception and navigation pipeline that fused LiDAR-based mapping with HSV color-based vision to drive autonomous exploration and target retrieval. Tying it together was a thread-safe state layer that let every subsystem read and write a single source of truth in real time — the same layer that powers the live monitoring dashboard described in the results below.',
      hardware: 'For the physical manipulation of targets, I designed a 3D-printed rack-and-pinion style parallel gripper, driven by a TowerPro MG995 servo motor. The mechanism included 11 components and utilized a 2:1 gear reduction train. To solve payload slipping caused by low mass and smooth surfaces, I applied a surface treatment to the gripping faces to create a rough texture, significantly increasing static friction. Power was distributed through a multi-rail network converting a 12V LiFePO4 battery to a regulated 5V/3A rail for compute, with isolated supply lines protecting the motor controllers.',
      software: 'Spatial awareness relied on a combination of 2D LiDAR and computer vision. I integrated a SICK TiM561 LiDAR sensor and applied a ray-casting technique based on the Bresenham line algorithm to build a dynamic 200x200 cell occupancy grid, while an HP Webcam W200 processed video at 5 fps, converting frames to HSV color space with dual-range masks to isolate red pixels. On top of this perception stack ran a multi-phase navigation algorithm: the robot began with LiDAR-guided wall following, transitioned into an exploration mode to map the inner environment, and finally handed off to visual servoing to keep the red block centered in frame during retrieval.',
      results: 'To monitor the mission in real-time, I built a Flask-based web server hosted directly on the Raspberry Pi. The dashboard featured a JavaScript client that polled a JSON snapshot of the shared state every second, providing a live top-down view of the generated occupancy grid, the robot heading, and the location of confirmed targets.'
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
      overview: 'High-speed object tracking in mobile platforms often suffers from latency between vision pipelines and motor control loops. The system needed deterministic execution of sensor sampling and velocity correction at 50Hz, real-time color-space filtering with minimal frame latency, and hardware-level PWM signal generation for precise motor response.',
      approach: 'I kept the entire control loop close to the hardware: a Python vision pipeline handled HSV-based color tracking while a dedicated, hardware-timed PWM layer handled motor response, so that sensing and actuation stayed tightly synchronized instead of drifting apart under load.',
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
      overview: 'The URC requires an end-effector capable of handling diverse tasks: pressing buttons, toggling switches, lifting 5kg payloads, and picking up delicate soil samples. That meant designing an underactuated finger mechanism able to conform to irregular objects, integrating force feedback to avoid crushing delicate equipment, and achieving a high force-to-weight ratio for payload capacity.',
      approach: 'My approach centered the mechanical design on underactuation, letting a small number of actuators drive multiple degrees of freedom so the gripper could passively conform to unknown object geometries, while load cells layered on top provided the force feedback needed to handle rugged tools and fragile samples with the same hand.',
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
      overview: 'Manual entry of mill test data introduced delay and risk into quality control verification pipelines. The project needed automated extraction and formatting of mill test measurements, direct transactional integration with the enterprise SAP database, and audit-ready error logging and exception handling.',
      approach: 'I treated this as an end-to-end pipeline problem: automating data extraction at the source, integrating directly with SAP\'s transactional layer instead of relying on manual re-entry, and wrapping every step in structured logging so errors could be traced and audited rather than silently dropped.',
      results: 'Reduced manual processing time by over 80% while ensuring 100% data fidelity across manufacturing logs.'
    }
  }
];
