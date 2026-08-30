import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/cn';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/85 backdrop-blur-lg border-b border-ink-100 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300',
              scrolled ? 'h-14' : 'h-20'
            )}
          >
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="group flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">
                SE
              </span>
              <span className="hidden sm:block text-sm font-semibold tracking-tight text-ink-900">
                {site.name}
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      'relative px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                      isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-accent-600 transition-all duration-300',
                        isActive ? 'w-5 opacity-100' : 'w-0 opacity-0'
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNav('#contact')}
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-ink-800 hover:-translate-y-0.5"
              >
                Discuss a Project
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 transition-colors hover:bg-ink-50"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden transition-all duration-300',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div
          className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-ink-100 px-5 h-16">
            <span className="text-sm font-semibold text-ink-900">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-700"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 p-5">
            {navLinks.map((link, i) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-4 py-3.5 text-left text-base font-medium transition-all duration-300',
                    isActive
                      ? 'bg-ink-50 text-ink-900'
                      : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900',
                    open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  )}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </button>
              );
            })}
          </div>
          <div className="mt-auto p-5">
            <button
              onClick={() => handleNav('#contact')}
              className="w-full rounded-lg bg-ink-900 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
            >
              Discuss a Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
