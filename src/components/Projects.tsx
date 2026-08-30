import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-600" />
            <span className="section-label">Projects</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
            SELECTED ENGINEERING PROJECTS
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink-500 leading-relaxed">
            Examples of software and engineering systems involving automation, machine integration, data and intelligent applications.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="reveal card-hover group relative overflow-hidden rounded-2xl border border-ink-100 bg-white"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-accent-500 to-accent-700 transition-all duration-500 group-hover:w-full" />

      <div className="grid lg:grid-cols-12 gap-0">
        {/* Visual side */}
        <div className={`relative lg:col-span-5 overflow-hidden bg-gradient-to-br ${isEven ? 'from-ink-900 to-ink-800' : 'from-ink-800 to-ink-700'} p-8 lg:p-10 min-h-[280px] lg:min-h-[340px] flex flex-col justify-between`}>
          <div className="absolute inset-0 tech-grid-dark opacity-40" />
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent-500/10 blur-3xl" />

          {/* Project number */}
          <div className="relative">
            <span className="font-mono text-6xl lg:text-7xl font-bold text-white/10 transition-all duration-500 group-hover:text-white/20">
              {project.number}
            </span>
          </div>

          {/* Mini flow diagram */}
          <div className="relative flex flex-wrap items-center gap-2">
            {project.flow.map((node, ni) => (
              <div key={node.label} className="flex items-center gap-2">
                <div className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm transition-all duration-300 group-hover:border-accent-400/30">
                  <div className="font-mono text-[10px] font-semibold tracking-wider text-white/80">
                    {node.label}
                  </div>
                  {node.sub && (
                    <div className="font-mono text-[9px] text-white/40 mt-0.5">
                      {node.sub}
                    </div>
                  )}
                </div>
                {ni < project.flow.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content side */}
        <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Category */}
            <span className="font-mono text-xs font-semibold tracking-wider text-accent-600">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="mt-2.5 text-2xl lg:text-3xl font-bold tracking-tight text-ink-900">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-1 text-base text-ink-400 font-medium">
                {project.subtitle}
              </p>
            )}

            {/* Short description */}
            <p className="mt-4 text-base text-ink-600 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View project button */}
          <div className="mt-6 flex items-center gap-2">
            <button
              onClick={() => window.location.assign(`#/project/${project.slug}`)}
              className="group/btn inline-flex items-center gap-2 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-900 transition-all duration-200 hover:border-ink-900 hover:bg-ink-900 hover:text-white"
            >
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>

          {/* Confidentiality note */}
          <p className="mt-4 text-xs text-ink-400 italic leading-relaxed">
            {project.confidentialityNote}
          </p>
        </div>
      </div>
    </div>
  );
}
