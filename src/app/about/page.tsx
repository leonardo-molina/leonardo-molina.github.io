'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">// BIOGRAPHY</span>
        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight mb-8">Engineering with Purpose.</h1>
        
        <div className="space-y-6 text-surface-700 leading-relaxed text-base sm:text-lg mb-16">
          <p>
            I am a Multidisciplinary Engineering Technology student at Texas A&M University (Minor in Embedded Systems Integration) focusing on the bridge between physical mechatronic design and real-time control software.
          </p>
          <p>
            My engineering philosophy focuses on systems-level precision: building reliable ROS 2 navigation pipelines, tuning closed-loop motor controllers, and designing robust physical hardware capable of executing complex physical manipulation.
          </p>
        </div>

        <h2 className="text-xl font-mono mb-6">// ACADEMIC_&_INDUSTRY_TIMELINE</h2>
        <div className="border-l border-surface-300 pl-6 space-y-8">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-mono text-surface-500 block mb-1">{item.period}</span>
              <h3 className="text-base font-medium">{item.role} @ {item.company}</h3>
              <p className="text-xs font-mono text-surface-600 mb-2">{item.location}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
