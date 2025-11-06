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

import React, { useState } from "react";
import "../css/NewsSection.css";

const cardsData = [
  {
    id: 1,
    category: "Hardware",
    title: "Redefining Performance with Intelligent Hardware",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice1.jpg",
    desc: "Experience next-generation computing with high-speed processors, optimized memory systems, and scalable architectures built for modern innovation.",
  },
  {
    id: 2,
    category: "Firmware",
    title: "Empowering Devices with Intelligent Firmware",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice2.jpg",
    desc: "Build smarter, faster, and more secure devices through optimized firmware that ensures seamless hardware–software integration and real-time performance.",
  },
  {
    id: 3,
    category: "Software",
    title: "Engineering the Future of Intelligent Software",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice3.jpg",
    desc: "We design and develop robust software ecosystems that combine performance, usability, and innovation for seamless digital transformation.",
  },
  {
    id: 4,
    category: "Prototyping",
    title: "Accelerating Innovation Through Smart Prototyping",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice4.jpg",
    desc: "Bring your visions to life with agile prototype development that ensures performance, efficiency, and design accuracy at every stage.",
  },
  {
    id: 5,
    category: "Manufacturing",
    title: "Transforming Industries Through Smart Manufacturing",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice4.jpg",
    desc: "We combine advanced technologies and data-driven processes to deliver faster, cleaner, and more efficient manufacturing outcomes.",
  },
  {
    id: 6,
    category: "IoT Dashboard",
    title: "Transforming Data into Decisions with IoT Dashboards",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice4.jpg",
    desc: "Unlock the power of your connected ecosystem through interactive dashboards that simplify monitoring and enhance operational intelligence.",
  },
  {
    id: 7,
    category: "IoT Web/App",
    title: "Smart Interfaces for Smarter Devices",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice4.jpg",
    desc: "See how human-AI collaboration is transforming learning, creativity, and productivity across industries.",
  },
  {
    id: 8,
    category: "Cloud",
    title: "Empowering Businesses with Smart Cloud Platforms",
    img: "https://cspv.in/image/oxymora_imgs/image/sarvice4.jpg",
    desc: "Leverage cloud-native architectures to streamline operations, improve agility, and drive innovation in every layer of your digital ecosystem.",
  },
];

const NewsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="high-container">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className={`high-card ${hoveredCard === card.id ? "hovered" : ""}`}
          style={{
            backgroundImage: `url(${card.img})`,
          }}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="high-overlay"></div>
          <div className="high-content">
            <span className="high-category">{card.category}</span>
            <h3 className="high-title">{card.title}</h3>
            {hoveredCard === card.id && (
              <>
                <p className="high-desc">{card.desc}</p>
                {card.category === "CASE STUDY" && (
                  <button className="high-expand-btn">
                    Expand <span>›</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      ))}

      <section className="highvision-hero highvision-animate">
        <div className="highvision-hero-image">
          <img
            src="https://cspv.in/image/oxymora_imgs/image/seevision.png"
            alt="Vision Illustration"
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
          <blockquote>"Envisioning a brighter, empowered tomorrow."</blockquote>
          <button className="highvision-btn">Join Our Vision</button>
        </div>
      </section>

     <div class="highvision-product-section">
  <h1>Innovative Products</h1>
  <p>
    Discover cutting-edge solutions designed to enhance performance, boost productivity, 
    and deliver unmatched quality for your business.
  </p>
  <a href="#" class="highvision-product-link">
    Explore Products <span>→</span>
  </a>
</div>

    </div>
  );
};

export default NewsSection;
