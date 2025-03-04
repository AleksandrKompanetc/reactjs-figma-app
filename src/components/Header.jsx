import React from 'react'
import logo from '../assets/site/images/siteImages/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <section className='header__main'>
        <img src={logo} alt="Logo" />
        <nav className='header__nav'>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className='secondary-btn'>Login</button>
      </section>
    </div>
  )
}

export default Header