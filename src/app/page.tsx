import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  const featured = products.filter((p) => !p.sold).slice(0, 4)

  return (
    <main className="px-6 md:px-12">
      {/* Hero */}
      <section className="py-24 md:py-36 border-b border-neutral-200 dark:border-neutral-800">
        <p className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-6">
          Pre-loved clothing
        </p>
        <h1 className="text-4xl md:text-6xl leading-tight text-neutral-900 dark:text-neutral-100 max-w-xl">
          My closet,<br />your new favourite outfit.
        </h1>
        <Link
          href="/shop"
          className="inline-block mt-10 text-sm tracking-widest uppercase text-neutral-900 dark:text-neutral-100 border-b border-neutral-800 dark:border-neutral-200 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
        >
          Browse the shop
        </Link>
      </section>

      {/* Featured */}
      <section className="py-16">
        <p className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-10">
          Latest items
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/shop" className="text-sm tracking-widest uppercase border-b border-neutral-400 dark:border-neutral-600 pb-0.5 hover:text-neutral-500 transition-colors">
            View all
          </Link>
        </div>
      </section>
    </main>
  )
}
