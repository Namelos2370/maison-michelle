import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const KEY = 'mm_cart_v1'

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const lineId = (p, size, color) => `${p.id}|${size || ''}|${color || ''}`

  const add = (product, { size, color, note, qty = 1 }) => {
    const id = lineId(product, size, color)
    setItems((prev) => {
      const found = prev.find((l) => l.lineId === id)
      if (found) return prev.map((l) => (l.lineId === id ? { ...l, qty: l.qty + qty } : l))
      return [
        ...prev,
        { lineId: id, id: product.id, name: product.name, price: product.price, size, color, note, qty, availability: product.availability, leadTime: product.leadTime, imageColor: product.color, image: product.image },
      ]
    })
  }

  const setQty = (id, qty) =>
    setItems((prev) => prev.map((l) => (l.lineId === id ? { ...l, qty: Math.max(1, qty) } : l)))
  const remove = (id) => setItems((prev) => prev.filter((l) => l.lineId !== id))
  const clear = () => setItems([])

  const value = useMemo(
    () => ({
      items,
      add,
      setQty,
      remove,
      clear,
      count: items.reduce((s, l) => s + l.qty, 0),
      subtotal: items.reduce((s, l) => s + l.qty * l.price, 0),
    }),
    [items]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
