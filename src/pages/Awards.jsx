import ContactSection from '../components/ContactSection.jsx'
import hero from '../assets/images/hero-awards.jpg'
import badge from '../assets/images/award-badge.png'
import './Awards.css'

const chefAwards = [
  { title: 'Best Chef Milan 2025', sub: 'One Knife' },
  { title: 'Zee Zest Unlimit Awards 2024', sub: 'Chef of the year' },
  { title: 'Hospitality Horizon Top Chefs Award 2024', sub: 'Hall of Fame' },
  { title: 'The Best Chef Dubai 2024', sub: 'One Knife' },
  { title: 'Food Superstar', sub: 'Hall of fame 2024' },
  { title: 'Food Superstar', sub: 'Chef 2022 & 2023' },
  { title: 'International Hospitality Day Award 2019', sub: 'IHC Best Entrepreneur' },
  { title: 'Times Food & Nightlife Awards 2019', sub: 'Chef of the year' },
]

const timeline = [
  {
    year: 2025,
    items: [
      'Conde Nast Traveller x District- Top Restaurant Awards 2025 No. 31.',
      'Hospitality Horizon Epicurean Restaurant Ratings Chennai – 3 Stars in 2025.',
      'Veeba Food Food Restaurant Awards 2025- Standalone Restaurant #11 for KCK Chennai.',
      'NDTV Food Awards – Best Regional Indian Premium Dining Restaurant Awards 2025.',
      'Culinary Culture Ultimate Restaurant Ratings 2025',
      ['KCK Chennai: 4 Stars', 'KCK Bangalore: 3 Stars'],
    ],
  },
  {
    year: 2024,
    items: [
      'Conde Nast Traveler x Zomato- Top Restaurant Awards 2024, No. 44.',
      'Culinary Culture Ultimate Restaurant Ratings 2024.',
      ['KCK Chennai: 4 Stars', 'KCK Bangalore: 3 Stars'],
    ],
  },
  { year: 2023, items: ['Conde Nast Traveler x Zomato- Top Restaurant Awards 2023 No. 22.'] },
  {
    year: 2022,
    items: [
      'Times Food & Nightlife Awards- Best Kerala- Casual Dining category- 2022.',
      'Restaurant Awards 2022- KCK, Chennai- Best Chef-Led Restaurant of the year 2022.',
    ],
  },
  { year: 2021, items: ['Times Food & Nightlife Awards-Best Kerala- Casual Dining category- 2021.'] },
  { year: 2020, items: ['Times Food & Nightlife Award – Best Kerala- Casual Dining category- 2020.'] },
  {
    year: 2019,
    items: [
      'Conde Nast Traveler Top Restaurant Awards 2019- No. 23.',
      'Epicurean Guild Awards recognizing KCK Chennai as a part of The Oyster Club- 2019.',
    ],
  },
]

export default function Awards() {
  return (
    <>
      {/* Hero */}
      <section className="awards-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="container center">
          <p className="awards-hero__eyebrow">Recognition &amp; Excellence</p>
          <h1>Awards &amp; Accolades</h1>
          <p className="awards-hero__sub">
            Celebrating culinary excellence, innovation, and hospitality across the globe.
          </p>
        </div>
      </section>

      {/* Chef award cards */}
      <section className="awards-cards">
        <div className="container awards-grid">
          {chefAwards.map((a, i) => (
            <div className="award-card" key={i}>
              <img src={badge} alt="" />
              <h3>{a.title}</h3>
              <p>{a.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurant awards timeline */}
      <section className="awards-timeline">
        <div className="awards-banner">
          <h2>KAPPA CHAKKA KANDHARI AWARDS</h2>
          <p>Milestones earned through flavour, culture, and heartfelt hospitality.</p>
        </div>

        <div className="container timeline">
          {timeline.map((t) => (
            <div className="timeline__row" key={t.year}>
              <div className="timeline__year">
                <span>{t.year}</span>
                <i className="timeline__dot" />
              </div>
              <ul className="timeline__box">
                {t.items.map((item, i) =>
                  Array.isArray(item) ? (
                    <li key={i} className="timeline__stars">
                      {item.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </li>
                  ) : (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  )
}
