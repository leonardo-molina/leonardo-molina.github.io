'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Image from 'next/image';
import GridBackground from '@/components/GridBackground';

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

      {/* BIOGRAPHY & HEADSHOT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-24 mb-24">

        {/* Left Column: Text (Takes up 7 out of 12 columns on large screens) */}
        <div className="lg:col-span-7">
          <div className="text-xs font-mono text-surface-500 tracking-widest mb-4">
            // BIOGRAPHY
          </div>
          <div className="space-y-6 text-surface-600 text-lg leading-relaxed">
            <p>
              I'm a Mechatronics Engineering Technology student at Texas A&M University
              pursuing a minor in Embedded Systems Integration. My interests are in robotics,
              embedded systems, control systems, autonomous systems, and industrial automation.
            </p>
            <p>
              I enjoy building projects that bring together software and hardware—from autonomous
              robots and embedded controllers to mechanical design and automation tools. I'm especially
              interested in understanding how individual components work together to create reliable,
              real-world engineering systems.
            </p>
          </div>
        </div>

        {/* Right Column: Integrated Headshot (Takes up 5 out of 12 columns) */}
        <div className="lg:col-span-5 relative group">
          {/* Decorative wireframe offset box */}
          <div className="absolute inset-0 border border-accent/30 translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />

          <div className="relative rounded-xl overflow-hidden border border-surface-300/20 bg-surface-50">
            {/* Color grading overlay that fades on hover */}
            <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />

            <Image
              src="/headshot.jpg"
              alt="Leonardo Molina"
              width={600}
              height={700}
              className="w-full h-auto object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>

      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-3xl">
        <div className="text-xs font-mono text-surface-500 tracking-widest mb-10">
          // ACADEMIC_&_INDUSTRY_TIMELINE
        </div>

        <div className="space-y-10 border-l border-surface-300/30 ml-2 pl-6">

          {/* Tex-Tube Steel */}
          <div className="relative">
            <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-accent" />
            <div className="text-xs font-mono text-surface-500 mb-1">May 2026 – August 2026</div>
            <h3 className="text-lg font-medium text-surface-900">Project Engineering Intern @ Tex-Tube Steel</h3>
            <div className="text-sm text-surface-500 mt-1">Houston, TX</div>
          </div>

          {/* SOMTECH Robotics */}
          <div className="relative">
            <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-accent" />
            <div className="text-xs font-mono text-surface-500 mb-1">September 2024 – Present</div>
            <h3 className="text-lg font-medium text-surface-900">Mechanical Lead / End Effector Lead @ SOMTECH Robotics</h3>
            <div className="text-sm text-surface-500 mt-1">College Station, TX</div>
          </div>

          {/* Texas A&M at Qatar */}
          <div className="relative">
            <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full border border-accent bg-surface-50" />
            <div className="text-xs font-mono text-surface-500 mb-1">May 2023 – July 2023</div>
            <h3 className="text-lg font-medium text-surface-900">AI/ML Research Intern @ Texas A&M University at Qatar</h3>
            <div className="text-sm text-surface-500 mt-1">Al Rayyan, Qatar</div>
          </div>

        </div>
      </section>

    </div>
  );
}
