import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, BOOKING, CONTACT } from '../data/site.js'
import { useMenuModal } from '../context/MenuModal.jsx'
import logo from '../assets/images/logo.webp'
import './Header.css'

/* ---------- icons ---------- */
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M9.2 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.9 4.5 4 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.3-.8-.7-1.3-1.5-1.4-1.8-.2-.3 0-.4.1-.5l.4-.5.3-.4v-.5l-.7-1.9z"
    />
  </svg>
)

function ContactIcons({ className = '' }) {
  return (
    <div className={`header-icons ${className}`}>
      <a href={`mailto:${CONTACT.email}`} className="icon-link" data-tip={CONTACT.email} aria-label="Email us">
        <MailIcon />
      </a>
      <a href={`tel:+91${CONTACT.phone}`} className="icon-link" data-tip={CONTACT.phoneDisplay} aria-label="Call us">
        <PhoneIcon />
      </a>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="icon-link"
        data-tip={CONTACT.whatsappDisplay}
        aria-label="WhatsApp us"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false) // mobile menu
  const [openSub, setOpenSub] = useState(null) // which dropdown is open (mobile)
  const [bookOpen, setBookOpen] = useState(false)
  const bookRef = useRef(null)
  const { pathname } = useLocation()
  const { openMenu } = useMenuModal()

  // close everything on page change
  useEffect(() => {
    setOpen(false)
    setOpenSub(null)
    setBookOpen(false)
  }, [pathname])

  // close Book Now dropdown on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (bookRef.current && !bookRef.current.contains(e.target)) setBookOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const renderChild = (c) =>
    c.pdf ? (
      <a key={c.label} href={c.pdf} target="_blank" rel="noreferrer">
        {c.label}
      </a>
    ) : (
      <NavLink key={c.to} to={c.to}>
        {c.label}
      </NavLink>
    )

  const renderItem = (item) => {
    if (item.children) {
      const isOpen = openSub === item.label
      const isActive = item.children.some((c) => c.to === pathname)
      return (
        <div key={item.label} className={`has-sub ${isOpen ? 'sub-open' : ''}`}>
          <button
            className={`nav-link sub-toggle ${isActive ? 'active' : ''}`}
            onClick={() => setOpenSub(isOpen ? null : item.label)}
            aria-expanded={isOpen}
          >
            {item.label}
            <svg className="caret" viewBox="0 0 12 8" aria-hidden="true">
              <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <div className="sub-menu">{item.children.map(renderChild)}</div>
        </div>
      )
    }
    if (item.action === 'grandSunday') {
      return (
        <button
          key={item.label}
          className="nav-link"
          onClick={() => {
            setOpen(false)
            openMenu()
          }}
        >
          {item.label}
        </button>
      )
    }
    return (
      <NavLink key={item.to} to={item.to} end className="nav-link">
        {item.label}
      </NavLink>
    )
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Kappa Chakka Kandhari" />
        </Link>

        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {NAV.map(renderItem)}
          {/* icons inside the menu on mobile */}
          <ContactIcons className="header-icons--mobile" />
        </nav>

        <div className="header-right">
          <div className={`book ${bookOpen ? 'is-open' : ''}`} ref={bookRef}>
            <button className="book-btn" onClick={() => setBookOpen(!bookOpen)} aria-expanded={bookOpen}>
              Book Now
            </button>
            <div className="book__menu">
              {BOOKING.map((b) => (
                <a key={b.label} href={b.url} target="_blank" rel="noreferrer" onClick={() => setBookOpen(false)}>
                  {b.label}
                </a>
              ))}
            </div>
          </div>
          <ContactIcons className="header-icons--desktop" />
        </div>
      </div>
    </header>
  )
}
