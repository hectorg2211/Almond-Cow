import React, { useState } from 'react'
import './index.scss'
import Cart from '../Cart'

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

const WebHeader = ({ header }: Props) => {
  const renderNavLinks = () =>
    header?.links.map((link, index) => (
      <Nav.Link
        key={index}
        as={Link}
        to={`/${link?.slug?.current}`}
        bsPrefix='navbar-link'>
        {link?.title}
      </Nav.Link>
    ))

  return (
    <Navbar expand='lg' fixed='top' collapseOnSelect>
      <Container className='web-navbar-container'>
        <Navbar.Brand as={'div'}>
          <Link to='/'>
            <GatsbyImage
              image={header?.icon?.asset?.gatsbyImageData}
              alt={header?.icon?.alt}
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Collapse id='navbar-scroll' className='flex-none '>
          <Nav className='items-center'>
            {renderNavLinks()}

            <Nav.Link bsPrefix='navbar-link ml-6'>
              <SearchIcon />
            </Nav.Link>

            <Nav.Link bsPrefix='navbar-link ml-6' as='a' target='_blank'>
              <div className='relative'>
                <Cart showCart={true} name={'end'} placement={'end'} />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default WebHeader
