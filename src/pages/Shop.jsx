import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, CATEGORIES, AVAILABILITY, getStatus } from '../data/products.js'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') || ''
  const avail = params.get('dispo') || ''
  const sort = params.get('tri') || ''
  const q = params.get('q') || ''

  const set = (k, v) => {
    const next = new URLSearchParams(params)
    v ? next.set(k, v) : next.delete(k)
    setParams(next, { replace: true })
  }

  const list = useMemo(() => {
    let l = PRODUCTS.filter(
      (p) =>
        (!cat || p.category === cat) &&
        (!avail || getStatus(p) === avail) &&
        (!q || (p.name + ' ' + p.description).toLowerCase().includes(q.toLowerCase()))
    )
    if (sort === 'asc') l = [...l].sort((a, b) => a.price - b.price)
    if (sort === 'desc') l = [...l].sort((a, b) => b.price - a.price)
    return l
  }, [cat, avail, sort, q])

  return (
    <div className="container section">
      <h1 className="page-title">Boutique</h1>
      <div className="filters">
        <input type="search" placeholder="Rechercher une création…" value={q} onChange={(e) => set('q', e.target.value)} />
        <select value={cat} onChange={(e) => set('cat', e.target.value)}>
          <option value="">Toutes les catégories</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={avail} onChange={(e) => set('dispo', e.target.value)}>
          <option value="">Toute disponibilité</option>
          {Object.entries(AVAILABILITY).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
        </select>
        <select value={sort} onChange={(e) => set('tri', e.target.value)}>
          <option value="">Trier par défaut</option>
          <option value="asc">Prix croissant</option>
          <option value="desc">Prix décroissant</option>
        </select>
      </div>
      {list.length === 0 ? (
        <p className="muted center">Aucune création ne correspond à votre recherche.</p>
      ) : (
        <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      )}
    </div>
  )
}
