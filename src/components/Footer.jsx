import { Link } from 'react-router-dom'
import { SHOP } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">Maison <span>Michelle</span></div>
          <p className="muted">{SHOP.tagline}</p>
          <p className="muted">{SHOP.city}</p>
        </div>
        <div>
          <h4>Boutique</h4>
          <Link to="/boutique">Toutes les créations</Link>
          <Link to="/livraison-faq">Livraison & FAQ</Link>
          <Link to="/notre-histoire">Notre histoire</Link>
        </div>
        <div>
          <h4>Informations</h4>
          <Link to="/legal/conditions-de-vente">Conditions de vente</Link>
          <Link to="/legal/confidentialite">Confidentialité</Link>
          <Link to="/legal/retours">Retours & remboursement</Link>
        </div>
        <div>
          <h4>Nous suivre</h4>
          <a href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={SHOP.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={SHOP.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={SHOP.tiktok} target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} Maison Michelle — Tous droits réservés.</div>
    </footer>
  )
}
