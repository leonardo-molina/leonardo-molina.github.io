import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Mechanical Design & Fabrication',
    skills: [
      { name: '3D CAD & FEA (SolidWorks)', description: 'Full assembly modeling, interference checking, and FEA-driven material selection across the URC end-effector and MIRAGE rover chassis/suspension.', level: 'Expert' },
      { name: 'Transmission & Linkage Design', description: 'Leadscrew/nut transmissions and toggle linkages sized analytically against calculated thrust, torque, and stroke speed.', level: 'Expert' },
      { name: 'Actuator & Drivetrain Integration', description: 'Selecting and packaging brushless actuators (NEO Vortex, CubeMars-MAB) with cycloidal gearboxes and bearings for driving, steering, and manipulation.', level: 'Advanced' },
      { name: 'Structural Materials Selection', description: '6061-T6 aluminum vs. carbon-fiber tube trade-offs for high-load chassis members versus weight-critical suspension legs.', level: 'Advanced' }
    ]
  },
  {
    category: 'Embedded Systems & Controls',
    skills: [
      { name: 'Microcontrollers & SBCs', description: 'Raspberry Pi-based real-time sensor polling and actuator control for autonomous navigation and manipulation.', level: 'Expert' },
      { name: 'Communication Protocols', description: 'Hardware-level I2C multiplexing (TCA9548A), SPI, UART, CAN bus, and PWM signal generation.', level: 'Expert' },
      { name: 'Closed-Loop Control', description: 'PID controller design for motor velocity and position control, and current-based load estimation for contact sensing.', level: 'Advanced' },
      { name: 'Sensor Integration', description: 'Time-of-flight, LiDAR, color, and encoder sensors fused into navigation, mapping, and object-classification pipelines.', level: 'Advanced' }
    ]
  },
  {
    category: 'Robotics Software & Perception',
    skills: [
      { name: 'Python', description: 'Multi-threaded control architectures, hardware driver classes, and autonomous state machines across four robotics projects.', level: 'Expert' },
      { name: 'ROS 2', description: 'Node architecture and CAN-integrated actuator command exposure for rover manipulator subsystems.', level: 'Advanced' },
      { name: 'Computer Vision (OpenCV)', description: 'HSV color-space thresholding and contour detection for real-time target identification and visual servoing.', level: 'Advanced' },
      { name: 'Mapping & Navigation', description: 'LiDAR ray-casting occupancy grids and multi-phase autonomous navigation: wall-following, exploration, and target retrieval.', level: 'Advanced' }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git / GitHub', description: 'Team repository structure and documentation for a 60-member, multi-subteam engineering organization.', level: 'Advanced' },
      { name: 'Linux', description: 'Raspberry Pi deployment and background service management for always-on robotics control loops.', level: 'Advanced' },
      { name: 'Flask', description: 'Lightweight web dashboards for live telemetry: occupancy grids, robot pose, and detected targets.', level: 'Proficient' },
      { name: 'Machine Learning (TensorFlow)', description: 'Baseline model training, hyperparameter tuning, and convergence evaluation from AI/ML research work.', level: 'Proficient' }
    ]
  }
];
