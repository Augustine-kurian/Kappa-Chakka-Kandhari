import { useEffect, useState } from 'react'
import { useMenuModal } from '../context/MenuModal.jsx'
import promoDesktop from '../assets/images/promo-desktop.webp'
import promoMobile from '../assets/images/promo-mobile.webp'
import './PromoBanner.css'

const KEY = 'kck-promo-seen'

/** Grand Sunday Breakfast promo – shows once per browser session. */
export default function PromoBanner() {
  const [show, setShow] = useState(false)
  const { openMenu } = useMenuModal()

  useEffect(() => {
    let seen = false
    try { seen = sessionStorage.getItem(KEY) === '1' } catch { /* storage blocked */ }
    if (seen) return
    const t = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setShow(false)
    try { sessionStorage.setItem(KEY, '1') } catch { /* ignore */ }
  }

  useEffect(() => {
    if (!show) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [show])

  if (!show) return null

  return (
    <div className="promo" onClick={close} role="dialog" aria-modal="true" aria-label="Grand Sunday Breakfast offer">
      <div className="promo__box" onClick={(e) => e.stopPropagation()}>
        <button className="promo__close" onClick={close} aria-label="Close">×</button>
        <picture>
          <source media="(min-width: 768px)" srcSet={promoDesktop} />
          <img src={promoMobile} alt="Grand Sunday Breakfast – every Sunday 9 AM at Kappa Chakka Kandhari" />
        </picture>
        <button
          className="promo__menu-btn"
          onClick={() => {
            close()
            openMenu()
          }}
        >
          Menu
        </button>
      </div>
    </div>
  )
}
