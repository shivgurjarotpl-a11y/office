import React, { useEffect, useRef, useState } from "react";
import "../css/FeatureCard.css";

const FeatureCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="feature-section">
      <div ref={ref} className="feature-card">
        <div className={`feature-media ${isVisible ? "animate-media" : ""}`}>
          <img src="https://cspv.in/image/oxymora_imgs/image/img12.jpg" alt="Feature" />
        </div>

        <div className={`feature-content ${isVisible ? "animate-content" : ""}`}>
          <h3>Prepaid SIMs</h3>
          <p>
            Stay ahead with prepaid SIM cards and eSIM from FUSION IoT. The perfect M2M and IoT SIM cards for first projects and IoT use cases with specific requirements where a normal monthly tariff does not make sense.
          </p>
          <button className="feature-button">Learn more</button>
        </div>

      </div>
    </div>
  );
};

export default FeatureCard;
