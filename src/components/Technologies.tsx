import { technologies } from '@/data/technologies';

const categoryIcons: Record<string, string> = {
  programming: '</>',
  desktop: '▣',
  industrial: '⚙',
  databases: '🗄',
  ai: '✦',
  web: '🌐',
  tools: '🔧',
};

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-600" />
            <span className="section-label">Technologies</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
            TECHNOLOGIES I WORK WITH
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink-500 leading-relaxed">
            A focused toolkit spanning application development, industrial communication, databases, AI and web.
          </p>
        </div>

        {/* Tech categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((cat, i) => (
            <div
              key={cat.id}
              className="reveal group rounded-2xl border border-ink-100 bg-white p-6 card-hover"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-ink-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 font-mono text-base text-white transition-all duration-300 group-hover:bg-accent-600">
                  {categoryIcons[cat.id] || '•'}
                </span>
                <h3 className="text-base font-bold text-ink-900 tracking-tight">
                  {cat.label}
                </h3>
              </div>

              {/* Tech items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="chip"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
