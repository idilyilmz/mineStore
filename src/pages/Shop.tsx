import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { Category } from '../types'

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
    <main className="px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Shop</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${activeCategory === 'All' ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${activeCategory === cat ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setShowSold((v) => !v)}
          className={`ml-auto px-4 py-1.5 rounded-full text-sm border transition-colors ${showSold ? 'bg-gray-100 border-gray-300' : 'border-gray-200 text-gray-400'}`}
        >
          {showSold ? 'Hide sold' : 'Show sold'}
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-sm">No items found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}
