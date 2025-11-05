import React, { useRef, useState } from "react";
import "../css/InsightsSlider.css";

const InsightsSlider = () => {
  const insightsData = [
    {
      title: "Trying to scale AI? You're going to need to think big. And act bigger.",
      tag: "RESEARCH REPORT",
      image: "https://cspv.in/image/oxymora_imgs/image/img11.jpg",
    },
    {
      title: "4 critical actions to take now to strengthen your cyber defenses.",
      tag: "RESEARCH REPORT",
      image: "https://cspv.in/image/oxymora_imgs/image/img12.jpg",
    },
    {
      title: "Creating adaptive digital systems ready for future innovation and growth.",
      tag: "RESEARCH REPORT",
      image: "https://cspv.in/image/oxymora_imgs/image/img13.jpg",
    },
    {
      title: "Strengthening enterprises with a smart, connected, and flexible digital core.",
      tag: "RESEARCH REPORT",
      image: "https://cspv.in/image/oxymora_imgs/image/img14.jpg",
    },
    {
      title: "Strengthening enterprises with a smart, connected, and flexible digital core.",
      tag: "RESEARCH REPORT",
      image: "https://cspv.in/image/oxymora_imgs/image/img15.jpg",
    },
    {
      title: "Strengthening enterprises with a smart, connected, and flexible digital core.",
      tag: "RESEARCH REPORT",
      image: "https://cspv.in/image/oxymora_imgs/image/img16.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  // 👉 Single card slide logic
  const nextSlide = () => {
    const totalCards = insightsData.length;
    const visibleWidth = sliderRef.current.offsetWidth; // total visible area
    const cardWidth = sliderRef.current.querySelector(".InsightsSlider-card").offsetWidth + 20; // +gap

    const maxScroll = cardWidth * (totalCards - Math.floor(visibleWidth / cardWidth));

    setCurrent((prev) => {
      const nextPos = prev + cardWidth;
      return nextPos > maxScroll ? 0 : nextPos;
    });
  };

  const prevSlide = () => {
    const totalCards = insightsData.length;
    const visibleWidth = sliderRef.current.offsetWidth;
    const cardWidth = sliderRef.current.querySelector(".InsightsSlider-card").offsetWidth + 20;

    const maxScroll = cardWidth * (totalCards - Math.floor(visibleWidth / cardWidth));

    setCurrent((prev) => {
      const nextPos = prev - cardWidth;
      return nextPos < 0 ? maxScroll : nextPos;
    });
  };

  return (
    <div className="InsightsSlider">
      <h2 className="InsightsSlider-title">What we think</h2>

      <div className="InsightsSlider-wrapper">
        <div
          ref={sliderRef}
          className="InsightsSlider-container"
          style={{
            transform: `translateX(-${current}px)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {insightsData.map((item, index) => (
            <div className="InsightsSlider-card" key={index}>
              <div
                className="InsightsSlider-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="InsightsSlider-content">
                <p className="InsightsSlider-tag">{item.tag}</p>
                <h3 className="InsightsSlider-heading">{item.title}</h3>
                {item.description && (
                  <p className="InsightsSlider-desc">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="InsightsSlider-nav">
          <button onClick={prevSlide} className="InsightsSlider-arrow">
            &#8592;
          </button>
          <button onClick={nextSlide} className="InsightsSlider-arrow">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsSlider;
