import { useEffect, useState } from 'react';
import { ArrowRight, Cpu, Database, LayoutDashboard, Monitor, Workflow } from 'lucide-react';
import { site, heroTech } from '@/data/site';

const flowNodes = [
  { label: 'MACHINE', sub: 'PLC', icon: Cpu },
  { label: 'PROTOCOL', sub: 'Modbus', icon: Workflow },
  { label: 'CUSTOM SOFTWARE', sub: 'C# / .NET', icon: Monitor },
  { label: 'DATABASE', sub: 'SQL Server', icon: Database },
  { label: 'DASHBOARD', sub: 'Monitoring', icon: LayoutDashboard },
];

const liveMetrics = [
  { label: 'STATUS', value: 'RUNNING', color: 'text-emerald-600' },
  { label: 'PLC SIGNALS', value: 'ACTIVE', color: 'text-accent-600' },
  { label: 'PRODUCTION', value: '— —', color: 'text-ink-500' },
  { label: 'DATA', value: 'CONNECTED', color: 'text-emerald-600' },
];

export default function Hero() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % flowNodes.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />

      {/* Decorative accent shapes */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-ink-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="flex flex-col">
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-600" />
              <span className="section-label">{site.role}</span>
            </div>

            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-ink-900">
              {site.heroHeadline1}
              <br />
              <span className="text-ink-400">{site.heroHeadline2}</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-6 text-lg lg:text-xl font-medium text-ink-700 leading-relaxed max-w-xl">
              {site.heroSubtext}
            </p>

            <p className="reveal reveal-delay-3 mt-4 text-base text-ink-500 leading-relaxed max-w-xl">
              {site.heroParagraph}
            </p>

            <div className="reveal reveal-delay-4 mt-8 flex flex-wrap gap-4">
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
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Tech indicators */}
            <div className="reveal reveal-delay-5 mt-10">
              <div className="flex flex-wrap gap-2">
                {heroTech.map((tech, i) => (
                  <span
                    key={tech}
                    className="chip"
                    style={{ animation: `fadeIn 0.5s ease-out ${0.6 + i * 0.08}s both` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: industrial system architecture visual */}
          <div className="reveal reveal-delay-3 relative">
            <div className="relative rounded-2xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white p-6 lg:p-8 shadow-xl shadow-ink-900/5">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-xs text-ink-400 tracking-wider">
                  SYSTEM_ARCHITECTURE
                </span>
              </div>

              {/* Live metrics bar */}
              <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {liveMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-ink-100 bg-white px-3 py-2.5"
                  >
                    <div className="font-mono text-[10px] tracking-wider text-ink-400">
                      {m.label}
                    </div>
                    <div className={`mt-1 font-mono text-xs font-semibold ${m.color} flex items-center gap-1.5`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current animate-blink" />
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Flow diagram */}
              <div className="flex flex-col gap-2">
                {flowNodes.map((node, i) => {
                  const Icon = node.icon;
                  const isActive = activeNode === i;
                  return (
                    <div key={node.label}>
                      <div
                        className={`relative flex items-center gap-3 rounded-xl border px-4 py-3.5 transition-all duration-500 ${
                          isActive
                            ? 'border-accent-400 bg-accent-50 shadow-md shadow-accent-600/10 scale-[1.02]'
                            : 'border-ink-100 bg-white'
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${
                            isActive ? 'bg-accent-600 text-white' : 'bg-ink-100 text-ink-500'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className={`font-mono text-sm font-semibold tracking-wide transition-colors duration-500 ${
                            isActive ? 'text-accent-700' : 'text-ink-700'
                          }`}>
                            {node.label}
                          </div>
                          <div className="font-mono text-xs text-ink-400">
                            {node.sub}
                          </div>
                        </div>
                        {isActive && (
                          <span className="font-mono text-[10px] text-accent-600 animate-blink">
                            ● LIVE
                          </span>
                        )}
                      </div>
                      {/* Connector line */}
                      {i < flowNodes.length - 1 && (
                        <div className="relative mx-auto h-4 w-px overflow-hidden">
                          <div className="absolute inset-0 bg-ink-200" />
                          <div
                            className="absolute left-0 top-0 h-full w-px bg-accent-500"
                            style={{
                              animation: `flowDown 1.5s ease-in-out ${i * 0.3}s infinite`,
                              transformOrigin: 'top',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer note */}
              <div className="mt-5 flex items-center gap-2 border-t border-ink-100 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-300" />
                <span className="font-mono text-[10px] text-ink-400 tracking-wider">
                  ILLUSTRATIVE VISUALIZATION — NOT LIVE DATA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-wider text-ink-400">SCROLL</span>
          <div className="h-10 w-px bg-gradient-to-b from-ink-300 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
