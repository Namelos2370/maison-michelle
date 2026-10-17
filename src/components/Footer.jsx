import { Link } from 'react-router-dom'
import { SHOP } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/logo.jpg" alt="Maison Michelle" />
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
          <h4>Nous contacter</h4>
          <a href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp {SHOP.whatsappDisplay}</a>
          {SHOP.instagram && <a href={SHOP.instagram} target="_blank" rel="noreferrer">Instagram</a>}
          {SHOP.facebook && <a href={SHOP.facebook} target="_blank" rel="noreferrer">Facebook</a>}
          {SHOP.tiktok && <a href={SHOP.tiktok} target="_blank" rel="noreferrer">TikTok</a>}
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} Maison Michelle — Tous droits réservés.</div>
    </footer>
  )
}
