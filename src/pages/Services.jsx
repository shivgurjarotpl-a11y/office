import React from 'react'
import ServicesSection from '../Components/ServicesSection'
import ServiceImg from '../Components/ServiceImg'
import InsightsSlider from '../Components/InsightsSlider'

import Footer from '../Components/Footer'
import "../css/Services.css";

const Services = () => {
  return (
    <>
      <ServiceImg/>
      <div className='s-contanior'>
      <ServicesSection/>
      <InsightsSlider/>
      <Footer/>
      </div>
    </>
  )
}

export default Services