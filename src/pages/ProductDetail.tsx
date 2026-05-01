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
      <main className="px-6 md:px-12 py-20 text-center text-neutral-400 text-sm">
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
    <main className="px-6 md:px-12 py-12">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-neutral-400 hover:text-neutral-700 mb-10 block tracking-wide transition-colors"
      >
        &larr; Back
      </button>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Images */}
        <div className="aspect-[3/4] bg-neutral-100">
          {product.images[0] ? (
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-300 text-xs tracking-widest uppercase">
              No photo
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col py-2">
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-3">{product.brand}</p>
          <h1 className="text-2xl md:text-3xl text-neutral-900 mb-4">{product.name}</h1>
          <p className="text-2xl text-neutral-900 mb-8">€{product.price}</p>

          <div className="flex gap-4 mb-8 text-xs tracking-widest uppercase text-neutral-500">
            <span>{product.size}</span>
            <span className="text-neutral-200">|</span>
            <span>{product.condition}</span>
            <span className="text-neutral-200">|</span>
            <span>{product.category}</span>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed mb-10">{product.description}</p>

          {product.sold ? (
            <p className="text-sm text-neutral-400 tracking-wide">This item has been sold.</p>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={inCart}
              className="border border-neutral-900 text-neutral-900 px-6 py-3 text-sm tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {inCart ? 'Already in cart' : 'Add to cart'}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
