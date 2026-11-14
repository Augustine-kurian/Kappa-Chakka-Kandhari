import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { LOCATIONS } from '../data/site.js'
import hero from '../assets/images/hero-contact.jpg'
import './Contact.css'

export default function Contact() {
  const [active, setActive] = useState(0)
  const loc = LOCATIONS[active]

  return (
    <>
      <PageHero title="Contact Us" image={hero} size="lg" />

      <ContactSection heading={false} reverse />

      {/* Location tabs + map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="loc-tabs">
            {LOCATIONS.map((l, i) => (
              <button
                key={l.city}
                className={i === active ? 'active' : ''}
                onClick={() => setActive(i)}
              >
                {l.city}
              </button>
            ))}
          </div>

          <div className="loc-grid">
            <div className="loc-map">
              <iframe
                key={loc.city}
                title={`Map – ${loc.city}`}
                src={loc.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="loc-details">
              {LOCATIONS.map((l) => (
                <div className="loc-card" key={l.city}>
                  <h3>{l.city}</h3>
                  <p>{l.company}</p>
                  <p>{l.address}</p>
                  <p className="loc-card__gap">{l.phonesFull}</p>
                  <a href={`mailto:${l.email}`}>{l.email}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
