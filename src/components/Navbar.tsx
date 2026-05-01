'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()
  const pathname = usePathname()

  function navClass(href: string) {
    const active = pathname === href || (href !== '/' && pathname.startsWith(href))
    return active
      ? 'border-b border-neutral-800'
      : 'hover:border-b border-neutral-400 transition-all'
  }

  return (
    <header className="border-b border-neutral-200 px-6 md:px-12 py-5 flex items-center justify-between">
      <Link href="/" className="text-lg tracking-widest uppercase">
        mineStore
      </Link>

      <nav className="flex items-center gap-8 text-sm tracking-wide">
        <Link href="/shop" className={navClass('/shop')}>Shop</Link>
        <Link href="/about" className={navClass('/about')}>About</Link>
        <Link href="/cart" className={`relative ${navClass('/cart')}`}>
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-neutral-500">
              ({totalItems})
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}
