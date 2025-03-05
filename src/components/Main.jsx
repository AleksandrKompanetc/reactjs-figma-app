import React from 'react'
import './Main.css'
import features from '../assets/site/images/siteImages/features.png'

const Main = () => {
  return (
    <main className='main'>
      <section className='main__features'>
        <h1 className='main__title'>Features</h1>
        <h5 className='main__subtitle'>
          Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.
        </h5>
        <img src={features} alt="Features" />
      </section>
    </main>
  )
}

export default Main