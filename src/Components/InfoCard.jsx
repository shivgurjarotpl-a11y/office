import React, { useEffect, useRef, useState } from "react";
import "../css/InfoCard.css";

const InfoCard = () => {
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
    return () => observer.disconnect();
  }, []);

  return (
    <section className="info-section">
      <div ref={ref} className="info-card">
        <div className={`info-content ${isVisible ? "show-content" : ""}`}>
          <h3>IoT tariffs: Customised & Standard</h3>
          <p>
            SIM card tariffs for your IoT devices. From low to high volume, from data-only tariffs to voice and SMS, from 2G to 5G – your global success with standard and customised solutions IoT and M2M tariffs from FUSION IoT.
          </p>
          <button className="info-button">Learn more</button>
        </div>

        <div className={`info-media ${isVisible ? "show-media" : ""}`}>
          <img src="https://cspv.in/image/oxymora_imgs/image/img13.jpg" alt="SIM Management" />
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
