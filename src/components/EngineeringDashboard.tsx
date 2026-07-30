'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Degree Focus', value: 'Multidisciplinary Eng.' },
  { label: 'GPA', value: '3.3 / 4.0' },
  { label: 'Primary Stack', value: 'C++, ROS 2, Python' },
  { label: 'Hardware Focus', value: 'STM32, RPi, Sensors' },
];

export default function EngineeringDashboard() {
  return (
    <section className="my-16 border border-surface-300/60 rounded-lg p-6 bg-surface-50/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-300/40">
        <span className="font-mono text-xs text-surface-500 uppercase tracking-widest">
          // SYSTEM_TELEMETRY & STATUS
        </span>
        <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          AVAILABLE FOR SUMMER 2027 ROLES
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <span className="text-xs font-mono text-surface-500 mb-1">{stat.label}</span>
            <span className="text-sm md:text-base font-mono font-medium text-surface-900">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
