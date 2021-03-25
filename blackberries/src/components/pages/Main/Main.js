import React from 'react'
import Filter from '../../Filter'
import ToTopButton from '../../ToTopButton'

import './Main.css'

function Main() {
  return (
    <section className="main-page">
      <div className="filter">
        <Filter/>
      </div>
      <div className="items-list">
        <div className="item">
            <div className="item-image">
              <img src="images/items/image1.jpg" alt=""/>
            </div>
            <div className="item-text">
              <h3 className="item__title">Nike</h3>
              <h4 className="item__subtitle">Air Zoom Pegasus 37 Eliud Kipchoge</h4>
              <span className="price">RUB 9990</span>
              <button className="remove-from-favs__button">
                <img src="images/heart.svg" alt=""/>
              </button>
            </div>
        </div>
      </div>



      <ToTopButton/>
    </section>
  )
}

export default Main
