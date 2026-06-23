import './../styles/main.css'
import { site } from '../data/site.js'
import { gallery, galleryCategories } from '../data/gallery.js'
import { icon } from '../components/icon.js'
import { chrome, boot } from '../components/layout.js'

function galleryContent() {
  const filters = galleryCategories
    .map((c, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${c.id}">${c.label}</button>`)
    .join('')

  const tiles = gallery
    .map(
      (g, i) => `
      <button class="tile" data-cat="${g.cat}" data-index="${i}" aria-label="View ${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy">
      </button>`
    )
    .join('')

  return `
  <section class="svc-hero" style="padding-bottom:clamp(2.5rem,6vw,4rem)">
    <div class="bg"><img src="/images/gallery/roof-03.jpg" alt=""></div>
    <div class="container">
      <div class="crumbs"><a href="/">Home</a> / Gallery</div>
      <span class="eyebrow" style="color:#fff">Our work</span>
      <h1 data-split>Gallery</h1>
      <p>A selection of real jobs completed across ${site.serviceArea} — new roofs, slate, leadwork, flat roofs, guttering and repairs.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="gallery-filters">${filters}</div>
      <div class="gallery-grid" id="galleryGrid" style="grid-auto-rows:240px">${tiles}</div>
    </div>
  </section>

  <section class="section cta-band">
    <div class="bg"><img src="/images/gallery/roof-14.jpg" alt=""></div>
    <div class="container">
      <h2>Like what you see?</h2>
      <p>Get a free, no-obligation quote for your own roofing or guttering project.</p>
      <div class="hero-actions">
        <a class="btn btn-wa btn-lg" href="${site.whatsapp.url}" target="_blank" rel="noopener">${icon('whatsapp')} Message on WhatsApp</a>
        <a class="btn btn-light btn-lg" href="/contact.html">Get a free quote ${icon('arrow')}</a>
      </div>
    </div>
  </section>

  <div class="lightbox" id="lightbox" aria-hidden="true">
    <button class="lb-close" data-lb-close aria-label="Close">${icon('close')}</button>
    <button class="lb-nav lb-prev" data-lb-prev aria-label="Previous">${icon('arrow')}</button>
    <img id="lbImg" src="" alt="">
    <button class="lb-nav lb-next" data-lb-next aria-label="Next">${icon('arrow')}</button>
  </div>`
}

document.title = `Gallery | ${site.name}`
document.querySelector('#app').innerHTML = chrome(galleryContent(), { onDark: true })
boot()

// ---- Filtering ----
const grid = document.getElementById('galleryGrid')
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')
    const f = btn.dataset.filter
    grid.querySelectorAll('.tile').forEach((t) => {
      t.style.display = f === 'all' || t.dataset.cat === f ? '' : 'none'
    })
  })
})

// ---- Lightbox ----
const lb = document.getElementById('lightbox')
const lbImg = document.getElementById('lbImg')
let current = 0
const visibleTiles = () => [...grid.querySelectorAll('.tile')].filter((t) => t.style.display !== 'none')

function openLb(index) {
  current = index
  const tiles = visibleTiles()
  const img = tiles[current]?.querySelector('img')
  if (!img) return
  lbImg.src = img.src
  lbImg.alt = img.alt
  lb.classList.add('open')
  lb.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
}
function closeLb() {
  lb.classList.remove('open')
  lb.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}
function step(dir) {
  const tiles = visibleTiles()
  current = (current + dir + tiles.length) % tiles.length
  const img = tiles[current].querySelector('img')
  lbImg.src = img.src
  lbImg.alt = img.alt
}

grid.querySelectorAll('.tile').forEach((tile) => {
  tile.addEventListener('click', () => openLb(visibleTiles().indexOf(tile)))
})
lb.querySelector('[data-lb-close]').addEventListener('click', closeLb)
lb.querySelector('[data-lb-prev]').addEventListener('click', () => step(-1))
lb.querySelector('[data-lb-next]').addEventListener('click', () => step(1))
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb() })
document.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return
  if (e.key === 'Escape') closeLb()
  if (e.key === 'ArrowLeft') step(-1)
  if (e.key === 'ArrowRight') step(1)
})
