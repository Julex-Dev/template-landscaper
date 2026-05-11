import './style.css'
import { business }                          from './data/business.js'
import { Navbar, initNavbar }                from './components/navbar.js'
import { Hero, initHero }                    from './components/hero.js'
import { Services }                          from './components/services.js'
import { About, initCounters }               from './components/about.js'
import { Testimonials }                      from './components/testimonials.js'
import { Quote, initQuoteForm }              from './components/quote.js'
import { Footer }                            from './components/footer.js'
import { initReveal, initMobileCta }         from './animations.js'

// ── 1. Apply colour palette from business config ────────────
// Injects --color-* CSS custom properties onto :root.
// style.css @theme inline picks these up for Tailwind utilities.
function applyTheme(colors) {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
}

applyTheme(business.colors);

// ── 2. Apply SEO meta from business config ───────────────────
document.title = business.seo.title;
document.querySelector('meta[name="description"]').setAttribute('content', business.seo.description);

// ── 3. Responsive grid overrides ────────────────────────────
const responsiveStyle = document.createElement('style');
responsiveStyle.textContent = `
  @media (min-width: 768px) { .md-hidden { display: none !important; } }
  @media (max-width: 767px) { .desktop-nav { display: none !important; } }
  @media (max-width: 900px) {
    #about .about-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
    #quote .quote-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
  }
  @media (max-width: 900px)  { footer .footer-grid { grid-template-columns: 1fr 1fr !important; } }
  @media (max-width: 560px)  { footer .footer-grid { grid-template-columns: 1fr !important; } }
`;
document.head.appendChild(responsiveStyle);

// ── 4. Render ────────────────────────────────────────────────
document.getElementById('app').innerHTML = `
  ${Navbar(business)}

  <div id="mobile-cta">
    <a href="#quote" class="btn btn-primary" style="width:100%;justify-content:center;padding:14px;">
      ${business.copy.footer.mobileCta}
    </a>
  </div>

  <main>
    ${Hero(business)}
    ${Services(business)}
    ${About(business)}
    ${Testimonials(business)}
    ${Quote(business)}
  </main>

  ${Footer(business)}
`;

// ── 5. Apply responsive class names after render ─────────────
document.querySelector('#about > .site-container > div')?.classList.add('about-grid');
document.querySelector('#quote > .site-container > div')?.classList.add('quote-grid');
document.querySelector('footer > .site-container > div:first-child')?.classList.add('footer-grid');

// ── 6. Init all interactive features ────────────────────────
initNavbar();
initHero();
initReveal();
initMobileCta();
initCounters();
initQuoteForm();
