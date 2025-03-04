import React from 'react'
import logo from '../assets/site/images/siteImages/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <section className='header__main'>
        <img src={logo} alt="" />
      </section>
    </div>
  )
}

export default Header