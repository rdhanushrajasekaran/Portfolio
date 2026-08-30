import { User, MapPin, Briefcase } from 'lucide-react';
import { site } from '@/data/site';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: profile placeholder */}
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-2xl border border-ink-100 -z-10" />
              <div className="absolute -inset-1.5 rounded-2xl border border-accent-200 -z-10" />

              {/* Profile placeholder */}
              <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-ink-100 to-ink-50 border border-ink-100 overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border border-ink-200 shadow-sm">
                    <User className="h-12 w-12 text-ink-300" />
                  </div>
                  <span className="font-mono text-xs tracking-wider text-ink-400">
                    [Profile Photo]
                  </span>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 h-6 w-6 border-l-2 border-t-2 border-accent-400 rounded-tl" />
                <div className="absolute top-3 right-3 h-6 w-6 border-r-2 border-t-2 border-accent-400 rounded-tr" />
                <div className="absolute bottom-3 left-3 h-6 w-6 border-l-2 border-b-2 border-accent-400 rounded-bl" />
                <div className="absolute bottom-3 right-3 h-6 w-6 border-r-2 border-b-2 border-accent-400 rounded-br" />
              </div>

              {/* Info badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-ink-100 bg-white px-4 py-3">
                  <Briefcase className="h-4 w-4 text-ink-400 shrink-0" />
                  <span className="text-sm font-medium text-ink-700">{site.currentRole}</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-ink-100 bg-white px-4 py-3">
                  <MapPin className="h-4 w-4 text-ink-400 shrink-0" />
                  <span className="text-sm font-medium text-ink-700">{site.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-7">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-600" />
              <span className="section-label">About</span>
            </div>

            <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-ink-900">
              {site.aboutHeading}
            </h2>

            <div className="reveal reveal-delay-2 mt-6 space-y-4">
              <p className="text-lg text-ink-600 leading-relaxed">
                {site.aboutText1}
              </p>
              <p className="text-lg text-ink-600 leading-relaxed">
                {site.aboutText2}
              </p>
            </div>

            {/* Capability tags */}
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-2.5">
              {site.aboutTags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
