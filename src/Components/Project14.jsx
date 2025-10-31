import React, { useEffect, useRef } from "react";
import "../css/Project14.css";

const Project14 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project14-animate");
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
    <section className="project14-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project14-left project14-hidden-left">
        <h2>Aerodynamic Wind Tunnel</h2>
        <p>
          Bringing Science to Life
An educational and research tool that simulates aerodynamic effects with fan control, fog visualization, and angle variation modules. Perfect for engineering institutes, researchers, and innovators.

Real-time airflow visualization
Multiple aerodynamic experiments
Compact, educational, and interactive
        </p>


        <div className="project14-buttons">
          <button className="project14-btn-primary">View Project</button>
          <button className="project14-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project14-right project14-hidden-bottom">
        <img
          src="/image/Gemini_Generated_Image_5.png"
          alt="Stylized illustration of fall detector"
          className="project14-phone-img"
        />
      </div>
    </section>
  );
};

export default Project14;
