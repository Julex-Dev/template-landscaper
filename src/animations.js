export function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

export function initMobileCta() {
  const cta = document.getElementById('mobile-cta');
  const hero = document.getElementById('hero');
  if (!cta || !hero) return;

  const obs = new IntersectionObserver(([entry]) => {
    cta.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0.1 });

  obs.observe(hero);
}
