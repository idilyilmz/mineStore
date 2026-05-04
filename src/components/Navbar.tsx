'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { totalItems } = useCart()
  const pathname = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = typeof window !== 'undefined' && localStorage.getItem('theme')
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = (stored as 'light' | 'dark') || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  function navClass(href: string) {
    const active = pathname === href || (href !== '/' && pathname.startsWith(href))
    return active
      ? 'border-b border-neutral-800 dark:border-neutral-200'
      : 'hover:border-b border-neutral-400 dark:border-neutral-600 transition-all'
  }

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 px-6 md:px-12 py-5 flex items-center justify-between">
      <Link href="/" className="text-lg tracking-widest uppercase">
        mineStore
      </Link>

      <nav className="flex items-center gap-6 text-sm tracking-wide">
        <Link href="/shop" className={navClass('/shop')}>Shop</Link>
        <Link href="/about" className={navClass('/about')}>About</Link>
        <Link href="/cart" className={`relative ${navClass('/cart')}`}>
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-neutral-500 dark:text-neutral-300">
              ({totalItems})
            </span>
          )}
        </Link>

        <button
          aria-label="Toggle dark mode"
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </nav>
    </header>
  )
}
