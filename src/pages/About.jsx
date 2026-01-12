import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// import MissionPage from "../Components/AboutOverview";
import VisionImg from '../Components/VisionImg'
import GalleryImg from "../Components/GalleryImg"
import MissionImg from "../Components/MissionImg"
import FounderImg from '../Components/FounderImg'
// import "../css/Mission.css";
import Footer from "../Components/Footer";
import FloatingButtons from "../Components/FloatingButtons"

const About = () => {
  const location = useLocation();
  let path = location.pathname.split("/");
  console.log(path[2] );

  
  return (
    <div className="about-container">
      {path[2] === "vision" ? <VisionImg /> : path[2] ==="office-gallery" ? <GalleryImg /> : <MissionImg />}
      <div className="messeon">
        <Outlet />
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
};

export default About;

// import React from 'react'
// import MissionPage from '../Components/AboutOverview'
// import MissionImg from '../Components/MissionImg'
// import "../css/Mission.css";
// import Footer from '../Components/Footer';
// import FloatingButtons from '../Components/FloatingButtons';

// const About = () => {
//   return (
//     <div>
//        <MissionImg/>
//        <div className='messeon'>
//       <MissionPage/>
//       <Footer/>
//       <FloatingButtons/>
//       </div>
//     </div>
//   )
// }

// export default About
