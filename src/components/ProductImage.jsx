// Affiche la photo du produit, ou un visuel de remplacement élégant (motif crochet) tant que les photos ne sont pas ajoutées.
export default function ProductImage({ product, className = '' }) {
  if (product.image) {
    return <img className={'pimg ' + className} src={product.image} alt={product.name} loading="lazy" />
  }
  const c = product.color || product.imageColor || '#e5d3bf'
  return (
    <div className={'pimg placeholder ' + className} style={{ '--c': c }} role="img" aria-label={product.name}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <pattern id={'p' + (product.id || 'x')} width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="3" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={'url(#p' + (product.id || 'x') + ')'} />
      </svg>
      <span>{product.name.split('«')[0].trim()}</span>
    </div>
  )
}
