import React from 'react'
import logo from '../assets/site/images/siteImages/logo.png'
import screens from '../assets/site/images/siteImages/screens.png'
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
        <h1 className='header__texts-title'>Work at the speed of thought</h1>
        <h5 className='header__texts-subtitle'>Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.</h5>
      </section>
      <section className='header__buttons'>
        <button className='primary-btn'>Try For Free</button>
        <button className='secondary-btn'>Learn More</button>
      </section>
      <section className='header__image'>
        <img src={screens} alt="Screen" />
      </section>
    </div>
  )
}

export default Header