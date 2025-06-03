import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Certificate from '../../components/Certificate/Certificate'
import Booking from '../../components/Booking/Booking'
import Call from '../../components/Call/Call'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Certificate/>
      <Booking/>
      <Call/>
    </div>
  )
}

export default Home