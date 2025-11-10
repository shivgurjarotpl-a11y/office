import React, { useState, useEffect, useRef } from "react";
import "../css/YouTubeSlider.css";

const YouTubeSlider = () => {
  const videos = [
    { id: "N6PCgluoLSQ", title: "Never Gonna Give You Up" },
    { id: "yI4nvEXh_dY", title: "Gangnam Style" },
    { id: "DGbiPXC1LBM", title: "Counting Stars" },
    { id: "3P8mK1Qh8Xk", title: "Counting Stars" },
    { id: "T317DjizjCg", title: "Counting Stars" },
    { id: "jllDeBd_loY", title: "Counting Stars" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const slideDuration = 6000; 

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 2;
      });
    }, slideDuration / 50);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div
      className="yt-slider-container"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="yt-slider">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`yt-slide ${index === currentIndex ? "active" : ""}`}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=${
                index === currentIndex ? 1 : 0
              }&mute=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* <div className="yt-overlay">
              <h2>{video.title}</h2>
            </div> */}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="yt-progress-bar">
        <div className="yt-progress" style={{ width: `${progress}%` }}></div>
      </div> */}

      {/* Buttons */}
      {/* <button className="yt-btn prev" onClick={handlePrev}>❮</button>
      <button className="yt-btn next" onClick={handleNext}>❯</button> */}

      {/* Thumbnails (Dots) */}
      <div className="yt-thumbnails">
        {videos.map((video, i) => (
          <div
            key={i}
            className={`yt-thumb ${i === currentIndex ? "active" : ""}`}
            onClick={() => {
              setCurrentIndex(i);
              setProgress(0);
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSlider;
