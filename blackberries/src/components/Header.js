import React from 'react'
import {isMobile} from 'react-device-detect'

import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="images/logo.png" alt=""/>
        <div className="logo__text">black<br/>berries</div>
      </div>
      <div className="navbar">
        {isMobile ? null: 
        <div className="search">
          <input type="text" placeholder="Search something" className="search__input"/>
          <button className="search__button">
            <img src="images/search.svg" alt=""/>
          </button>
        </div>}
        <div className="navbar-buttons">
        {isMobile ?
          <button className="navbar__button">
            <img src="images/search.svg" alt=""/>
          </button>
        : null}
          <button className="navbar__button">
            <img src="images/shopping-cart.svg" alt=""/>
          </button>
          <button className="navbar__button">
            <img src="images/heart.svg" alt=""/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
