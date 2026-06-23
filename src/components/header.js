import { site } from '../data/site.js'
import { icon } from './icon.js'

const NAV = [
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/gallery.html' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact.html' },
]

const navLinks = (cls = '') => NAV.map((n) => `<a class="${cls}" href="${n.href}">${n.label}</a>`).join('')

/** Returns the header markup. Always a solid bar so everything stays readable. */
export function header() {
  return `
  <header class="site-header">
    <div class="container">
      <a class="brand" href="/" aria-label="${site.name} home">
        <span class="brand-mark">JT</span>
        <span>
          <span class="brand-name">${site.shortName}</span><br>
          <span class="brand-sub">${site.serviceArea}</span>
        </span>
      </a>
      <nav class="nav" aria-label="Primary">${navLinks()}</nav>
      <div class="header-cta">
        <a class="btn btn-wa" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')}<span class="label">WhatsApp</span></a>
        <a class="btn btn-primary" href="/contact.html">${icon('mail')}<span class="label">Contact us</span></a>
        <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button>
      </div>
    </div>
  </header>

  <div class="drawer" id="drawer">
    <div class="drawer-scrim" data-close></div>
    <div class="drawer-panel">
      <div class="drawer-head">
        <a class="brand" href="/"><span class="brand-mark">JT</span><span class="brand-name">${site.shortName}</span></a>
        <button class="nav-toggle" data-close aria-label="Close menu">${icon('close')}</button>
      </div>
      <nav aria-label="Mobile">${navLinks()}</nav>
      <div class="drawer-actions">
        <a class="btn btn-primary btn-block" href="/contact.html">${icon('mail')} Contact us</a>
        <a class="btn btn-wa btn-block" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} Message on WhatsApp</a>
        <a class="btn btn-ghost btn-block" href="${site.phone.primaryHref}">${icon('phone')} Call ${site.phone.primary}</a>
      </div>
    </div>
  </div>`
}

/** Wire up the mobile drawer open/close. */
export function initHeader() {
  const drawer = document.getElementById('drawer')
  const toggle = document.getElementById('navToggle')
  if (!drawer || !toggle) return

  const open = () => { drawer.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden' }
  const close = () => { drawer.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '' }

  toggle.addEventListener('click', open)
  drawer.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', close))
  drawer.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', close))
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close() })
}

export default header
