import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-ink-50/40">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-600" />
            <span className="section-label">Services</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900">
            WHAT I BUILD
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink-500 leading-relaxed">
            Custom software designed around machines, products and real operational processes.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="reveal card-hover group relative rounded-2xl border border-ink-100 bg-white p-7"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-5 font-mono text-xs text-ink-200 font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-all duration-300 group-hover:bg-accent-600 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-ink-900 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-ink-600"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink-400 transition-colors group-hover:text-accent-600">
                  <span className="font-mono text-xs tracking-wider">EXPLORE</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
