import { Factory, Cpu, Building2, Users, Package } from 'lucide-react';
import { whoIHelp } from '@/data/technologies';

const iconMap: Record<string, typeof Factory> = {
  Factory,
  Cpu,
  Building2,
  Users,
  Package,
};

export default function WhoIHelp() {
  return (
    <section className="relative py-20 lg:py-32 bg-ink-50/40">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-600" />
            <span className="section-label">Who I Help</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
            WHO I WORK WITH
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whoIHelp.map((item, i) => {
            const Icon = iconMap[item.icon] || Factory;
            return (
              <div
                key={item.title}
                className={`reveal group relative rounded-2xl border border-ink-100 bg-white p-7 card-hover ${
                  i === whoIHelp.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-100 text-ink-700 transition-all duration-300 group-hover:bg-ink-900 group-hover:text-white group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-ink-900 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-0.5 w-0 bg-accent-600 transition-all duration-500 group-hover:w-[calc(100%-3.5rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
