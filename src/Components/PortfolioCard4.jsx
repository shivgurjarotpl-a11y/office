import React, { useState, useEffect } from "react";
import "../css/PortfolioCard4.css";

const PortfolioCard4 = () => {
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
            entry.target.classList.add("pc4-animate");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    const els = document.querySelectorAll(
      ".pc4-hidden-left, .pc4-hidden-bottom, .pc4-hidden-right"
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      els.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pc4-card" role="region" aria-label="Portfolio card - Fall detector">
      {/* Mobile Layout */}
      <div className="pc4-mobile" aria-hidden={false}>
        <div className="pc4-image pc4-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_5.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
             src="/image/Gemini_Generated_Image_5.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="pc4-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc4-content pc4-hidden-right">
          <div className="mb-3">
            <span className="pc4-badge">🌬️ Aerodynamic Wind Tunnel</span>
          </div>

          <h3 className="pc4-title">Bringing Science to Life</h3>

          <p className="pc4-desc">
           An educational and research tool that simulates aerodynamic effects with fan control, fog visualization, and angle variation modules. Perfect for engineering institutes, researchers, and innovators.
          </p>

          <div className="pc4-features">
            <div className="pc4-feature pc4-hidden-right">
              <div className="pc4-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Real-time airflow visualization</span>
            </div>

            <div className="pc4-feature pc4-hidden-right">
              <div className="pc4-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span> Multiple aerodynamic experiments</span>
            </div>

            <div className="pc4-feature pc4-hidden-right">
              <div className="pc4-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span>Compact, educational, and interactive</span>
            </div>
          </div>

          <div className="pc4-btns">
            <button className="pc4-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc4-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="pc4-desktop" aria-hidden={false}>
        <div className="pc4-left pc4-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_5.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_5.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="pc4-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc4-right pc4-hidden-right">
          <div className="mb-4">
            <span className="pc4-badge">🌬️ Aerodynamic Wind Tunnel</span>
          </div>

          <h3 className="pc4-title">Bringing Science to Life</h3>

          <p className="pc4-desc">
            An educational and research tool that simulates aerodynamic effects with fan control, fog visualization, and angle variation modules. Perfect for engineering institutes, researchers, and innovators.
          </p>

          <div className="pc4-dfeatures">
            <div className="pc4-feature">
              <div className="pc4-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Real-time airflow visualization</span>
            </div>

            <div className="pc4-feature">
              <div className="pc4-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span> Multiple aerodynamic experiments</span>
            </div>

            <div className="pc4-feature">
              <div className="pc4-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span>Compact, educational, and interactive</span>
            </div>
          </div>

          <div className="pc4-dactions">
            <button className="pc4-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc4-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard4;
