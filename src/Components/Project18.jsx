import React, { useEffect, useRef } from "react";
import "../css/Project18.css";

const Project18 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project18-animate");
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
    <section className="project18-wrapper">
      {/* Right Image Section */}
      <div ref={rightRef} className="project18-right project18-hidden-bottom">
        <img
           src="https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_9.png"
           alt="Stylized illustration of fall detector"
          className="project18-phone-img"
        />
      </div>

      {/* Left Text Section */}
      <div ref={leftRef} className="project18-left project18-hidden-left">
        <h2>EV Speed Controller</h2>
        <p>
          Powering the Future of Mobility
A BLDC motor controller designed for electric vehicles. It ensures smooth throttle control, efficient power management, and better safety.

Optimized energy use
Smooth & reliable performance
Supports sustainable EV technology
        </p>

        <div className="project18-buttons">
          <button className="project18-btn-primary">View Project</button>
          <button className="project18-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>
    </section>
  );
};

export default Project18;
