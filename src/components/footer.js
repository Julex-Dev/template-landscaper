const SOCIAL_ICONS = [
  { label: 'Facebook',  svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>` },
  { label: 'Instagram', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>` },
  { label: 'X / Twitter', svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>` },
  { label: 'LinkedIn',  svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>` },
];

const COMPANY_LINKS = ['About Us', 'Our Process', 'Portfolio', 'Careers', 'Press'];
const SUPPORT_LINKS = ['Contact Us', 'FAQ', 'Service Areas', 'Free Consultation', 'Privacy Policy'];

export function Footer({ nameLine1, nameLine2, name, email, phone, phoneHref, serviceAreas, services, founded }) {
  const year = new Date().getFullYear();

  const serviceLinks = services.map(s => `<li><a href="#services" class="footer-link">${s.title}</a></li>`).join('');

  const cols = [
    { heading: 'Services', links: serviceLinks },
    { heading: 'Company',  links: COMPANY_LINKS.map(l => `<li><a href="#" class="footer-link">${l}</a></li>`).join('') },
    { heading: 'Support',  links: SUPPORT_LINKS.map(l => `<li><a href="#" class="footer-link">${l}</a></li>`).join('') },
  ].map(col => `
    <div>
      <h4 style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--color-stone-300);margin:0 0 20px;">${col.heading}</h4>
      <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;">${col.links}</ul>
    </div>
  `).join('');

  const socials = SOCIAL_ICONS.map(s => `
    <a href="#" aria-label="${s.label}"
       style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:var(--color-stone-400);text-decoration:none;transition:all 0.25s ease;"
       onmouseenter="this.style.background='rgba(74,138,100,0.2)';this.style.borderColor='rgba(106,171,132,0.3)';this.style.color='var(--color-forest-400)'"
       onmouseleave="this.style.background='rgba(255,255,255,0.06)';this.style.borderColor='rgba(255,255,255,0.08)';this.style.color='var(--color-stone-400)'">${s.svg}</a>
  `).join('');

  return `
    <footer style="background:var(--color-charcoal-900);padding:80px 0 0;">
      <div class="site-container">
        <div style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:48px;padding-bottom:64px;border-bottom:1px solid rgba(255,255,255,0.07);">
          <!-- Brand col -->
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3L2 26h28L16 3z" fill="none" stroke="#6aab84" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M16 10L7 26h18L16 10z" fill="#2d5a3d"/>
                <line x1="16" y1="26" x2="16" y2="29" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div>
                <div style="font-family:var(--font-display);font-weight:600;font-size:16px;color:var(--color-stone-100);">${nameLine1}</div>
                <div style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(181,168,152,0.5);">${nameLine2}</div>
              </div>
            </div>
            <p style="font-size:14px;line-height:1.7;color:var(--color-stone-500);max-width:260px;margin-bottom:24px;">
              Premium landscape design and installation serving ${serviceAreas.join(', ')} since ${founded}.
            </p>
            <div style="display:flex;gap:10px;">${socials}</div>
          </div>

          ${cols}
        </div>

        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:24px 0;">
          <p style="font-size:13px;color:var(--color-stone-600);margin:0;">© ${year} ${name}, LLC. All rights reserved.</p>
          <p style="font-size:13px;color:var(--color-stone-700);margin:0;">${serviceAreas.join(' &nbsp;·&nbsp; ')}</p>
        </div>
      </div>
    </footer>
  `;
}
