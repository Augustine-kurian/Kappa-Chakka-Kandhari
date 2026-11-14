import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import hero from '../assets/images/hero-about-kck.jpg'
import collage from '../assets/images/kck-collage.webp'
import './pages.css'

export default function AboutKCK() {
  return (
    <>
      <PageHero title="About KCK" image={hero} />

      <section className="section">
        <div className="container split">
          <img src={collage} alt="Kappa Chakka Kandhari restaurant and Kerala dishes" />

          <div className="text intro-text">
            <h2 className="section-title">
              A Tribute to
              <br />by South India’s
              <br />Culinary Heritage Through
              <br />Unique Set Menus &amp; Timeless Flavors
            </h2>
            <p>
              Kappa Chakka Kandhari, named after three iconic Kerala ingredients – tapioca, jackfruit,
              and bird’s eye chili, is dedicated to showcasing the essence of India’s diverse cuisine.
              Through innovative set menus, we offer a tantalizing array of India’s regional culinary
              treasures, meticulously curated to cater to every palate and budget. Each of our five
              thoughtfully crafted set menus promises a well-rounded dining experience, featuring an
              array of appetizers, palate-cleansing relishes, and hearty mains with accompaniments.
            </p>
            <p>
              Our latest offerings highlight an extensive selection of dishes sourced from every corner
              of Kerala, celebrating the unique micro-cuisines of the state. Located in the vibrant
              neighborhoods of Chennai and Bangalore, Kappa Chakka Kandhari is more than just an
              award-winning establishment. Our warm ambiance, reminiscent of plantation life, coupled
              with our impeccable service, creates a dining experience as cozy as being in the heart of
              Kerala.
            </p>
            <p>
              At Kappa Chakka Kandhari, our mission is simple – to serve the best and most authentic
              Indian, particularly Kerala cuisine in a traditional and nostalgic manner, reminiscent of
              home-cooked meals prepared with love. While we may not boast about being the best, our
              satisfied customers attest to the uniqueness of their dining experience with us.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Testimonials />
    </>
  )
}
