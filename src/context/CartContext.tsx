// eslint-disable-next-line react-refresh/only-export-components
import { createContext, useContext, useState, type ReactNode } from 'react'
import type { CartItem, Product } from '../types'

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  totalPrice: number
  totalItems: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(product: Product) {
    setItems((prev) => {
      const exists = prev.find((item) => item.product.id === product.id)
      if (exists) return prev
      return [...prev, { product }]
    })
  }

  function removeItem(productId: string) {
    setItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  function clearCart() {
    setItems([])
  }

  const totalPrice = items.reduce((sum, item) => sum + item.product.price, 0)
  const totalItems = items.length

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
