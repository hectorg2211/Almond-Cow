import { graphql } from 'gatsby'

export const SanityHeroWithBg = graphql`
  fragment SanityHeroWithBg on SanityHeroWithBg {
    _type
    backgroundColor {
      title
      value
    }
    navBarColor {
      title
      value
    }
    _rawContent(resolveReferences: { maxDepth: 10 })
    image {
      alt
      asset {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    deskBg {
      alt
      asset {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
