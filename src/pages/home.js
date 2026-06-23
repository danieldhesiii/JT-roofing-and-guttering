import { site } from '../data/site.js'
import { services } from '../data/services.js'
import { reviews } from '../data/reviews.js'
import { gallery } from '../data/gallery.js'
import { icon } from '../components/icon.js'

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
const spriteFor = (key) =>
  ({ roof: 'roof', flat: 'flat', lead: 'lead', slate: 'slate', gutter: 'gutter', repair: 'repair' }[key] || 'roof')

function heroSection() {
  return `
  <section class="hero">
    <div class="hero-bg"><img src="/images/gallery/roof-03.jpg" alt="JT Roofing re-slating a pitched roof" data-parallax="0.1" fetchpriority="high"></div>
    <div class="container">
      <span class="hero-eyebrow">${icon('pin')} ${site.serviceArea}</span>
      <h1 data-split>Roofing &amp; guttering, <span class="accent">done properly.</span></h1>
      <p class="hero-sub">A family firm with over ${site.yearsExperience} years on the tools — new roofs, flat roofs, leadwork, slate, guttering and repairs. Honest advice, tidy work, and a roof that lasts.</p>
      <div class="hero-actions">
        <a class="btn btn-primary btn-lg" href="/contact.html">Get a free quote ${icon('arrow')}</a>
        <a class="btn btn-wa btn-lg" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} Chat on WhatsApp</a>
      </div>
      <div class="hero-badges">
        <span class="hero-badge">${icon('shield')} <span><strong>${site.yearsExperience}+ years</strong> on the tools</span></span>
        <span class="hero-badge">${icon('check')} <span><strong>Checkatrade</strong> vetted</span></span>
        <span class="hero-badge">${icon('check')} <span><strong>Free</strong> quotes</span></span>
        <span class="hero-badge">${icon('check')} <span><strong>Fully</strong> insured</span></span>
      </div>
    </div>
    <div class="scroll-cue"><span class="mouse"></span><span>Scroll</span></div>
  </section>`
}

function trustBar() {
  return `
  <section class="trustbar">
    <div class="container">
      ${site.trust.map((t) => `<div class="trust-item"><span class="v">${t.value}</span><span class="l">${t.label}</span></div>`).join('')}
    </div>
  </section>`
}

function servicesSection() {
  const cards = services
    .map(
      (s, i) => `
      <a class="service-card" href="/services/${s.slug}.html" data-reveal data-reveal-delay="${(i % 3) + 1}">
        <img src="${s.image}" alt="${s.name} by JT Roofing" loading="lazy">
        <span class="index">0${i + 1}</span>
        <span class="ic">${icon(spriteFor(s.icon))}</span>
        <div class="body">
          <h3>${s.name}</h3>
          <p>${s.tagline}</p>
          <span class="more">View service ${icon('arrow')}</span>
        </div>
      </a>`
    )
    .join('')
  return `
  <section class="section" id="services">
    <div class="container">
      <div class="services-head" data-reveal>
        <div>
          <span class="eyebrow">What we do</span>
          <h2>Specialist roofing, from a single tile to a full re-roof</h2>
        </div>
        <p>Whatever the job, you get the same craft and the same care — and a crew that cleans up after itself.</p>
      </div>
      <div class="services-grid">${cards}</div>
    </div>
  </section>`
}

function aboutSection() {
  return `
  <section class="section" id="about">
    <div class="container">
      <div class="about-split">
        <div class="about-media" data-reveal>
          <img src="/images/gallery/roof-05.jpg" alt="A finished tiled roof by JT Roofing">
          <div class="floater">
            <div class="big">${site.yearsExperience}+</div>
            <div class="small">years keeping local homes watertight</div>
          </div>
        </div>
        <div class="about-copy" data-reveal data-reveal-delay="1">
          <span class="eyebrow">Why JT Roofing</span>
          <h2>A local name worth trusting with your roof</h2>
          <p>We're a family-run roofing and guttering firm built on word of mouth and repeat custom. For more than four decades we've looked after homes across ${site.serviceArea} — and we treat every roof like it's our own.</p>
          <ul class="about-points">
            <li>${icon('check')} <span><strong>Straight answers.</strong> If a repair will do the job, we'll say so — we won't sell you a roof you don't need.</span></li>
            <li>${icon('check')} <span><strong>Tidy crews.</strong> Your property left clean at the end of every day.</span></li>
            <li>${icon('check')} <span><strong>Work that's guaranteed</strong> — and fully insured, for real peace of mind.</span></li>
          </ul>
          <div class="stats">
            <div class="stat"><div class="n"><span data-count="40" data-suffix="+"></span></div><div class="t">Years experience</div></div>
            <div class="stat"><div class="n"><span data-count="1500" data-suffix="+"></span></div><div class="t">Roofs completed</div></div>
            <div class="stat"><div class="n"><span data-count="100" data-suffix="%"></span></div><div class="t">Work guaranteed</div></div>
            <div class="stat"><div class="n">5.0</div><div class="t">Customer rating</div></div>
          </div>
          <div class="hero-actions" style="margin-top:2rem">
            <a class="btn btn-dark btn-lg" href="/contact.html">Get your free quote ${icon('arrow')}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`
}

function galleryTeaser() {
  const layout = ['tall', '', '', 'wide', '', 'tall', '', '']
  const tiles = gallery
    .slice(0, 8)
    .map((g, i) => `<a class="tile ${layout[i] || ''}" href="/gallery.html" data-reveal data-reveal-delay="${(i % 4) + 1}" aria-label="View gallery"><img src="${g.src}" alt="${g.alt}" loading="lazy"></a>`)
    .join('')
  return `
  <section class="section gallery-teaser">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Our work</span>
        <h2>Real roofs, real results</h2>
        <p>Recent jobs from around the area — every one finished to the same standard.</p>
      </div>
      <div class="gallery-grid">${tiles}</div>
      <div style="text-align:center;margin-top:2.5rem">
        <a class="btn btn-dark btn-lg" href="/gallery.html">See the full gallery ${icon('arrow')}</a>
      </div>
    </div>
  </section>`
}

function reviewsSection() {
  const cards = reviews
    .map(
      (r, i) => `
      <div class="r-card" data-reveal data-reveal-delay="${i + 1}">
        <div class="review-stars">${icon('star').repeat(5)}</div>
        <blockquote>${r.quote}</blockquote>
        <div class="review-author">
          <span class="avatar">${initials(r.name)}</span>
          <span class="meta"><strong>${r.name}</strong><span>${r.role}</span></span>
        </div>
      </div>`
    )
    .join('')
  return `
  <section class="section reviews" id="reviews">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">What our customers say</span>
        <h2>Trusted by homeowners across ${site.serviceArea}</h2>
      </div>
      <div class="reviews-grid">${cards}</div>
      <div class="reviews-cta" data-reveal>
        <div class="rscore">
          <span class="num">5.0</span>
          <div>
            <div class="review-stars">${icon('star').repeat(5)}</div>
            <div class="rnote">Rated by real customers</div>
          </div>
        </div>
        <div class="review-platforms">
          <a class="chip fb" href="${site.socials.facebook}" target="_blank" rel="noopener">${icon('facebook')} Visit our Facebook</a>
          <a class="chip" href="${site.socials.checkatrade}" target="_blank" rel="noopener">${icon('shield')} Checkatrade</a>
          <a class="chip" href="${site.socials.google}" target="_blank" rel="noopener">${icon('google')} Google reviews</a>
        </div>
      </div>
    </div>
  </section>`
}

function ctaBand() {
  return `
  <section class="section cta-band" id="contact">
    <div class="bg"><img src="/images/gallery/roof-14.jpg" alt=""></div>
    <div class="container">
      <span class="eyebrow">Free, no-obligation quote</span>
      <h2>Got a roofing job in mind? Let's talk.</h2>
      <p>Head to our contact page to send a few details, message us on WhatsApp, or give us a call. We'll take a look and give you honest, no-pressure advice.</p>
      <div class="hero-actions">
        <a class="btn btn-light btn-lg" href="/contact.html">${icon('mail')} Go to contact page ${icon('arrow')}</a>
        <a class="btn btn-wa btn-lg" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} Message on WhatsApp</a>
      </div>
    </div>
  </section>`
}

export function homeContent() {
  return (
    heroSection() +
    trustBar() +
    servicesSection() +
    aboutSection() +
    galleryTeaser() +
    reviewsSection() +
    ctaBand()
  )
}

export default homeContent
