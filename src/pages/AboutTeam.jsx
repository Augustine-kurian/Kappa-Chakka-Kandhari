import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import hero from '../assets/images/hero-about-team.jpg'
import collage from '../assets/images/team-collage.webp'
import mandala from '../assets/images/mandala-pattern.webp'
import './pages.css'

export default function AboutTeam() {
  return (
    <>
      <PageHero title="KCK Team" image={hero} />

      <section className="section team-intro" style={{ '--mandala': `url(${mandala})` }}>
        <div className="container split">
          <div className="text">
            <h2 className="section-title">
              The Expertise and Passion Behind Kappa Chakka Kandhari’s Culinary Creations
            </h2>
            <p>
              The dynamic founding team of Kappa Chakka Kandhari boasts a blend of expertise: our
              acclaimed culinary maestro Regi Mathew, with over 30 years of F&amp;B mastery, renowned
              for conceptualizing and launching over 100 thriving restaurants. Notably, our kitchen crew
              comprises seasoned chefs, each passionate about recreating their state’s traditional
              delicacies to evoke childhood memories and capture the essence of regional cuisine.
            </p>
            <p>
              Together with the trained chefs at Kappa Chakka Kandhari, our kitchen operates as a
              harmonious blend of experienced toddy shop cooks and home chefs, guided by professional
              culinary experts. This collaboration ensures that every dish that leaves our kitchen is an
              exquisite reflection of Kerala’s diverse culinary expertise.
            </p>
            <p>
              Here, every dish is a love letter to the flavors of yore, transporting you to a time of
              simple pleasures and heartfelt meals. Our creations strike a chord with diners, resonating
              with the essence of nostalgia and delivering an unparalleled gourmet experience that
              lingers in the memory long after the last bite.
            </p>
          </div>

          <img src={collage} alt="Kappa Chakka Kandhari kitchen team at work" />
        </div>
      </section>

      <ContactSection />
      <Testimonials />
    </>
  )
}
