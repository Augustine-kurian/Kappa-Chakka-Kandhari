import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import AboutKCK from './pages/AboutKCK.jsx'
import AboutChef from './pages/AboutChef.jsx'
import AboutTeam from './pages/AboutTeam.jsx'
import Awards from './pages/Awards.jsx'
import Banquets from './pages/Banquets.jsx'
import Catering from './pages/Catering.jsx'
import Contact from './pages/Contact.jsx'
import Media from './pages/Media.jsx'
import Menu from './pages/Menu.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Pages with the common Header + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-kck" element={<AboutKCK />} />
          <Route path="/about-chef" element={<AboutChef />} />
          <Route path="/about-team" element={<AboutTeam />} />
          <Route path="/awards-accolades" element={<Awards />} />
          <Route path="/banquets" element={<Banquets />} />
          <Route path="/catering-service" element={<Catering />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
