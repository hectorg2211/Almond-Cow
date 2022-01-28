import React from 'react'
import loadable from '@loadable/component'
const ModuleItem = loadable(() => import('@utils/moduleItem'))
import { SanityHomePage } from '@utils/types'
import { graphql } from 'gatsby'

type Props = {
  data: {
    sanityHome: SanityHomePage
  }
  location: Location
}

const HomePage = ({ data: { sanityHome }, location }: Props) => {
  const metadata = {
    location: location.href,
    ...sanityHome?.seo,
  }

  return (
    <>
      {/* <SEO {...metadata} /> */}
      <div
        style={{
          backgroundColor: sanityHome?.backgroundColor?.value || '#e6dfd7',
        }}>
        {sanityHome?.content.map((module, index) => (
          <ModuleItem module={module} key={index} />
        ))}
      </div>
    </>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    sanityHome(_id: { in: "homePage" }) {
      title
      slug {
        current
      }
      seo {
        description
        keywords
        image
        title
        twitterCard
        twitterCreator
        twitterSite
      }
      backgroundColor {
        value
      }
      footerBgColor {
        value
        title
      }
      content {
        ...SanityHeroWithBg
      }
    }
  }
`
