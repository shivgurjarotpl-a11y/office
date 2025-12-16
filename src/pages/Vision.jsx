import React from 'react'
import VisionImg from '../Components/VisionImg'
import VisionSection from '../Components/VisionSection'
import "../css/Vision.css";
import Footer from '../Components/Footer';
import FloatingButtons from '../Components/FloatingButtons';
import VisionPage from '../Components/VisionPage';


const Vision = () => {
  return (
    <div>
      {/* <VisionImg/>
      <div className='viision-Contanior'> */}
          <VisionPage/>
          {/* <Footer/>
          <FloatingButtons/>
      </div> */}
    </div>
  )
}

export default Vision;