import React, { useEffect, useRef, useState } from "react";
import "../css/FusionCard.css";

const FusionCard = () => {
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
    <div className="fusion-wrapper"> 
      <div ref={ref} className="fusion-container">
        <div className={`fusion-text ${isVisible ? "animate-text" : ""}`}>
          <h3>Bonus: SIM management with myFUSION</h3>
          <p>
            We make SIM management effortless regardless of the provider.
            Whether one or more cards – the myFUSION portal is always included.
            You have full access to your SIM cards. You can activate or
            deactivate them, set tariffs, and track and evaluate consumption
            data. We also make control easier for you with comprehensive alarm
            and monitoring functions.
          </p>
          <button className="fusion-btn">Learn more</button>
        </div>

        <div className={`fusion-image ${isVisible ? "animate-image" : ""}`}>
          <img src="https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png" alt="myFUSION" />
        </div>
      </div>
    </div>
  );
};

export default FusionCard;
