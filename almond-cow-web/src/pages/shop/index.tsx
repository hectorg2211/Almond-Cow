import React, { useEffect, useState } from 'react'
import loadable from '@loadable/component'
const HeroWithCategory = loadable(() => import('@components/HeroWithCategory'))
const ProductGrid = loadable(() => import('@components/ProductGrid'))

import { graphql } from 'gatsby'
import { SanityShop, Product, Collection } from '@utils/types'

type Props = {
  data: {
    allShopifyProduct: { edges: { node: Product }[] }
    allShopifyCollection: { edges: { node: Collection }[] }
    sanityShop: SanityShop
  }
  location
}

const ShopPage = ({
  data: {
    allShopifyProduct: { edges: shopifyProducts },
    allShopifyCollection: { edges: collections },
    sanityShop,
  },
  location,
}) => {
  const categories = sanityShop?.collections?.map((item) => item)
  const initialProductList = shopifyProducts?.map(({ node }) => node)
  const [filter, setFilter] = useState('')
  const [products, setProducts] = useState(initialProductList)
  const metadata = {
    location: location.href,
    ...sanityShop?.seo,
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search?.substring(1) || '')
    const category = params.get('collection')

    !category ? setFilter(sanityShop?.collections[0]) : setFilter(category)
  }, [location])

  return (
    <>
      <HeroWithCategory
        bgColor={sanityShop?.heroBg?.value}
        categories={categories}
        header={sanityShop?._rawHeader}
        category={filter}
      />

      <ProductGrid products={products} />
    </>
  )
}

export default ShopPage

export const pageQuery = graphql`
  query {
    sanityShop(_id: { eq: "shopPage" }) {
      _id
      seo {
        description
        keywords
        image
        title
        twitterCard
        twitterCreator
        twitterSite
      }
      collections
      _rawHeader
      heroBg {
        value
        title
      }
    }
    allShopifyProduct {
      edges {
        node {
          featuredImage {
            altText
            gatsbyImageData(placeholder: BLURRED, height: 350)
          }
          title
          descriptionHtml
          handle
          shopifyId
          variants {
            availableForSale
            price
            selectedOptions {
              name
              value
            }
            storefrontId
            title
          }
          storefrontId
        }
      }
    }
    allShopifyCollection {
      edges {
        node {
          title
          products {
            featuredImage {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
            title
            descriptionHtml
            handle
            shopifyId
            variants {
              price
              shopifyId
            }
          }
        }
      }
    }
  }
`
