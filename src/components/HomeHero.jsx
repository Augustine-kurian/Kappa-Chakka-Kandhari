import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMenuModal } from '../context/MenuModal.jsx'
import nets from '../assets/images/hero-home-nets.jpg'
import banquet from '../assets/images/banquet-3.webp'
import dining from '../assets/images/catering-1.webp'
import interior from '../assets/images/hero-contact.jpg'
import grandSundayLogo from '../assets/images/grand-sunday-logo-white.png'
import './HomeHero.css'

// Background slides – add/remove images here
const SLIDES = [
  { src: nets, alt: 'Chinese fishing nets at sunset, Kerala' },
  { src: dining, alt: 'Kappa Chakka Kandhari dining hall' },
  { src: banquet, alt: 'Banquet hall set for an event' },
  { src: interior, alt: 'Restaurant interiors' },
]
const DELAY = 6000

export default function HomeHero() {
  const [i, setI] = useState(0)
  const { openMenu } = useMenuModal()

  useEffect(() => {
    const t = setTimeout(() => setI((x) => (x + 1) % SLIDES.length), DELAY)
    return () => clearTimeout(t)
  }, [i])

  return (
    <section className="home-hero">
      <div className="home-hero__slides" aria-hidden="true">
        {SLIDES.map((s, n) => (
          <div
            key={n}
            className={`home-hero__slide ${n === i ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${s.src})` }}
            role="img"
            aria-label={s.alt}
          />
        ))}
      </div>

      <div className="container home-hero__content">
        <button className="home-hero__gsb" onClick={openMenu} aria-label="View the Grand Sunday Breakfast menu">
          <img src={grandSundayLogo} alt="Grand Sunday Breakfast" />
        </button>

        <div className="home-hero__box">
          <p className="home-hero__eyebrow">Rediscover the Toddy Shop Food of Kerala</p>
          <h1>Explore Our Rich Culinary Heritage of Tastes, Ingredients, and Memories</h1>
          <Link to="/menu" className="home-hero__btn">Savor Tradition Today!</Link>
        </div>
      </div>

      <div className="home-hero__dots">
        {SLIDES.map((_, n) => (
          <button key={n} className={n === i ? 'active' : ''} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} />
        ))}
      </div>
    </section>
  )
}
