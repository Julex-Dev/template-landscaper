const mountainSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420" preserveAspectRatio="none" style="width:100%;display:block;">
    <path d="M0,420 L0,320 L80,260 L160,295 L260,200 L360,265 L450,170 L540,230 L620,130 L700,195 L790,105 L870,180 L950,140 L1040,220 L1130,165 L1220,245 L1310,195 L1380,250 L1440,220 L1440,420 Z"
          fill="rgba(10,26,15,0.45)"/>
    <path d="M0,420 L0,355 L100,305 L200,340 L310,265 L420,325 L520,250 L620,305 L730,225 L830,295 L930,250 L1040,315 L1150,260 L1260,330 L1360,280 L1440,320 L1440,420 Z"
          fill="rgba(10,26,15,0.72)"/>
    <path d="M0,420 L0,385 L60,365 L130,380 L210,348 L300,375 L390,342 L480,372 L570,338 L660,368 L760,340 L860,375 L960,345 L1060,378 L1160,350 L1260,380 L1360,355 L1440,375 L1440,420 Z"
          fill="rgba(10,26,15,0.9)"/>
    <path d="M0,420 L0,400
      L20,392 L40,400 L55,388 L70,398 L88,385 L105,396 L122,383 L140,395
      L158,382 L175,393 L192,380 L210,392 L228,380 L245,393 L263,380 L280,393
      L298,381 L315,393 L333,381 L350,393 L368,381 L385,393 L403,380 L420,392
      L438,380 L455,392 L473,380 L490,393 L508,381 L525,393 L543,381 L560,393
      L578,380 L595,393 L613,380 L630,393 L648,381 L665,393 L683,381 L700,393
      L718,381 L735,393 L753,381 L770,393 L788,380 L805,392 L823,380 L840,392
      L858,381 L875,393 L893,381 L910,393 L928,380 L945,392 L963,380 L980,392
      L998,381 L1015,393 L1033,381 L1050,393 L1068,381 L1085,393 L1103,381
      L1120,393 L1138,380 L1155,393 L1173,380 L1190,392 L1208,380 L1225,392
      L1243,381 L1260,393 L1278,381 L1295,393 L1313,380 L1330,392 L1348,380
      L1365,393 L1383,381 L1400,393 L1418,381 L1440,393 L1440,420 Z"
          fill="#0a1a0f"/>
  </svg>
`;

export function Hero({ founded, city, state, description, copy }) {
  return `
    <section id="hero">
      <div class="hero-bg" id="hero-parallax"></div>
      <div class="hero-grain"></div>
      <div class="hero-mountain">${mountainSvg}</div>

      <div class="site-container" style="position:relative;z-index:2;width:100%;">
        <div class="hero-content" style="max-width:680px;">
          <p class="section-eyebrow" style="color:rgba(110,171,132,0.85);">Est. ${founded} &nbsp;·&nbsp; ${city}, ${state}</p>

          <h1 style="font-family:var(--font-display);font-size:clamp(44px,7vw,88px);font-weight:700;color:#faf8f5;line-height:1.04;letter-spacing:-0.02em;margin:0 0 24px;">
            ${copy.hero.headline.replace(/\{\{accent\}\}(.*?)\{\{\/accent\}\}/g, '<em style="color:var(--color-forest-400);font-style:italic;">$1</em>')}
          </h1>

          <p style="font-size:clamp(16px,2vw,19px);color:rgba(212,201,187,0.85);font-weight:300;line-height:1.7;max-width:480px;margin-bottom:40px;">
            ${description}
          </p>

          <div style="display:flex;flex-wrap:wrap;gap:14px;">
            <a href="#quote" class="btn btn-primary">${copy.hero.ctaPrimary}</a>
            <a href="#services" class="btn btn-outline">${copy.hero.ctaSecondary}</a>
          </div>
        </div>
      </div>

      <div class="scroll-cue" style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);z-index:2;">
        <span style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(181,168,152,0.55);font-weight:500;">Scroll</span>
        <div class="scroll-cue-line"></div>
      </div>
    </section>
  `;
}

export function initHero() {
  const bg = document.getElementById('hero-parallax');
  if (!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    bg.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.05)`;
  }, { passive: true });
}
