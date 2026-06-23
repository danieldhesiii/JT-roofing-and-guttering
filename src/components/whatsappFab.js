import { site } from '../data/site.js'
import { icon } from './icon.js'

// Floating WhatsApp button (always visible) + a call button that shows on mobile.
export function whatsappFab() {
  return `
  <div class="fab-stack">
    <a class="fab fab-call" href="${site.phone.primaryHref}" aria-label="Call ${site.phone.primary}">${icon('phone')}</a>
    <a class="fab fab-wa" href="${site.whatsapp.url}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('whatsapp')}</a>
  </div>`
}

export default whatsappFab
