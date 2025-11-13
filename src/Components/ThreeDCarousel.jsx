

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/ThreeDCarousel.css";


//  const cardsData = [
//     {
//       id: 1,
//       category: "Hardware Development",
//       title: "Redefining Performance with Intelligent Hardware",
//       img: "https://cspv.in/image/oxymora_imgs/image/sarvice5.jpg",
//       desc: "Empower your systems with ultra-fast computing, intelligent memory optimization, and dynamic architecture crafted for innovation.",
//     },
//     {
//       id: 2,
//       category: "Firmware Development",
//       title: "Empowering Devices with Intelligent Firmware",
//       img: "https://cspv.in/image/oxymora_imgs/image/sarvice6.jpg",
//       desc: "Build smarter, faster, and more secure devices through optimized firmware that unites hardware and software in perfect harmony.",
//     },
//     {
//       id: 3,
//       category: "Software Development",
//       title: "Engineering the Future of Intelligent Software",
//       img: "https://cspv.in/image/oxymora_imgs/image/sarvice7.jpg",
//       desc: "We design and develop robust software ecosystems that merge performance, usability, and innovation.",
//     },
//     {
//       id: 4,
//       category: "Prototyping Development",
//       title: "Accelerating Innovation Through Smart Prototyping",
//       img: "https://cspv.in/image/oxymora_imgs/image/sarvice8.jpg",
//       desc: "Bring your visions to life with agile prototype development that ensures precision, performance, and efficiency.",
//     },
//     {
//       id: 5,
//       category: "Manufacturing Services",
//       title: "Transforming Industries Through Smart Manufacturing",
//       img: "https://cspv.in/image/oxymora_imgs/image/sarvice9.jpg",
//       desc: "We combine advanced technologies and data-driven intelligence to revolutionize modern manufacturing.",
//     },
//     {
//       id: 6,
//       category: "Cloud Services",
//       title: "Empowering Businesses with Smart Cloud Platforms",
//       img: "https://cspv.in/image/oxymora_imgs/image/sarvice12.jpg",
//       desc: "Adopt cloud-native architectures that unify scalability, flexibility, and intelligence.",
//     },
//   ];


// const ThreeDCarousel = () => {
//   const navigate = useNavigate();
//   const trackRef = useRef(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);


//   const allCards = [...cardsData, ...cardsData];

//   const positionRef = useRef(0);
//   const indexRef = useRef(0);

//   useEffect(() => {


//     const track = trackRef.current;
//     const cardWidth = track.children[0].offsetWidth + 20; 
//     const speed = 0.4;


    
//     const animate = () => {
//       positionRef.current -= speed;
//       track.style.transform = `translateX(${positionRef.current}px)`;

//       const totalWidth = track.scrollWidth / 2;

//       if (Math.abs(positionRef.current) >= totalWidth) {
//         positionRef.current = 0;
//         track.style.transform = `translateX(0px)`;
//       }

 
//       const newIndex = Math.round(Math.abs(positionRef.current) / cardWidth) % cardsData.length;
//       if (newIndex !== indexRef.current) {
//         indexRef.current = newIndex;
//         setActiveIndex(newIndex);
//       }

//       requestAnimationFrame(animate);
//     };

//     const animId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animId);
//   }, [cardsData]);

//   return (
//     <div>

//       <div className="slide-carousel-wrapper">
//         <div className="slide-track" ref={trackRef}>
//           {allCards.map((card, index) => (
//             <div
//               key={index}
//               className={`high-card ${hoveredCard === index ? "hovered" : ""} ${activeIndex === index % cardsData.length ? "active" : ""}`}
//               style={{ backgroundImage: `url(${card.img})` }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="high-overlay"></div>
//               <div className="high-content">
//                 <span className="high-category">{card.category}</span>
//                 <h3 className="high-title">{card.title}</h3>
//                 {hoveredCard === index && (
//                   <>
//                     <p className="high-desc">{card.desc}</p>
//                     {card.category && card.category.trim() !== "" && (
//                       <button
//                         className="high-expand-btn"
//                         onClick={() => navigate("/services")}
//                       >
//                         Expand <span>›</span>
//                       </button>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//       <div className="high-dots-container">
//         {cardsData.map((_, index) => (
//           <span
//             key={index}
//             className={`high-dot ${activeIndex === index ? "active" : ""}`}
//             onClick={() => {
//               const track = trackRef.current;
//               const cardWidth = track.children[0].offsetWidth + 20;
//               track.style.transform = `translateX(-${index * cardWidth}px)`;
//               setActiveIndex(index);
//             }}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThreeDCarousel;

import React from "react";
import "../css/ThreeDCarousel.css";
import { useNavigate } from "react-router-dom";

const cardsData = [
    {
      id: 1,
      category: "Hardware Development",
      title: "Redefining Performance with Intelligent Hardware",
      image: "https://cspv.in/image/oxymora_imgs/image/sarvice5.jpg",
      desc: "Empower your systems with ultra-fast computing, intelligent memory optimization, and dynamic architecture crafted for innovation.",
    },
    {
      id: 2,
      category: "Firmware Development",
      title: "Empowering Devices with Intelligent Firmware",
      image: "https://cspv.in/image/oxymora_imgs/image/sarvice6.jpg",
      desc: "Build smarter, faster, and more secure devices through optimized firmware that unites hardware and software in perfect harmony.",
    },
    {
      id: 3,
      category: "Software Development",
      title: "Engineering the Future of Intelligent Software",
      image: "https://cspv.in/image/oxymora_imgs/image/sarvice7.jpg",
      desc: "We design and develop robust software ecosystems that merge performance, usability, and innovation.",
    },
    {
      id: 4,
      category: "Prototyping Development",
      title: "Accelerating Innovation Through Smart Prototyping",
      image: "https://cspv.in/image/oxymora_imgs/image/sarvice8.jpg",
      desc: "Bring your visions to life with agile prototype development that ensures precision, performance, and efficiency.",
    },
    {
      id: 5,
      category: "Manufacturing Services",
      title: "Transforming Industries Through Smart Manufacturing",
      image: "https://cspv.in/image/oxymora_imgs/image/sarvice9.jpg",
      desc: "We combine advanced technologies and data-driven intelligence to revolutionize modern manufacturing.",
    },
    {
      id: 6,
      category: "Cloud Services",
      title: "Empowering Businesses with Smart Cloud Platforms",
      image: "https://cspv.in/image/oxymora_imgs/image/sarvice12.jpg",
      desc: "Adopt cloud-native architectures that unify scalability, flexibility, and intelligence.",
    },
  ];
export default function ThreeDCarousel() {
 
  const repeated = [...cardsData, ...cardsData];
  const navigate = useNavigate();
  return (
    <div className="infinite-wrapper">
      <div className="infinite-track">
        {repeated.map((card, i) => (
          <div
            key={i}
            className="high-card"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="high-overlay"></div>
            <div className="high-content">
              <h4 className="high-category">{card.category}</h4>
              <h2 className="high-title">{card.title}</h2>
              <p className="high-desc">{card.desc}</p>
              <button className="high-expand-btn" onClick={() => navigate("/services")}> More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

