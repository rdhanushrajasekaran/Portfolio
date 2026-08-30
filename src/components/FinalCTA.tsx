import { ArrowRight, FolderOpen } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <div className="reveal flex justify-center mb-6">
          <span className="section-label">Let's Build</span>
        </div>

        <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-ink-900 leading-tight">
          HAVE AN ENGINEERING PROBLEM
          <br />
          <span className="text-ink-400">THAT SOFTWARE CAN SOLVE?</span>
        </h2>

        <p className="reveal reveal-delay-2 mt-6 text-lg lg:text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
          Whether you are building a machine, improving a production process, creating a product or automating an internal workflow, let's discuss what you need.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary group"
          >
            <FolderOpen className="h-4 w-4" />
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
