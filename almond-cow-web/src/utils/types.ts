import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Client } from 'shopify-buy'

// Modules
export type SanityHeader = {
  icon: SanityMainImage
  mobileIcon: SanityMainImage
  links: Link[]
}

export type SanityHeroWithBg = {
  _type: string
  backgroundColor: BackgroundColor
  navBarColor: BackgroundColor
  _rawContent: SanityRawText[]
  image: SanityMainImage
  deskBg: SanityMainImage
  divider: SanityMainImage
  imageSide: boolean
}

//Pages
export type SanityHomePage = {
  tilte: string
  slug: Slug
  seo: SEO
  backgroundColor: BackgroundColor
  footerBgColor: BackgroundColor
  content: [SanityHeroWithBg]
}

// Utilities
export type Slug = {
  current: string
}

export type Link = {
  slug: Slug
  title: string
}

export type SanityMainImage = {
  _type: string
  alt: string
  asset: {
    gatsbyImageData: IGatsbyImageData
  }
  hotspot: {
    height: number
    width: number
    y: number
    x: number
  }
}

export type BackgroundColor = {
  value: string
  title: string
}

export enum text_marks {
  strong = 'strong',
  em = 'em',
  italic = 'italic',
  code = 'code',
}

export type RichText = {
  text: string
  marks: text_marks[]
  _key: string
  _type: string
}

export type SanityRawText = {
  _key: string
  _type: string
  children: RichText[]
  marksDef: any[]
  style: string
}

export type SEO = {
  title?: string
  description?: string
  lang?: string
  location: string
  meta?: any[]
  image?: string
  keywords?: string
  twitterCard?: string
  twitterSite?: string
  twitterCreator?: string
}

export type Button = {
  title: string
  slug?: Slug
  type: 'primary' | 'secondary' | 'tertiary'
  btnBg?: BackgroundColor
}

export interface IShopCheckout {
  id?: string | number
  lineItemCount?: number
  subtotalPrice?: string
  totalPrice?: string
  totalTax?: string
  completedAt?: string
  checkoutUrl?: string
  lineItems?: {
    id?: string | number
    variantId: string | number
    quantity: number
    title: string | undefined
    customAttributes?: { key: string; value: string }[]
  }[]
  lineItemsSubtotalPrice?: {
    amount: string
    currencyCode: string
  }
  webUrl?: string
  userErrors?: {
    field: {
      type: {
        kind: string
        name: string
      }
      value: string
    }[]
    message: string
  }[]
  discountApplications?: DiscountApplications[]
}

export type DiscountApplications = {
  allocationMethod: string
  applicable: boolean
  code: string
  value: {
    amount: string
    currencyCode: string
  }
}

export interface IShopContext {
  isLoading: boolean
  isCartOpen: boolean
  quantity: number
  coupon: string
  checkout: IShopCheckout
  toggleCartOpen: () => void
  onCartClose: () => void
  addProductToCart?: (
    variantId: string | number,
    quantity: number
  ) => Promise<void>
  updateQuantity?: (id: string, quantity: number | string) => Promise<void>
  removeProductFromCart?: (id: string) => Promise<void>
  onCouponChange?: (value: string) => void
  checkCoupon?: (coupon: string) => Promise<void>
  removeCoupon?: (coupon: string) => Promise<void>
  client: Client
}

export type SanityShop = {
  _id: string
  seo: SEO
  _rawTitle: SanityRawText[]
  heroBg: BackgroundColor
  collections: string[]
  _rawHeader: SanityRawText[]
}

export type Product = {
  id: number
  availableForSale: boolean
  price: string
  selectedOptions: {
    name: string
    value: string
  }[]
  storefrontId: string
  title: string
  handle: string
  legacyResourceId: number
  priceRange: {
    maxVariantPrice: {
      amount: string
      currencyCode: string
    }
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  metafields: [
    {
      key: string
      value: string
    }
  ]
  productType: string
  publishedAt: Date
  description: string
  descriptionHtml: string
  vendor: string
  variants: ProductVariant[]
  images: ImageSharp[]
  featuredImage: ImageSharp
  tags: string[]
}

export type ProductVariant = {
  id: string
  title: string
  price: string
  requiresShipping: boolean
  shopifyId: string
  storefrontId: string
  sku: string
  priceV2: ProductPrice
  availableForSale: boolean
}

export type ProductPrice = {
  amount: string
  currencyCode: string
}

export type ImageSharp = {
  altText: string
  gatsbyImageData: IGatsbyImageData
}

export type Collection = {
  handle: string
  id: string
  description: string
  title: string
  descriptionHtml: string
  image: ImageSharp
  products: Product[]
}

export type SanityProduct = {
  _type: string
  slug: Slug
  backgroundColor: BackgroundColor
  spin: Slug
  tags: Tag[]
  store: Store
  seo: SEO
  content: [SanityItemArray | SanityGrid | SanityReviews | SanitySlider]
}

export type SanityReviews = {
  _type: string
  backgroundColor: BackgroundColor
  backgroundImage: BackgroundImageType
  _rawTitle: SanityRawText[]
  product: Product
}

export type Store = {
  id: number
  title: string
  slug: Slug
}

export type SanityItem = {
  image: SanityMainImage
  _rawDescription: SanityRawText[]
  name: string
}

export type SanityItemArray = {
  _type: string
  title: string
  backgroundColor: BackgroundColor
  content: SanityItem[]
}

export type Tag = {
  title: string
  slug: Slug
  backgroundColor?: BackgroundColor
}

export type SanityGrid = {
  _type: string
  _rawHeader: SanityRawText[]
  items: [SanityRecipe]
}

export type SanityRecipe = {
  _type: string
  title: string
  duration: string
  video: SanityFile
  image: SanityMainImage
  dietaryNeeds: Tag[]
  featuredTags: Tag[]
  slug: Slug
  seo: SEO
  backgroundColor: BackgroundColor
  footerBgColor: BackgroundColor
  category: SanityRecipeCategory
  _rawDescription: SanityRawText[]
  _rawIngredients: SanityRawText[]
  directions: [BlockContentObject | SanityImageWithText]
  social: SocialType[]
  sliders: [SanitySlider]
  isGrid: boolean
  _createdAt: string
}

export type SanitySlider = {
  _type: string
  backgroundColor: BackgroundColor
  backgroundImage: BackgroundImageType
  image: SanityMainImage
  addToCart: boolean
  _rawItems: [SanityProduct | SanityRecipe]
  _rawTitle: SanityRawText[]
  type: sliderTypes
}

export enum sliderTypes {
  recipe = 'recipes',
  product = 'products',
  productsBundle = 'productsBundle',
  recipeCategories = 'recipeCategories',
  customCarousel = 'customCarousel',
}

export type BackgroundImageType = {
  _type: string
  alt?: string
  asset: {
    gatsbyImageData: IGatsbyImageData
  }
  alignVertical?: 'center' | 'top' | 'bottom'
  alignHorizontal?: 'center' | 'left' | 'right'
}

export type SocialType = {
  icon: SanityMainImage
  title: string
  url: string
}

export type SanityImageWithText = {
  _type: string
  _rawText: SanityRawText[]
  sectionId: string
  backgroundColor: BackgroundColor
  image: SanityImage
  flip: boolean
}

export type SanityImage = {
  alt: string
  slug: Slug
  asset: {
    gatsbyImageData: IGatsbyImageData
  }
}

export type SanityRecipeCategory = {
  _type: string
  title: string
  slug: Slug
  image: SanityMainImage
}

export type BlockContentObject = {
  _type: string
  _rawBlockContent: SanityRawText[]
}

export type SanityFile = {
  _type: string
  asset: {
    url: string
  }
}
