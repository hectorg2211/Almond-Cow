import React from 'react'
import './index.scss'
import ProductCard from './ProductCard'
import Container from 'react-bootstrap/Container'
import { SanityProduct, Product } from '@utils/types'

export type Props = {
  products: Product[]
}

const ProductGrid = ({ products }: Props) => {
  const renderProducts = () =>
    products.map((product) => (
      <ProductCard product={product} key={product.storefrontId} />
    ))

  return (
    <Container>
      <div className='product-grid grid'>{renderProducts()}</div>
    </Container>
  )
}

export default ProductGrid
