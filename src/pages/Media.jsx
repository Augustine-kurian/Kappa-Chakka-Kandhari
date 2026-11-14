import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { MEDIA } from '../data/media.js'
import hero from '../assets/images/hero-banquets.jpg'
import './pages.css'

const PAGE_SIZE = 9

export default function Media() {
  const [shown, setShown] = useState(PAGE_SIZE)

  return (
    <>
      <PageHero title="MEDIA" image={hero} size="lg" />

      <section className="section">
        <div className="container">
          <div className="center media-head">
            <p className="eyebrow">From Headlines to Heartbeats</p>
            <h2 className="section-title">Kappa Chakka Kandhari in the News</h2>
          </div>

          <div className="media-grid">
            {MEDIA.slice(0, shown).map((m, i) => (
              <article className="media-card" key={i}>
                <p className="media-card__source">{m.source}</p>
                <h3 className="media-card__title">{m.title}</h3>
                <a href={m.url} target="_blank" rel="noreferrer" className="btn-gold media-card__btn">
                  Read More <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>

          {shown < MEDIA.length && (
            <div className="center" style={{ marginTop: 40 }}>
              <button className="btn-gold media-more" onClick={() => setShown((s) => s + PAGE_SIZE)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </>
  )
}
