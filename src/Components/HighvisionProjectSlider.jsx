import React, { useState } from "react";
import "../css/HighvisionProjectSlider.css";

const projectSlides = [
  {
    id: 1,
    image: "/web_img/1.png",
    title: "Oxymora AgriTech",
    description:
      "IoT-based precision farming solution enabling real-time soil monitoring, automated irrigation, AI-driven crop insights, and remote farm management to increase yield, reduce water usage, and lower operational costs.",
    link: "#",
  },
  {
    id: 2,
    image: "/web_img/2.png",
    title: "Oxymora Industrial IoT",
    description:
      "An intelligent industrial IoT system that monitors machine health, predicts failures using AI analytics, reduces downtime, improves productivity, and enables data-driven maintenance for manufacturing and MSME industries.",
    link: "#",
  },
  {
    id: 3,
    image: "/web_img/3.png",
    title: "Oxymora Smart Vending",
    description:
      "A connected vending ecosystem with digital payments, real-time inventory tracking, AI-based demand forecasting, and remote machine management for efficient, scalable, and automated retail operations.",
    link: "#",
  },
  {
    id: 4,
    image: "/web_img/4.png",
    title: "Oxymora Fleet Intelligence",
    description:
      " An advanced telematics solution providing real-time vehicle tracking, fuel monitoring, driver behaviour analysis, and predictive insights to improve fleet efficiency, safety, and operational control.",
    link: "#",
  },
    {
    id: 5,
    image: "/web_img/5.png",
    title: "Oxymora Smart Infrastructure",
    description:
      "IoT-enabled smart infrastructure platform for monitoring public utilities, energy usage, water systems, and environmental conditions, enabling efficient operations, reduced costs, and data-driven urban management.",
    link: "#",
  },
];

const HighvisionProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = projectSlides.length;
  const [slideDirection, setSlideDirection] = useState("next");

  const nextSlide = () => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const { image, title, description, link } = projectSlides[currentIndex];

  return (
    <div className="highvision-project-slider">
      <div
        key={currentIndex}
        className={`highvision-project-slide highvision-project-slide-${slideDirection}`}
      >
        <div className="highvision-project-image">
          <img src={image} alt={title} />
        </div>
        <div className="highvision-project-content">
          <h2>{title}</h2>
          <p>{description}</p>
          {/* <a href={link} className="highvision-project-link">
            Read more <span>→</span>
          </a> */}
        </div>
      </div>

      <div className="highvision-project-navigation">
        <button onClick={prevSlide}>&larr;</button>
        <span>
          {currentIndex + 1}/{totalSlides}
        </span>
        <button onClick={nextSlide}>&rarr;</button>
      </div>
    </div>
  );
};

export default HighvisionProjectSlider;