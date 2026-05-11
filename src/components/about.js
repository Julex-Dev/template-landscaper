export function About({ yearsExperience, founded, founder, story, credentials, stats }) {
  const statsHtml = stats.map(s => `
    <div style="text-align:center;padding:24px 16px;">
      <div class="stat-number">
        <span class="counter" data-target="${s.value}">0</span>${s.suffix}
      </div>
      <div style="font-size:13px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--color-stone-500);">${s.label}</div>
    </div>
  `).join('');

  const credentialsHtml = credentials.map(item => `
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <div style="width:20px;height:20px;border-radius:50%;background:var(--color-forest-700);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <span style="font-size:14px;color:var(--color-stone-600);line-height:1.5;">${item}</span>
    </div>
  `).join('');

  const storyHtml = story.map(para => `
    <p style="font-size:16px;line-height:1.75;color:var(--color-stone-600);margin-bottom:20px;">${para}</p>
  `).join('');

  return `
    <section id="about" class="section-pad" style="background:#fff;">
      <div class="site-container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;">

          <!-- Left: visual block + stats -->
          <div class="reveal-left">
            <div class="about-img-wrapper">
              <div class="about-img-inner">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.15;">
                  <defs>
                    <linearGradient id="mgr" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#6aab84"/>
                      <stop offset="100%" stop-color="#1a3a2a"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,300 L0,200 L60,140 L120,180 L180,80 L240,140 L300,60 L360,130 L400,100 L400,300 Z" fill="url(#mgr)"/>
                  <path d="M0,300 L0,240 L80,195 L160,220 L240,175 L320,210 L400,190 L400,300 Z" fill="rgba(45,90,61,0.8)"/>
                </svg>
                <blockquote style="position:relative;z-index:1;margin:0;">
                  <p style="font-family:var(--font-display);font-size:clamp(18px,2.5vw,24px);font-style:italic;color:var(--color-stone-100);line-height:1.5;margin-bottom:20px;">
                    "${founder.quote}"
                  </p>
                  <cite style="font-size:13px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--color-forest-400);font-style:normal;">
                    — ${founder.name}, ${founder.title}
                  </cite>
                </blockquote>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--color-stone-200);border-radius:6px;overflow:hidden;margin-top:24px;background:#fff;">
              ${statsHtml}
            </div>
          </div>

          <!-- Right: copy -->
          <div class="reveal-right">
            <span class="section-eyebrow">Our Story</span>
            <h2 style="font-family:var(--font-display);font-size:clamp(30px,3.5vw,44px);font-weight:700;color:var(--color-charcoal-800);margin:0 0 24px;letter-spacing:-0.02em;line-height:1.12;">
              Rooted in the Rocky Mountains Since ${founded}
            </h2>
            ${storyHtml}
            <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:40px;">
              ${credentialsHtml}
            </div>
            <a href="#quote" class="btn btn-dark">Work With Us</a>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      const duration = 1600;
      const start = performance.now();
      const animate = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        el.textContent = Math.round(ease * target);
        if (t < 1) requestAnimationFrame(animate);
        else el.textContent = target;
      };
      requestAnimationFrame(animate);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}
