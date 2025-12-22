import React, { useEffect, useRef, useState } from "react";
import "../css/DataLoggers.css";

const DataLoggerCard = ({ heading, point, image, btnText = "Learn More", reverse }) => {
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
    <div className="datalogger-wrapper">
      <div
        ref={ref}
        className={`datalogger-container ${reverse ? "reverse" : ""}`}
      >
        {/* TEXT SIDE */}
        <div className={`datalogger-text ${isVisible ? "animate-text" : ""}`}>
          <h3>{heading}</h3>

          <ul className="datalogger-features">
            {point?.split("E#").map((f, i) => (
              <li key={i}>{f.replace(","," ")}</li>
            ))}
          </ul>

          <button className="datalogger-btn">{btnText}</button>
        </div>

        {/* IMAGE SIDE */}
        <div className={`datalogger-image ${isVisible ? "animate-image" : ""}`}>
          <img src={`https://cspv.in/hpotpl/oxymora-web/apis/product_image/${image || "1766379917_oxymora-fusion1.png"}`} alt={"img"} />
        </div>
      </div>
    </div>
  );
};

export default DataLoggerCard;
