// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Pages
import homePage from './pages/homePage'
import shopPage from './pages/shopPage'

// Modules
import header from './resources/header'
import footer from './resources/footer'
import heroWithBg from './objects/heroWithBg'

// Objects
import blockContent from './blockContent'
import blockContentObject from './objects/blockContentObject'
import mainImage from './objects/mainImage'
import colorPalette from './objects/colorPalette'
import seo from './objects/seo'
import ctaButton from './objects/ctaButton'
import table from './objects/table'
import row from './objects/row'
import navigationLink from './objects/navigationLink'
import backgroundCurve from './objects/backgroundCurve'
import navigationLinkWithMenu from './objects/navigationLinkWithMenu'
import social from './objects/social'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // Pages
    homePage,
    shopPage,

    // Modules
    header,
    footer,
    heroWithBg,

    // Objects
    blockContent,
    blockContentObject,
    ctaButton,
    table,
    row,
    mainImage,
    colorPalette,
    seo,
    navigationLink,
    navigationLinkWithMenu,
    backgroundCurve,
    social,
  ]),
})
