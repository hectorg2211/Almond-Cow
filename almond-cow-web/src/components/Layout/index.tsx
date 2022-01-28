import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/main.scss'
import './index.scss'
import React from 'react'
import Header from './Header'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const { sanityHeader } = useStaticQuery(query)

  return (
    <main>
      <Header header={sanityHeader} />
      <div className='site-container'>{children}</div>
    </main>
  )
}

export default Layout

const query = graphql`
  query {
    sanityHeader {
      icon {
        alt
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      mobileIcon {
        alt
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      links {
        slug {
          current
        }
        title
      }
    }
  }
`
