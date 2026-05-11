const Stars = (n) => Array.from({ length: n }, () =>
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="#d4a017" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
).join('');

export function Testimonials({ testimonials, trustBadges, copy }) {
  const cards = testimonials.map((t, i) => `
    <div class="testi-card reveal d${i + 1}">
      <div style="display:flex;gap:2px;margin-bottom:20px;">${Stars(t.stars)}</div>
      <p style="font-size:16px;line-height:1.75;color:var(--color-stone-700);margin:0 0 28px;position:relative;z-index:1;">${t.text}</p>
      <div style="display:flex;align-items:center;gap:14px;padding-top:20px;border-top:1px solid var(--color-stone-200);">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--color-forest-800),var(--color-forest-600));display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-family:var(--font-display);font-size:16px;font-weight:600;color:var(--color-stone-100);">${t.name.charAt(0)}</span>
        </div>
        <div>
          <div style="font-weight:600;font-size:15px;color:var(--color-charcoal-800);">${t.name}</div>
          <div style="font-size:12px;color:var(--color-stone-500);letter-spacing:0.04em;">${t.location} &nbsp;·&nbsp; ${t.project}</div>
        </div>
      </div>
    </div>
  `).join('');

  const badges = trustBadges.map(b => `
    <div style="text-align:center;">
      <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--color-forest-700);">${b.value}</div>
      <div style="font-size:13px;font-weight:600;color:var(--color-charcoal-800);margin-bottom:2px;">${b.label}</div>
      <div style="font-size:11px;color:var(--color-stone-500);">${b.sub}</div>
    </div>
  `).join('');

  return `
    <section id="testimonials" class="section-pad" style="background:var(--color-stone-100);">
      <div class="site-container">
        <div style="text-align:center;max-width:580px;margin:0 auto 64px;" class="reveal">
          <span class="section-eyebrow" style="justify-content:center;">${copy.testimonials.eyebrow}</span>
          <h2 style="font-family:var(--font-display);font-size:clamp(30px,4vw,46px);font-weight:700;color:var(--color-charcoal-800);margin:0 0 16px;letter-spacing:-0.02em;line-height:1.1;">
            ${copy.testimonials.heading}
          </h2>
          <p style="font-size:17px;line-height:1.7;color:var(--color-stone-600);margin:0;">
            ${copy.testimonials.subtext}
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;">
          ${cards}
        </div>

        <div class="reveal" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:40px;margin-top:64px;padding-top:48px;border-top:1px solid var(--color-stone-200);">
          ${badges}
        </div>
      </div>
    </section>
  `;
}
