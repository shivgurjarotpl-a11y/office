import React, { useEffect, useRef } from "react";
import "../css/Project12.css";

const Project12 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project12-animate");
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
    <section className="project12-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project12-left project12-hidden-left">
        <h2>Touch-less Temple Bell System </h2>
        <p>
          A Modern Solution for Tradition
Powered by Ultrasonic & IR wave technology, this system lets devotees ring the temple bell without physical contact. Promotes hygiene, especially in crowded temples and public spaces.

Contactless operation
Safe & hygienic
Preserves cultural practices with modern tech
        </p>

     
        <div className="project12-buttons">
          <button className="project12-btn-primary">View Project</button>
          <button className="project12-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project12-right project12-hidden-bottom">
        <img
          src="https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_3.png"
          alt="Stylized illustration of fall detector"
          className="project12-phone-img"
        />
      </div>
    </section>
  );
};

export default Project12;
