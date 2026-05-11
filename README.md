# Summit Ridge Landscaping — Website Template

A premium 2026 landscaping company homepage built with **Vite** and **Tailwind CSS v4**.  
Mountain-modern aesthetic with smooth animations, mobile-first layout, and a single config file for all business data.

## Tech Stack

- [Vite 8](https://vite.dev/) — build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — via `@tailwindcss/vite` plugin (CSS-first config)
- Vanilla JavaScript (ES modules, no framework)
- Google Fonts — Playfair Display + Inter

## Project Structure

```
src/
├── data/
│   └── business.js       ← single source of truth for all business content & colours
├── components/
│   ├── navbar.js
│   ├── hero.js
│   ├── services.js
│   ├── about.js
│   ├── testimonials.js
│   ├── quote.js
│   └── footer.js
├── animations.js          ← IntersectionObserver scroll reveals + mobile CTA
├── main.js                ← entry point, applies theme, renders all sections
└── style.css              ← Tailwind v4 @theme inline + global CSS
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customising the Site

**All business content and colours live in one file:**

```
src/data/business.js
```

Edit that file to change:

| Key | What it controls |
|-----|-----------------|
| `name`, `nameLine1`, `nameLine2` | Logo and footer brand name |
| `tagline`, `description` | Hero section copy |
| `founded`, `city`, `state` | Hero eyebrow line |
| `phone`, `email` | Quote section contact block |
| `serviceAreas` | Footer area list |
| `services[]` | Service cards + quote form dropdown |
| `testimonials[]` | Testimonial cards |
| `trustBadges[]` | Review / award badges |
| `stats[]` | Animated counters in About section |
| `founder` | About section quote and attribution |
| `story[]` | About section paragraphs |
| `credentials[]` | About section credential checklist |
| `colors` | **Entire site colour palette** (CSS vars injected at runtime) |

No other files need to change for a full rebrand.

## Colour Theming

Colours are defined in `business.js` under `colors` and injected as CSS custom properties at startup (`applyTheme()` in `main.js`). Tailwind utilities reference them via `@theme inline` in `style.css`.

To retheme the site, update the hex values in `business.colors` only.

## Build

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

## License

MIT
