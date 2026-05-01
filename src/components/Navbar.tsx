import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-semibold tracking-tight text-gray-900">
        mineStore
      </Link>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <Link to="/shop" className="hover:text-gray-900 transition-colors">
          Shop
        </Link>
        <Link to="/cart" className="relative hover:text-gray-900 transition-colors">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-gray-900 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
