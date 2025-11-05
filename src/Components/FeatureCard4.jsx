import React, { useEffect, useRef, useState } from "react";
import "../css/FeatureCard4.css";

const FeatureCard4 = () => {
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
    <div className="fc4-section">
      <div ref={ref} className="fc4-card">
        <div className={`fc4-media ${isVisible ? "fc4-media-animate" : ""}`}>
          <img src="https://cspv.in/image/oxymora_imgs/image/img12.jpg" alt="Feature" />
        </div>

        <div className={`fc4-content ${isVisible ? "fc4-content-animate" : ""}`}>
          <h3 className="fc4-title">
            Limitless connectivity – the Independent eSIM
          </h3>
          <p className="fc4-text">
            We are rethinking eSIM! With FUSION IoT, you are stepping into the
            world of independent and limitless connectivity. You will have no
            restrictions and full control over every aspect of usage, thanks to
            our network operator-independent eSIM platform where you can monitor,
            control and configure your eSIM cards.
          </p>
          <button className="fc4-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard4;
