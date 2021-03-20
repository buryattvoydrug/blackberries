import React from 'react'

import './CartPage.css'

function CartPage() {
  return (
    <section className='cart-page'>
      <div className="cart-block">
        <h1 className="cart__title">Cart</h1>
        <div className="shipping__checkbox">
          <span>Shipping</span>
          <img src="" alt=""/>
        </div>
        <div className="cart-items">
          <div className="cart__item">
            <div className="cart__item-image">
              <img src="images/items/image1.jpg" alt=""/>
            </div>
            <div className="cart__item-text">
              <h3 className="item__title">Nike</h3>
              <h4 className="item__subtitle">Air Zoom Pegasus 37 Eliud Kipchoge</h4>
              <div className="size">
                Size <strong>42</strong>
              </div>
              <div className="quality">
                Quality
                  <button className="quality__button">
                    <img src="images/minus.svg" alt=""/>
                  </button>
                  <span>1</span>
                  <button className="quality__button">
                    <img src="images/plus.svg" alt=""/>
                  </button>
              </div>
              <span className="price">RUB 9990</span>
              <div className="item-buttons">
                <button className="add-to-trash__button">
                  <img src="images/trash.svg" alt=""/>
                </button>
                <button className="add-to-favs__button">
                  <img src="images/heart.svg" alt=""/>
                </button>
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item-image">
              <img src="images/items/image1.jpg" alt=""/>
            </div>
            <div className="cart__item-text">
              <h3 className="item__title">Nike</h3>
              <h4 className="item__subtitle">Air Zoom Pegasus 37 Eliud Kipchoge</h4>
              <div className="size">
                Size <strong>42</strong>
              </div>
              <div className="quality">
                Quality
                  <button className="quality__button">
                    <img src="images/minus.svg" alt=""/>
                  </button>
                  <span>1</span>
                  <button className="quality__button">
                    <img src="images/plus.svg" alt=""/>
                  </button>
              </div>
              <span className="price">RUB 9990</span>
              <div className="item-buttons">
                <button className="add-to-trash__button">
                  <img src="images/trash.svg" alt=""/>
                </button>
                <button className="add-to-favs__button">
                  <img src="images/heart.svg" alt=""/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-block">
        <h2 className="summary__title">Summary</h2>
        <div className="subtotal">
          <span>Subtotal</span>
          <span className='price'>RUB 9 990</span>
        </div>
        <div className="shipping">
          <span>Shipping & Handling</span>
          <span className='price'>RUB 0</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span className='price'>RUB 9 990</span>
        </div>
        <button className="checkout__button">
          <img src="images/checkout.svg" alt=""/>
          <span>Checkout</span>
        </button>
      </div>
    </section>
  )
}



export default CartPage
