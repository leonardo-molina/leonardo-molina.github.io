'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import GridBackground from '@/components/GridBackground';
import EngineeringDashboard from '@/components/EngineeringDashboard';

export default function Home() {
  return (
    <div id="overview" className="relative pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <GridBackground />

      {/* HERO SECTION */}
      <section id="about" className="max-w-3xl">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-surface-200 text-surface-700 border border-surface-300 mb-6">
            Texas A&M University • B.S. Engineering Technology
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-none mb-6">
            Engineering Intelligent Systems.
          </h1>
          <p className="text-lg sm:text-xl text-surface-600 font-normal leading-relaxed mb-8">
            Mechatronics student at Texas A&M University focused on robotics, embedded systems, and autonomous systems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </motion.div>
      </section>

      {/* DASHBOARD */}
      <section className="mt-16">
        <EngineeringDashboard />
      </section>

    </div>
  );
}
