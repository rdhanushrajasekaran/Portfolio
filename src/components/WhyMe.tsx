import { whyMe } from '@/data/technologies';

export default function WhyMe() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-600" />
            <span className="section-label">Why Work With Me</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
            WHY WORK WITH ME?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyMe.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 card-hover"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              {/* Number */}
              <span className="font-mono text-xs text-ink-200 font-semibold">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-lg font-bold text-ink-900 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">
                {item.description}
              </p>

              {/* Accent corner */}
              <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-accent-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal group relative overflow-hidden rounded-2xl bg-ink-900 p-7 flex flex-col justify-between min-h-[180px]">
            <div className="absolute inset-0 tech-grid-dark opacity-30" />
            <div className="relative">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Have a project in mind?
              </h3>
              <p className="mt-2.5 text-sm text-ink-300 leading-relaxed">
                Let's discuss what you're building.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 transition-all duration-200 hover:bg-accent-500 hover:text-white hover:gap-3"
            >
              Start a Project
              <span className="transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
