'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import type { Category } from '@/types'

const categories: Category[] = ['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Shoes', 'Accessories']

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All')
  const [showSold, setShowSold] = useState(false)

  const filtered = products.filter((p) => {
    if (!showSold && p.sold) return false
    if (activeCategory !== 'All' && p.category !== activeCategory) return false
    return true
  })

  return (
    <main className="px-6 md:px-12 py-12">
      <h1 className="text-3xl text-neutral-900 mb-10">Shop</h1>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 text-sm text-neutral-500 border-b border-neutral-200 pb-6">
        {(['All', ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`tracking-wide transition-colors ${
              activeCategory === cat
                ? 'text-neutral-900 border-b border-neutral-900'
                : 'hover:text-neutral-900'
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setShowSold((v) => !v)}
          className="ml-auto text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          {showSold ? 'Hide sold' : 'Show sold'}
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-neutral-400 text-sm">No items found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}
