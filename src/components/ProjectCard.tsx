'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  techStack: string[];
}

export default function ProjectCard({ id, title, description, category, status, techStack }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${id}`}
      className="group block p-6 rounded-2xl bg-[#0C1210] hover:bg-[#131A17] border border-[rgba(120,150,130,0.15)] hover:border-[#5EA87B]/40 transition-all duration-300 relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-[#5EA87B] uppercase tracking-wider">{category}</span>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#18211D] text-[#7E8882] border border-[rgba(120,150,130,0.1)]">
          {status}
        </span>
      </div>

      <h3 className="text-xl font-bold text-[#F4F6F5] group-hover:text-[#8CC6A0] transition-colors flex items-center justify-between gap-2">
        <span>{title}</span>
        <ArrowUpRight className="w-5 h-5 text-[#7E8882] group-hover:text-[#8CC6A0] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </h3>

      <p className="mt-3 text-sm text-[#A2ADA6] leading-relaxed line-clamp-2">
        {description}
      </p>

      <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.05)] flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#131A17] text-[#A2ADA6] border border-[rgba(120,150,130,0.1)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
