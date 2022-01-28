import S from '@sanity/desk-tool/structure-builder'
import header from './src/structure/header'
import homePage from './src/structure/homePage'
import shopPage from './src/structure/shopPage'

const hiddenDocTypes = (listItem) =>
  !['home', 'header', 'shop'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      header,
      homePage,
      shopPage,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
