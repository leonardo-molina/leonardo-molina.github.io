'use client';

import { skillsData } from '@/data/skills';

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">// TECHNICAL_CAPABILITIES</span>
      <h1 className="text-3xl sm:text-5xl font-medium tracking-tight mb-12">Skills & Engineering Stack</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((cat, idx) => (
          <div key={idx} className="p-6 rounded-lg border border-surface-300/60 bg-surface-50/50">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-6">// {cat.category}</h2>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="p-3 rounded bg-surface-100/50 border border-surface-200/60 hover:border-accent/40 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200 text-surface-600">{skill.level}</span>
                  </div>
                  <p className="text-xs text-surface-500">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
