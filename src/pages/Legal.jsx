import { Link, useParams } from 'react-router-dom'
import { SHOP } from '../config.js'

const PAGES = {
  'conditions-de-vente': {
    title: 'Conditions de vente',
    body: [
      ['Commandes', 'Toute commande passée sur le site est une demande soumise à confirmation manuelle par Maison Michelle, qui vérifie la disponibilité, les options, le prix, les frais et le délai avant de la valider.'],
      ['Prix', 'Les prix sont indiqués en FCFA. Les frais de livraison sont affichés lorsqu’ils sont connus ; à défaut, le total définitif est communiqué lors de la confirmation.'],
      ['Paiement', 'Paiement par MTN Mobile Money, Orange Money ou à la livraison. Une commande n’est considérée comme payée qu’après vérification de l’encaissement effectif.'],
      ['Créations sur commande', 'Les pièces confectionnées sur mesure ou personnalisées ont un délai indicatif de confection. Leurs conditions d’annulation et de modification sont communiquées avant confirmation.'],
      ['Livraison', 'Voir la page Livraison & FAQ pour les zones, frais et délais.'],
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    body: [
      ['Données collectées', 'Nom, prénom, téléphone, ville, quartier, adresse ou point de repère, contenu de la commande et mode de paiement choisi, uniquement pour traiter et livrer votre commande.'],
      ['Utilisation', 'Vos données servent à vous contacter, confirmer, préparer et livrer votre commande. Elles ne sont pas vendues à des tiers.'],
      ['Conservation', 'Les données sont conservées le temps nécessaire au traitement de la commande et aux obligations légales applicables au Cameroun.'],
      ['Vos droits', `Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à ${SHOP.email}.`],
    ],
  },
  retours: {
    title: 'Retours & remboursement',
    body: [
      ['Articles prêts à livrer', 'Contactez-nous dans les jours suivant la réception si l’article présente un défaut ou ne correspond pas à votre commande.'],
      ['Créations personnalisées', 'Les pièces confectionnées sur mesure ne sont ni reprises ni échangées, sauf défaut de fabrication.'],
      ['Remboursement', 'Tout remboursement accepté est traité par le même moyen que le paiement d’origine, après vérification de l’article.'],
    ],
  },
}

export default function Legal() {
  const { page } = useParams()
  const p = PAGES[page]
  if (!p)
    return (
      <div className="container section center">
        <p>Page introuvable.</p>
        <Link to="/" className="btn">Accueil</Link>
      </div>
    )
  return (
    <div className="container section narrow">
      <h1 className="page-title">{p.title}</h1>
      <p className="muted">Modèle de départ à faire valider avant la mise en ligne définitive.</p>
      {p.body.map(([h, t]) => (
        <div key={h}>
          <h2>{h}</h2>
          <p>{t}</p>
        </div>
      ))}
    </div>
  )
}
