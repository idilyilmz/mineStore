import { Link } from 'react-router-dom'
import type { Product } from '../types'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/shop/${product.id}`}
      className={`group block ${product.sold ? 'opacity-40 pointer-events-none' : ''}`}
    >
      {/* Image */}
      <div className="aspect-[3/4] bg-neutral-100 overflow-hidden mb-3 relative">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-300 text-xs tracking-widest uppercase">
            No photo
          </div>
        )}
        {product.sold && (
          <span className="absolute top-2 left-2 text-xs tracking-widest uppercase text-neutral-400">
            Sold
          </span>
        )}
      </div>

      {/* Info */}
      <p className="text-xs text-neutral-400 tracking-wide mb-0.5">{product.brand}</p>
      <p className="text-sm text-neutral-800 mb-1">{product.name}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-900">€{product.price}</span>
        <span className="text-xs text-neutral-400">{product.size} · {product.condition}</span>
      </div>
    </Link>
  )
}
