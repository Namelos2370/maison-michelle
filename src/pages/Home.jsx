import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, CATEGORIES } from '../data/products.js'
import { SHOP } from '../config.js'

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured)
  const latest = PRODUCTS.slice(-4)
  return (
    <>
      <section className="hero">
        <div className="container hero-in">
          <p className="eyebrow">Mode artisanale · Faite main à Yaoundé</p>
          <h1>Le crochet,<br />version élégante.</h1>
          <p className="lead">
            Vêtements, sacs et accessoires tissés point après point, avec passion. Chaque pièce est unique.
          </p>
          <div className="hero-cta">
            <Link to="/boutique" className="btn">Découvrir la boutique</Link>
            <a className="btn ghost" href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noreferrer">Écrire sur WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="cats">
          {CATEGORIES.map((c) => (
            <Link key={c} to={`/boutique?cat=${encodeURIComponent(c)}`} className="cat">
              <span>{c}</span>
              <small>Voir →</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Produits populaires</h2>
          <Link to="/boutique">Tout voir →</Link>
        </div>
        <div className="grid">{featured.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="band">
        <div className="container band-in">
          <div><b>Faites main</b><span>Chaque pièce est réalisée par Michelle.</span></div>
          <div><b>Commande simple</b><span>Depuis votre téléphone, en quelques clics.</span></div>
          <div><b>Confirmation humaine</b><span>Nous vérifions tout avant de préparer.</span></div>
          <div><b>Livraison au Cameroun</b><span>Yaoundé et autres villes.</span></div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Nouveautés</h2>
          <Link to="/boutique">Toute la collection →</Link>
        </div>
        <div className="grid">{latest.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </>
  )
}
