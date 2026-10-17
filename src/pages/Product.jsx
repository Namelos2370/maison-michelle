import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductImage from '../components/ProductImage.jsx'
import { PRODUCTS, AVAILABILITY, getStatus } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { fcfa } from '../config.js'

export default function ProductPage() {
  const { id } = useParams()
  return <Product key={id} id={id} />
}

function Product({ id }) {
  const product = PRODUCTS.find((p) => p.id === id)
  const { add } = useCart()
  const navigate = useNavigate()
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [note, setNote] = useState('')
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  if (!product)
    return (
      <div className="container section center">
        <p>Produit introuvable.</p>
        <Link to="/boutique" className="btn">Retour à la boutique</Link>
      </div>
    )

  const status = getStatus(product)
  const a = AVAILABILITY[status]
  const soldout = status === 'soldout'
  const personalizable = product.availability === 'personalizable' || product.availability === 'custom'

  const submit = (goCart) => {
    if (product.sizes.length && !size) return setError('Veuillez choisir une taille.')
    if (product.colors.length && !color) return setError('Veuillez choisir une couleur.')
    setError('')
    add(product, { size, color, note: note.trim(), qty })
    if (goCart) navigate('/panier')
    else {
      setAdded(true)
      setTimeout(() => setAdded(false), 2500)
    }
  }

  return (
    <div className="container section">
      <p className="crumbs"><Link to="/boutique">Boutique</Link> / {product.category}</p>
      <div className="product">
        <ProductImage product={product} className="big" />
        <div className="product-info">
          <span className={'tag static ' + a.tone}>{a.label}</span>
          <h1>{product.name}</h1>
          <p className="price lg">{fcfa(product.price)}</p>
          <p>{product.description}</p>
          {product.leadTime && <p className="muted">⏱ Délai indicatif de confection : {product.leadTime}</p>}

          {product.sizes.length > 0 && (
            <div className="opt">
              <label>Taille</label>
              <div className="chips">
                {product.sizes.map((s) => (
                  <button key={s} type="button" className={'chip' + (size === s ? ' on' : '')} onClick={() => setSize(s)}>{s}</button>
                ))}
              </div>
            </div>
          )}
          {product.colors.length > 0 && (
            <div className="opt">
              <label>Couleur</label>
              <div className="chips">
                {product.colors.map((c) => (
                  <button key={c} type="button" className={'chip' + (color === c ? ' on' : '')} onClick={() => setColor(c)}>{c}</button>
                ))}
              </div>
            </div>
          )}
          {personalizable && (
            <div className="opt">
              <label>Personnalisation / mensurations (facultatif)</label>
              <textarea rows="2" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ex : tour de poitrine 92 cm, longueur souhaitée…" />
              <small className="muted">Les conditions d’annulation et de modification des créations personnalisées vous seront communiquées avant confirmation.</small>
            </div>
          )}

          {!soldout && (
            <div className="opt qty">
              <label>Quantité</label>
              <div className="stepper">
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>
          )}

          {error && <p className="error">{error}</p>}
          {soldout ? (
            <p className="muted"><b>Cette création est actuellement épuisée.</b> Contactez-nous pour une confection sur demande.</p>
          ) : (
            <div className="actions">
              <button className="btn" onClick={() => submit(false)}>{added ? '✓ Ajouté au panier' : 'Ajouter au panier'}</button>
              <button className="btn ghost" onClick={() => submit(true)}>Commander maintenant</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
