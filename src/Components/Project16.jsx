import React, { useEffect, useRef } from "react";
import "../css/Project16.css";

const Project16 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project16-animate");
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
    <section className="project16-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project16-left project16-hidden-left">
        <h2>Light Dependent Smart Switch System</h2>
        <p>
          Save Energy, Live Smart
An automatic day-night switching system powered by LDR sensors and relay technology. Perfect for streetlights, campuses, and smart cities.

Auto ON/OFF based on light
Works with AC & DC
Cost-effective & energy-saving
        </p>

    

        <div className="project16-buttons">
          <button className="project16-btn-primary"> View Project</button>
          <button className="project16-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project16-right project16-hidden-bottom">
        <img
         src="/image/Gemini_Generated_Image_7.png"
           alt="Photorealistic product shot of fall detector"
          className="project16-phone-img"
        />
      </div>
    </section>
  );
};

export default Project16;
