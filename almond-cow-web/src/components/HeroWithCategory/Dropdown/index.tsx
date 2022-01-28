import React from 'react'
import './index.scss'
import ExpandMoreIcon from '@assets/svg/ExpandMore'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'gatsby'

const Dropwdown = ({ categories, currentCategory }) => {
  return (
    <Dropdown className='dropdown'>
      <Dropdown.Toggle
        className='dropdown-toggle flex items-center'
        variant='none'
        id='dropdown-basic'>
        {currentCategory}
        <ExpandMoreIcon />
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
        {categories.map((title, index) => (
          <Dropdown.Item
            key={index}
            as={Link}
            to={`?collection=${encodeURI(title)}`}>
            {title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Dropwdown
