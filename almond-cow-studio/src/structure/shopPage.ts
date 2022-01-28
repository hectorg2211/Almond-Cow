import S from '@sanity/desk-tool/structure-builder'
import { AiFillShop } from 'react-icons/ai'

const shopAll = S.documentListItem()
  .title('Shop Page')
  .schemaType('document')
  .icon(AiFillShop)
  .child(
    S.document()
      .schemaType('shop')
      .title('Shop Page')
      .documentId('shopPage')
      .views([S.view.form()])
  )

export default shopAll
