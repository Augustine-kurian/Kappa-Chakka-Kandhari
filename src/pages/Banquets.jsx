import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import Gallery from '../components/Gallery.jsx'
import hero from '../assets/images/hero-banquets.jpg'
import b1 from '../assets/images/banquet-1.webp'
import b2 from '../assets/images/banquet-2.webp'
import b3 from '../assets/images/banquet-3.webp'
import b4 from '../assets/images/banquet-4.webp'
import ctaBg from '../assets/images/bg-banquet-cta.jpg'
import './pages.css'

const galleryImages = [
  { src: b1, alt: 'Banquet buffet setup with blue lighting' },
  { src: b2, alt: 'Banquet buffet counter' },
  { src: b3, alt: 'Banquet hall with chandelier and dining tables' },
  { src: b4, alt: 'Banquet hall with fairy-light chandelier' },
]

export default function Banquets() {
  return (
    <>
      <PageHero title="Banquets" image={hero} size="lg" />

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

      <Gallery images={galleryImages} />

      <CtaBlock
        bg={ctaBg}
        title={<>Delight Your Guests with<br />Our Catering Creations!</>}
        text="In addition to our exquisite banquet services, Kappa Chakka Kandhari proudly extends its culinary expertise to offer sensational catering services that promise to elevate any occasion to extraordinary heights. Prepare to dazzle your guests with an unforgettable culinary experience."
        btnLabel="Let Us Cater to You"
        btnTo="/catering-service"
      />

      <ContactSection />
    </>
  )
}
