import { Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Confirmation from './pages/Confirmation.jsx'
import Story from './pages/Story.jsx'
import DeliveryFaq from './pages/DeliveryFaq.jsx'
import Contact from './pages/Contact.jsx'
import Legal from './pages/Legal.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual' } catch {}
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/produit/:id" element={<Product />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/commande/:ref" element={<Confirmation />} />
          <Route path="/notre-histoire" element={<Story />} />
          <Route path="/livraison-faq" element={<DeliveryFaq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/:page" element={<Legal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
