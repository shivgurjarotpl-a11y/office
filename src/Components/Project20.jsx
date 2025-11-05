import React, { useEffect, useRef } from "react";
import "../css/Project20.css";

const Project20 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project20-animate");
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
    <section className="project20-wrapper">
      {/* Right Image Section */}
      <div ref={rightRef} className="project20-right project20-hidden-bottom">
        <img
         src="https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png"
           alt="Photorealistic product shot of fall detector"
          className="project20-phone-img"
        />
      </div>

      {/* Left Text Section */}
      <div ref={leftRef} className="project20-left project20-hidden-left">
        <h2> Smart 3-Phase Motor Controller</h2>
        <p>
          Intelligent Industrial Control
A GSM-enabled controller for remote motor management. Start, stop, or monitor motors with just a missed call. Includes voltage monitoring & fault alerts.

Remote motor control
SMS/missed-call activation
Real-time fault detection
        </p>



        <div className="project20-buttons">
          <button className="project20-btn-primary"> View Project</button>
          <button className="project20-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>
    </section>
  );
};

export default Project20;
