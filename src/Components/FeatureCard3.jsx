import React, { useEffect, useRef, useState } from "react";
import "../css/FeatureCard3.css";

const FeatureCard3 = () => {
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
    <div className="fc3-section">
      <div ref={ref} className="fc3-card">
        <div className={`fc3-media ${isVisible ? "fc3-media-animate" : ""}`}>
          <img src="https://cspv.in/image/oxymora_imgs/image/img12.jpg" alt="Feature" />
        </div>

        <div className={`fc3-content ${isVisible ? "fc3-content-animate" : ""}`}>
          <h3 className="fc3-title">Limitless connectivity – the Independent eSIM</h3>
          <p className="fc3-text">
           We are rethinking eSIM! With FUSION IoT, you are stepping into the world of independent and limitless connectivity. You will have no restrictions and full control over every aspect of usage, thanks to our network operator-independent eSIM platform where you can monitor, control and configure your eSIM cards.
          </p>
          <button className="fc3-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard3;
