import React, { useState } from "react";
// import "../css/PortfolioCard1.css";

const PortfolioCard10 = () => {
  const [isIllustrationView, setIsIllustrationView] = useState(false);

  const toggleView = () => {
    setIsIllustrationView(!isIllustrationView);
  };

  return (
    <div className="pc1-card" role="region" aria-label="Portfolio card - Smart 3-Phase Motor Controller">
      {/* Mobile Layout */}
      <div className="pc1-mobile" aria-hidden={false}>
        <div className="pc1-image">
          <img
            src={
              isIllustrationView
                ? "/images/smart-motor-isometric.png"
                : "/images/smart-motor-photo.png"
            }
            alt={
              isIllustrationView
                ? "Stylized isometric illustration of Smart 3-Phase Motor Controller"
                : "Photorealistic product shot of Smart 3-Phase Motor Controller"
            }
          />

          <button
            onClick={toggleView}
            className="pc1-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc1-content">
          <div className="mb-3">
            <span className="pc1-badge">⚙️ Smart 3-Phase Motor Controller</span>
          </div>

          <h3 className="pc1-title">Intelligent Industrial Control</h3>

          <p className="pc1-desc">
            A GSM-enabled controller for remote motor management. Start, stop, or monitor motors with just a missed call. Includes voltage monitoring & fault alerts.
          </p>

          <div className="pc1-features">
            <div className="pc1-feature">
              <div className="pc1-iconwrap" aria-hidden="true">✔️</div>
              <span>Remote motor control</span>
            </div>

            <div className="pc1-feature">
              <div className="pc1-iconwrap" aria-hidden="true">✔️</div>
              <span>SMS/missed-call activation</span>
            </div>

            <div className="pc1-feature">
              <div className="pc1-iconwrap" aria-hidden="true">✔️</div>
              <span>Real-time fault detection</span>
            </div>
          </div>

          <div className="pc1-btns">
            <button className="pc1-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc1-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="pc1-desktop" aria-hidden={false}>
        <div className="pc1-left">
          <img 
             src={isIllustrationView ? "/image/Gemini_Generated_Image_10.png" : "/image/Gemini_Generated_Image_10.png"} 
             alt={isIllustrationView ? "Stylized illustration of fall detector" : "Photorealistic product shot of fall detector"} 
            />

          <button
            onClick={toggleView}
            className="pc1-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc1-right">
          <div className="mb-4">
            <span className="pc1-badge">⚙️ Smart 3-Phase Motor Controller</span>
          </div>

          <h3 className="pc1-title">Intelligent Industrial Control</h3>

          <p className="pc1-desc">
            A GSM-enabled controller for remote motor management. Start, stop, or monitor motors with just a missed call. Includes voltage monitoring & fault alerts.
          </p>

          <div className="pc1-dfeatures">
            <div className="pc1-feature">
              <div className="pc1-iconwrap" aria-hidden="true">✔️</div>
              <span>Remote motor control</span>
            </div>

            <div className="pc1-feature">
              <div className="pc1-iconwrap" aria-hidden="true">✔️</div>
              <span>SMS/missed-call activation</span>
            </div>

            <div className="pc1-feature">
              <div className="pc1-iconwrap" aria-hidden="true">✔️</div>
              <span>Real-time fault detection</span>
            </div>
          </div>

          <div className="pc1-dactions">
            <button className="pc1-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc1-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard10;
