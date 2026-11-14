import { Link } from 'react-router-dom'
import HomeHero from '../components/HomeHero.jsx'
import InstagramFeed from '../components/InstagramFeed.jsx'
import Testimonials from '../components/Testimonials.jsx'
import chef from '../assets/images/home-chef.webp'
import food from '../assets/images/home-food.webp'
import pudding from '../assets/images/home-pudding.webp'
import mandala from '../assets/images/mandala-pattern.webp'
import r1 from '../assets/images/recipe-1.webp'
import r2 from '../assets/images/recipe-2.webp'
import r3 from '../assets/images/recipe-3.webp'
import r4 from '../assets/images/recipe-4.webp'
import r5 from '../assets/images/recipe-5.webp'
import './Home.css'

const recipes = [
  { img: r1, name: 'Puttu Biriyani' },
  { img: r2, name: 'Kadala Curry' },
  { img: r3, name: 'Kappa & Kodampuli Fish Curry' },
  { img: r4, name: 'Cloud Pudding' },
  { img: r5, name: 'Passion Fruit Juice' },
]

/* simple gold line icons */
const Icon = {
  bowl: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 24h38a19 19 0 01-38 0z" />
      <path d="M17 42h14" />
      <path d="M14 22c0-5 3-8 7-9M22 22c1-6 5-9 10-9M30 22c2-4 5-6 9-6" />
      <path d="M9 13c2-3 5-4 8-3-1 3-4 5-8 3zM34 8c2 0 4 2 4 4-2 0-4-2-4-4z" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M24 3l4 3 5-1 2 5 5 2-1 5 3 4-3 4 1 5-5 2-2 5-5-1-4 3-4-3-5 1-2-5-5-2 1-5-3-4 3-4-1-5 5-2 2-5 5 1z" />
      <circle cx="24" cy="21" r="10" />
      <path d="M24 27c-4-2-5-6-3-9 1 3 3 4 3 4s2-1 3-4c2 3 1 7-3 9z" />
      <path d="M15 37l-4 9 5-2 3 4 3-9M33 37l4 9-5-2-3 4-3-9" />
    </svg>
  ),
  pot: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 24h32v10a8 8 0 01-8 8H16a8 8 0 01-8-8z" />
      <path d="M4 26h4M40 26h4M6 22h36" />
      <path d="M20 22a4 4 0 018 0" />
      <path d="M17 15c-2-2 2-4 0-6M24 15c-2-2 2-4 0-6M31 15c-2-2 2-4 0-6" />
      <path d="M14 46h20" />
    </svg>
  ),
  hat: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 30c-6-1-9-6-7-11s8-6 11-3c1-5 5-8 8-8s7 3 8 8c3-3 9-2 11 3s-1 10-7 11" />
      <path d="M13 30v12h24V30" />
      <path d="M13 36h24M20 30v6M28 30v6" />
    </svg>
  ),
}

const features = [
  { icon: Icon.bowl, title: 'Uniqueness Defined', text: 'Bringing nostalgia with our exclusive culinary offerings.' },
  { icon: Icon.badge, title: 'Rigorously Tested Quality', text: 'Ensuring excellence in each and every flavorful bite.' },
  { icon: Icon.pot, title: 'Decades of Expertise', text: 'Crafting marvelous culinary dishes' },
  { icon: Icon.hat, title: 'Skillful Culinary Craftsmanship', text: 'Blending passion, talent, and love on every plate.' },
]

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ---------- Discover the Soul of Indian Cuisine ---------- */}
      <section className="section discover" style={{ '--mandala': `url(${mandala})` }}>
        <div className="container discover__grid">
          <div className="discover__media">
            <img src={chef} alt="Chef Regi Mathew" className="discover__chef" />
            <img src={food} alt="Kerala fish curry served on banana leaf" className="discover__food" />
            <blockquote className="discover__quote">
              <span aria-hidden="true">“</span>
              From Ammachi’s cherished recipes to the flavors of our childhood, every dish whispers tales of
              home. Taste the essence of Kerala’s heart in every savory morsel, as we honor Amma’s legacy
              with every culinary masterpiece.
            </blockquote>
          </div>

          <div className="text">
            <p className="eyebrow eyebrow--sans">Discover the Soul of Indian Cuisine</p>
            <h2 className="section-title">Indulge in Regional Authentic Flavors, Perfected to Perfection!</h2>
            <p>
              Those golden days of splashing in the “Tharavadu Kulam” and savoring “pazham kanji” with chatti
              meen curry, aviyal, ulli theeyal and karimeen pollichathu are but a memory now! That’s
              precisely why Kappa Chakka Kandhari exists- to revive the essence of Kerala tradition and
              transport you back to vintage times through our rich and varied Kerala cuisine.
            </p>
            <p>
              Ranked 22 among India’s Top 50 Restaurants by Condé Nast Traveller, Kappa Chakka Kandhari has
              garnered recognition for its dedication to preserving and revitalizing traditional food. For
              us, it’s not just about the taste; but also about capturing the spirit of nostalgic childhood
              memories, the aroma of spices wafting from the kitchen, and the joy of sharing a meal with
              loved ones.
            </p>
            <p>
              With each dish carefully curated to showcase the coastal state’s culinary treasures, Kappa
              Chakka Kandhari invites diners on a gourmet adventure, where every bite tells a story of
              heritage and tradition. It’s a place where the past meets the present, and where the simple
              act of dining becomes a celebration of our rich gastronomic legacy.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Iconic Nostalgic Recipes ---------- */}
      <section className="recipes">
        <div className="container center">
          <p className="eyebrow">Rediscover Your Childhood Favorites</p>
          <h2 className="section-title">Explore Our Iconic Nostalgic Recipes</h2>
        </div>
        <div className="recipes__row">
          {recipes.map((r) => (
            <figure className="recipe" key={r.name}>
              <div className="recipe__img">
                <img src={r.img} alt={r.name} />
              </div>
              <figcaption>{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- Our Journey ---------- */}
      <section className="section journey">
        <div className="container journey__grid">
          <div className="journey__text text">
            <p className="eyebrow eyebrow--sans">Welcome To Home Of Taste</p>
            <h2 className="section-title">Our Journey to Deliver the Elite Quality Food</h2>
            <p>
              Beyond whisking you away to the cherished nostalgia of childhood with our traditional recipes,
              the Kappa Chakka Kandhari team guarantees an unparalleled culinary experience. Over 3 years, we
              scoured 265 homes and 70 toddy shops across Kerala, perfecting 800 recipes by ensuring each
              dish reflects the finest quality and regional flavors.
            </p>
            <Link to="/about-kck" className="btn-gold journey__btn">Read More About Our Journey</Link>
          </div>

          <img src={pudding} alt="Tender coconut cloud pudding" className="journey__img" />

          <ul className="journey__features">
            {features.map((f) => (
              <li className="feature" key={f.title}>
                <span className="feature__icon">{f.icon}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InstagramFeed />
      <Testimonials />
    </>
  )
}
