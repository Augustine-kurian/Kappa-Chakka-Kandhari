import { useCallback, useEffect, useRef, useState } from 'react'
import { TESTIMONIALS } from '../data/site.js'
import bg from '../assets/images/bg-testimonials.jpg'
import './Testimonials.css'

const DELAY = 6000 // time each review stays on screen
const FADE = 450 // must match the transition time in Testimonials.css

// "Voices of Delight" – auto-playing review slider on a backwaters background.
// Order of a change: old review fades out → review switches → new review fades in.
export default function Testimonials() {
  const [i, setI] = useState(0) // review currently on screen
  const [shown, setShown] = useState(true) // false while the old one is fading out
  const [paused, setPaused] = useState(false)
  const busy = useRef(false)
  const n = TESTIMONIALS.length

  const goTo = useCallback(
    (next) => {
      if (busy.current || next === i) return
      busy.current = true
      setShown(false) // 1. fade the current one out
      setTimeout(() => {
        setI(next) // 2. switch only after it is fully hidden
        setShown(true) // 3. fade the new one in
        busy.current = false
      }, FADE)
    },
    [i]
  )

  // autoplay
  useEffect(() => {
    if (paused || n < 2) return
    const t = setTimeout(() => goTo((i + 1) % n), DELAY)
    return () => clearTimeout(t)
  }, [i, paused, n, goTo])

  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${bg})` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="center">
          <p className="eyebrow">Voices of Delight</p>
          <h2 className="section-title">Stories of Joy and Flavor at Kappa Chakka Kandhari</h2>
        </div>

        {/* all reviews sit in the same spot (keeps the height steady); only the current one is visible */}
        <div className="testimonials__slider">
          {TESTIMONIALS.map((t, k) => (
            <figure
              key={t.name}
              className={`testimonial ${k === i ? 'is-current' : ''} ${k === i && shown ? 'is-shown' : ''}`}
              aria-hidden={k !== i}
            >
              <span className="testimonial__mark" aria-hidden="true">“</span>
              <div className="testimonial__body">
                <blockquote>{t.quote}</blockquote>
                <figcaption>{t.name}</figcaption>
              </div>
            </figure>
          ))}
        </div>

        {n > 1 && (
          <div className="testimonials__dots">
            {TESTIMONIALS.map((t, k) => (
              <button
                key={t.name}
                className={k === i ? 'active' : ''}
                onClick={() => goTo(k)}
                aria-label={`Show review ${k + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
