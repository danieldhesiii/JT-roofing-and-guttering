import { site } from '../data/site.js'
import { services } from '../data/services.js'
import { icon } from './icon.js'

export function footer() {
  const year = new Date().getFullYear()
  const serviceLinks = services
    .map((s) => `<li><a href="/services/${s.slug}.html">${s.name}</a></li>`)
    .join('')

  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="/"><span class="brand-mark">JT</span><span class="brand-name" style="color:#fff">${site.shortName}</span></a>
          <p>${site.description}</p>
          <div class="footer-socials">
            <a href="${site.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook')}</a>
            <a href="${site.socials.google}" target="_blank" rel="noopener" aria-label="Google reviews">${icon('google')}</a>
            <a href="${site.whatsapp.url}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('whatsapp')}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>${serviceLinks}</ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="/#about">About us</a></li>
            <li><a href="/gallery.html">Gallery</a></li>
            <li><a href="/#reviews">Reviews</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><a href="${site.phone.primaryHref}">${site.phone.primary}</a></li>
            ${site.phone.others.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
            <li><a href="mailto:${site.email}">${site.email}</a></li>
            <li>${site.serviceArea}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} ${site.name}. All rights reserved.</span>
        <span>Over ${site.yearsExperience} years' experience · Checkatrade vetted</span>
      </div>
    </div>
  </footer>`
}

export default footer
