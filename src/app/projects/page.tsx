'use client';

import { projectsData } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">// PORTFOLIO</span>
      <h1 className="text-3xl sm:text-5xl font-medium tracking-tight mb-12">Engineering Case Studies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group p-6 rounded-lg border border-surface-300/60 bg-surface-50/40 hover:bg-surface-100/80 hover:border-surface-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-accent">{project.category}</span>
                <span className="text-xs font-mono text-surface-500">{project.specifications.status}</span>
              </div>
              <h2 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-surface-600 mb-6">{project.shortDescription}</p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-surface-200/50 text-xs font-mono text-surface-500">
              <span>{project.specifications.duration}</span>
              <span className="inline-flex items-center gap-1 text-accent group-hover:translate-x-1 transition-transform">
                READ_CASE_STUDY <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
