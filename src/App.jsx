import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./Components/Topbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Work from "./pages/Work";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import OfficeGallery from "./pages/OfficeGallery";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import CoreTeam from "./pages/CoreTeam";
import GalleryPage from "./Components/GalleryPage";
import ScrollToTop from "./Components/ScrollToTop";
import AboutOverview from "./Components/AboutOverview"
import Blog from "./pages/Blog";

import ServicesSection from "./Components/ServicesSection";
import IoTServices from "./Components/IoTServices";
import EmbeddedServices from "./Components/EmbeddedServices";
import Design from "./Components/Design";
import Software from "./Components/Software";
import Cloud from "./Components/Cloud";
import Consulting from "./Components/Consulting";




const App = () => {
  return (
    <Router>
      <Topbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />

        {/* About with nested routes — About must include <Outlet /> */}
        <Route path="/about" element={<About />}>
          {/* optional default /about content */}
          <Route index element={<AboutOverview />} />
          <Route path="mission" element={<Mission />} />
          <Route path="vision" element={<Vision />} />
          {/* <Route path="core-team" element={<CoreTeam />} /> */}
          <Route path="office-gallery" element={<OfficeGallery />} />
        </Route>

        {/* gallery with dynamic subcategory */}
        <Route path="/gallery/:subcategory" element={<GalleryPage />} />

        {/* other pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/" element={<ServicesSection />} />
        <Route path="/iot" element={<IoTServices />} /> 
        <Route path="/embedded" element={<EmbeddedServices />} /> 
        <Route path="/design" element={<Design />} /> 
        <Route path="/software & application" element={<Software />} /> 
        <Route path="/cloud" element={<Cloud />} /> 
        <Route path="/Consulting & Support" element={<Consulting />} /> 





    
       
      </Routes>
    </Router>
  );
};

export default App;
