import { useEffect, useState } from 'react';
import { Cpu, Workflow, Monitor, Database, LayoutDashboard, ArrowDown } from 'lucide-react';

const nodes = [
  { label: 'MACHINE / PLC', sub: 'Industrial Controller', icon: Cpu },
  { label: 'Industrial Protocol', sub: 'PLC / Modbus', icon: Workflow },
  { label: 'Custom Application', sub: 'C# / .NET / WPF', icon: Monitor },
];

const branches = [
  { label: 'Database', sub: 'SQL Server', icon: Database },
  { label: 'Dashboard', sub: 'Monitoring', icon: LayoutDashboard },
];

const liveData = [
  { label: 'MACHINE', value: 'RUNNING', color: 'text-emerald-400' },
  { label: 'PLC', value: 'ACTIVE', color: 'text-accent-400' },
  { label: 'APP', value: 'PROCESSING', color: 'text-accent-400' },
  { label: 'DB', value: 'LOGGING', color: 'text-emerald-400' },
  { label: 'DASH', value: 'LIVE', color: 'text-emerald-400' },
];

export default function IndustrialFlow() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 5);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 tech-grid-dark opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/95 to-ink-900" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-400" />
            <span className="section-label text-accent-400">Architecture</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            HOW SOFTWARE FITS INTO A REAL INDUSTRIAL ENVIRONMENT
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink-400 leading-relaxed">
            From machine signals to structured data and live monitoring — the complete data flow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: architecture diagram */}
          <div className="reveal reveal-delay-2">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 backdrop-blur-sm">
              {/* Main flow */}
              <div className="flex flex-col gap-3">
                {nodes.map((node, i) => {
                  const Icon = node.icon;
                  const isActive = pulse === i || pulse === i + 1;
                  return (
                    <div key={node.label}>
                      <div
                        className={`flex items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-500 ${
                          isActive
                            ? 'border-accent-400/50 bg-accent-400/10 scale-[1.02]'
                            : 'border-white/10 bg-white/5'
                        }`}
                      >
                        <div className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-500 ${
                          isActive ? 'bg-accent-600 text-white' : 'bg-white/10 text-ink-300'
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className={`font-mono text-sm font-semibold tracking-wide transition-colors duration-500 ${
                            isActive ? 'text-accent-300' : 'text-white/80'
                          }`}>
                            {node.label}
                          </div>
                          <div className="font-mono text-xs text-ink-400">
                            {node.sub}
                          </div>
                        </div>
                        {isActive && (
                          <span className="ml-auto font-mono text-[10px] text-accent-400 animate-blink">●</span>
                        )}
                      </div>
                      {i < nodes.length - 1 && (
                        <div className="relative mx-auto h-5 w-px overflow-hidden">
                          <div className="absolute inset-0 bg-white/10" />
                          <div
                            className="absolute left-0 top-0 w-px bg-accent-400"
                            style={{ animation: 'flowDown 1.2s ease-in-out infinite', height: '100%' }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Branch split */}
                <div className="relative flex justify-center py-1">
                  <div className="h-5 w-px bg-white/10" />
                </div>

                {/* Branches */}
                <div className="grid grid-cols-2 gap-3">
                  {branches.map((branch, i) => {
                    const Icon = branch.icon;
                    const isActive = pulse === 3 + i;
                    return (
                      <div
                        key={branch.label}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 transition-all duration-500 ${
                          isActive
                            ? 'border-emerald-400/50 bg-emerald-400/10 scale-[1.02]'
                            : 'border-white/10 bg-white/5'
                        }`}
                      >
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-500 ${
                          isActive ? 'bg-emerald-500 text-white' : 'bg-white/10 text-ink-300'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-mono text-xs font-semibold tracking-wide text-white/80">
                            {branch.label}
                          </div>
                          <div className="font-mono text-[10px] text-ink-400">
                            {branch.sub}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: live data simulation */}
          <div className="reveal reveal-delay-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs tracking-wider text-ink-400">
                  INDUSTRIAL_DATA_FLOW
                </span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-blink" />
                  <span className="font-mono text-[10px] text-emerald-400">SIMULATED</span>
                </div>
              </div>

              {/* Live metric cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {liveData.map((m, i) => (
                  <div
                    key={m.label}
                    className={`rounded-lg border px-4 py-3 transition-all duration-500 ${
                      pulse === i
                        ? 'border-accent-400/40 bg-accent-400/10 scale-[1.03]'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className="font-mono text-[10px] tracking-wider text-ink-400">
                      {m.label}
                    </div>
                    <div className={`mt-1.5 font-mono text-sm font-semibold ${m.color} flex items-center gap-1.5`}>
                      <span className={`h-1.5 w-1.5 rounded-full bg-current ${pulse === i ? 'animate-blink' : ''}`} />
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Signal waveform */}
              <div className="mt-6 rounded-lg border border-white/10 bg-ink-950/50 p-4">
                <div className="font-mono text-[10px] tracking-wider text-ink-500 mb-3">
                  SIGNAL_PATTERN
                </div>
                <div className="flex items-end gap-1 h-16">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-accent-500/60 transition-all duration-300"
                      style={{
                        height: `${30 + Math.sin((i + pulse) * 0.4) * 35 + Math.cos((i + pulse) * 0.2) * 15}%`,
                        opacity: pulse % 3 === 0 ? 0.8 : 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                <ArrowDown className="h-3.5 w-3.5 text-ink-500" />
                <span className="font-mono text-[10px] text-ink-500 tracking-wider">
                  ILLUSTRATIVE VISUALIZATION — NOT LIVE DATA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
