import { valueStrip } from '@/data/site';

export default function ValueStrip() {
  return (
    <section className="relative border-y border-ink-100 bg-ink-50/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ink-100">
          {valueStrip.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative px-5 py-7 lg:px-8 lg:py-8 transition-colors duration-300 hover:bg-white"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent-600 transition-all duration-500 group-hover:w-full" />
              <h3 className="font-mono text-xs font-semibold tracking-wider text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
