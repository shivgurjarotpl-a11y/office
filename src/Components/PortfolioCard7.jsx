import React, { useState, useEffect } from "react";
import "../css/PortfolioCard7.css";

const PortfolioCard7 = () => {
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
            entry.target.classList.add("pc7-animate");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    const els = document.querySelectorAll(
      ".pc7-hidden-left, .pc7-hidden-bottom, .pc7-hidden-right"
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      els.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pc7-card" role="region" aria-label="Portfolio card - Fall detector">
      {/* Mobile Layout */}
      <div className="pc7-mobile" aria-hidden={false}>
        <div className="pc7-image pc7-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_8.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_8.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="pc7-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc7-content pc7-hidden-right">
          <div className="mb-3">
            <span className="pc7-badge">📡 IoT-based RFID Attendance System</span>
          </div>

          <h3 className="pc7-title">Smarter Attendance, Seamless Management</h3>

          <p className="pc7-desc">
           Combining RFID, GSM, and Wi-Fi, this solution enables IoT-powered attendance tracking with centralized dashboards. Great for schools, offices, and industries.
          </p>

          <div className="pc7-features">
            <div className="pc7-feature pc7-hidden-right">
              <div className="pc7-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Touchless RFID scanning</span>
            </div>

            <div className="pc7-feature pc7-hidden-right">
              <div className="pc7-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span> IoT-enabled tracking</span>
            </div>

            <div className="pc7-feature pc7-hidden-right">
              <div className="pc7-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span>Easy integration with dashboards</span>
            </div>
          </div>

          <div className="pc7-btns">
            <button className="pc7-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc7-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="pc7-desktop" aria-hidden={false}>
        <div className="pc7-left pc7-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_8.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_8.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="pc7-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="pc7-right pc7-hidden-right">
          <div className="mb-4">
            <span className="pc7-badge">📡 IoT-based RFID Attendance System</span>
          </div>

          <h3 className="pc7-title">Smarter Attendance, Seamless Management</h3>

          <p className="pc7-desc">
           Combining RFID, GSM, and Wi-Fi, this solution enables IoT-powered attendance tracking with centralized dashboards. Great for schools, offices, and industries.
          </p>

          <div className="pc7-dfeatures">
            <div className="pc7-feature">
              <div className="pc7-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Touchless RFID scanning</span>
            </div>

            <div className="pc7-feature">
              <div className="pc7-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span> IoT-enabled tracking</span>
            </div>

            <div className="pc7-feature">
              <div className="pc7-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span>Easy integration with dashboards</span>
            </div>
          </div>

          <div className="pc7-dactions">
            <button className="pc7-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="pc7-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard7;
