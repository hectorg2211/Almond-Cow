import * as React from 'react'
import HeroWithBg from '@components/Modules/HeroWithBg'
import { SanityHeroWithBg } from './types'

type Props = {
  module: SanityHeroWithBg
}

const ModuleItem = ({ module }: Props) => {
  switch (module?._type) {
    case 'heroWithBg':
      const hero = module as SanityHeroWithBg
      return <HeroWithBg module={hero} />
    default:
      return <h1>Nope</h1>
  }
}

export default ModuleItem
