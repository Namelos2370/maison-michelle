// ⚙️ Configuration de la boutique — à adapter avec les infos officielles de Michelle
export const SHOP = {
  name: 'Maison Michelle',
  tagline: 'Des créations uniques, faites avec passion.',
  // Numéro WhatsApp au format international, sans + ni espaces (ex: 237670000000)
  whatsapp: '237679203958',
  whatsappDisplay: '+237 6 79 20 39 58',
  // Laisser vide tant que les comptes officiels ne sont pas créés (les liens sont alors masqués)
  email: '',
  instagram: '',
  facebook: '',
  tiktok: '',
  city: 'Yaoundé, Cameroun',
  // URL optionnelle (Formspree, Make, Zapier, Supabase edge function...) qui reçoit chaque commande en JSON
  orderEndpoint: import.meta.env.VITE_ORDER_ENDPOINT || '',
}

// Frais de livraison (FCFA). null = calcul manuel à la confirmation.
export const DELIVERY_ZONES = [
  { id: 'yaounde', label: 'Yaoundé', fee: 1000, delay: '24 à 48 h après confirmation' },
  { id: 'douala', label: 'Douala', fee: null, delay: '2 à 4 jours (selon transporteur)' },
  { id: 'autres', label: 'Autres villes du Cameroun', fee: null, delay: 'Selon destination et transporteur' },
]

export const PAYMENT_METHODS = [
  { id: 'mtn', label: 'MTN Mobile Money', hint: 'Instructions envoyées après confirmation de la commande.' },
  { id: 'orange', label: 'Orange Money', hint: 'Instructions envoyées après confirmation de la commande.' },
  { id: 'cod', label: 'Paiement à la livraison', hint: 'Vous réglez à la réception, après confirmation par la boutique.' },
]

export const ORDER_STATUSES = [
  'En attente de confirmation',
  'Confirmée',
  'En préparation',
  'Prête à expédier',
  'En livraison',
  'Livrée',
  'Annulée',
]

export const fcfa = (n) => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'
