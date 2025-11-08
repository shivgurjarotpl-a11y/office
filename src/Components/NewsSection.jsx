// import React, { useState } from "react";
// import "../css/NewsSection.css";
// import { FaArrowRight } from "react-icons/fa";
// import Card from "../Components/Card";

// const NewsSection = () => {
//   const [activeTab, setActiveTab] = useState("news");

//   return (
//     <div className="news-wrapper">
//       <div className="news-header-container">
//         <div className="news-tabs-container">
//           <button
//             className={`news-tab-btn ${activeTab === "news" ? "news-tab-active" : ""}`}
//             onClick={() => setActiveTab("news")}
//           >
//             News <span className="news-arrow-icon"><FaArrowRight /></span>
//           </button>
//           <button
//             className={`news-tab-btn ${activeTab === "activity" ? "news-tab-active" : ""}`}
//             onClick={() => setActiveTab("activity")}
//           >
//             Activity
//           </button>
//         </div>
//         <a href="#" className="news-more-link">
//           More News <span className="news-arrow-icon"><FaArrowRight /></span>
//         </a>
//       </div>

//       <hr className="news-divider" />

//       <div className="news-card-section">
//         {activeTab === "news" ? <Card type="news" /> : <Card type="activity" />}
//       </div>
//     </div>
//   );
// };

// export default NewsSection;

import { useNavigate } from "react-router-dom";
import React from "react";
import "../css/NewsSection.css";


const NewsSection = () => {
   const navigate = useNavigate();


  return (
    <>
   <section className="highvision-hero highvision-animate">
      <div className="highvision-hero-image">
        <img
          src="https://cspv.in/image/oxymora_imgs/image/seevision.png"
          alt="EmpowerOrg Vision Illustration"
          loading="lazy"
        />
      </div>

      <div className="highvision-hero-text">
        <h1>Our Vision</h1>
        <p>
          At EmpowerOrg, our vision is to create a world where individuals and
          communities flourish through equal opportunities, innovation, and
          empowerment.
        </p>
        <p>
          We aim to inspire sustainable progress, foster inclusivity, and
          nurture growth that benefits both people and the planet.
        </p>

        <blockquote>“Envisioning a brighter, empowered tomorrow.”</blockquote>

        <button
          className="highvision-btn"
          onClick={() => navigate("/career")}
          aria-label="Join Our Vision"
        >
          Join Our Vision
        </button>
      </div>
    </section>

      <div class="highvision-product-section">
        <h1>Innovative Products</h1>
        <p>
          Discover cutting-edge solutions designed to enhance performance, boost
          productivity, and deliver unmatched quality for your business.
        </p>
        <a href="/products" class="highvision-product-link">
          Explore Products <span>→</span>
        </a>
      </div>

      

      </>

  );
};

export default NewsSection;
