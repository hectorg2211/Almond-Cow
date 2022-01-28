import React from 'react'
import './index.scss'
import { Link } from 'gatsby'
import { Button } from '@utils/types'

type Props = {
  button: Button
  className?: string
  onClick?: (event) => void
}

const CtaButton = ({ button, className = '', ...props }: Props) => {
  const { title, slug, type } = button

  return !slug?.current.includes('http') ? (
    <Link
      to={slug?.current}
      className={`cta cta-${type.toLowerCase()} ${className} cta-${
        button?.btnBg?.title?.replace(' ', '-')?.toLowerCase() || 'brown'
      }`}
      {...props}>
      {title}
    </Link>
  ) : (
    <a
      href={slug?.current}
      target='_blank'
      className={`cta cta-${type.toLowerCase()} ${className} cta-${
        button?.btnBg?.title?.replace(' ', '-')?.toLowerCase() || 'brown'
      }`}
      {...props}>
      {title}
    </a>
  )
}

export default CtaButton
