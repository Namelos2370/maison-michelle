import { Link } from 'react-router-dom'
import ProductImage from './ProductImage.jsx'
import { AVAILABILITY, getStatus } from '../data/products.js'
import { fcfa } from '../config.js'

export default function ProductCard({ product }) {
  const status = getStatus(product)
  const a = AVAILABILITY[status]
  return (
    <Link to={`/produit/${product.id}`} className="card">
      <div className="card-img">
        <ProductImage product={product} />
        <span className={'tag ' + a.tone}>{a.label}</span>
      </div>
      <div className="card-body">
        <small>{product.category}</small>
        <h3>{product.name}</h3>
        <p className="price">{fcfa(product.price)}</p>
      </div>
    </Link>
  )
}
