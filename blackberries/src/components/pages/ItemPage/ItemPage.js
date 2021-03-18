import React from 'react'

import './ItemPage.css'

function ItemPage() {
  return (
    <section className="item-page">
      <div className="item-text-block">
        <h1 className="item__title">Nike</h1>
        <h2 className="item__subtitle">Air Zoom Pegasus 37 Eliud Kipchoge</h2>
        <span className="price">RUB 9990</span>
        <div className="size-block">
          <h4 className="size-block__title">Size</h4>
          <div className="sizes">
            <div className="size__item size__item_active">39</div>
            <div className="size__item">40</div>
            <div className="size__item">41</div>
            <div className="size__item">42</div>
            <div className="size__item size__item_disable">43</div>
            <div className="size__item size__item_disable">44</div>
            <div className="size__item">45</div>
          </div>
          <div className="item-buttons">
            <button className="add-to-cart__button">
              <img src="images/shopping-cart.svg" alt=""/>
              <span>Add to cart</span>
            </button>
            <button className="add-to-favs__button">
              <img src="images/heart.svg" alt=""/>
            </button>
          </div>
          <p className="items__info">
          The Nike Air Zoom Pegasus 37 reinvigorates your stride and brings on vibrant colors inspired by a 26.2-mile race around the city blocks of Miami. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot Zoom Air unit and Nike React foam for optimal cushioning and responsiveness. The result is a durable, lightweight trainer designed for everyday running.
          </p>
        </div>
      </div>
      <div className="item-images">
        <div className="item-slider">
          <img src="images/items/image1.jpg" alt=""/>
          <img src="images/items/image2.jpg" alt=""/>
          <img src="images/items/image3.jpg" alt=""/>
        </div>
        <div className="arrow">
          <img src="images/arrow-button.svg" alt=""/>
        </div>
      </div>
    </section>
  )
}

export default ItemPage
