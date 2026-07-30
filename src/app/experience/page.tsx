'use client';

import { experienceData } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">// CAREER_HISTORY</span>
      <h1 className="text-3xl sm:text-5xl font-medium tracking-tight mb-12">Professional & Leadership Experience</h1>

      <div className="space-y-12">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="p-6 rounded-lg border border-surface-300/60 bg-surface-50/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-xl font-medium">{exp.role}</h2>
                <span className="text-sm text-accent font-mono">{exp.company}</span>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-surface-500">
                <div>{exp.period}</div>
                <div>{exp.location}</div>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-2 text-sm text-surface-700 mb-6">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="leading-relaxed">{bullet}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-200/50">
              {exp.technologies.map((tech) => (
                <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200 text-surface-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
