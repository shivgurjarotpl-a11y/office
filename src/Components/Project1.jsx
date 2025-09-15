import React, { useEffect, useRef } from "react";
import "../css/Project1.css";

const Project1 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("p1-animate");
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
    <section className="p1-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="p1-left p1-hidden-left">
        <div className="p1-logo-circle">
          <img src="image/Homy-logo.png" alt="App Mockup" />
        </div>
        <h2>Homey-Robo</h2>
        <p>
          Homey-Robo is a simple and powerful app where you can add, manage
          Bluetooth and MQTT devices through user friendly process. Currently we
          are coming with 2 devices. 1) Flaunt:- It's for controlling BLE
          enabled neon lights 2) Fan:- It's for controlling BLE and MQTT enabled
          fans.
        </p>

        <div className="p1-stats">
          <div>
            <h3>14k</h3>
            <p>Downloads</p>
          </div>
          <div>
            <h3>4.9/5</h3>
            <p>Avg. Rating</p>
          </div>
          <div>
            <h3>$400k+</h3>
            <p>Funding Raised</p>
          </div>
        </div>

        <div className="p1-actions">
          <button className="p1-btn-primary">View Case Study</button>
          <button className="p1-btn-secondary">Get In Touch</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="p1-right p1-hidden-bottom">
        <img src="image/Homy2.png" alt="App Mockup" className="p1-phone-img" />
      </div>
    </section>
  );
};

export default Project1;
