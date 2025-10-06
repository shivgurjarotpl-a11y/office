import React, { useState, useEffect } from "react";
import "../css/PortfolioCard9.css";

const PortfolioCard9 = () => {
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
            entry.target.classList.add("poc9-animate");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    const els = document.querySelectorAll(
      ".poc9-hidden-left, .poc9-hidden-bottom, .poc9-hidden-right"
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      els.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="poc9-card" role="region" aria-label="Portfolio card - Fall detector">
      {/* Mobile Layout */}
      <div className="poc9-mobile" aria-hidden={false}>
        <div className="poc9-image poc9-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_10.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_10.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="poc9-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="poc9-content poc9-hidden-right">
          <div className="mb-3">
            <span className="poc9-badge">🔒 RF-based Security Device Controller</span>
          </div>

          <h3 className="poc9-title">Your Wireless Security Companion</h3>

          <p className="poc9-desc">
            Built with 433 MHz RF technology, this device provides wireless locking and unlocking features. Reliable for home, office, and industrial security systems.
          </p>

          <div className="poc9-features">
            <div className="poc9-feature poc9-hidden-right">
              <div className="poc9-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Multi-device support</span>
            </div>

            <div className="poc9-feature poc9-hidden-right">
              <div className="poc9-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span>Long-range secure communication</span>
            </div>

            <div className="poc9-feature poc9-hidden-right">
              <div className="poc9-iconwrap" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span> Easy-to-use & robust</span>
            </div>
          </div>

          <div className="poc9-btns">
            <button className="poc9-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="poc9-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="poc9-desktop" aria-hidden={false}>
        <div className="poc9-left poc9-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_10.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_10.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="poc9-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="poc9-right poc9-hidden-right">
          <div className="mb-4">
            <span className="poc9-badge">🔒 RF-based Security Device Controller</span>
          </div>

          <h3 className="poc9-title">Your Wireless Security Companion</h3>

          <p className="poc9-desc">
           Built with 433 MHz RF technology, this device provides wireless locking and unlocking features. Reliable for home, office, and industrial security systems.
          </p>

          <div className="poc9-dfeatures">
            <div className="poc9-feature">
              <div className="poc9-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Multi-device support</span>
            </div>

            <div className="poc9-feature">
              <div className="poc9-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span>Long-range secure communication</span>
            </div>

            <div className="poc9-feature">
              <div className="poc9-iconwrap" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span>Easy-to-use & robust</span>
            </div>
          </div>

          <div className="poc9-dactions">
            <button className="poc9-primary" type="button">
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="poc9-link" type="button">Download Spec Sheet →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard9;
