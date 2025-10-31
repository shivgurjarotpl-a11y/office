// Work.jsx
import React, { useState } from 'react';
import WorkImg from '../Components/WorkImg';
import CategorySelector from '../Components/CategorySelector';
import "../css/Work.css";
import Project1 from '../Components/Project1';
import Project2 from '../Components/Project2';
import Project3 from '../Components/Project3';
// import Project4 from '../Components/Project4';
import Project5 from '../Components/Project5';
import Project6 from '../Components/Project6';
import Project7 from '../Components/Project7';
import Project8 from '../Components/Project8';
import Project9 from '../Components/Project9';
import Project10 from '../Components/Project10';
import Project11 from '../Components/Project11';
import Project12 from '../Components/Project12';
import Project13 from '../Components/Project13';
import Project14 from '../Components/Project14';
import Project15 from '../Components/Project15';
import Project16 from '../Components/Project16';
import Project17 from '../Components/Project17';
import Project18 from '../Components/Project18';
import Project19 from '../Components/Project19';
import Project20 from '../Components/Project20';
import Footer from '../Components/Footer';
import FloatingButtons from '../Components/FloatingButtons';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Projects array with category
  const projects = [
    { id: 1, type: "application", component: <Project1 /> },
    { id: 17, type: "Projects", component: <Project20 /> },
    { id: 5, type: "Projects", component: <Project13 /> },
    { id: 15, type: "website", component: <Project6 /> },
    { id: 13, type: "application", component: <Project5 /> },
    { id: 8, type: "application", component: <Project8 /> },
    
    // { id: 19, type: "application", component: <Project4 /> },
    
    { id: 7, type: "application", component: <Project7 /> },
    { id: 9, type: "Projects", component: <Project18 /> },
     { id: 18, type: "Projects", component: <Project14 /> },
      { id: 14, type: "Projects", component: <Project19 /> },
  { id: 10, type: "website", component: <Project10 /> },
    
    { id: 20, type: "website", component: <Project9 /> },
    { id: 12, type: "Projects", component: <Project16 /> },
      { id: 3, type: "application", component: <Project3 /> },
       { id: 2, type: "application", component: <Project2 /> },
    
    { id: 16, type: "Projects", component: <Project11/> },
    
    { id: 6, type: "Projects", component: <Project17 /> },
     { id: 11, type: "Projects", component: <Project15 /> },
      { id: 4, type: "Projects", component: <Project12 /> },
    
    


  ];

  // Filter projects based on active category
  const displayedProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(proj => proj.type === activeCategory);

  return (
    <div>
      <WorkImg />
      <div className='Work-Contanior'>
        {/* Category selector with props */}
        <CategorySelector 
          active={activeCategory} 
          setActive={setActiveCategory} 
        />

        {/* Render filtered projects */}
        {displayedProjects.map(proj => (
          <div key={proj.id}>{proj.component}</div>
        ))}
        <Footer/>
        <FloatingButtons/>
      </div>
    </div>
  );
};

export default Work;
