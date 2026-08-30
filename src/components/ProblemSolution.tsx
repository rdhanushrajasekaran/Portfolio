import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Check, AlertTriangle, FileWarning } from 'lucide-react';
import { problemFlow, solutionFlow } from '@/data/technologies';

export default function ProblemSolution() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const total = problemFlow.length + solutionFlow.length;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % total);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 tech-grid-dark opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/95 to-ink-900" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-400" />
            <span className="section-label text-accent-400">Problem → Solution</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            HAVE A MACHINE OR PROCESS THAT NEEDS SOFTWARE?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem column */}
          <div className="reveal">
            <div className="flex items-center gap-2.5 mb-5">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <span className="font-mono text-sm font-semibold tracking-wider text-amber-400">
                THE PROBLEM
              </span>
            </div>
            <div className="space-y-2">
              {problemFlow.map((item, i) => (
                <div key={item}>
                  <div
                    className={`flex items-center gap-3 rounded-xl border px-5 py-4 transition-all duration-500 ${
                      activeStep === i
                        ? 'border-amber-400/50 bg-amber-400/10 scale-[1.01]'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <span className="font-mono text-xs text-ink-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base font-medium text-ink-100">{item}</span>
                  </div>
                  {i < problemFlow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="h-4 w-4 text-ink-500 animate-bounce" style={{ animationDuration: '1.5s' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Solution column */}
          <div className="reveal reveal-delay-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Check className="h-5 w-5 text-emerald-400" />
              <span className="font-mono text-sm font-semibold tracking-wider text-emerald-400">
                THE SOLUTION
              </span>
            </div>
            <div className="space-y-2">
              {solutionFlow.map((item, i) => {
                const globalIndex = problemFlow.length + i;
                return (
                  <div key={item}>
                    <div
                      className={`flex items-center gap-3 rounded-xl border px-5 py-4 transition-all duration-500 ${
                        activeStep === globalIndex
                          ? 'border-accent-400/50 bg-accent-400/10 scale-[1.01]'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base font-medium text-ink-100">{item}</span>
                    </div>
                    {i < solutionFlow.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="h-4 w-4 text-accent-400 animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }} />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Result block */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-accent-400/30 bg-gradient-to-r from-accent-600/20 to-accent-500/10 px-5 py-4">
                <ArrowRight className="h-5 w-5 text-accent-400" />
                <span className="text-base font-bold text-white">
                  Automated Engineering Workflow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Confidentiality note */}
        <div className="reveal reveal-delay-3 mt-12 flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
          <FileWarning className="h-4 w-4 text-ink-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ink-400 leading-relaxed">
            Certain industrial project details have been generalized or omitted to respect confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
