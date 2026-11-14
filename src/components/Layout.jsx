import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PromoBanner from './PromoBanner.jsx'
import useScrollAnimations from '../hooks/useScrollAnimations.js'

export default function Layout() {
  const { pathname } = useLocation()
  useScrollAnimations(pathname)

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <PromoBanner />
    </>
  )
}
