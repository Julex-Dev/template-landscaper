// ─────────────────────────────────────────────────────────────
//  BUSINESS CONFIG  —  single source of truth for the whole site
//  Update this file to rebrand, relabel, or change contact info.
// ─────────────────────────────────────────────────────────────

export const business = {

  // ── Identity ───────────────────────────────────────────────
  name:      'Blue Ridge Landscapes',
  nameLine1: 'Blue Ridge',
  nameLine2: 'Landscapes',
  tagline:   'Sculpting the Mountains, One Garden at a Time',
  description:
    'Premium landscape design and installation for discerning Blue Mountains homeowners. ' +
    'We transform outdoor spaces into living works of art — built to endure every season.',
  founded: 2026,

  // ── Contact ────────────────────────────────────────────────
  phone:     '(02) 4782 6391',
  phoneHref: 'tel:+17205550184',
  email:     'hello@blueridgelandscapes.com',

  // ── Location ───────────────────────────────────────────────
  city:         'Katoomba',
  state:        'NSW',
  serviceAreas: ['Katoomba', 'Lithgow', 'Springwood & Surrounds', 'Blue Mountains'],

  // ── About ──────────────────────────────────────────────────
  yearsExperience: 17,

  founder: {
    name:  'Marcus Webb',
    title: 'Founder & Head Designer',
    quote: "We don't just install landscapes — we cultivate the places where life happens outdoors.",
  },

  story: [
    'Blue Ridge Landscapes was founded by Marcus Webb, a UNESCO State University-trained ' +
    'horticulturist with a deep respect for the alpine environment. What started as a two-person ' +
    'operation in the foothills of Boulder has grown into one of the Front Range\'s most trusted landscape firms.',

    'Our team of licensed designers, certified arborists, and master gardeners approaches every ' +
    'property with the same philosophy: listen first, design second. The result is landscapes that ' +
    'feel inevitable — as if they were always meant to be there.',
  ],

  credentials: [
    'Licensed & Insured — Colorado Contractor #LC-2009-4821',
    'EPA WaterSense Partner — Certified Irrigation Professionals',
    'Colorado Native Plant Society — Certified Practitioners',
  ],

  // ── Stats ──────────────────────────────────────────────────
  stats: [
    { value: 15,  suffix: '+',  label: 'Years Experience' },
    { value: 850, suffix: '+',  label: 'Projects Completed' },
    { value: 98,  suffix: '%',  label: 'Client Satisfaction' },
    { value: 12,  suffix: 'mo', label: 'Workmanship Warranty' },
  ],

  // ── Services ───────────────────────────────────────────────
  // key maps to an icon in services.js — title & description are business data
  services: [
    {
      key:         'design',
      title:       'Landscape Design & Master Planning',
      description: 'Custom design consultations producing detailed plans tailored to your blocks topography, aspect, and soil.',
    },
    {
      key:         'hardscaping',
      title:       'Hardscaping & Stone',
      description: 'Natural stone patios, retaining walls, fire pit surrounds, and walkways handcrafted from Colorado sandstone and reclaimed granite.',
    },
    {
      key:         'plants',
      title:       'Native Plant Installation',
      description: "Drought-tolerant, wildlife-friendly plantings that thrive in Colorado's altitude and climate — low maintenance, high impact.",
    },
    {
      key:         'irrigation',
      title:       'Smart Irrigation',
      description: 'EPA WaterSense-certified drip and sprinkler systems with smart controllers that adapt to weather data, saving up to 50% water annually.',
    },
    {
      key:         'maintenance',
      title:       'Seasonal Maintenance',
      description: 'Year-round property care — spring cleanups, summer pruning, fall leaf removal, winterization, and snow management plans.',
    },
    {
      key:         'lighting',
      title:       'Outdoor Lighting',
      description: 'Architectural-grade LED landscape lighting designed to showcase your property after dark — paths, uplights, and ambient fixture placement.',
    },
  ],

  // ── Testimonials ───────────────────────────────────────────
  testimonials: [
    {
      name:     'Catherine M',
      location: 'Leura, NSW',
      project:  'Full garden transformation',
      stars:    5,
      text:     "Blue Ridge completely reimagined our half-acre block in Leura. The sandstone retaining wall alone is worth every cent — it looks like it's been there for a century.",
    },
    {
      name:     'James Rowland',
      location: 'Estes Park, CO',
      project:  'Complete property overhaul — 2.4 acres',
      stars:    5,
      text:     "We gave Marcus and his team a blank canvas — a 2.4-acre lot with nothing but dirt and rocks. Eighteen months later it looks like it's been there for decades. The irrigation system alone has cut our water bill in half. I cannot recommend Summit Ridge enough to anyone serious about their outdoor space.",
    },
    {
      name:     'Dr. Priya Nair',
      location: 'Fort Collins, CO',
      project:  'Front entrance & courtyard design',
      stars:    5,
      text:     "I hired three landscape firms before calling Summit Ridge. The difference was immediate — they actually listened. The courtyard design they delivered exceeded every expectation. Professional, on schedule, and the post-install follow-up was exceptional. This is a company that takes real pride in their work.",
    },
  ],

  // ── Trust badges ───────────────────────────────────────────
  trustBadges: [
    { value: '4.9',    label: 'Google Reviews', sub: '(127 reviews)' },
    { value: 'A+',     label: 'BBB Rating',      sub: 'Accredited Business' },
    { value: '#1',     label: 'Houzz Award',     sub: '3 Consecutive Years' },
    { value: 'Top 5%', label: 'Angi Certified',  sub: 'Elite Pro Status' },
  ],

  // ── Colour palette ─────────────────────────────────────────
  // These are injected as CSS custom properties at runtime (see main.js → applyTheme).
  // Tailwind utilities reference them via @theme inline in style.css.
  // Change any value here to retheme the entire site.
  colors: {
    'forest-950': '#0a1a0f',
    'forest-900': '#1a3a2a',
    'forest-800': '#1f4a32',
    'forest-700': '#2d5a3d',
    'forest-600': '#3a7050',
    'forest-500': '#4a8a64',
    'forest-400': '#6aab84',
    'forest-300': '#8ec9a0',

    'stone-950': '#1a1410',
    'stone-900': '#2a2018',
    'stone-800': '#3d3228',
    'stone-700': '#5c4e40',
    'stone-600': '#7a6858',
    'stone-500': '#8c7b6b',
    'stone-400': '#b5a898',
    'stone-300': '#d4c9bb',
    'stone-200': '#ede8e0',
    'stone-100': '#f5f2ee',
    'stone-50':  '#faf8f5',

    'charcoal-950': '#0a0a0b',
    'charcoal-900': '#0f0f10',
    'charcoal-800': '#1c1c1e',
    'charcoal-700': '#2c2c2e',
    'charcoal-600': '#3c3c3e',
    'charcoal-500': '#4c4c4e',
  },

};
