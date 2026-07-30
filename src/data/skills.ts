import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Robotics & Controls',
    skills: [
      { name: 'ROS / ROS 2', description: 'Node architecture, pub/sub, custom actions, Nav2 stack integration.', level: 'Expert' },
      { name: 'Kinematics & Motion Planning', description: 'Differential drive, forward/inverse kinematics, path generation.', level: 'Advanced' },
      { name: 'Closed-Loop PID Tuning', description: 'Multi-loop feedback control, optical encoder tuning, state estimation.', level: 'Expert' },
      { name: 'Sensor Fusion', description: 'LiDAR, IMU, and camera telemetry integration via EKF.', level: 'Advanced' }
    ]
  },
  {
    category: 'Embedded Systems',
    skills: [
      { name: 'Microcontrollers (C/C++)', description: 'STM32, Arduino, ESP32, bare-metal and RTOS fundamentals.', level: 'Expert' },
      { name: 'SBCs & Real-Time Linux', description: 'Raspberry Pi, systemd service deployment, custom kernel modules.', level: 'Advanced' },
      { name: 'Communication Protocols', description: 'Hardware-level I2C, SPI, UART, CAN bus, PWM signal generation.', level: 'Expert' }
    ]
  },
  {
    category: 'Perception & Software',
    skills: [
      { name: 'Python', description: 'Scientific computing, automation, data pipelines, script optimization.', level: 'Expert' },
      { name: 'Computer Vision (OpenCV)', description: 'HSV thresholding, contour detection, visual trajectory tracking.', level: 'Advanced' },
      { name: 'Machine Learning', description: 'TensorFlow baseline models, hyperparameter optimization, convergence metrics.', level: 'Proficient' }
    ]
  },
  {
    category: 'CAD & Hardware Prototyping',
    skills: [
      { name: '3D CAD Modeling', description: 'SolidWorks, mechanical assembly tolerances, structural packaging.', level: 'Advanced' },
      { name: 'Electromechanical Design', description: 'Actuator sizing, motor drivers (H-Bridges), power distribution.', level: 'Expert' }
    ]
  }
];
