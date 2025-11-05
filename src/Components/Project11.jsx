import React, { useEffect, useRef } from "react";
import "../css/Project11.css"; 

const Project11 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project11-animate"); 
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
    <section className="project11-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project11-left project11-hidden-left">
        <h2> Distance & Area Calculator Device</h2>
        <p>
          Smart Measurement Made Easy
Using GSM, GPRS, GPS with AI & ML, this device calculates the area of land or geometric figures at the press of a button. Perfect for surveyors, architects, and construction projects.
Cloud-connected measurements
Accurate AI/ML-based calculations
Reduces manual effort
        </p>
        <div className="project11-buttons">
          <button className="project11-btn-primary">View Project</button>
          <button className="project11-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project11-right project11-hidden-bottom">
        <img
          src="https://cspv.in/image/oxymora_imgs/image/fall-detector.png"
           alt="Stylized illustration of fall detector"
          className="project11-phone-img"
        />
      </div>
    </section>
  );
};

export default Project11;
