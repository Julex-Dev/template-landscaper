// Visual icons keyed to business.services[].key — purely presentational
const ICONS = {
  design: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  hardscaping: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  plants: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M12 2a5 5 0 0 1 5 5c0 5-5 10-5 10S7 12 7 7a5 5 0 0 1 5-5z"/></svg>`,
  irrigation: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"/></svg>`,
  maintenance: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  lighting: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
};

export function Services({ services }) {
  const cards = services.map((s, i) => `
    <div class="service-card reveal d${i + 1}">
      <div class="service-icon">${ICONS[s.key] ?? ICONS.design}</div>
      <h3 style="font-family:var(--font-display);font-size:20px;font-weight:600;color:var(--color-charcoal-800);margin:0 0 12px;letter-spacing:-0.01em;">${s.title}</h3>
      <p style="font-size:15px;line-height:1.7;color:var(--color-stone-600);margin:0;">${s.description}</p>
    </div>
  `).join('');

  return `
    <section id="services" class="section-pad" style="background:var(--color-stone-50);">
      <div class="site-container">
        <div style="max-width:560px;margin-bottom:64px;" class="reveal">
          <span class="section-eyebrow">What We Do</span>
          <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,48px);font-weight:700;color:var(--color-charcoal-800);margin:0 0 16px;letter-spacing:-0.02em;line-height:1.1;">
            Comprehensive Services,<br>Uncompromising Quality
          </h2>
          <p style="font-size:17px;line-height:1.7;color:var(--color-stone-600);margin:0;">
            Every project we take on is treated as a long-term relationship. From initial concept to ongoing care, we're with you at every stage.
          </p>
          <div class="section-divider" style="margin-top:24px;"></div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;">
          ${cards}
        </div>
      </div>
    </section>
  `;
}
