import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, totalPrice } = useCart()

  return (
    <main className="px-6 md:px-12 py-12">
      <h1 className="text-3xl text-neutral-900 mb-12">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
        {/* Form */}
        <form className="flex flex-col gap-6">
          <div>
            <label className="text-xs tracking-widest uppercase text-neutral-400 block mb-2">
              Full name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent"
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-neutral-400 block mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent"
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-neutral-400 block mb-2">
              Address
            </label>
            <input
              type="text"
              placeholder="Street, city, country"
              className="w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="mt-4 border border-neutral-900 text-neutral-900 px-6 py-3 text-sm tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Place order
          </button>
        </form>

        {/* Summary */}
        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-6">Order summary</p>
          <ul className="divide-y divide-neutral-100 text-sm">
            {items.map(({ product }) => (
              <li key={product.id} className="flex justify-between py-3 text-neutral-700">
                <span>{product.name}</span>
                <span>€{product.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-neutral-900 mt-4 pt-4 border-t border-neutral-200">
            <span className="text-sm">Total</span>
            <span>€{totalPrice}</span>
          </div>
        </div>
      </div>
    </main>
  )
}
