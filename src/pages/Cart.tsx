import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeItem, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <main className="px-6 py-20 text-center">
        <p className="text-gray-400 mb-4">Your cart is empty.</p>
        <Link to="/shop" className="text-sm text-gray-900 underline">
          Go to shop
        </Link>
      </main>
    )
  }

  return (
    <main className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Your cart</h1>

      <ul className="divide-y divide-gray-100 mb-8">
        {items.map(({ product }) => (
          <li key={product.id} className="flex gap-4 py-4">
            <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              {product.images[0] ? (
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                  No img
                </div>
              )}
            </div>

            <div className="flex-1">
              <p className="text-xs text-gray-400">{product.brand}</p>
              <p className="text-sm font-medium text-gray-900">{product.name}</p>
              <p className="text-xs text-gray-400 mt-1">{product.size} · {product.condition}</p>
              <p className="text-sm font-semibold text-gray-900 mt-2">€{product.price}</p>
            </div>

            <button
              onClick={() => removeItem(product.id)}
              className="text-xs text-gray-400 hover:text-gray-700 self-start mt-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 pt-6 flex items-center justify-between mb-6">
        <span className="text-gray-600">Total</span>
        <span className="text-xl font-semibold text-gray-900">€{totalPrice}</span>
      </div>

      <Link
        to="/checkout"
        className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        Proceed to checkout
      </Link>
    </main>
  )
}
