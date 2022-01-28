import React, { useState, useContext } from 'react'
import './index.scss'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/OffCanvas'
import CartIcon from '@assets/svg/CartIcon'
import CloseIcon from '@assets/svg/Close'
import CartProduct from './CartProduct'
import { StoreContext } from '../../../../context/store-context'
import { formatPrice } from '@utils/format-price'

const Cart = ({ showCart, ...props }) => {
  const { checkout } = useContext(StoreContext)
  const [show, setShow] = useState(showCart)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const renderCartProducts = () =>
    checkout?.lineItems.map((item) => <CartProduct item={item} key={item.id} />)

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        className='me-2 cart-button'>
        <CartIcon />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='flex items-center w-full'>
            <span className='mr-auto'>Your cart</span>
            <span onClick={handleClose} style={{ cursor: 'pointer' }}>
              <CloseIcon />
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {renderCartProducts()}

          <div className='subtotal h5 flex'>
            <span className='mr-auto'>Subtotal</span>
            <span>$ {checkout.totalPriceV2.amount}</span>
          </div>

          <div className='cart-buttons'>
            <button
              className='cart-buttons-checkout cta cta-primary cta-brown w-full'
              onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart
