import React, { useEffect, useRef } from "react";
import "../css/Project13.css";

const Project13 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project13-animate");
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
    <section className="project13-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project13-left project13-hidden-left">
        <h2>Fall Detector Device</h2>
        <p>
          Because Safety Matters
            A life-saving device powered by Gyro Sensors, GSM, and RF technology. It detects accidental falls and instantly alerts caregivers or emergency contacts. Ideal for elderly care, patients, and workplace safety.
            Real-time fall detection
            Instant alerts via GSM/RF
            Peace of mind for families & healthcare providers
        </p>
        <div className="project13-buttons">
          <button className="project13-btn-primary">View Project</button>
          <button className="project13-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project13-right project13-hidden-bottom">
        <img
          src="https://cspv.in/image/oxymora_imgs/image/fall-detector.png"
          alt="Photorealistic product shot of fall detector"
          className="project13-phone-img"
        />
      </div>
    </section>
  );
};

export default Project13;
