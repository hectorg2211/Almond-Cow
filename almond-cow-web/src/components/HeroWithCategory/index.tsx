import React from 'react'
import './index.scss'
import Container from 'react-bootstrap/Container'
import Dropdown from './Dropdown'
import useResizeWidth from '@hooks/useResizeWidth'
import { BaseBlockContent } from '@utils/richText'
import { SanityRawText } from '@utils/types'

type Props = {
  bgColor: string
  categories: string[]
  header: SanityRawText[]
  category: string
}

const HeroWithCategory = ({
  bgColor = 'transparent',
  categories,
  header,
  category,
}: Props) => {
  const { width } = useResizeWidth()
  return (
    <section style={{ backgroundColor: bgColor }}>
      <Container className='hero-with-category text-center flex flex-col items-center'>
        {header && <BaseBlockContent blocks={header} />}
        <Dropdown categories={categories} currentCategory={category} />
      </Container>
    </section>
  )
}

export default HeroWithCategory
