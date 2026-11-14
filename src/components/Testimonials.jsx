import { useEffect, useState } from 'react'
import { TESTIMONIALS } from '../data/site.js'
import bg from '../assets/images/bg-testimonials.jpg'
import './Testimonials.css'

const DELAY = 6000

// "Voices of Delight" – auto-playing review slider on a backwaters background.
export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = TESTIMONIALS.length

  useEffect(() => {
    if (paused || n < 2) return
    const t = setTimeout(() => setI((x) => (x + 1) % n), DELAY)
    return () => clearTimeout(t)
  }, [i, paused, n])

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

        <div className="testimonials__slider">
          {TESTIMONIALS.map((t, n2) => (
            <figure key={t.name} className={`testimonial ${n2 === i ? 'is-active' : ''}`} aria-hidden={n2 !== i}>
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
            {TESTIMONIALS.map((t, n2) => (
              <button
                key={t.name}
                className={n2 === i ? 'active' : ''}
                onClick={() => setI(n2)}
                aria-label={`Show review ${n2 + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
