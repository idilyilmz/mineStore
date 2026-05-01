'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, removeItem, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <main className="px-6 md:px-12 py-20 text-center">
        <p className="text-neutral-400 text-sm mb-6">Your cart is empty.</p>
        <Link
          href="/shop"
          className="text-sm tracking-widest uppercase border-b border-neutral-400 pb-0.5 hover:text-neutral-500 transition-colors"
        >
          Go to shop
        </Link>
      </main>
    )
  }

  return (
    <main className="px-6 md:px-12 py-12 max-w-2xl">
      <h1 className="text-3xl text-neutral-900 mb-12">Your cart</h1>

      <ul className="divide-y divide-neutral-100">
        {items.map(({ product }) => (
          <li key={product.id} className="flex gap-6 py-6">
            <div className="w-20 h-24 bg-neutral-100 flex-shrink-0">
              {product.images[0] ? (
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-300 text-xs">—</div>
              )}
            </div>

            <div className="flex-1">
              <p className="text-xs text-neutral-400 tracking-wide mb-1">{product.brand}</p>
              <p className="text-sm text-neutral-900 mb-1">{product.name}</p>
              <p className="text-xs text-neutral-400">{product.size} · {product.condition}</p>
              <p className="text-sm text-neutral-900 mt-2">€{product.price}</p>
            </div>

            <button
              onClick={() => removeItem(product.id)}
              className="text-xs text-neutral-300 hover:text-neutral-600 self-start tracking-wide transition-colors"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-neutral-200 pt-6 flex items-center justify-between mb-8 mt-2">
        <span className="text-sm text-neutral-500">Total</span>
        <span className="text-xl text-neutral-900">€{totalPrice}</span>
      </div>

      <Link
        href="/checkout"
        className="block text-center border border-neutral-900 text-neutral-900 px-6 py-3 text-sm tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-colors"
      >
        Proceed to checkout
      </Link>
    </main>
  )
}
