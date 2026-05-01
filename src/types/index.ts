export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
export type Condition = 'New' | 'Like New' | 'Good' | 'Fair'
export type Category = 'Tops' | 'Bottoms' | 'Dresses' | 'Outerwear' | 'Shoes' | 'Accessories'

export interface Product {
  id: string
  name: string
  brand: string
  description: string
  price: number
  size: Size
  condition: Condition
  category: Category
  images: string[]
  sold: boolean
}

export interface CartItem {
  product: Product
}
