import React, { useState } from "react";
import "../css/HighvisionProjectSlider.css";

const projectSlides = [
  {
    id: 1,
    image: "https://cspv.in/image/oxymora_imgs/image/homeautomation.jpg",
    title: "Home Automation elevates everyday living",
    description:
      "Experience the future of living with smart home automation that simplifies daily routines, enhances comfort, and connects every corner of your home with intelligent control.",
    link: "#",
  },
  {
    id: 2,
    image: "https://cspv.in/image/oxymora_imgs/image/vendingmachin.jpg",
    title: "Next-Gen Vending Technology",
    description:
      "Empowering businesses with smart vending systems that optimize operations, reduce downtime, and enhance customer satisfaction through connected, efficient automation.",
    link: "#",
  },
  {
    id: 3,
    image: "https://cspv.in/image/oxymora_imgs/image/vehicle.jpg",
    title: "Smart Vehicle Tracking System",
    description:
      "Monitor your vehicle’s performance, health, and location in real time—empowering smarter fleet management and safer journeys.",
    link: "#",
  },
  {
    id: 4,
    image: "https://cspv.in/image/oxymora_imgs/image/datalogger.jpg",
    title: "Universal Machine Data Logger",
    description:
      "Capture, analyze, and store critical data from any machine in real time. Our data logger ensures seamless monitoring, improved efficiency, and predictive maintenance through accurate insights and IoT connectivity.",
    link: "#",
  },
    {
    id: 5,
    image: "https://cspv.in/image/oxymora_imgs/image/pixel.jpg",
    title: "Advanced Pixel Lighting Controller",
    description:
      "Control and automate any lighting system with precision. From single-color LEDs to addressable pixel arrays, our controller delivers smooth transitions, adaptive brightness, and seamless integration with IoT and automation systems.",
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
          <a href={link} className="highvision-project-link">
            Read more <span>→</span>
          </a>
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