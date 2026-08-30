import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every element with the `reveal` class
 * when it enters the viewport. Uses a single IntersectionObserver.
 * Respects prefers-reduced-motion via CSS (elements are shown by default).
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
