import './../styles/main.css'
import { site } from '../data/site.js'
import { services, getService } from '../data/services.js'
import { gallery } from '../data/gallery.js'
import { icon } from '../components/icon.js'
import { chrome, boot } from '../components/layout.js'

const spriteFor = (key) =>
  ({ roof: 'roof', flat: 'flat', lead: 'lead', slate: 'slate', gutter: 'gutter', repair: 'repair' }[key] || 'roof')

function serviceContent(s) {
  const includes = s.bullets.map((b) => `<li>${icon('check')} <span>${b}</span></li>`).join('')

  // A few related job photos for the strip.
  const strip = gallery
    .slice(0, 6)
    .map((g) => `<a class="tile" href="/gallery.html" data-reveal><img src="${g.src}" alt="${g.alt}" loading="lazy"></a>`)
    .join('')

  const others = services
    .filter((o) => o.slug !== s.slug)
    .map(
      (o) => `
      <a class="svc-chip" href="/services/${o.slug}.html">
        <span class="ic">${icon(spriteFor(o.icon))}</span>
        <span>${o.name}</span>
        ${icon('arrow', 'icon icon-arrow')}
      </a>`
    )
    .join('')

  return `
  <section class="svc-hero">
    <div class="bg"><img src="${s.image}" alt="${s.name}"></div>
    <div class="container">
      <div class="crumbs"><a href="/">Home</a> / <a href="/#services">Services</a> / ${s.name}</div>
      <span class="eyebrow" style="color:#fff">${site.shortName} · ${s.tagline}</span>
      <h1 data-split>${s.name}</h1>
      <p>${s.intro}</p>
      <div class="hero-actions">
        <a class="btn btn-primary btn-lg" href="/contact.html">Get a free quote ${icon('arrow')}</a>
        <a class="btn btn-wa btn-lg" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp us</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="svc-body">
        <div data-reveal>
          <span class="eyebrow">What's included</span>
          <h2 style="font-size:var(--fs-h2);margin:.75rem 0 1.2rem">Everything you get with our ${s.name.toLowerCase()}</h2>
          <p class="intro">${s.intro}</p>
          <ul class="svc-includes">${includes}</ul>
        </div>
        <aside class="svc-aside" data-reveal data-reveal-delay="1">
          <h3>Free, no-obligation quote</h3>
          <p>Tell us about your job and we'll get back to you fast with honest advice and a fair price.</p>
          <a class="btn btn-wa" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} Chat on WhatsApp</a>
          <a class="btn btn-light" href="${site.phone.primaryHref}">${icon('phone')} ${site.phone.primary}</a>
          <a class="btn btn-ghost on-ink" href="/contact.html">Request a callback</a>
        </aside>
      </div>
    </div>
  </section>

  <section class="section tight gallery-teaser">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Recent work</span>
        <h2>Jobs we're proud of</h2>
      </div>
      <div class="gallery-grid" style="grid-auto-rows:200px">${strip}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center"><span class="eyebrow">More services</span><h2>We also cover</h2></div>
      <div class="svc-other-grid">${others}</div>
    </div>
  </section>

  <section class="section cta-band">
    <div class="bg"><img src="/images/gallery/roof-05.jpg" alt=""></div>
    <div class="container">
      <h2>Ready to get started?</h2>
      <p>Get in touch today for a free, no-obligation quote on your ${s.name.toLowerCase()}.</p>
      <div class="hero-actions">
        <a class="btn btn-wa btn-lg" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} Message on WhatsApp</a>
        <a class="btn btn-light btn-lg" href="${site.phone.primaryHref}">${icon('phone')} Call ${site.phone.primary}</a>
      </div>
    </div>
  </section>`
}

const app = document.querySelector('#app')
const slug = app.dataset.service
const svc = getService(slug)

if (!svc) {
  app.innerHTML = chrome(
    `<section class="section" style="padding-top:calc(var(--header-h) + 6rem);text-align:center"><div class="container"><h1>Service not found</h1><p class="lead">Sorry, we couldn't find that service.</p><a class="btn btn-primary" href="/#services">View all services</a></div></section>`
  )
} else {
  document.title = `${svc.name} | ${site.name}`
  app.innerHTML = chrome(serviceContent(svc), { onDark: true })
}

boot()
