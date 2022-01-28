import React, { useState, useContext } from 'react'
import './index.scss'
import Button from 'react-bootstrap/Button'
import { AddToCart } from '@components/AddToCart'
import { Link } from 'gatsby'
import { SanityProduct, Product } from '@utils/types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StoreContext } from '../../../context/store-context'

export type Props = {
  product: Product
  sanityProduct: SanityProduct
  showDescription?: boolean
}

const ProductCard = ({ product }) => {
  const [initialVariant] = product.variants
  const { client, checkout } = useContext(StoreContext)
  const [variant, setVariant] = useState({ ...initialVariant })
  const productShopifyId = product.shopifyId.split('/').at(-1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  return (
    <div className='product-card'>
      <div className='product-card-display flex flex-col items-center relative'>
        <div className='product-card-image'>
          <GatsbyImage
            image={product?.featuredImage?.gatsbyImageData}
            imgStyle={{ objectFit: 'contain' }}
            alt={'Alternative'}
          />
        </div>
        <div className='product-card-buttons absolute flex-col display-hover hidden'>
          <Link
            className='cta-primary cta-cream'
            to={`/products/${product.handle}`}>
            View Product
          </Link>

          <AddToCart
            variant='link'
            variantId={productVariant.storefrontId}
            quantity={1}
            className='cta-secondary cta-light-cream'
          />
        </div>
      </div>
      <div className='product-card-text'>
        <div className='product-card-info flex'>
          <div className='product-card-title'>{product?.title}</div>
          <div className='product-card-price'>
            ${product?.variants[0].price}
          </div>
        </div>
        <div
          className='product-card-description'
          dangerouslySetInnerHTML={{ __html: product?.descriptionHtml }}
        />
      </div>
    </div>
  )
}

export default ProductCard
