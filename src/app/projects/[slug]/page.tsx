import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-mono text-surface-500 hover:text-white mb-8">
        <ArrowLeft className="w-3 h-3" /> BACK_TO_PROJECTS
      </Link>

      <header className="mb-12">
        <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">{project.category}</span>
        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight mb-4">{project.title}</h1>
        <p className="text-lg text-surface-600 max-w-3xl">{project.fullDescription}</p>
      </header>

      {/* SPECIFICATIONS SIDEBAR / GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          {/* 01. SYSTEM OVERVIEW */}
<section>
  <h2 className="text-sm font-mono text-surface-500 uppercase tracking-wider mb-3">// 01. System Overview</h2>
  <p className="text-surface-800 leading-relaxed">{project.sections.problem}</p>
  
  {/* Photo Renderer linked to project.images.overview */}
  {project.images?.overview && (
    <figure className="mt-6 space-y-2">
      <img
        src={project.images.overview.src}
        alt={project.images.overview.caption || "System Overview"}
        className="w-full rounded-lg border border-surface-300/60 object-cover"
      />
      {project.images.overview.caption && (
        <figcaption className="text-xs font-mono text-surface-500 text-center">
          {project.images.overview.caption}
        </figcaption>
      )}
    </figure>
  )}
</section>

          <section>
            <h2 className="text-sm font-mono text-surface-500 uppercase tracking-wider mb-3">// 02. Software Architecture & State Management</h2>
            <ul className="list-disc list-inside space-y-2 text-surface-800">
              {project.sections.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </section>

          {project.sections.mechanicalDesign && (
            <section>
              <h2 className="text-sm font-mono text-surface-500 uppercase tracking-wider mb-3">// 03. Perception & Navigation Pipelines</h2>
              <p className="text-surface-800 leading-relaxed">{project.sections.mechanicalDesign}</p>
            </section>
          )}

          {project.sections.softwareArchitecture && (
            <section>
              <h2 className="text-sm font-mono text-surface-500 uppercase tracking-wider mb-3">// 04. Hardware & Mechanisms</h2>
              <p className="text-surface-800 leading-relaxed">{project.sections.softwareArchitecture}</p>
            </section>
          )}

          <section>
            <h2 className="text-sm font-mono text-surface-500 uppercase tracking-wider mb-3">// 05. Telemetry & Dashboard</h2>
            <p className="text-surface-800 leading-relaxed">{project.sections.results}</p>
          </section>
        </div>

        {/* SPECIFICATIONS METADATA PANEL */}
        <aside className="p-6 rounded-lg border border-surface-300/60 bg-surface-50/50 space-y-6 h-fit">
          <div>
            <span className="block text-xs font-mono text-surface-500">ROLE</span>
            <span className="text-sm font-medium">{project.specifications.role}</span>
          </div>
          <div>
            <span className="block text-xs font-mono text-surface-500">DURATION</span>
            <span className="text-sm font-medium">{project.specifications.duration}</span>
          </div>
          <div>
            <span className="block text-xs font-mono text-surface-500">HARDWARE</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.specifications.hardware.map((h) => (
                <span key={h} className="text-xs font-mono px-2 py-0.5 bg-surface-200 rounded">{h}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="block text-xs font-mono text-surface-500">SOFTWARE STACK</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.specifications.software.map((s) => (
                <span key={s} className="text-xs font-mono px-2 py-0.5 bg-surface-200 rounded">{s}</span>
              ))}
            </div>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline pt-2 border-t border-surface-200 w-full"
            >
              <Github className="w-4 h-4" /> REPOSITORY_SOURCE <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </aside>
      </div>
    </article>
  );
}
