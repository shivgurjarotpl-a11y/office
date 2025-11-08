// import React, { useState, useEffect } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import "../css/Slideshow.css";

// const Slideshow = ({ autoPlay = true, autoPlayInterval = 6000 }) => {
//   const slides = [
//     { type: "video", src: "/videos/video6.mov", text: "Technology for Smart Living" },
//     { type: "video", src: "/videos/video7.mp4", text: "Empowering Future Together" },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("revealed");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const elements = document.querySelectorAll(".custom-scroll-reveal");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!autoPlay) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, autoPlayInterval);
//     return () => clearInterval(interval);
//   }, [autoPlay, autoPlayInterval, slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="custom-slideshow">
//       <div className="custom-slide">
//         {slides[currentSlide].type === "image" ? (
//           <img src={slides[currentSlide].src} alt={slides[currentSlide].text} />
//         ) : (
//           <video
//             src={slides[currentSlide].src}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="custom-background-video"
//           />
//         )}

//         Prev/Next Buttons
  

//         {slides[currentSlide].text && (
//           <div className={`custom-overlay slide-${currentSlide}`}>
//             <div
//               className="custom-animated-text"
//               key={`text-${slides[currentSlide].text}`}
//             >
//               {slides[currentSlide].text.split("").map((char, i) => (
//                 <span
//                   key={i}
//                   style={{ animationDelay: `${i * 0.05}s` }}
//                   className="custom-fade-char"
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </span>
//               ))}
//             </div>

//             <button className="custom-more-btn" key={`btn-${currentSlide}`}>
//               MORE{" "}
//               <span className="custom-arrow-icon">
//                 <FaArrowRight />
//               </span>
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="custom-slide-indicators">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`custom-dot ${index === currentSlide ? "active" : ""}`}
//             onClick={() => setCurrentSlide(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;


// import React, { useState, useEffect } from "react";
// import "../css/Slideshow.css";
// import { useNavigate } from "react-router-dom";

// const videos = [
//   {
//     src: "https://cspv.in/image/oxymora_imgs/videos/video1.mp4",
//     text: "Technology for Smart Living",
//     button: "More",
//     link: "/services", 
//   },
//   {
//     src: "https://cspv.in/image/oxymora_imgs/videos/video2.mp4",
//     text: "Innovating for Tomorrow",
//     button: "Discover",
//     link: "/work", 
//   },
//   {
//     src: "https://cspv.in/image/oxymora_imgs/videos/video3.mp4",
//     text: "Smart Solutions, Better Future",
//     button: "Explore",
//     link: "/products",
//   },
// ];


// const Slideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % videos.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="slideshow-container">
//       <div className="slide active">
//         <video
//           key={videos[currentIndex].src}
//           src={videos[currentIndex].src}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="video-bg"
//         />
//         <div className="overlay">
//           <h2>{videos[currentIndex].text}</h2>
//           <button
//             className="slide-btn"
//             onClick={() => navigate(videos[currentIndex].link)}
//           >
//             {videos[currentIndex].button} →
//           </button>
//         </div>
//       </div>

//       <div className="dots">
//         {videos.map((_, i) => (
//           <span
//             key={i}
//             className={`dot ${i === currentIndex ? "active-dot" : ""}`}
//             onClick={() => setCurrentIndex(i)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;




import React, { useState, useEffect } from "react";
import "../css/Slideshow.css";
import { useNavigate } from "react-router-dom";

const texts = [
  {
    title: "Technology for Smart Living",
    button: "More",
    link: "/services",
  },
  {
    title: "Innovating for Tomorrow",
    button: "Discover",
    link: "/work",
  },
  {
    title: "Smart Solutions, Better Future",
    button: "Explore",
    link: "/products",
  },
];

const Slideshow = () => {
  const [currentText, setCurrentText] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {/* Background video */}
      <video
        src="https://cspv.in/image/oxymora_imgs/videos/video7.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      />

      {/* Text overlay */}
      <div className="overlay">
        {texts.map((item, index) => (
          <div
            key={index}
            className={`text-slide ${index === currentText ? "active" : ""}`}
          >
            <h2>{item.title}</h2>
            <button
              className="slide-btn"
              onClick={() => navigate(item.link)}
            >
              {item.button} →
            </button>
          </div>
        ))}
      </div>

      {/* Optional navigation dots */}
      <div className="dots">
        {texts.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentText ? "active-dot" : ""}`}
            onClick={() => setCurrentText(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
