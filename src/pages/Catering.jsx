import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import Gallery from '../components/Gallery.jsx'
import { LINKS } from '../data/site.js'
import hero from '../assets/images/hero-banquets.jpg'
import c1 from '../assets/images/catering-1.webp'
import c2 from '../assets/images/catering-2.webp'
import c3 from '../assets/images/catering-3.webp'
import c4 from '../assets/images/catering-4.webp'
import fusionBg from '../assets/images/bg-fusion-food.jpg'
import './pages.css'

const galleryImages = [
  { src: c1, alt: 'Restaurant dining hall decorated with marigold garlands' },
  { src: c2, alt: 'Dining area set for service' },
  { src: c3, alt: 'Tables laid with yellow runners' },
  { src: c4, alt: 'Guests enjoying a meal' },
]

export default function Catering() {
  return (
    <>
      <PageHero title="Catering Service" image={hero} size="lg" />

      <section className="section">
        <div className="container center service-intro">
          <h2 className="section-title">
            Exceptional Catering for Your
            <br />
            Memorable Occasions!
          </h2>
          <p>
            With meticulous attention to detail and customized catering services, our service team
            promises an extraordinary culinary journey. From crafting exquisite menus to flawlessly
            executing each dish at every event, we guarantee a remarkable occasion brimming with
            delectable flavors and lasting memories.
          </p>
        </div>
      </section>

      <Gallery images={galleryImages} />

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
