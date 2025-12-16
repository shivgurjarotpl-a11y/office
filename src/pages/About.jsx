import React from "react";
import { Outlet } from "react-router-dom";
import MissionPage from '../Components/AboutOverview'
import MissionImg from '../Components/MissionImg'
// import "../css/Mission.css";
import Footer from '../Components/Footer';
import FloatingButtons from '../Components/FloatingButtons';

const About = () => {
  return (
    <div className="about-container">
   
    
       <MissionImg/>
       <div className='messeon'>
      {/* <MissionPage/> */}
      <Outlet />
      <Footer/>
      <FloatingButtons/>
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


