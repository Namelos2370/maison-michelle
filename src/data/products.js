// 🧶 Catalogue Maison Michelle
// availability : 'ready' (prêt à livrer) | 'custom' (sur commande) | 'personalizable' | 'soldout'
// ⚠️ Les prix sont des estimations de départ : à ajuster par Michelle.
export const CATEGORIES = ['Vêtements', 'Sacs', 'Accessoires']

const ADULT = ['S', 'M', 'L', 'XL']
const KIDS = ['6 mois', '1 an', '2 ans', '3 ans']
const other = 'Autre couleur (à préciser)'

export const PRODUCTS = [
  {
    id: 'MM-001', name: 'Ensemble plage « Frisson rose »', category: 'Vêtements', price: 40000,
    image: '/produits/ensemble-plage-rose.jpg', color: '#e8b4c8',
    description: 'Top bandeau rose orné d’une fleur, haut ajouré dos nu et jupe à volants. Un ensemble gourmand pour la plage et les journées d’été.',
    sizes: ADULT, colors: ['Rose & beige', other], availability: 'custom', leadTime: '10 à 14 jours', featured: true,
  },
  {
    id: 'MM-002', name: 'Robe fillette « Dragée »', category: 'Vêtements', price: 25000,
    image: '/produits/robe-fillette-dragee.jpg', color: '#e5d5cf',
    description: 'Robe à bretelles nouées, jupe évasée au bord festonné. Disponible avec bandeau et chaussons assortis.',
    sizes: KIDS, colors: ['Vieux rose & vert sauge', other], availability: 'custom', leadTime: '7 à 10 jours',
  },
  {
    id: 'MM-003', name: 'Sac bandoulière « Bleu Perle »', category: 'Sacs', price: 15000,
    image: '/produits/sac-bleu-perle.jpg', color: '#27358f',
    description: 'Sac bandoulière bleu roi bordé de volants blancs, rabat orné de petites perles.',
    sizes: [], colors: ['Bleu & blanc', other], availability: 'custom', leadTime: '5 à 7 jours',
  },
  {
    id: 'MM-004', name: 'Top dos nu « Arc-en-ciel »', category: 'Vêtements', price: 12000,
    image: '/produits/top-arc-en-ciel.jpg', color: '#e2574c',
    description: 'Top dos nu à rayures pop, fines bretelles à nouer. Coloré, léger, parfait pour l’été.',
    sizes: ADULT, colors: ['Rouge, orange & rose', other], availability: 'custom', leadTime: '5 à 7 jours', featured: true,
  },
  {
    id: 'MM-005', name: 'Cabas « Rose Poudré »', category: 'Sacs', price: 22000,
    image: '/produits/cabas-rose-poudre.jpg', color: '#e86aa0',
    description: 'Grand cabas tricolore aux anses solides, agrémenté d’un pompon. Pratique et élégant au quotidien.',
    sizes: [], colors: ['Rose, rose pâle & gris', other], availability: 'custom', leadTime: '7 à 10 jours', featured: true,
  },
  {
    id: 'MM-006', name: 'Crop top polo « Lilas »', category: 'Vêtements', price: 20000,
    image: '/produits/polo-lilas.jpg', color: '#b79bdc',
    description: 'Crop top à manches courtes et col polo contrasté. Un style chic et décontracté.',
    sizes: ADULT, colors: ['Lilas & blanc', other], availability: 'custom', leadTime: '7 à 10 jours',
  },
  {
    id: 'MM-007', name: 'Top asymétrique « Orange & Blanc »', category: 'Vêtements', price: 12000,
    image: '/produits/top-orange-blanc.jpg', color: '#f08a2e',
    description: 'Top à bandes orange et blanche, coupe asymétrique, attaches à nouer dans le cou.',
    sizes: ADULT, colors: ['Orange & blanc', other], availability: 'custom', leadTime: '5 à 7 jours',
  },
  {
    id: 'MM-008', name: 'Sac « Fougère »', category: 'Sacs', price: 15000,
    image: '/produits/sac-fougere.jpg', color: '#8fb04a',
    description: 'Petit sac vert à volants blancs, noeud et fleur décoratifs, longue anse en bandoulière.',
    sizes: [], colors: ['Vert & blanc', other], availability: 'custom', leadTime: '5 à 7 jours',
  },
  {
    id: 'MM-009', name: 'Ensemble trois pièces « Rubis »', category: 'Vêtements', price: 35000,
    image: '/produits/ensemble-rubis.jpg', color: '#c2506b',
    description: 'Chapeau bob, haut à volants et short à cordon, en rayures bordeaux et rose. Se commande en trio ou pièce par pièce.',
    sizes: ADULT, colors: ['Bordeaux & rose', other], availability: 'custom', leadTime: '12 à 15 jours', featured: true,
  },
  {
    id: 'MM-010', name: 'Chapeau « Volants Rose »', category: 'Accessoires', price: 10000,
    image: '/produits/chapeau-volants.jpg', color: '#f06fa6',
    description: 'Chapeau à large bord en volants rose et blanc. Un accessoire statement.',
    sizes: [], colors: ['Rose & blanc', other], availability: 'custom', leadTime: '5 à 7 jours',
  },
  {
    id: 'MM-011', name: 'Robe fillette « Marguerites »', category: 'Vêtements', price: 18000,
    image: '/produits/robe-fillette-marguerites.jpg', color: '#b3184f',
    description: 'Robe fuchsia à bretelles nouées, ceinture de petites fleurs blanches. Bandeau assorti disponible.',
    sizes: KIDS, colors: ['Fuchsia & blanc', other], availability: 'custom', leadTime: '7 à 10 jours',
  },
  {
    id: 'MM-012', name: 'Tunique de plage « Soleil »', category: 'Vêtements', price: 30000,
    image: '/produits/tunique-filet-soleil.jpg', color: '#f5b041',
    description: 'Tunique en filet blanc aux bandes orange et franges. Légère et aérée, à porter sur un maillot ou une tenue d’été.',
    sizes: ['Taille unique'], colors: ['Blanc & orange', other], availability: 'custom', leadTime: '10 à 14 jours', featured: true,
  },
  {
    id: 'MM-013', name: 'Cabas « Arc-en-ciel »', category: 'Sacs', price: 20000,
    image: '/produits/cabas-arc-en-ciel.jpg', color: '#c9856b',
    description: 'Grand sac cabas à rayures multicolores et longues anses. Spacieux et solide.',
    sizes: [], colors: ['Multicolore', other], availability: 'custom', leadTime: '7 à 10 jours',
  },
  {
    id: 'MM-014', name: 'Ensemble granny « Cobalt »', category: 'Vêtements', price: 55000,
    image: '/produits/ensemble-granny-cobalt.jpg', color: '#3a3ea8',
    description: 'Chemise et short assortis en carrés granny bleu cobalt et crème. Une pièce signature qui demande plusieurs jours de travail.',
    sizes: ADULT, colors: ['Bleu & crème', other], availability: 'custom', leadTime: '15 à 20 jours',
  },
  {
    id: 'MM-015', name: 'Ensemble granny « Violette »', category: 'Vêtements', price: 40000,
    image: '/produits/ensemble-granny-violette.jpg', color: '#b57edc',
    description: 'Top dos nu et jupe courte en carrés granny violet, rose et blanc.',
    sizes: ADULT, colors: ['Violet, rose & blanc', other], availability: 'custom', leadTime: '12 à 15 jours', featured: true,
  },
  {
    id: 'MM-016', name: 'Robe longue filet « Émeraude »', category: 'Vêtements', price: 45000,
    image: '/produits/robe-filet-emeraude.jpg', color: '#1f7a45',
    description: 'Robe longue en filet vert émeraude, fendue, ornée de fleurs orange au crochet.',
    sizes: ADULT, colors: ['Vert & orange', other], availability: 'custom', leadTime: '12 à 15 jours',
  },
  {
    id: 'MM-017', name: 'Pull côtelé « Barbe à papa »', category: 'Vêtements', price: 15000,
    image: '/produits/pull-cote-rose.jpg', color: '#f08fa8',
    description: 'Pull côtelé rose, doux et chaud, finition bords festonnés.',
    sizes: ['6 mois', '1 an', '2 ans', '3 ans', ...ADULT], colors: ['Rose', other], availability: 'custom', leadTime: '7 à 10 jours',
  },
  {
    id: 'MM-018', name: 'Sac filet « Citron »', category: 'Sacs', price: 12000,
    image: '/produits/sac-filet-citron.jpg', color: '#f2d33c',
    description: 'Sac en filet jaune soleil avec une fleur verte, idéal pour la plage et le marché.',
    sizes: [], colors: ['Jaune & vert', other], availability: 'custom', leadTime: '5 à 7 jours',
  },
]

export const AVAILABILITY = {
  ready: { label: 'Prêt à livrer', tone: 'ok' },
  custom: { label: 'Sur commande', tone: 'info' },
  personalizable: { label: 'Personnalisable', tone: 'info' },
  soldout: { label: 'Indisponible', tone: 'off' },
}

export const getStatus = (p) => (p.availability === 'ready' && p.stock === 0 ? 'soldout' : p.availability)
