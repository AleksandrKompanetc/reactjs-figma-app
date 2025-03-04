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
      <section className='header__texts'>
        <h1>Work at the speed of thought</h1>
        <h5>Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.</h5>
      </section>
    </div>
  )
}

export default Header