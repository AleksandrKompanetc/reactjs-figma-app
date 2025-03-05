import React from 'react'
import './Main.css'
import features from '../assets/site/images/siteImages/features.png'
import feature1 from '../assets/site/images/logos/features/1.svg'
import feature2 from '../assets/site/images/logos/features/2.svg'
import feature3 from '../assets/site/images/logos/features/3.svg'

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
              <img src={feature1} />
              <span>A single source of truth</span>
              <span>When you add work to your
                Slate calendar we automatically
                calculate useful insights
              </span>
            </li>
            <li>
              <img src={feature2} />
              <span>Intuitive
                interface</span>
              <span>When you add work to your
                Slate calendar we automatically
                calculate useful insights

              </span>
            </li>
            <li>
              <img src={feature3} />
              <span>Or with rules</span>
              <span>When you add work to your
                Slate calendar we automatically
                calculate useful insights

              </span>
            </li>
          </ul>
        </div>

      </section>
    </main>
  )
}

export default Main