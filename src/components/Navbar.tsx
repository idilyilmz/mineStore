import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className="border-b border-neutral-200 px-6 md:px-12 py-5 flex items-center justify-between">
      <Link to="/" className="text-lg tracking-widest uppercase">
        mineStore
      </Link>

      <nav className="flex items-center gap-8 text-sm tracking-wide">
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? 'border-b border-neutral-800' : 'hover:border-b border-neutral-400 transition-all'
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'border-b border-neutral-800' : 'hover:border-b border-neutral-400 transition-all'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative ${isActive ? 'border-b border-neutral-800' : 'hover:border-b border-neutral-400 transition-all'}`
          }
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-neutral-500">
              ({totalItems})
            </span>
          )}
        </NavLink>
      </nav>
    </header>
  )
}
