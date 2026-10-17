# Maison Michelle — Boutique en ligne (React + Vite)

Version 1 du site e-commerce de Maison Michelle : catalogue, fiches produit, panier, commande avec référence unique, confirmation manuelle, lien WhatsApp, pages légales. Prêt pour Vercel.

## Lancer en local

```bash
npm install
npm run dev
```

## Déployer sur Vercel

1. Pousser le dossier sur GitHub.
2. Sur vercel.com → **Add New → Project** → importer le dépôt.
3. Vercel détecte Vite automatiquement (build : `npm run build`, sortie : `dist`). `vercel.json` gère les routes React.
4. Ajouter le domaine (maisonmichelle.com / .cm) dans **Settings → Domains**.

## À personnaliser (priorité)

| Fichier | Quoi |
|---|---|
| `src/config.js` | Numéro WhatsApp, e-mail, réseaux sociaux, zones et frais de livraison, moyens de paiement |
| `src/data/products.js` | Les vraies créations (nom, prix, tailles, couleurs, stock, délai) |
| `public/produits/` | Photos des produits, puis renseigner `image: '/produits/xxx.jpg'` |
| `src/pages/Story.jsx` | Texte « Notre histoire » de Michelle |
| `src/pages/Legal.jsx` | Conditions de vente, confidentialité, retours (à faire valider) |

## Comment arrivent les commandes ?

Sans backend, à ce stade :
- la commande est enregistrée sur l'appareil du client et sa **référence unique** est affichée ;
- le client envoie le récapitulatif **pré-rempli sur WhatsApp** à Michelle, qui confirme manuellement ;
- optionnel : définir `VITE_ORDER_ENDPOINT` (variable d'environnement Vercel) avec l'URL d'un service (Formspree, Make, Zapier, Supabase Edge Function…) pour recevoir chaque commande en JSON automatiquement.

Règle respectée : aucune commande n'est considérée payée sans vérification de l'encaissement ; le statut de paiement est séparé du statut de commande.

## Prochaines étapes

1. **Supabase** : table `orders` + `products`, notifications e-mail/WhatsApp.
2. **Espace d'administration** : produits, stocks, statuts de commande (En attente → Livrée), livraisons.
3. Passerelle Mobile Money automatisée (après vérification de l'éligibilité marchande).
4. Version anglaise et livraison internationale.
