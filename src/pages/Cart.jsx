import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductImage from '../components/ProductImage.jsx'
import { useCart } from '../context/CartContext.jsx'
import { DELIVERY_ZONES, PAYMENT_METHODS, SHOP, fcfa } from '../config.js'

const makeRef = () => {
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `MM-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${rnd}`
}

export default function Cart() {
  const { items, setQty, remove, subtotal, clear } = useCart()
  const navigate = useNavigate()
  const [f, setF] = useState({
    firstName: '', lastName: '', phone: '', phone2: '',
    zone: 'yaounde', city: '', district: '', address: '',
    payment: 'mtn', comment: '',
  })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const zone = DELIVERY_ZONES.find((z) => z.id === f.zone)
  const fee = zone.fee
  const total = subtotal + (fee || 0)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  if (items.length === 0)
    return (
      <div className="container section center">
        <h1 className="page-title">Votre panier</h1>
        <p className="muted">Votre panier est vide.</p>
        <Link to="/boutique" className="btn">Découvrir la boutique</Link>
      </div>
    )

  const validate = () => {
    const e = {}
    if (!f.firstName.trim()) e.firstName = 'Requis'
    if (!f.lastName.trim()) e.lastName = 'Requis'
    if (!/^[+\d][\d\s.-]{7,}$/.test(f.phone.trim())) e.phone = 'Numéro invalide'
    if (!f.city.trim()) e.city = 'Requis'
    if (!f.district.trim()) e.district = 'Requis'
    if (!f.address.trim()) e.address = 'Adresse ou point de repère requis'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSending(true)
    const ref = makeRef()
    const order = {
      ref,
      createdAt: new Date().toISOString(),
      status: 'En attente de confirmation',
      paymentStatus: 'Paiement en attente',
      customer: { firstName: f.firstName.trim(), lastName: f.lastName.trim(), phone: f.phone.trim(), phone2: f.phone2.trim() },
      delivery: { zone: zone.label, city: f.city.trim(), district: f.district.trim(), address: f.address.trim(), fee },
      payment: PAYMENT_METHODS.find((p) => p.id === f.payment).label,
      comment: f.comment.trim(),
      items: items.map(({ id, name, price, qty, size, color, note, availability }) => ({ id, name, price, qty, size, color, note, availability })),
      subtotal,
      total,
      totalFinal: fee !== null,
    }
    try {
      localStorage.setItem('mm_order_' + ref, JSON.stringify(order))
    } catch {}
    if (SHOP.orderEndpoint) {
      try {
        await fetch(SHOP.orderEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(order) })
      } catch {}
    }
    clear()
    navigate(`/commande/${ref}`, { state: { order } })
  }

  const field = (k, label, props = {}) => (
    <div className={'field' + (errors[k] ? ' err' : '')}>
      <label>{label}</label>
      {props.textarea ? (
        <textarea rows="2" value={f[k]} onChange={set(k)} placeholder={props.placeholder} />
      ) : (
        <input value={f[k]} onChange={set(k)} placeholder={props.placeholder} type={props.type || 'text'} inputMode={props.inputMode} />
      )}
      {errors[k] && <small>{errors[k]}</small>}
    </div>
  )

  return (
    <div className="container section">
      <h1 className="page-title">Panier & commande</h1>
      <div className="checkout">
        <div>
          <div className="lines">
            {items.map((l) => (
              <div className="line" key={l.lineId}>
                <ProductImage product={{ id: l.id, name: l.name, color: l.imageColor, image: l.image }} className="thumb" />
                <div className="line-info">
                  <b>{l.name}</b>
                  <small className="muted">{[l.size && `Taille ${l.size}`, l.color].filter(Boolean).join(' · ')}</small>
                  {l.note && <small className="muted">📝 {l.note}</small>}
                  <div className="stepper sm">
                    <button type="button" onClick={() => setQty(l.lineId, l.qty - 1)}>−</button>
                    <span>{l.qty}</span>
                    <button type="button" onClick={() => setQty(l.lineId, l.qty + 1)}>+</button>
                  </div>
                </div>
                <div className="line-end">
                  <b>{fcfa(l.price * l.qty)}</b>
                  <button type="button" className="link" onClick={() => remove(l.lineId)}>Retirer</button>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="form" noValidate>
            <h2>Vos coordonnées</h2>
            <div className="row2">
              {field('firstName', 'Prénom *')}
              {field('lastName', 'Nom *')}
            </div>
            <div className="row2">
              {field('phone', 'Téléphone principal *', { type: 'tel', inputMode: 'tel', placeholder: '6 XX XX XX XX' })}
              {field('phone2', 'Numéro secondaire (facultatif)', { type: 'tel', inputMode: 'tel' })}
            </div>

            <h2>Livraison</h2>
            <div className="field">
              <label>Zone</label>
              <select value={f.zone} onChange={set('zone')}>
                {DELIVERY_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>{z.label} — {z.fee === null ? 'frais à confirmer' : fcfa(z.fee)}</option>
                ))}
              </select>
              <small className="muted">Délai : {zone.delay}</small>
            </div>
            <div className="row2">
              {field('city', 'Ville *')}
              {field('district', 'Quartier *')}
            </div>
            {field('address', 'Adresse ou point de repère *', { textarea: true, placeholder: 'Ex : face pharmacie, carrefour…' })}

            <h2>Paiement</h2>
            <div className="pay">
              {PAYMENT_METHODS.map((p) => (
                <label key={p.id} className={'payopt' + (f.payment === p.id ? ' on' : '')}>
                  <input type="radio" name="pay" checked={f.payment === p.id} onChange={() => setF({ ...f, payment: p.id })} />
                  <span><b>{p.label}</b><small>{p.hint}</small></span>
                </label>
              ))}
            </div>
            {field('comment', 'Commentaire (facultatif)', { textarea: true })}

            <p className="notice">
              Votre commande n’est pas encore définitive : la boutique vérifie la disponibilité, les options, le montant total et la livraison, puis vous contacte pour confirmer. Aucun paiement n’est demandé maintenant.
            </p>
            <button className="btn block" disabled={sending}>{sending ? 'Envoi…' : 'Envoyer ma commande'}</button>
          </form>
        </div>

        <aside className="summary">
          <h3>Récapitulatif</h3>
          <div className="sum-row"><span>Articles</span><b>{fcfa(subtotal)}</b></div>
          <div className="sum-row"><span>Livraison</span><b>{fee === null ? 'À confirmer' : fcfa(fee)}</b></div>
          <div className="sum-row total"><span>Total{fee === null ? ' (hors livraison)' : ''}</span><b>{fcfa(total)}</b></div>
          {fee === null && <small className="muted">Les frais de livraison pour cette zone sont calculés manuellement ; le total définitif vous sera indiqué à la confirmation.</small>}
        </aside>
      </div>
    </div>
  )
}
