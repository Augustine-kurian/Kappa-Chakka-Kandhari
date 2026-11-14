import PageHero from '../components/PageHero.jsx'
import Flipbook from '../components/Flipbook.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { LINKS, MENU_PAGES } from '../data/site.js'
import hero from '../assets/images/hero-menu.jpg'
import fusionBg from '../assets/images/bg-fusion-food.jpg'
import './pages.css'

export default function Menu() {
  return (
    <>
      <PageHero title="Menu" image={hero} size="lg" wide />

      <section className="section">
        <div className="container center service-intro">
          <h2 className="section-title">
            Making Every Moment Magical
            <br />
            With Our Exquisite Banquets!
          </h2>
          <p>
            Besides basking in nostalgic memories, embark on crafting new ones with our stellar banquet
            services at Kappa Chakka Kandhari. With our team’s dedication to sophisticated decor and
            personalized services, your event is guaranteed to be nothing short of spectacular!
          </p>
        </div>
      </section>

      <section className="section menu-book" style={{ paddingTop: 0 }}>
        <div className="container">
          <Flipbook pages={MENU_PAGES} pdf={LINKS.menuPdf} />
        </div>
      </section>

      <CtaBlock
        bg={fusionBg}
        overlay={0.35}
        title={<>A Fusion of Nostalgia<br />and Innovation!</>}
        text="Experience our most delicious dishes that go beyond the ordinary, crafted by our kitchen experts who capture the essence of Kerala’s rich culinary traditions. As each bite delights your taste buds and whisks you away to a world where nostalgia and innovation clash, be ready to be enthralled by an unforgettable dining experience."
        btnLabel="View Our Menu"
        btnTo={LINKS.menuPdf}
      />

      <ContactSection />
    </>
  )
}
