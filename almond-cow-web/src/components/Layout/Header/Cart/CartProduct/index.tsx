import React, { useMemo } from 'react'
import './index.scss'
import CloseIcon from '@assets/svg/Close'
import { getShopifyImage } from 'gatsby-source-shopify'
import { GatsbyImage } from 'gatsby-plugin-image'

const CartProduct = ({ item }) => {
  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  }

  const image = React.useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: 'constrained',
        width: 160,
        height: 160,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variantImage.src]
  )
  return (
    <div className='cart-product flex items-center'>
      <div className='cart-product-image'>
        {image && (
          <GatsbyImage
            key={variantImage.src}
            image={image}
            alt={variantImage.altText ?? item.variant.title}
          />
        )}
      </div>

      <div className='cart-product-details flex flex-col items-start'>
        <div className='product-name flex items-center self-stretch'>
          <span className='product-name mr-auto'>{item.title}</span>
          <CloseIcon />
        </div>

        <span className='product-price'>${item.variant.price}</span>

        <div className='product-quantity flex justify-center'>
          <span className='product-modifier'>-</span>
          <span className='quantity'>{item.quantity}</span>
          <span className='product-modifier'>+</span>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
