import React from 'react'
import './Footer.css'
import footer1 from '../assets/site/images/logos/footer/twitter.svg'
import footer2 from '../assets/site/images/logos/footer/facebook.svg'
import footer3 from '../assets/site/images/logos/footer/linkedin.svg'
import footer4 from '../assets/site/images/logos/footer/bx-map.svg'
import footer5 from '../assets/site/images/logos/footer/phone.svg' 

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
      <div className='footer__info'>
        <div>
          <img src={footer4} alt="Location" />
          Location
        </div>
        <div>
          <img src={footer5} alt="Phone" />
          Phone
        </div>
        <div>
          <img src={footer1} alt="Footer1" />
          <img src={footer2} alt="Footer2" />
          <img src={footer3} alt="Footer3" />
        </div>
      </div>
    </div>
  )
}

export default Footer