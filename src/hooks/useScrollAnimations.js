import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Elements that fade up as they scroll into view (staggered in groups)
const FADE_UP = [
  '.eyebrow',
  '.section-title',
  '.text p',
  '.cta__content p',
  '.cta__content .btn-gold',
  '.chef-awards__item',
  '.award-card',
  '.timeline__row',
  '.kck-form .field',
  '.loc-card',
  '.testimonial',
  '.footer-col',
  '.recipe',
  '.feature',
  '.media-card',
  '.journey__btn',
  '.testimonials__slider',
  '.ig',
  '.fb',
].join(',')

// Images that zoom/fade in
const IMAGES = ['.split > img', '.contact-sec__img img', '.gallery__item', '.loc-map', '.discover__media', '.journey__img'].join(',')

/**
 * GSAP scroll effects for every page. Called from Layout and re-run on each route change.
 * Respects "reduce motion" settings.
 */
export default function useScrollAnimations(pathname) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const q = (sel) => gsap.utils.toArray(sel)

      // Hero heading on page load
      const heroEls = q('.page-hero__title, .awards-hero .container > *, .home-hero__gsb, .home-hero__box')
      if (heroEls.length) {
        gsap.from(heroEls, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.15, delay: 0.1 })
      }

      // Fade-up text blocks
      const textEls = q(FADE_UP)
      if (textEls.length) {
        gsap.set(textEls, { opacity: 0, y: 40 })
        ScrollTrigger.batch(textEls, {
          start: 'top 90%',
          once: true,
          onEnter: (els) =>
            gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1, overwrite: true }),
        })
      }

      // Images
      const imgEls = q(IMAGES)
      if (imgEls.length) {
        gsap.set(imgEls, { opacity: 0, scale: 0.94 })
        ScrollTrigger.batch(imgEls, {
          start: 'top 90%',
          once: true,
          onEnter: (els) =>
            gsap.to(els, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', stagger: 0.12, overwrite: true }),
        })
      }

      // Parallax on CTA background photos
      gsap.utils.toArray('.cta--bg').forEach((sec) => {
        gsap.fromTo(
          sec.querySelector('.cta__bg'),
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        )
      })
    })

    // Recalculate positions once images finish loading (page height changes)
    let t
    const refresh = () => {
      clearTimeout(t)
      t = setTimeout(() => ScrollTrigger.refresh(), 150)
    }
    const imgs = Array.from(document.images).filter((img) => !img.complete)
    imgs.forEach((img) => img.addEventListener('load', refresh))
    window.addEventListener('load', refresh)
    refresh()

    return () => {
      clearTimeout(t)
      imgs.forEach((img) => img.removeEventListener('load', refresh))
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [pathname])
}
