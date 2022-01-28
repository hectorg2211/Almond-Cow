import React, { useState } from 'react'
import './index.scss'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

// Icons
import CloseIcon from '@assets/svg/Close'
import HamburgerIcon from '@assets/svg/Hamburger'
import SearchIcon from '@assets/svg/SearchIcon'
import CartIcon from '@assets/svg/CartIcon'

import { SanityHeader } from '@utils/types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type Props = {
  header: SanityHeader
}

const MobileHeader = ({ header }: Props) => {
  const [expanded, setExpanded] = useState(false)

  const renderNavLinks = () =>
    header?.links.map((link, index) => (
      <Nav.Link
        key={index}
        as={Link}
        to={`/${link?.slug?.current}`}
        bsPrefix='navbar-link'
        onClick={() => setExpanded(false)}>
        {link?.title}
      </Nav.Link>
    ))

  return (
    <Navbar
      bg='light'
      expand='lg'
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed='top'
      collapseOnSelect
      className='flex flex-col p-0'>
      <Container className={`mobile-navbar-container items-center py-1 `}>
        <div className='flex items-center justify-between w-full'>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='navbar-toggle flex justify-center'>
            {expanded ? <CloseIcon /> : <HamburgerIcon />}
          </Navbar.Toggle>

          <Navbar.Brand as={'div'} className={`${expanded && 'opacity-0'}`}>
            <Link to='/'>
              <GatsbyImage
                image={header?.icon?.asset?.gatsbyImageData}
                alt={header?.icon?.alt}
              />
            </Link>
          </Navbar.Brand>

          <Nav.Link as='a' target='_blank'>
            <div className='relative'>
              <CartIcon />
            </div>
          </Nav.Link>
        </div>

        <Navbar.Collapse id='navbar-scroll'>
          <Nav className='items-center'>
            <Navbar.Brand as={'div'}>
              <GatsbyImage
                image={header?.mobileIcon?.asset?.gatsbyImageData}
                alt={header?.mobileIcon?.alt}
              />
            </Navbar.Brand>

            {renderNavLinks()}

            <Nav.Link bsPrefix='navbar-link navbar-link__input flex items-center w-4/5'>
              <SearchIcon />
              <input
                placeholder='Search'
                className='search-input flex items-center'
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {expanded && (
        <Link
          to='/my-account'
          className='navbar-myaccount flex items-center justify-center'
          onClick={() => setExpanded(false)}>
          My Account
        </Link>
      )}
    </Navbar>
  )
}

export default MobileHeader
