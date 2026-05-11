export function Quote({ phone, phoneHref, email, services }) {
  const serviceOptions = services.map(s =>
    `<option value="${s.key}">${s.title}</option>`
  ).join('');

  return `
    <section id="quote" style="background:var(--color-forest-900);padding:104px 0;position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;opacity:0.04;background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');background-size:200px;pointer-events:none;"></div>
      <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(106,171,132,0.35),transparent);"></div>

      <div class="site-container" style="position:relative;z-index:1;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">

          <!-- Left: pitch -->
          <div class="reveal-left">
            <span class="section-eyebrow" style="color:rgba(106,171,132,0.8);">Get Started</span>
            <h2 style="font-family:var(--font-display);font-size:clamp(30px,3.5vw,46px);font-weight:700;color:var(--color-stone-50);margin:0 0 20px;letter-spacing:-0.02em;line-height:1.1;">
              Let's Build Something Beautiful Together
            </h2>
            <p style="font-size:16px;line-height:1.75;color:rgba(212,201,187,0.75);margin-bottom:36px;">
              Share your vision with us. We'll schedule a complimentary on-site consultation and deliver a detailed proposal — no obligation, no pressure.
            </p>

            <div style="display:flex;flex-direction:column;gap:20px;">
              ${[
                ['Free On-Site Consultation', 'We visit your property and assess your space at no cost.'],
                ['Detailed Written Proposal',  'You receive a full scope, timeline, and transparent pricing.'],
                ['No Hidden Fees — Ever',       'Our contracts are fixed-price. What we quote is what you pay.'],
              ].map(([title, desc]) => `
                <div style="display:flex;align-items:flex-start;gap:16px;">
                  <div style="width:36px;height:36px;border-radius:8px;background:rgba(74,138,100,0.15);border:1px solid rgba(106,171,132,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4 8-8" stroke="#6aab84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div>
                    <div style="font-weight:600;font-size:15px;color:var(--color-stone-100);margin-bottom:3px;">${title}</div>
                    <div style="font-size:14px;color:rgba(181,168,152,0.65);line-height:1.5;">${desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div style="margin-top:40px;padding:24px;border:1px solid rgba(106,171,132,0.15);border-radius:6px;background:rgba(74,138,100,0.06);">
              <p style="font-size:13px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;color:var(--color-forest-400);margin-bottom:6px;">Contact Directly</p>
              <a href="${phoneHref}" style="display:block;font-family:var(--font-display);font-size:22px;color:var(--color-stone-100);text-decoration:none;margin-bottom:4px;">${phone}</a>
              <a href="mailto:${email}" style="font-size:14px;color:rgba(181,168,152,0.6);text-decoration:none;">${email}</a>
            </div>
          </div>

          <!-- Right: form -->
          <div class="reveal-right">
            <form id="quote-form" style="display:flex;flex-direction:column;gap:20px;" novalidate>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div>
                  <label class="form-label">First Name *</label>
                  <input type="text" name="first" class="form-input" placeholder="Jane" required>
                </div>
                <div>
                  <label class="form-label">Last Name *</label>
                  <input type="text" name="last" class="form-input" placeholder="Smith" required>
                </div>
              </div>
              <div>
                <label class="form-label">Email Address *</label>
                <input type="email" name="email" class="form-input" placeholder="jane@example.com" required>
              </div>
              <div>
                <label class="form-label">Phone Number</label>
                <input type="tel" name="phone" class="form-input" placeholder="${phone}">
              </div>
              <div>
                <label class="form-label">Service Needed *</label>
                <select name="service" class="form-select form-input" required>
                  <option value="" disabled selected>Select a service…</option>
                  ${serviceOptions}
                  <option value="full">Full Property Transformation</option>
                </select>
              </div>
              <div>
                <label class="form-label">Property Address</label>
                <input type="text" name="address" class="form-input" placeholder="123 Mountain View Rd">
              </div>
              <div>
                <label class="form-label">Project Description</label>
                <textarea name="message" class="form-textarea form-input" placeholder="Tell us about your space, your goals, and any specific ideas you have in mind…"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:16px 32px;font-size:14px;">
                Submit My Request
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <p style="font-size:12px;color:rgba(181,168,152,0.45);text-align:center;margin:0;">
                We respond within 1 business day. Your information is never shared.
              </p>
              <div id="form-success" style="display:none;padding:20px;background:rgba(74,138,100,0.15);border:1px solid rgba(106,171,132,0.3);border-radius:6px;text-align:center;">
                <div style="font-size:22px;margin-bottom:8px;">✓</div>
                <div style="font-weight:600;color:var(--color-forest-400);margin-bottom:4px;">Message Received!</div>
                <div style="font-size:14px;color:rgba(181,168,152,0.7);">We'll be in touch within 1 business day.</div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initQuoteForm() {
  const form    = document.getElementById('quote-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      form.querySelectorAll('input,textarea,select,button').forEach(el => el.style.display = 'none');
      success.style.display = 'block';
    }, 1200);
  });
}
