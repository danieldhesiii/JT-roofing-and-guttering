// Animation foundation for the JT Roofing site.
// - Lenis: smooth scroll, driven by GSAP's ticker so scroll + tweens share one clock
// - GSAP + ScrollTrigger: scroll-linked reveals, parallax, counters
// - Splitting.js: word/character splitting for heading reveals
// - Swiper: carousel helper, available for components when needed

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Splitting from 'splitting'
import 'splitting/dist/splitting.css'

import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

gsap.registerPlugin(ScrollTrigger)

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis

/** Smooth scroll, synced with the GSAP ticker so ScrollTrigger stays in step. */
export function initSmoothScroll() {
  if (reduceMotion) return null
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}

/** Smoothly scroll to an in-page anchor (used by nav links). */
export function scrollTo(target) {
  if (lenis) lenis.scrollTo(target, { offset: -76 })
  else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Split every `[data-split]` heading into chars and reveal them on scroll.
 */
export function initHeadingReveals() {
  const targets = document.querySelectorAll('[data-split]')
  if (!targets.length) return
  Splitting({ target: targets, by: 'chars' })
  if (reduceMotion) return
  targets.forEach((el) => {
    const chars = el.querySelectorAll('.char')
    // If the heading is already on screen at load (e.g. the hero), play immediately
    // so a ScrollTrigger that never advances can't leave the text stuck invisible.
    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.9
    const tween = {
      yPercent: 115,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.018,
    }
    if (inView) gsap.from(chars, tween)
    else gsap.from(chars, { ...tween, scrollTrigger: { trigger: el, start: 'top 88%' } })
  })
}

/**
 * Generic scroll reveal for any `[data-reveal]` element (CSS handles the transition;
 * we just toggle .is-in via IntersectionObserver — robust and cheap).
 */
export function initReveals() {
  const els = document.querySelectorAll('[data-reveal]')
  if (!els.length) return
  if (reduceMotion) {
    els.forEach((el) => el.classList.add('is-in'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  els.forEach((el) => io.observe(el))
}

/** Parallax: elements with [data-parallax] (value = speed, e.g. 0.2). */
export function initParallax() {
  if (reduceMotion) return
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax) || 0.2
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  })
}

/** Count-up numbers for [data-count] elements when they scroll into view. */
export function initCounters() {
  document.querySelectorAll('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count)
    const suffix = el.dataset.suffix || ''
    if (reduceMotion) { el.textContent = end + suffix; return }
    const obj = { v: 0 }
    gsap.to(obj, {
      v: end,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.v) + suffix },
    })
  })
}

/** Header: add .scrolled past a threshold. */
export function initStickyHeader() {
  const header = document.querySelector('.site-header')
  if (!header) return
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

/**
 * Initialize a Swiper carousel. Markup: `.swiper` > `.swiper-wrapper` > `.swiper-slide`.
 */
export function initCarousel(target, options = {}) {
  return new Swiper(target, {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    ...options,
  })
}

/** Run the standard set of page-wide animations. */
export function initPageAnimations() {
  initSmoothScroll()
  initStickyHeader()
  initHeadingReveals()
  initReveals()
  initParallax()
  initCounters()
}

export { lenis, gsap, ScrollTrigger, Splitting, Swiper }
