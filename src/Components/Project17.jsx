import React, { useEffect, useRef } from "react";
import "../css/Project17.css";

const Project17 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project17-animate");
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
    <section className="project17-wrapper">
      {/* Right Image Section */}
      <div ref={rightRef} className="project17-right project17-hidden-bottom">
        <img
         src="https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_8.png"
          alt="Stylized illustration of fall detector"
          className="project17-phone-img"
        />
      </div>

      {/* Left Text Section */}
      <div ref={leftRef} className="project17-left project17-hidden-left">
        <h2> IoT-based RFID Attendance System</h2>
        <p>
          Smarter Attendance, Seamless Management
Combining RFID, GSM, and Wi-Fi, this solution enables IoT-powered attendance tracking with centralized dashboards. Great for schools, offices, and industries.

Touchless RFID scanning
IoT-enabled tracking
Easy integration with dashboards
        </p>
        <div className="project17-buttons">
          <button className="project17-btn-primary">  View Project</button>
          <button className="project17-btn-secondary">Download Spec Sheet →</button>
        </div>
      </div>
    </section>
  );
};

export default Project17;
