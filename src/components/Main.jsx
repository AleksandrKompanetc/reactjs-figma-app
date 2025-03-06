import React from 'react'
import './Main.css'
import features from '../assets/site/images/siteImages/features.png'
import feature1 from '../assets/site/images/logos/features/1.svg'
import feature2 from '../assets/site/images/logos/features/2.svg'
import feature3 from '../assets/site/images/logos/features/3.svg'
import macbookpro from '../assets/site/images/siteImages/MacbookPro.png'
import boards from '../assets/site/images/siteImages/BoardsNotifications.png'
import gallery1 from "../assets/site/images/gallery/1.png"
import gallery2 from "../assets/site/images/gallery/2.png"
import gallery3 from "../assets/site/images/gallery/3.png"
import gallery4 from "../assets/site/images/gallery/4.png"
import gallery5 from "../assets/site/images/gallery/5.png"
import gallery6 from "../assets/site/images/gallery/6.png"
import gallery7 from "../assets/site/images/gallery/7.png"
import partner1 from "../assets/site/images/logos/partners/airbnb.svg"
import partner2 from "../assets/site/images/logos/partners/android-icon.svg"
import partner3 from "../assets/site/images/logos/partners/apiary.svg"
import partner4 from "../assets/site/images/logos/partners/apple-app-store.svg"
import partner5 from "../assets/site/images/logos/partners/basecamp.svg"
import partner6 from "../assets/site/images/logos/partners/ibm.svg"

const Main = () => {
  return (
    <main className='main'>
      <section className='main__features'>
        <h1 className='main__title'>Features</h1>
        <h5 className='main__subtitle'>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </h5>
        <div className='main__image'>
          <img src={features} alt="Features" />
          <ul className=''>
            <li>
              <div className='main_li_header'>
                <img src={feature1} />
                <span>A single source of truth</span>
              </div>
              <div className='main_li_footer'>
                When you add work to your
                Slate calendar we automatically
                calculate useful insights
              </div>
            </li>
            <li>
              <div className='main_li_header'>
                <img src={feature2} />
                <span>Intuitive interface</span>
              </div>
              <div className='main_li_footer'>
                When you add work to your
                Slate calendar we automatically
                calculate useful insights
              </div>
            </li>
            <li>
              <div className='main_li_header'>
                <img src={feature3} />
                <span>Or with rules</span>
              </div>
              <div className='main_li_footer'>
                When you add work to your
                Slate calendar we automatically
                calculate useful insights
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='main__content'>
        <h1 className='main__title'>Contents</h1>
        <h5 className='main__subtitle'>
          We focus on ergonomics and meeting you where you work.
          It's only a keystroke away.
        </h5>
        <div className='main__cards'>
          <div className='main__card first__card'>
            <div>
              <h1>Work</h1>
              <h5>
                Ever wondered if you're too reliant
                on a client for work? Slate helps
                you identify.
              </h5>
            </div>
            <button className='primary-btn'>
              Sign up
            </button>
            <img src={macbookpro} alt="MacbookPro" />
          </div>
          <div className='main__card'>
            <div>
              <h1>Design with real data</h1>
              <h5>
                Ever wondered if you're too reliant
                on a client for work? Slate helps
                you identify.
              </h5>
            </div>
            <button className='primary-btn'>Sign up</button>
            <img src={boards} alt="BoardsNotification" />
          </div>
        </div>
      </section>
      <section className='main__gallery'>
        <h1 className='main__title'>Gallery</h1>
        <h5 className='main__subtitle'>
          We focus on ergonomics and meeting you where you work.
          It's only a keystroke away.
        </h5>
        <div className='gallery__section'>
          <div className='gallery__first_row'>
            <img src={gallery1} alt="Gallery1" />
            <img src={gallery2} alt="Gallery2" />
            <img src={gallery3} alt="Gallery3" />
            <img src={gallery4} alt="Gallery4" />
          </div>
          <div className='gallery__second_row'>
            <img src={gallery5} alt="Gallery5" />
            <img src={gallery6} alt="Gallery6" />
            <img src={gallery7} alt="Gallery7" />
          </div>
        </div>
        <button className='secondary-btn'>See more</button>
      </section>
      <section className='main__partners'>
        <h1 className='main__title'>Partners</h1>
        <h5 className='main__subtitle'>
          We focus on ergonomics and meeting you where you work.
          It's only a keystroke away.
        </h5>
          <div className='partners__images'>
            <img src={partner1} alt="Partner1" />
            <img src={partner2} alt="Partner2" />
            <img src={partner3} alt="Partner3" />
            <img src={partner4} alt="Partner4" />
            <img src={partner5} alt="Partner5" />
            <img src={partner6} alt="Partner6" />
          </div>
        <button className='secondary-btn'>All Partners</button>
      </section>
      <section className=''>
        <h1 className='main__title'>Testimonials</h1>
      </section>
    </main>
  )
}

export default Main