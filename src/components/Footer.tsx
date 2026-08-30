import { Mail, Phone, Linkedin, Github, ArrowUp } from 'lucide-react';
import { site, navLinks } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: `mailto:${site.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${site.phone}`, label: 'Phone' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0 tech-grid-dark opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink-900 font-bold text-sm">
                SE
              </span>
              <span className="text-sm font-semibold">{site.name}</span>
            </div>
            <p className="font-mono text-xs tracking-wider text-accent-400 mb-3">
              {site.role.toUpperCase()}
            </p>
            <p className="text-sm text-ink-400 leading-relaxed max-w-sm">
              {site.footerTagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs tracking-wider text-ink-500 mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs tracking-wider text-ink-500 mb-4">
              CONNECT
            </h4>
            <div className="space-y-2.5 mb-6">
              <a href={`mailto:${site.email}`} className="block text-sm text-ink-300 transition-colors hover:text-white">
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="block text-sm text-ink-300 transition-colors hover:text-white">
                {site.phone}
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-300 transition-all duration-300 hover:bg-white hover:text-ink-900 hover:border-white hover:-translate-y-0.5"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-600 leading-relaxed max-w-md">
            {site.confidentiality}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-medium text-ink-400 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
