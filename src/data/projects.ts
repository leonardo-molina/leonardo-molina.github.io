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
    resultsVideo: {
      src: '/Full_working.mp4',
      caption: 'Video: Full autonomous search and rescue mission run.'
    },
    sections: {
      overview: 'I engineered the Helen-Searcher, an autonomous SCUTTLE robot designed to execute search and rescue missions within a simulated environment. The system was built to operate completely without user intervention, relying on real-time decision-making to navigate, avoid obstacles, map its surroundings, and secure designated targets. The primary objective was to scan the environment to locate and retrieve red targets (representing survivors) while ignoring blue targets. To handle the complex stream of sensory data, I developed a modular, multi-threaded software architecture in Python running on a Raspberry Pi 4, encapsulating navigation, mapping, detection, safe-zone control, and telemetry into dedicated background threads coordinated through a shared, lock-protected RobotState store.',
      approach: 'My approach split the mission into three coordinated engineering efforts. On the hardware side, I designed a custom gripper mechanism built to reliably secure lightweight, smooth-surfaced targets. On the software side, I built a perception and navigation pipeline that fused LiDAR-based mapping with HSV color-based vision to drive autonomous exploration and target retrieval. Tying it together was a thread-safe state layer that let every subsystem read and write a single source of truth in real time — the same layer that powers the live monitoring dashboard described in the results below.',
      hardware: 'For the physical manipulation of targets, I designed a 3D-printed rack-and-pinion style parallel gripper, driven by a TowerPro MG995 servo motor. The mechanism included 11 components and utilized a 2:1 gear reduction train. To solve payload slipping caused by low mass and smooth surfaces, I applied a surface treatment to the gripping faces to create a rough texture, significantly increasing static friction. Power was distributed through a multi-rail network converting a 12V LiFePO4 battery to a regulated 5V/3A rail for compute, with isolated supply lines protecting the motor controllers.',
      software: 'Spatial awareness relied on a combination of 2D LiDAR and computer vision. I integrated a SICK TiM561 LiDAR sensor and applied a ray-casting technique based on the Bresenham line algorithm to build a dynamic 200x200 cell occupancy grid, while an HP Webcam W200 processed video at 5 fps, converting frames to HSV color space with dual-range masks to isolate red pixels. On top of this perception stack ran a multi-phase navigation algorithm: the robot began with LiDAR-guided wall following, transitioned into an exploration mode to map the inner environment, and finally handed off to visual servoing to keep the red block centered in frame during retrieval.',
      results: 'To monitor the mission in real-time, I built a Flask-based web server hosted directly on the Raspberry Pi. The dashboard featured a JavaScript client that polled a JSON snapshot of the shared state every second, providing a live top-down view of the generated occupancy grid, the robot heading, and the location of confirmed targets.'
    }
  },
  {
    slug: 'vision-guided-amr',
    title: 'Vision-Guided Autonomous Mobile Robot',
    shortDescription: 'Maze-navigating mobile manipulator combining a ToF-guided driving base with a color-sorting robotic hand, controlled by a custom Raspberry Pi/Python software stack.',
    fullDescription: 'Robotic Systems Design capstone project pairing an autonomous driving base with a humanoid gripping hand to navigate a maze, pick up a block, and sort it by color into a matching shelf.',
    category: 'Controls',
    featured: true,
    specifications: {
      duration: '4 Weeks',
      role: 'Software Lead',
      teamSize: '3 Engineers',
      languages: ['Python'],
      hardware: ['Raspberry Pi', 'VL53L4CD ToF Sensors (x3)', 'APDS9960 Color Sensor', 'TCA9548A I2C Multiplexer', 'PWM DC Motors', 'Hobby Servos', 'REV Robotics Control Hub'],
      software: ['Adafruit Blinka/CircuitPython', 'I2C/Busio', 'Custom PID Controller', 'REV Blocks (FTC)'],
      status: 'Completed'
    },
    images: {
      overview: {
        src: '/MazeHandFullAssembly.jpg',
        caption: 'Figure 1: The full driving base and hand assembly, wired into the Raspberry Pi.'
      },
      hardware: {
        src: '/MazeHandFrontDetail.jpg',
        caption: 'Figure 2: Front detail of the tendon-driven hand, showing the elbow joint and finger pulleys.'
      },
      software: [
        {
          src: '/AutoBotFlowchart.jpg',
          caption: 'Figure 3: AutoBot.py — the autonomous maze-navigation and block-sorting state flow.'
        },
        {
          src: '/ManuBotFlowchart.jpg',
          caption: 'Figure 4: ManuBot.py — the keyboard-teleop mode used to validate hardware and tune calibration.'
        }
      ],
      results: {
        src: '/MazeHandBlockGrip.jpg',
        caption: 'Figure 5: The hand gripping a test block ahead of a shelf-delivery run.'
      }
    },
    sections: {
      overview: 'For my Robotic Systems Design capstone, our three-person team combined two independently built subsystems, an autonomous driving base and a human-like gripping hand, into a single mobile manipulator. The target task mirrored a real industrial pick-and-place scenario: drive through a maze without operator input, pick up a block off the floor, identify its color, and deposit it in the shelf assigned to that color. As the team\'s software lead, I owned the Raspberry Pi control stack that turned the combined hardware into a working system, reading three time-of-flight distance sensors and a color sensor over I2C, driving the base and elbow motors, and sequencing the full pickup-and-delivery task end to end.',
      approach: 'I split the control software into two programs built on the same low-level drivers so that fixes made in one carried straight over to the other. ManuBot.py gave the team keyboard-driven teleoperation with a background thread continuously polling the ToF and color sensors, which let us validate wiring, tune servo ranges, and shake out mechanical issues before trusting the robot to run unsupervised. AutoBot.py reused those same PWM_Motor, Servo, and sensor wrapper classes to run the task autonomously: comparing the three ToF readings to steer around walls while exploring the maze, stopping once the front sensor confirmed a block was within pickup range, classifying the block\'s color, and driving the elbow to the shelf height mapped to that color before releasing it.',
      hardware: 'The physical platform paired a four-wheel driving base with a multi-servo hand mounted on an elbow joint, giving the arm the reach it needed to pick a block off the floor and later present it at shelf height. I helped assemble the driving base and wire it into the Raspberry Pi and REV Robotics electronics, and worked with the mechanical design to add the elbow joint that let one hand serve both the pickup and delivery steps. Three VL53L4CD time-of-flight sensors (front, left, right) supplied wall-distance and block-distance readings, and an APDS9960 sensor supplied the RGB channels used to classify each block, all sharing a single I2C bus through a TCA9548A multiplexer.',
      software: 'On the Raspberry Pi, I wrapped the low-level PWM motor and servo control in small driver classes so the rest of the code stayed hardware-agnostic, and brought all three ToF sensors and the color sensor onto one I2C bus via the TCA9548A multiplexer using Adafruit\'s Blinka/CircuitPython libraries. Maze navigation ran as a reactive loop, comparing left and right ToF distances to pick a turn direction whenever the front sensor tripped, then driving straight once the path cleared. Block sorting compared the raw R/G/B channels from the color sensor to classify the block, looked up its target shelf height, and drove the elbow motor in a distance-feedback loop until it settled within tolerance of that height, at which point the fingers opened to release the block. I also stood up a PID_Controller class alongside the reactive logic as a first step toward closed-loop positioning as the control system matured.',
      results: 'The team produced a hand that decently mimicked the desired degrees of freedom, and testing surfaced a concrete mechanical lesson: orienting the thumb and side finger perpendicular to the other fingers gripped test blocks far more reliably than our first layout. On the control side, both software paths worked as intended, the REV Control Hub and gamepad build was tuned well enough to manually drive the maze and place blocks, and the Raspberry Pi stack (ManuBot.py and AutoBot.py) was tested and debugged on the final assembly, successfully chaining maze navigation, color detection, block pickup, and shelf delivery into one run.'
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
      hardware: ['NEO Vortex Brushless Motor', '4-Start Leadscrew (Stainless Steel)', 'Custom Gearboxes', 'Load Cells'],
      software: ['SolidWorks', 'ROS 2', 'CAN bus'],
      status: 'Maintained'
    },
    images: {
      overview: {
        src: '/End Effector.jpg',
        caption: 'Figure 1: CAD rendering of the symmetrical two-finger end-effector and central leadscrew drive.'
      },
      hardware: {
        src: '/Inner Components of End Effector.jpg',
        caption: 'Figure 2: Section view of the leadscrew, nut, and mirrored toggle-linkage transmission.'
      }
    },
    sections: {
      overview: 'The University Rover Challenge requires an end-effector capable of handling diverse tasks: pressing buttons, toggling switches, lifting sample containers up to 5kg, and manipulating delicate soil samples, all within the size and power budget of a competition rover arm. I designed a symmetrical two-finger end-effector built around a single NEO Vortex brushless motor driving a 150mm, 4-start stainless steel leadscrew. Instead of actuating each finger independently, a central leadscrew nut converts high-speed rotary motion into synchronized linear travel, driving a pair of mirrored toggle-linkage arms that close the jaws in unison. This single-actuator, symmetric-linkage layout keeps the mechanism light and mechanically simple to control while still meeting the competition\'s mixed requirements for speed, reach, and clamping force.',
      approach: 'My approach split the design problem into a transmission question and a linkage-geometry question, and I worked both out analytically before committing to manufactured parts. For the transmission, I chose a 4-start leadscrew (2mm pitch x 4 starts = 8mm lead) specifically to trade some mechanical efficiency for a large lead angle (17.66 degrees) and correspondingly high linear speed, since the NEO Vortex\'s 6784 RPM free speed is only useful if the screw can convert it into fast jaw travel. For the linkage, I drew on the underactuated-gripper literature, including Li et al.\'s RSS 2024 paper on the GL-Robot force-sensing gripper, to use a toggle-style push-rod mechanism whose mechanical advantage increases as the arms approach a horizontal, fully-closed orientation. That geometry gives the effector fast, low-force travel while the jaws are open and approaching an object, and high clamping force exactly where it is needed, at final contact, without a second actuator or a nonlinear control scheme to get there.',
      hardware: 'The transmission core is a 150mm, 4-start stainless steel leadscrew (8mm lead, 8mm mean diameter) turned directly by a NEO Vortex brushless motor. A single nut riding on the screw is pinned to two mirrored linkage arms, so one actuator and one leadscrew nut drive both fingers symmetrically and keep them mechanically synchronized, removing any possibility of the two sides drifting out of alignment the way independently-actuated fingers can. At a stall torque of 3.6 Nm and an assumed 0.35 mechanical efficiency for the stainless-steel-on-nut interface, the screw produces roughly 989.6 N (approximately 222 lbf) of peak axial thrust at the nut, which the toggle linkage further amplifies into clamping force as the arms swing toward the horizontal, fully-closed position. The full assembly, including the motor mount, leadscrew housing, and linkage pivots, was modeled in SolidWorks and checked for interference before the pivot pins and links were sized against the calculated thrust.',
      software: 'Because the end-effector is one subsystem of a larger rover manipulator, motor control runs over the rover\'s CAN bus alongside the arm\'s other joints, with the NEO Vortex commanded through its motor controller rather than a standalone driver board. At the higher level, effector state (open, closed, target position) is exposed to the rover\'s ROS 2 stack so operators can command the gripper the same way they command the rest of the arm. Motor current telemetry is available for coarse contact and load estimation, an approach directly inspired by the indirect, sensorless force-sensing strategy in the GL-Robot paper, which infers contact from current fluctuations rather than a dedicated force sensor. With a calculated positional resolution of 1.1 micrometers at the leadscrew nut, the transmission itself provides plenty of headroom to support tighter closed-loop position control if finer manipulation is needed for delicate samples.',
      results: 'Working through the leadscrew kinematics analytically produced a clear performance envelope for the effector before any hardware was cut: a maximum linear speed of approximately 904.56 mm/s at the nut, a full 150mm stroke in about 0.166 seconds, and a peak axial thrust of approximately 989.6 N feeding into the toggle linkage\'s mechanical advantage. Those figures gave the team confidence that a single high-speed motor could meet the URC\'s competing demands for fast repositioning and firm clamping without oversizing the actuator. The design subsequently passed field qualification testing, demonstrating reliable grip adaptability across the varied surface geometries and task fixtures used in competition.'
    }
  },
  {
    slug: 'mirage-rover-chassis-suspension',
    title: 'MIRAGE Rover Chassis & Suspension System',
    shortDescription: 'Rocker-style chassis and independently steered suspension for the SOMTECH MIRAGE Mars rover, redesigned to fix wheel deflection and add per-wheel crab steering.',
    fullDescription: 'Mechanical Lead for Texas A&M SOMTECH\'s University Rover Challenge team, directing the structural redesign of the MIRAGE rover\'s chassis, suspension, and wheel modules.',
    category: 'Robotics',
    featured: true,
    specifications: {
      duration: 'Ongoing',
      role: 'Mechanical Lead',
      teamSize: '12 Engineers',
      languages: [],
      hardware: ['CubeMars-MAB AK10-9 Driving Actuators', 'CubeMars-MAB Crab-Steering Actuators', 'Thriftybot Cycloidal Gearboxes (23:1)', 'Carbon-Fiber Tube Suspension Legs', '6061-T6 Aluminum Chassis', 'Thrust Needle Roller Bearings'],
      software: ['SolidWorks', 'Finite Element Analysis (FEA)'],
      status: 'Maintained'
    },
    images: {
      overview: {
        src: '/REVONICChassisAssembly.jpg',
        caption: 'Figure 1: REVONIC-EVA2, the second-generation MIRAGE rover built on the redesigned chassis and suspension.'
      },
      hardware: {
        src: '/SuspensionCADAssembly.png',
        caption: 'Figure 2: CAD assembly of the rocker-style suspension, rear differential pivot, and four wheel corner mounts.'
      }
    },
    sections: {
      overview: 'As Mechanical Lead for Texas A&M\'s SOMTECH MIRAGE rover team, I directed the Chassis and Suspension sub-groups responsible for the structural platform underneath every other rover subsystem, the frame, the four-wheel suspension, and the wheel modules that carry the electrical, software, and science payloads into competition. For the 2025-26 University Rover Challenge cycle, our second-generation rover, REVONIC-EVA2, needed a suspension redesign to correct deformation and wheel-deflection issues from the prior season, while adding independent crab-steering at each corner for tighter maneuvering on rough terrain.',
      approach: 'I ran the sub-team through a research-to-fabrication pipeline for each major structural component, chassis, suspension, and wheel modules, moving from material research and simulation, to design selection and CAD modeling, to FEA verification, fabrication, and physical testing, so every structural decision was checked analytically before it was cut in metal. That process shaped the season\'s two biggest changes: relocating the central differential pivot to the rear of the chassis for better pivoting and traction, and reworking the wheel corners to support independent crab steering instead of a fixed-axle layout.',
      hardware: 'The chassis and suspension mix materials by load path: 6061-T6 aluminum for the high-load chassis rails and axle mounts, and carbon-fiber tube for the four suspension legs, trading a small amount of stiffness for the weight that solid aluminum legs would have added on top of the rover\'s arm, science, and compute payload. Each leg terminates in a wheel corner module built around a CubeMars-MAB AK10-9 driving actuator paired with a Thriftybot 23:1 cycloidal gearbox for propulsion, plus a second CubeMars-MAB actuator dedicated to steering that wheel independently of the other three. The central differential pivot, relocated to the rear of the chassis for this generation, rides on thrust needle roller bearings sized to carry the axial load transferred through the rocker-style suspension as the rover articulates over rocks and uneven ground.',
      results: 'The redesigned suspension and chassis passed the sub-team\'s structural and mobility testing, load, vibration, and terrain trials, and REVONIC-EVA2 was assembled and driving on the new platform by August 2025 ahead of the 2025-26 competition season. Relocating the differential to the rear measurably improved the rover\'s pivoting and traversability across rough terrain compared to the previous chassis generation, and the reinforced axle assemblies addressed the deformation and wheel-deflection issues that had limited the earlier rover\'s reliability.'
    }
  }
];
