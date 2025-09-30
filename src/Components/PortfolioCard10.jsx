import React, { useState, useEffect } from "react";
import "../css/PortfolioCard10.css";

const PortfolioCard10 = () => {
  const [isIllustrationView, setIsIllustrationView] = useState(false);

  const toggleView = () => {
    setIsIllustrationView(!isIllustrationView);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pc10-animate");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    const els = document.querySelectorAll(
      ".pc10-hidden-left, .pc10-hidden-bottom, .pc10-hidden-right"
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      els.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pc10-card" role="region" aria-label="Portfolio card - Fall detector">
      {/* Mobile Layout */}
      <div className="pc10-mobile" aria-hidden={false}>
        <div className="pc10-image pc10-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_11.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_11.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="pc10-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc10-content pc10-hidden-right">
          <div className="mb-3">
            <span className="pc10-badge">⚙️ Smart 3-Phase Motor Controller</span>
          </div>

          <h3 className="pc10-title">Intelligent Industrial Control</h3>

          <p className="pc10-desc">
            A GSM-enabled controller for remote motor management. Start, stop, or monitor motors with just a missed call. Includes voltage monitoring & fault alerts.
          </p>

          <div className="pc10-features">
            <div className="pc10-feature pc10-hidden-right">
              <div className="pc10-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span> Remote motor control</span>
            </div>

            <div className="pc10-feature pc10-hidden-right">
              <div className="pc10-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span>SMS/missed-call activation</span>
            </div>

            <div className="pc10-feature pc10-hidden-right">
              <div className="pc10-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span>Real-time fault detection</span>
            </div>
          </div>

          <div className="pc10-btns">
            <button className="pc10-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc10-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="pc10-desktop" aria-hidden={false}>
        <div className="pc10-left pc10-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_11.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_11.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="pc10-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc10-right pc10-hidden-right">
          <div className="mb-4">
            <span className="pc10-badge">⚙️ Smart 3-Phase Motor Controller</span>
          </div>

          <h3 className="pc10-title">Intelligent Industrial Control          </h3>

          <p className="pc10-desc">
            A GSM-enabled controller for remote motor management. Start, stop, or monitor motors with just a missed call. Includes voltage monitoring & fault alerts.
          </p>

          <div className="pc10-dfeatures">
            <div className="pc10-feature">
              <div className="pc10-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Remote motor control</span>
            </div>

            <div className="pc10-feature">
              <div className="pc10-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span> SMS/missed-call activation</span>
            </div>

            <div className="pc10-feature">
              <div className="pc10-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span> Real-time fault detection</span>
            </div>
          </div>

          <div className="pc10-dactions">
            <button className="pc10-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc10-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard10;
