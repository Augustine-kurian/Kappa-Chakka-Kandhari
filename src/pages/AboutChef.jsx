import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import { LINKS } from '../data/site.js'
import hero from '../assets/images/hero-about-chef.jpg'
import chef from '../assets/images/chef-regi-mathew.jpg'
import chefAward from '../assets/images/chef-food-superstars.jpg'
import './pages.css'

const awards = [
  { title: 'Zee Zest Unlimit Awards 2024', text: 'Honored as Chef Of The Year.' },
  {
    title: 'Guinness World Record',
    text: 'Achieved the title for the longest dosa, measuring 123.03 feet at MTR Foods, Bangalore in 2024.',
  },
  {
    title: 'Food Superstars',
    text: 'Ranked #1 in 2023 and #2 in 2022 in the annual list of India’s Top 30 Chefs by Culinary Culture, co-founded by renowned journalist and food critic Vir Sanghvi.',
  },
  { title: 'Times Food Awards, Chennai 2018', text: 'Awarded Chef Of The Year.' },
]

export default function AboutChef() {
  return (
    <>
      <PageHero title="Chef Regi Mathew" image={hero} />

      {/* Chef story */}
      <section className="section">
        <div className="container split">
          <img src={chef} alt="Chef Regi Mathew" className="framed-img" />

          <div className="text">
            <h2 className="about-chef__name">Chef Regi Mathew’s 30-Year Legacy</h2>
            <h3 className="section-title" style={{ fontSize: '1.4rem' }}>Pursuing Nostalgic Tastes</h3>
            <p>
              Chef Regi Mathew, a seasoned master chef with over three decades of unwavering dedication,
              embodies a lifelong devotion to the art of cooking and serving. With a diverse educational
              background, his profound culinary education finds its roots in the teachings of his
              greatest mentor—his mother.
            </p>
            <p>
              His illustrious career sparkles with prestigious accolades, including Guinness World
              Records, Record for MTR Foods, and Chef of the Year titles, cementing his status as a
              culinary luminary. Notable achievements include topping the charts at ‘Food Superstars’
              and receiving accolades from the esteemed Times Food Awards.
            </p>
            <p>
              In 2013, Chef Regi ventured into Tranquil Gourmet Solutions, pioneering restaurant concept
              development and gastronomic consultancy. As the Head of the Centre of Excellence at Orkla
              India, his expertise spans various regional cuisines, orchestrating immersive culinary
              experiences like Karunadu Swada and forthcoming showcases of Andhra, Telangana, and Tamil
              Nadu cuisines.
            </p>
            <p>
              His most heartfelt venture, Kappa Chakka Kandhari, stands as a tribute to his mother’s
              culinary legacy and the cherished flavors of his upbringing. Chef Regi and his friends
              embarked on a culinary pilgrimage across Kerala, collaborating with local homemakers
              (recipes of amma and ammumma’s) and toddy shops to safeguard and rejuvenate traditional
              recipes.
            </p>
            <p>
              Under his visionary stewardship, Chef Regi Mathew continues to reshape the culinary
              landscape, fostering a nationwide celebration of India’s rich gastronomic heritage and the
              enduring influence of maternal kitchens.
            </p>
            <a href={LINKS.chefInstagram} target="_blank" rel="noreferrer" className="btn-gold" style={{ marginTop: 8 }}>
              Follow Chef Regi Mathew
            </a>
          </div>
        </div>
      </section>

      {/* Chef awards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <h2 className="section-title" style={{ marginBottom: 6 }}>
              Gilded with Glory, Our Prestigious Awards and Recognition’s
            </h2>
            <p className="chef-awards__sub">Awards and Accolades of Chef Regi Mathew</p>
            {awards.map((a) => (
              <div className="chef-awards__item" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <img src={chefAward} alt="Chef Regi Mathew at Food Superstars" className="framed-img" />
        </div>
      </section>

      <ContactSection />
      <Testimonials />

      <CtaBlock
        title={<>From Headlines to Heartbeats,<br />Authentic Legacy!</>}
        text="At Kappa Chakka Kandhari, we believe in letting our reputation speak for itself. Beyond words, the accolades we’ve received from prestigious magazines all over India reflect our unwavering dedication to culinary supremacy and commitment to quality."
        btnLabel="Let Us Cater to You"
        btnTo="/catering-service"
      />
    </>
  )
}
