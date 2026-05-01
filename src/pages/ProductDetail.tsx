import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem, items } = useCart()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="px-6 py-20 text-center text-gray-400">
        Product not found.
      </main>
    )
  }

  const inCart = items.some((item) => item.product.id === product.id)

  function handleAddToCart() {
    addItem(product!)
    navigate('/cart')
  }

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="text-sm text-gray-400 hover:text-gray-700 mb-8 block">
        &larr; Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
          {product.images[0] ? (
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
              No image
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400 mb-1">{product.brand}</p>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-6">€{product.price}</p>

          <div className="flex gap-3 mb-6 text-sm">
            <span className="px-3 py-1 border border-gray-200 rounded-full text-gray-600">{product.size}</span>
            <span className="px-3 py-1 border border-gray-200 rounded-full text-gray-600">{product.condition}</span>
            <span className="px-3 py-1 border border-gray-200 rounded-full text-gray-600">{product.category}</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">{product.description}</p>

          {product.sold ? (
            <p className="text-sm text-gray-400">This item has been sold.</p>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={inCart}
              className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {inCart ? 'Already in cart' : 'Add to cart'}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
