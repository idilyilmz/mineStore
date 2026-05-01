import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, totalPrice } = useCart()

  return (
    <main className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Full name</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Address</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
              placeholder="Street, city, country"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Place order
          </button>
        </form>

        {/* Order summary */}
        <div>
          <h2 className="text-sm font-medium text-gray-900 mb-4">Order summary</h2>
          <ul className="divide-y divide-gray-100 text-sm text-gray-600">
            {items.map(({ product }) => (
              <li key={product.id} className="flex justify-between py-2">
                <span>{product.name}</span>
                <span>€{product.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-gray-900 mt-4 pt-4 border-t border-gray-200">
            <span>Total</span>
            <span>€{totalPrice}</span>
          </div>
        </div>
      </div>
    </main>
  )
}
