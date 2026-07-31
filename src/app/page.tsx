'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import GridBackground from '@/components/GridBackground';
import EngineeringDashboard from '@/components/EngineeringDashboard';
import { projectsData } from '@/data/projects';

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div id="overview" className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <GridBackground />

      {/* HERO SECTION - Initial motion.div removed to rely on template.tsx */}
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

        {/* BUTTON ACTIONS - Kept motion.div for the delayed stagger effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            View Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface-100 hover:bg-surface-200 border border-surface-300 px-4 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            <FileText className="w-4 h-4 text-surface-500" /> Resume
          </a>
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://linkedin.com/in/leonardo-molina"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-surface-500 hover:text-white border border-surface-300 rounded-md hover:bg-surface-200 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/leonardo-molina"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-surface-500 hover:text-white border border-surface-300 rounded-md hover:bg-surface-200 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* DASHBOARD */}
      <section id="skills" className="mt-20 pt-10">
        <EngineeringDashboard />
      </section>

      {/* FEATURED PROJECTS CASE STUDIES */}
      <section id="projects" className="mt-20 pt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-medium font-mono">Selected Engineering Projects</h2>
          <Link href="/projects" className="text-xs font-mono text-accent hover:underline flex items-center gap-1">
            ALL_PROJECTS <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group p-6 rounded-lg border border-surface-300/60 bg-surface-50/40 hover:bg-surface-100/80 hover:border-surface-400 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-accent">{project.category}</span>
                <span className="text-xs font-mono text-surface-500">{project.specifications.status}</span>
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-surface-600 mb-6 line-clamp-2">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.specifications.hardware.slice(0, 3).map((item) => (
                  <span key={item} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200/60 text-surface-600">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* EXPERIENCE */}
      <section id="experience" className="mt-20 pt-20 pb-20">
        <h2 className="text-xl font-medium font-mono mb-8">Professional Experience</h2>
        <div className="p-6 rounded-lg border border-surface-300/60 bg-surface-50/40 text-surface-500 text-sm font-mono">
           // SYSTEM_LOG: Experience data compiling...
        </div>
      </section>

    </div>
  );
}
