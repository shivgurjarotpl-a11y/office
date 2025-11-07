
import React, { useEffect, useState } from "react";
import "../css/ScrollSection.css";

const ScrollSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // animation values
  const scale = Math.max(0.4, 1 - scrollY / 1000);
  const translateY = Math.max(0, 150 - scrollY / 3);
  const opacity = Math.min(1, scrollY / 700);
  const textTranslate = Math.max(0, 100 - scrollY / 7);

  return (
    <section className="highscroll-section">
      <div
        className="highscroll-image-wrapper"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
        }}
      >
        <img
         src="https://cspv.in/image/oxymora_imgs/image/pixel.jpg"
          alt="team"
          className="highscroll-image"
        />
      </div>

      <div
        className="highscroll-text"
        style={{
          opacity: opacity,
          transform: `translateX(${textTranslate}px)`,
        }}
      >
        <h3>CAREERS</h3>
        <h1>Grow your career at the heart of change</h1>
        <p>
          It's your time to shine. Bring your ingenuity, curiosity, and big ideas.
        </p>
        <button>Join us →</button>
      </div>
    </section>
  );
};

export default ScrollSection;
