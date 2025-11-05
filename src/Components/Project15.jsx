 import React, { useEffect, useRef } from "react";
import "../css/Project15.css";

const Project15 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project15-animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="project15-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project15-left project15-hidden-left">
        <h2> Real-time Weather Data Logger</h2>
        <p>
          Stay Ahead of the Climate
Collects and transmits real-time weather data using GSM, GPS, GPRS, and IoT with MQTT protocol. Essential for agriculture, environment monitoring, and disaster management.

Cloud-enabled dashboard
Accurate, real-time data
IoT-powered insights anywhere
        </p>



        <div className="project15-buttons">
          <button className="project15-btn-primary">View Project</button>
          <button className="project15-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project15-right project15-hidden-bottom">
        <img
          src="https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_6.png"
           alt="Stylized illustration of fall detector"
          className="project15-phone-img"
        />
      </div>
    </section>
  );
};

export default Project15;
