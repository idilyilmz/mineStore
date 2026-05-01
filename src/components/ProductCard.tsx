import { Link } from 'react-router-dom'
import { Product } from '../types'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/shop/${product.id}`}
      className={`group block rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${product.sold ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <div className="aspect-[3/4] bg-gray-100 relative">
        {product.images[0] ? (
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            No image
          </div>
        )}
        {product.sold && (
          <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
            Sold
          </span>
        )}
      </div>

      <div className="p-3">
        <p className="text-xs text-gray-400 mb-0.5">{product.brand}</p>
        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-gray-900">€{product.price}</span>
          <span className="text-xs text-gray-400">{product.size} · {product.condition}</span>
        </div>
      </div>
    </Link>
  )
}
