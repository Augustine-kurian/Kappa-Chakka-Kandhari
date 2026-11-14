import { Link } from 'react-router-dom'
import { LOCATIONS, QUICK_LINKS, LINKS } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Contact us</h4>
          {LOCATIONS.map((l) => (
            <div className="footer-item" key={l.city}>
              <h5>{l.city}</h5>
              <a href={`tel:${l.phone.replace(/\s/g, '')}`}>{l.phone}</a>
            </div>
          ))}
        </div>

        <div className="footer-col">
          <h4>Reach us</h4>
          {LOCATIONS.map((l) => (
            <div className="footer-item" key={l.city}>
              <h5>{l.city}</h5>
              <p>{l.name}</p>
              <p>{l.address}</p>
            </div>
          ))}
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <ul className="footer-links">
            {QUICK_LINKS.map((q) => (
              <li key={q.to}>
                <Link to={q.to}>{q.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect with us</h4>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="insta" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright {new Date().getFullYear()} © Kappa Chakka Kandhari Pvt Ltd., All rights reserved.
      </div>
    </footer>
  )
}
