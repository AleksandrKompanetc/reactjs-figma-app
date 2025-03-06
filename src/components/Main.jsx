import React from 'react'
import './Main.css'
import features from '../assets/site/images/siteImages/features.png'
import feature1 from '../assets/site/images/logos/features/1.svg'
import feature2 from '../assets/site/images/logos/features/2.svg'
import feature3 from '../assets/site/images/logos/features/3.svg'
import macbookpro from '../assets/site/images/siteImages/MacbookPro.png'
import boards from '../assets/site/images/siteImages/BoardsNotifications.png'

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
      </section>
    </main>
  )
}

export default Main