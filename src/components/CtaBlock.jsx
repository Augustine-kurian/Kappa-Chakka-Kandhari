import { Link } from 'react-router-dom'
import './CtaBlock.css'

/**
 * Centred gold heading + text + outline button.
 * bg  → optional background photo (shown with a dark overlay + parallax)
 * btnTo can be a page ('/catering-service'), a website ('https://…') or a PDF ('/menus/x.pdf')
 */
export default function CtaBlock({ title, text, btnLabel, btnTo, bg, overlay = 0.68 }) {
  const newTab = btnTo?.startsWith('http') || btnTo?.endsWith('.pdf')

  return (
    <section className={`section cta ${bg ? 'cta--bg' : ''}`} style={bg ? { '--cta-overlay': overlay } : undefined}>
      {bg && <div className="cta__bg" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />}
      <div className="container center cta__content">
        <h2 className="section-title">{title}</h2>
        <p>{text}</p>
        {btnLabel &&
          (newTab ? (
            <a href={btnTo} target="_blank" rel="noreferrer" className="btn-gold">
              {btnLabel}
            </a>
          ) : (
            <Link to={btnTo} className="btn-gold">
              {btnLabel}
            </Link>
          ))}
      </div>
    </section>
  )
}
