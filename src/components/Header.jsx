import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header-in">
        <Link to="/" className="logo" onClick={close} aria-label="Maison Michelle — accueil">
          <img src="/logo-mark.jpg" alt="" />
          <span className="logo-text">Maison <em>Michelle</em></span>
        </Link>
        <nav className={'nav' + (open ? ' open' : '')}>
          <NavLink to="/boutique" onClick={close}>Boutique</NavLink>
          <NavLink to="/notre-histoire" onClick={close}>Notre histoire</NavLink>
          <NavLink to="/livraison-faq" onClick={close}>Livraison & FAQ</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>
        <div className="header-actions">
          <Link to="/panier" className="cart-link" aria-label="Panier" onClick={close}>
            Panier{count > 0 && <b className="badge">{count}</b>}
          </Link>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
