import { header, initHeader } from './header.js'
import { footer } from './footer.js'
import { whatsappFab } from './whatsappFab.js'
import { initPageAnimations, scrollTo } from '../animations.js'

/** Wrap page content with header/footer/FAB and return the full markup. */
export function chrome(mainHtml) {
  return `<a class="skip-link" href="#main">Skip to content</a>${header()}<main id="main">${mainHtml}</main>${footer()}${whatsappFab()}`
}

/** Boot shared behaviour: drawer, scroll animations, smooth in-page anchors. */
export function boot() {
  document.documentElement.classList.add('grain')
  initHeader()
  initPageAnimations()

  // Smooth-scroll same-page anchor links (e.g. /#services from the same page).
  document.querySelectorAll('a[href^="/#"], a[href^="#"]').forEach((a) => {
    const hash = a.getAttribute('href').replace(/^\//, '')
    if (!hash.startsWith('#') || hash === '#') return
    const target = document.querySelector(hash)
    if (!target) return
    a.addEventListener('click', (e) => { e.preventDefault(); scrollTo(hash) })
  })
}

export default chrome
