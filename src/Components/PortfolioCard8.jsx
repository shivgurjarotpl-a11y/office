import React, { useState, useEffect } from "react";
import "../css/PortfolioCard8.css";

const PortfolioCard8 = () => {
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
            entry.target.classList.add("poc8-animate");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    const els = document.querySelectorAll(
      ".poc8-hidden-left, .poc8-hidden-bottom, .poc8-hidden-right"
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      els.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="poc8-card"
      role="region"
      aria-label="Portfolio card - Fall detector"
    >
      {/* Mobile Layout */}
      <div className="poc8-mobile" aria-hidden={false}>
        <div className="poc8-image poc8-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_9.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_9.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="poc8-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>

        <div className="poc8-content poc8-hidden-right">
          <div className="mb-3">
            <span className="poc8-badge">EV Speed Controller</span>
          </div>

          <h3 className="poc8-title">Powering the Future of Mobility</h3>

          <p className="poc8-desc">
            A BLDC motor controller designed for electric vehicles. It ensures
            smooth throttle control, efficient power management, and better
            safety.
          </p>

          <div className="poc8-features">
            <div className="poc8-feature poc8-hidden-right">
              <div className="poc8-iconwrap" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span>Optimized energy use</span>
            </div>

            <div className="poc8-feature poc8-hidden-right">
              <div className="poc8-iconwrap" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <span>Smooth & reliable performance</span>
            </div>

            <div className="poc8-feature poc8-hidden-right">
              <div className="poc8-iconwrap" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span>Supports sustainable EV technology</span>
            </div>
          </div>

          <div className="poc8-btns">
            <button className="poc8-primary" type="button">
              View Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button className="poc8-link" type="button">
              Download Spec Sheet →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="poc8-desktop" aria-hidden={false}>
        <div className="poc8-left poc8-hidden-bottom">
          {isIllustrationView ? (
            <img
              src="/image/Gemini_Generated_Image_9.png"
              alt="Stylized illustration of fall detector"
            />
          ) : (
            <img
              src="/image/Gemini_Generated_Image_9.png"
              alt="Photorealistic product shot of fall detector"
            />
          )}

          <button
            onClick={toggleView}
            className="poc8-toggle"
            aria-pressed={isIllustrationView}
            aria-label="Toggle between product photo and illustration view"
            type="button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>

        <div className="poc8-right poc8-hidden-right">
          <div className="mb-4">
            <span className="poc8-badge">EV Speed Controller</span>
          </div>

          <h3 className="poc8-title">Powering the Future of Mobility</h3>

          <p className="poc8-desc">
            A BLDC motor controller designed for electric vehicles. It ensures
            smooth throttle control, efficient power management, and better
            safety.
          </p>

          <div className="poc8-dfeatures">
            <div className="poc8-feature">
              <div className="poc8-iconwrap" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span>Optimized energy use</span>
            </div>

            <div className="poc8-feature">
              <div className="poc8-iconwrap" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <span>Smooth & reliable performance</span>
            </div>

            <div className="poc8-feature">
              <div className="poc8-iconwrap" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span>Supports sustainable EV technology</span>
            </div>
          </div>

          <div className="poc8-dactions">
            <button className="poc8-primary" type="button">
              View Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button className="poc8-link" type="button">
              Download Spec Sheet →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard8;
