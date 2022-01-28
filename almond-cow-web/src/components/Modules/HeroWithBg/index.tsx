import React from 'react'
import './index.scss'
import BackgroundImage from 'gatsby-background-image'
import Container from 'react-bootstrap/Container'
import { SanityHeroWithBg } from '@utils/types'
import { BaseBlockContent } from '@utils/richText'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'

type Props = {
  module: SanityHeroWithBg
}

const HeroWithBg = ({ module }: Props) => {
  const image = module?.deskBg?.asset?.gatsbyImageData
    ? getImage(module.deskBg.asset.gatsbyImageData)
    : null

  const bgImage = image ? convertToBgImage(image) : null

  return (
    <BackgroundImage Tag='section' {...bgImage}>
      <Container
        className={`hero-with-bg-module hero-content flex ${
          module?.imageSide && 'flex-row-reverse'
        }`}>
        <div className='hero-with-bg-module-text justify-center flex flex-2'>
          <BaseBlockContent blocks={module?._rawContent} />
        </div>

        {module?.image?.asset?.gatsbyImageData && (
          <div className='hero-with-bg-module-image flex-1 justify-center'>
            <GatsbyImage
              image={module?.image?.asset?.gatsbyImageData}
              alt={module?.image?.alt}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        )}
      </Container>
    </BackgroundImage>
  )
}

export default HeroWithBg
