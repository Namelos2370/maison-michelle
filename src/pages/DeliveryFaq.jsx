import { DELIVERY_ZONES, fcfa } from '../config.js'

const FAQ = [
  ['Comment passer commande ?', 'Choisissez vos articles, ajoutez-les au panier, renseignez vos coordonnées et envoyez la commande. Une référence unique vous est donnée.'],
  ['Ma commande est-elle immédiatement définitive ?', 'Non. La boutique vérifie la disponibilité, les options, le montant total et la livraison, puis vous contacte pour confirmer.'],
  ['Quels modes de paiement acceptez-vous ?', 'MTN Mobile Money, Orange Money et paiement à la livraison. Pour le Mobile Money, les instructions vous sont envoyées après confirmation et le transfert est vérifié avant préparation.'],
  ['Une capture d’écran suffit-elle comme preuve de paiement ?', 'Non. Nous vérifions toujours l’encaissement effectif avant de marquer une commande comme payée.'],
  ['Quel est le délai pour une création sur commande ?', 'Le délai de confection est indiqué sur chaque fiche produit. Il est confirmé lors de la validation de votre commande.'],
  ['Comment entretenir mes pièces au crochet ?', 'Lavage à la main à l’eau froide avec un savon doux, séchage à plat, sans essorage ni sèche-linge.'],
  ['Puis-je modifier ou annuler une commande ?', 'Oui, avant confirmation. Pour les créations personnalisées, les conditions d’annulation et de modification vous sont communiquées avant confirmation.'],
  ['Livrez-vous à l’international ?', 'Pas pour l’instant. Contactez-nous pour une demande de devis : l’ouverture internationale est prévue ultérieurement.'],
]

export default function DeliveryFaq() {
  return (
    <div className="container section narrow">
      <h1 className="page-title">Livraison & FAQ</h1>
      <h2>Zones desservies</h2>
      <div className="table">
        {DELIVERY_ZONES.map((z) => (
          <div className="trow" key={z.id}>
            <b>{z.label}</b>
            <span>{z.fee === null ? 'Frais à confirmer' : fcfa(z.fee)}</span>
            <span className="muted">{z.delay}</span>
          </div>
        ))}
        <div className="trow"><b>International</b><span>Sur devis</span><span className="muted">Phase ultérieure</span></div>
      </div>
      <p className="muted">Les frais sont affichés avant la validation lorsque leur montant est connu. Sinon, le total définitif vous est indiqué à la confirmation.</p>

      <h2>Questions fréquentes</h2>
      {FAQ.map(([q, a]) => (
        <details key={q} className="faq">
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}
