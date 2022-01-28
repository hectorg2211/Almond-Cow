import React from 'react'
import './index.scss'
import WebHeader from './Web'
import useResizeWidth from '@hooks/useResizeWidth'
import { SanityHeader } from '@utils/types'
import MobileHeader from './Mobile'

type Props = {
  header: SanityHeader
}

const Header = ({ header }: Props) => {
  const { width } = useResizeWidth()

  return (
    <div>
      {width > 992 ? (
        <WebHeader header={header} />
      ) : (
        <MobileHeader header={header} />
      )}
    </div>
  )
}

export default Header
