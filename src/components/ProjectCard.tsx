'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col justify-between h-full p-6 rounded-lg border border-surface-300/60 bg-surface-50/40 hover:bg-surface-100/80 hover:border-surface-400 transition-all duration-300"
      >
        <div>
          {/* TOP METADATA */}
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200 text-surface-500">
              {project.specifications.status}
            </span>
          </div>

          {/* TITLE & DESCRIPTION */}
          <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
            {project.title}
          </h3>
          <p className="text-sm text-surface-600 mb-6 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* HARDWARE / TECH TAGS */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.specifications.hardware.slice(0, 3).map((item) => (
              <span
                key={item}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200/60 text-surface-600"
              >
                {item}
              </span>
            ))}
            {project.specifications.software.slice(0, 2).map((item) => (
              <span
                key={item}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200/30 text-surface-500"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CARD FOOTER */}
          <div className="flex items-center justify-between pt-4 border-t border-surface-200/40 text-xs font-mono text-surface-500">
            <span>{project.specifications.duration}</span>
            <span className="inline-flex items-center gap-1 text-accent font-medium group-hover:translate-x-1 transition-transform">
              CASE_STUDY <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
