import React, { useEffect, useRef, useState } from "react";
import "../css/InfoCard4.css";

const InfoCard4 = () => {
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
    <section className="info4-section">
      <div ref={ref} className="info4-card">
        <div className={`info4-content ${isVisible ? "info4-show-content" : ""}`}>
          <h3>IoT SaaS: Whitelabel IoT connectivity & billing</h3>
          <p>
            More and more companies are now developing IoT products with integrated mobile connectivity. But why rely on third-party providers when connectivity can also be marketed under your own brand and branding – including new sources of revenue?
          </p>
          <button className="info4-button">Learn more</button>
        </div>

        <div className={`info4-media ${isVisible ? "info4-show-media" : ""}`}>
          <img src="https://cspv.in/image/oxymora_imgs/image/img13.jpg" alt="SIM Management" />
        </div>
      </div>
    </section>
  );
};

export default InfoCard4;
