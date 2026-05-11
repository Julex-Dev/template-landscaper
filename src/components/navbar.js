export function Navbar({ nameLine1, nameLine2, copy }) {
  return `
    <nav id="navbar">
      <div class="site-container">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:32px;">
          <!-- Logo -->
          <a href="#" style="text-decoration:none;display:flex;align-items:center;gap:10px;flex-shrink:0;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3L2 26h28L16 3z" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M16 10L7 26h18L16 10z" fill="#2d5a3d"/>
              <path d="M16 10L7 26h18L16 10z" fill="none" stroke="#6aab84" stroke-width="1" stroke-linejoin="round" opacity="0.5"/>
              <line x1="16" y1="26" x2="16" y2="29" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <div>
              <div style="font-family:var(--font-display);font-weight:600;font-size:17px;color:#faf8f5;letter-spacing:0.01em;line-height:1.1;">${nameLine1}</div>
              <div style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(181,168,152,0.65);font-weight:500;">${nameLine2}</div>
            </div>
          </a>

          <!-- Desktop nav -->
          <div class="desktop-nav" style="display:flex;align-items:center;gap:36px;">
            <a href="#services" class="nav-link">Services</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#testimonials" class="nav-link">Testimonials</a>
            <a href="#quote" class="btn btn-primary" style="padding:10px 22px;font-size:12px;">${copy.nav.cta}</a>
          </div>

          <!-- Hamburger (mobile) -->
          <button class="hamburger md-hidden" id="hamburger" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile full-screen menu -->
    <div class="mobile-menu" id="mobile-menu">
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#quote">Get a Quote</a>
    </div>
  `;
}

export function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const menu      = document.getElementById('mobile-menu');
  const allLinks  = menu.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 768px) { .md-hidden { display: none !important; } }
    @media (max-width: 767px) { .desktop-nav { display: none !important; } }
  `;
  document.head.appendChild(style);
}
