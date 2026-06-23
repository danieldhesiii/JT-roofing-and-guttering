// The six service categories the customer asked for.
// Each drives a card on the home page and a full detail page (src/pages/service.js).
// `icon` references a symbol id in the SVG sprite (public/sprite.svg).

export const services = [
  {
    slug: 'new-roofs',
    name: 'New Roofs',
    icon: 'roof',
    tagline: 'Full re-roofs built to last decades.',
    intro:
      'A new roof is one of the biggest investments in your home — so it pays to get it right. We strip, prepare and re-roof using quality tiles and breathable membranes, leaving you with a watertight roof guaranteed to perform for decades.',
    image: '/images/gallery/roof-05.jpg',
    bullets: [
      'Complete strip and re-roof of any property',
      'Quality concrete & clay tiles to match your home',
      'Breathable felt and full insulation upgrades',
      'New battens, ridges and flashings throughout',
      'Scaffold, clean-up and waste removal included',
      'Workmanship guarantee on every new roof',
    ],
  },
  {
    slug: 'flat-roofs',
    name: 'Flat Roofs',
    icon: 'flat',
    tagline: 'Modern, seamless flat roofing systems.',
    intro:
      'Extensions, garages, dormers and porches all need a flat roof that won’t leak. We install modern felt, EPDM rubber and GRP fibreglass systems that stay watertight for years — no more pooling, no more patch jobs.',
    image: '/images/gallery/roof-09.jpg',
    bullets: [
      'Torch-on felt, EPDM rubber & GRP fibreglass',
      'Ideal for extensions, garages and dormers',
      'Seamless, fully-bonded waterproof finish',
      'Correct falls to stop standing water',
      'Insulation upgrades to current building regs',
      'Long-life systems with manufacturer guarantees',
    ],
  },
  {
    slug: 'leadwork',
    name: 'Leadwork',
    icon: 'lead',
    tagline: 'Expert lead flashing, valleys & detailing.',
    intro:
      'Leadwork is where roofs leak most often — and where craftsmanship really shows. Our team dresses and fits code-correct lead to valleys, chimneys, dormers and abutments for a finish that’s both watertight and looks the part.',
    image: '/images/gallery/roof-12.jpg',
    bullets: [
      'Lead valleys, soakers and step flashings',
      'Chimney, dormer and abutment detailing',
      'Correct lead codes for a lasting seal',
      'Traditional dressing by experienced hands',
      'Repairs to failed or stolen leadwork',
      'Neat, weathertight finishes every time',
    ],
  },
  {
    slug: 'slate-roofing',
    name: 'Slate Roofing',
    icon: 'slate',
    tagline: 'Natural slate, laid the traditional way.',
    intro:
      'Natural slate is timeless, durable and beautiful — but it demands skill to lay properly. We re-slate roofs with natural and fibre-cement slate, matching existing work on period and character properties to the finest detail.',
    image: '/images/gallery/roof-03.jpg',
    bullets: [
      'Natural & fibre-cement slate roofing',
      'Sympathetic work on period properties',
      'Hand-cut hips, valleys and verges',
      'Copper or stainless fixings for longevity',
      'Slate repairs and slipped-slate replacement',
      'A clean, traditional finish that lasts',
    ],
  },
  {
    slug: 'upvc-guttering',
    name: 'UPVC Guttering',
    icon: 'gutter',
    tagline: 'Guttering, fascias & soffits that protect your home.',
    intro:
      'Failing guttering is the silent cause of damp, rot and damaged brickwork. We supply and fit new UPVC guttering, fascias, soffits and downpipes — protecting your home from water damage with a crisp, maintenance-free finish.',
    image: '/images/gallery/roof-14.jpg',
    bullets: [
      'New UPVC guttering and downpipes',
      'Fascias, soffits and bargeboards',
      'Clears and replaces blocked or sagging runs',
      'Choice of colours including black & anthracite',
      'Maintenance-free, long-lasting finish',
      'Protects your walls, foundations and roofline',
    ],
  },
  {
    slug: 'roof-repairs',
    name: 'Roof Repairs',
    icon: 'repair',
    tagline: 'Fast, reliable fixes for leaks & storm damage.',
    intro:
      'Spotted a leak, a slipped tile or storm damage? We carry out prompt, honest roof repairs — diagnosing the real problem and fixing it properly, not just papering over it. Emergency call-outs available across the area.',
    image: '/images/gallery/roof-04.jpg',
    bullets: [
      'Leak detection and lasting repairs',
      'Slipped, cracked and missing tiles or slates',
      'Storm and weather damage put right',
      'Ridge, flashing and chimney repairs',
      'Honest advice — repair, not always replace',
      'Prompt response across Exeter & surrounding areas',
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)

export default services
