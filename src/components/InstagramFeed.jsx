import { useEffect, useRef, useState } from 'react'
import { INSTAGRAM_POSTS, LINKS } from '../data/site.js'
import r1 from '../assets/images/recipe-1.webp'
import r2 from '../assets/images/recipe-2.webp'
import r3 from '../assets/images/recipe-3.webp'
import r4 from '../assets/images/recipe-4.webp'
import r5 from '../assets/images/recipe-5.webp'
import food from '../assets/images/home-food.webp'
import './InstagramFeed.css'

const DELAY = 4500
const FALLBACK = [r1, r2, r3, r4, r5, food]

// "https://www.instagram.com/p/CODE/" or ".../reel/CODE/" → clean permalink
const permalink = (url) => {
  const m = url.match(/instagram\.com\/(?:[^/]+\/)?(p|reel|tv)\/([^/?#]+)/)
  return m ? `https://www.instagram.com/${m[1]}/${m[2]}/` : null
}

// Load Instagram's official embed script once, then turn placeholders into full posts
let scriptPromise
function processEmbeds() {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      const s = document.createElement('script')
      s.src = 'https://www.instagram.com/embed.js'
      s.async = true
      s.onload = resolve
      document.body.appendChild(s)
    })
  }
  scriptPromise.then(() => window.instgrm?.Embeds.process())
}

/* One post. The inner HTML is handed to Instagram's script, so React never touches it. */
function InstaPost({ url }) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current.innerHTML = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${url}?utm_source=ig_embed" data-instgrm-version="14"><a href="${url}" target="_blank" rel="noreferrer">View this post on Instagram</a></blockquote>`
    processEmbeds()
  }, [url])
  return <div className="ig__embed" ref={ref} />
}

// how many cards are visible at this screen width
function usePerView() {
  const get = () => (window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3)
  const [pv, setPv] = useState(get)
  useEffect(() => {
    const on = () => setPv(get())
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  return pv
}

export default function InstagramFeed() {
  const posts = INSTAGRAM_POSTS.map(permalink).filter(Boolean).slice(0, 6)
  const items = posts.length ? posts : FALLBACK
  const perView = usePerView()
  const maxIndex = Math.max(0, items.length - perView)
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (i > maxIndex) setI(0)
  }, [maxIndex, i])

  useEffect(() => {
    if (paused || maxIndex === 0) return
    const t = setTimeout(() => setI((x) => (x >= maxIndex ? 0 : x + 1)), DELAY)
    return () => clearTimeout(t)
  }, [i, paused, maxIndex])

  const go = (d) => setI((x) => (x + d < 0 ? maxIndex : x + d > maxIndex ? 0 : x + d))

  return (
    <section className="section ig-sec">
      <div className="container">
        <div className="center">
          <p className="eyebrow">Follow Our Story</p>
          <h2 className="section-title">
            <a href={LINKS.instagram} target="_blank" rel="noreferrer">@kckfoods on Instagram</a>
          </h2>
        </div>

        <div className="ig" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <button className="ig__arrow ig__arrow--prev" onClick={() => go(-1)} aria-label="Previous posts">‹</button>

          <div className="ig__viewport">
            <div
              className="ig__track"
              style={{ '--per-view': perView, transform: `translateX(-${(i * 100) / perView}%)` }}
            >
              {items.map((item, n) => (
                <div className="ig__item" key={n}>
                  {posts.length ? (
                    <InstaPost url={item} />
                  ) : (
                    <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="ig__tile">
                      <img src={item} alt="Kappa Chakka Kandhari on Instagram" loading="lazy" />
                      <span className="ig__overlay">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                        View on Instagram
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button className="ig__arrow ig__arrow--next" onClick={() => go(1)} aria-label="Next posts">›</button>
        </div>

        <div className="ig__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, n) => (
            <button key={n} className={n === i ? 'active' : ''} onClick={() => setI(n)} aria-label={`Go to slide ${n + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
