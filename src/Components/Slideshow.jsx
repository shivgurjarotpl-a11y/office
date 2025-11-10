

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
