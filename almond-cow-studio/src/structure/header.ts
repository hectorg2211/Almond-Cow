import S from '@sanity/desk-tool/structure-builder'
import { GiHamburgerMenu } from 'react-icons/gi'

const header = S.documentListItem()
  .title('Header')
  .schemaType('document')
  .icon(GiHamburgerMenu)
  .child(
    S.document()
      .schemaType('header')
      .documentId('headerSection')
      .views([S.view.form()])
  )

export default header
