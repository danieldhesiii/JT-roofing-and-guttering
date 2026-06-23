import './../styles/main.css'
import { site } from '../data/site.js'
import { services } from '../data/services.js'
import { icon } from '../components/icon.js'
import { chrome, boot } from '../components/layout.js'

function contactContent() {
  const options = services.map((s) => `<option value="${s.name}">${s.name}</option>`).join('')
  const otherPhones = site.phone.others
    .map((p) => `<a href="${p.href}">${p.label}</a>`)
    .join(' · ')

  return `
  <section class="svc-hero" style="padding-bottom:clamp(2.5rem,6vw,4rem)">
    <div class="bg"><img src="/images/gallery/roof-09.jpg" alt=""></div>
    <div class="container">
      <div class="crumbs"><a href="/">Home</a> / Contact</div>
      <span class="eyebrow" style="color:#fff">Get in touch</span>
      <h1 data-split>Let's talk roofing</h1>
      <p>Free, no-obligation quotes across ${site.serviceArea}. Message us on WhatsApp for the fastest reply, or send the form below.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-split">
        <div data-reveal>
          <span class="eyebrow">Contact details</span>
          <h2 style="font-size:var(--fs-h2);margin:.75rem 0 1.5rem">We're easy to reach</h2>
          <div class="contact-info">
            <div class="contact-row">
              <span class="ic">${icon('whatsapp')}</span>
              <div><h4>WhatsApp</h4><a href="${site.whatsapp.url}" target="_blank" rel="noopener">Chat to us now on ${site.phone.primary}</a></div>
            </div>
            <div class="contact-row">
              <span class="ic">${icon('phone')}</span>
              <div><h4>Call us</h4><a href="${site.phone.primaryHref}">${site.phone.primary}</a><p style="margin-top:.2rem">${otherPhones}</p></div>
            </div>
            <div class="contact-row">
              <span class="ic">${icon('mail')}</span>
              <div><h4>Email</h4><a href="mailto:${site.email}">${site.email}</a></div>
            </div>
            <div class="contact-row">
              <span class="ic">${icon('pin')}</span>
              <div><h4>Area covered</h4><p>${site.serviceArea}</p></div>
            </div>
          </div>
          <div class="footer-socials" style="margin-top:1.8rem">
            <a href="${site.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook" style="background:var(--ink);color:#fff">${icon('facebook')}</a>
            <a href="${site.socials.google}" target="_blank" rel="noopener" aria-label="Google" style="background:var(--ink);color:#fff">${icon('google')}</a>
            <a href="${site.socials.checkatrade}" target="_blank" rel="noopener" aria-label="Checkatrade" style="background:var(--ink);color:#fff">${icon('shield')}</a>
          </div>
          <div class="map-wrap">
            <iframe title="Service area map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Exeter%2C%20UK&output=embed"></iframe>
          </div>
        </div>

        <div class="contact-card" data-reveal data-reveal-delay="1">
          <h3 style="font-family:var(--font-display);font-size:var(--fs-h3);margin-bottom:.4rem">Request a free quote</h3>
          <p class="lead" style="font-size:1rem;margin-bottom:1.4rem">Fill this in and we'll get straight back to you.</p>
          <form class="form-grid" id="quoteForm">
            <div class="two">
              <div class="field"><label for="name">Your name</label><input id="name" name="name" required placeholder="Jane Smith"></div>
              <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" required placeholder="07…"></div>
            </div>
            <div class="field"><label for="service">Service needed</label><select id="service" name="service"><option value="">Choose a service…</option>${options}<option value="Something else">Something else</option></select></div>
            <div class="field"><label for="message">Tell us about the job</label><textarea id="message" name="message" placeholder="e.g. A few slipped tiles after the storm, mid-terrace house…"></textarea></div>
            <button class="btn btn-primary btn-lg btn-block" type="submit">Send my enquiry ${icon('arrow')}</button>
            <a class="btn btn-wa btn-block" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} Or message us on WhatsApp</a>
            <p id="formNote" style="font-size:.85rem;color:var(--text-soft);text-align:center"></p>
          </form>
        </div>
      </div>
    </div>
  </section>`
}

document.title = `Contact | ${site.name}`
document.querySelector('#app').innerHTML = chrome(contactContent(), { onDark: true })
boot()

// No backend: compose a WhatsApp message (fast) with a mailto fallback.
const form = document.getElementById('quoteForm')
const note = document.getElementById('formNote')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const name = data.get('name') || ''
  const phone = data.get('phone') || ''
  const service = data.get('service') || 'General enquiry'
  const message = data.get('message') || ''
  const text = `New enquiry via website%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADetails: ${message}`
  note.textContent = 'Opening WhatsApp… if nothing happens, call us on ' + site.phone.primary + '.'
  window.open(`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(decodeURIComponent(text))}`, '_blank')
})
