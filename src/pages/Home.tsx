import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featured = products.filter((p) => !p.sold).slice(0, 4)

  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">
          My closet, your new favourite outfit.
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Pre-loved clothing, carefully selected. Every piece has a story — maybe your story is next.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Browse the shop
        </Link>
      </section>

      {/* Featured items */}
      <section className="px-6 pb-20">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Latest items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/shop" className="text-sm text-gray-500 underline hover:text-gray-900">
            View all items
          </Link>
        </div>
      </section>
    </main>
  )
}
