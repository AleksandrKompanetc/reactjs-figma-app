import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__links'>
        <div className='links'>
          <p className='link__title'>Fingertipe</p>
          <a href="#">Home</a>
          <a href="#">Example</a>
          <a href="#">Pricing</a>
          <a href="#">Updates</a>
        </div>
        <div className='links'>
          <p className='link__title'>Resources</p>
          <a href="#">Home</a>
          <a href="#">Example</a>
          <a href="#">Pricing</a>
          <a href="#">Updates</a>
        </div>
        <div className='links'>
          <p className='link__title'>About</p>
          <a href="#">Home</a>
          <a href="#">Example</a>
          <a href="#">Pricing</a>
          <a href="#">Updates</a>
        </div>
      </div>
      <div className='footer__info'>Test</div>
    </div>
  )
}

export default Footer