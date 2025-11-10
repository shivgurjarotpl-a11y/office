import React from 'react';
import Slideshow from '../Components/Slideshow';
import NewsSection from '../Components/NewsSection';
import TechShowcase from '../Components/TechShowcase';
import HorizontalScrollCards from '../Components/HorizontalScrollCards';
import JoinUsSection from '../Components/JoinUsSection';
import Footer from '../Components/Footer';
import "../css/Home.css";

import FloatingButtons from '../Components/FloatingButtons';
import HighvisionProjectSlider from '../Components/HighvisionProjectSlider';
import ScrollSection from '../Components/ScrollSection';
import ThreeDCarousel from '../Components/ThreeDCarousel';
import YouTubeSlider from '../Components/YouTubeSlider';





const Home = () => {
  return (
    <div> 
     
      <Slideshow />
      <div className="main-content">
        <HighvisionProjectSlider/>
        <ThreeDCarousel/>
         <NewsSection />
        {/* <ScrollSection/> */}
        {/* <TechShowcase />
        <HorizontalScrollCards /> */}
        <YouTubeSlider/>
        <JoinUsSection />
        <Footer />
        <FloatingButtons/>
      </div>
    </div>
  );
};


export default Home;
