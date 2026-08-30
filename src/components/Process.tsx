import { Search, BarChart3, PenRuler, Code2, TestTube, PackageCheck } from 'lucide-react';
import { processSteps } from '@/data/technologies';

const icons = [Search, BarChart3, PenRuler, Code2, TestTube, PackageCheck];

export default function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-32 bg-ink-50/40">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-600" />
            <span className="section-label">Process</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
            HOW I APPROACH A PROJECT
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink-500 leading-relaxed">
            A structured engineering workflow from understanding the problem to delivering the solution.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {processSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={step.number}
                  className="reveal group relative"
                  style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
                >
                  <div className="relative rounded-2xl border border-ink-100 bg-white p-7 card-hover">
                    {/* Step number + icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-all duration-300 group-hover:bg-accent-600 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-3xl font-bold text-ink-100 transition-colors duration-300 group-hover:text-accent-100">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-ink-900 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connector dot for desktop */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-12 z-10">
                        <div className="h-2 w-2 rounded-full bg-accent-500 ring-4 ring-ink-50" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
