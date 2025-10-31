import React, { useEffect, useRef } from "react";
import "../css/Project19.css";

const Project19 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project19-animate");
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
    <section className="project19-wrapper">
      {/* Right Image Section */}
      <div ref={rightRef} className="project19-right project19-hidden-bottom">
        <img
          src="/image/Gemini_Generated_Image_10.png"
          alt="Stylized illustration of fall detector"
          className="project19-phone-img"
        />
      </div>

      {/* Left Text Section */}
      <div ref={leftRef} className="project19-left project19-hidden-left">
 
        <h2>RF-based Security Device Controller</h2>
        <p>
          Your Wireless Security Companion
Built with 433 MHz RF technology, this device provides wireless locking and unlocking features. Reliable for home, office, and industrial security systems.

Multi-device support
Long-range secure communication
Easy-to-use & robust
        </p>
        <div className="project19-buttons">
          <button className="project19-btn-primary">View Project</button>
          <button className="project19-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>
    </section>
  );
};

export default Project19;
