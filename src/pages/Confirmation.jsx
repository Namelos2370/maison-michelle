import { Link, useLocation, useParams } from 'react-router-dom'
import { SHOP, fcfa } from '../config.js'

export default function Confirmation() {
  const { ref } = useParams()
  const { state } = useLocation()
  let order = state?.order
  if (!order) {
    try {
      order = JSON.parse(localStorage.getItem('mm_order_' + ref))
    } catch {}
  }

  if (!order)
    return (
      <div className="container section center">
        <h1 className="page-title">Commande {ref}</h1>
        <p className="muted">Les détails de cette commande ne sont plus disponibles sur cet appareil. Contactez-nous avec votre référence.</p>
        <a className="btn" href={`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent('Bonjour, voici ma référence de commande : ' + ref)}`} target="_blank" rel="noreferrer">Écrire sur WhatsApp</a>
      </div>
    )

  const lines = order.items
    .map((i) => `• ${i.qty} × ${i.name}${i.size ? ` (${i.size})` : ''}${i.color ? ` – ${i.color}` : ''}${i.note ? ` [${i.note}]` : ''} : ${fcfa(i.price * i.qty)}`)
    .join('\n')
  const msg =
    `Bonjour Maison Michelle 👋\nJe viens de passer la commande *${order.ref}*.\n\n${lines}\n\n` +
    `Articles : ${fcfa(order.subtotal)}\nLivraison : ${order.delivery.fee === null ? 'à confirmer' : fcfa(order.delivery.fee)}\n` +
    `Total : ${fcfa(order.total)}${order.totalFinal ? '' : ' (hors livraison)'}\n` +
    `Paiement : ${order.payment}\n\nNom : ${order.customer.firstName} ${order.customer.lastName}\nTél : ${order.customer.phone}\n` +
    `Livraison : ${order.delivery.city}, ${order.delivery.district} – ${order.delivery.address}`

  return (
    <div className="container section narrow">
      <div className="ok-badge">✓</div>
      <h1 className="page-title center">Commande reçue !</h1>
      <p className="center">Votre référence : <b className="ref">{order.ref}</b></p>
      <p className="notice">
        <b>Prochaine étape :</b> la boutique doit confirmer votre commande (disponibilité, options, prix, frais et délai). Vous serez contacté(e) sur le {order.customer.phone}. Le paiement ne sera demandé qu’après confirmation.
      </p>

      <div className="box">
        <h3>Détail</h3>
        {order.items.map((i, k) => (
          <div className="sum-row" key={k}>
            <span>{i.qty} × {i.name}<small className="muted block">{[i.size && `Taille ${i.size}`, i.color, i.note].filter(Boolean).join(' · ')}</small></span>
            <b>{fcfa(i.price * i.qty)}</b>
          </div>
        ))}
        <div className="sum-row"><span>Articles</span><b>{fcfa(order.subtotal)}</b></div>
        <div className="sum-row"><span>Livraison ({order.delivery.zone})</span><b>{order.delivery.fee === null ? 'À confirmer' : fcfa(order.delivery.fee)}</b></div>
        <div className="sum-row total"><span>Total{order.totalFinal ? '' : ' (hors livraison)'}</span><b>{fcfa(order.total)}</b></div>
        <div className="sum-row"><span>Paiement choisi</span><b>{order.payment}</b></div>
        <div className="sum-row"><span>Statut</span><b>{order.status}</b></div>
      </div>

      <div className="actions center-actions">
        <a className="btn" href={`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noreferrer">Envoyer ma commande sur WhatsApp</a>
        <Link className="btn ghost" to="/boutique">Continuer mes achats</Link>
      </div>
      <p className="muted center small">Conservez votre référence. Nous ne considérons jamais une capture d’écran comme preuve de paiement : l’encaissement est toujours vérifié.</p>
    </div>
  )
}
