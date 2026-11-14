import './PageHero.css'

/**
 * Inner-page banner: background image + gold-bordered title box.
 * size="lg" gives the bigger box used on Banquets / Catering / Contact.
 */
export default function PageHero({ title, image, size = 'md', wide = false }) {
  return (
    <section
      className={`page-hero page-hero--${size} ${wide ? 'page-hero--wide' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container">
        <h1 className="page-hero__title">{title}</h1>
      </div>
    </section>
  )
}
