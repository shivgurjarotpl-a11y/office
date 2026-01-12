import React, { useEffect, useRef } from "react";
import "../css/Project1.css";
import { useNavigate } from "react-router-dom";
import { encryptData } from "../utills/crypto";

const Project1 = ({ Data }) => {
  // console.log(Data, "data");
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project1-animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="project1-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project1-left project1-hidden-left">
        {Data.type !== "Project" && (
          <div className="project1-logo-circle">
            <img
              src={
                Data.image_url ||
                "https://cspv.in/image/oxymora_imgs/image/Homy-logo.png"
              }
              alt="App Mockup"
            />
          </div>
        )}
        <h2>{Data.heading}</h2>
        <p>{Data.contents}</p>

        {Data.type === "Applications" && (
          <div className="project1-stats">
            <div>
              <h3>{Data.download_no || "40"}k</h3>
              <p>Downloads</p>
            </div>
            <div>
              <h3>{Data.rating || "4.5"}/5</h3>
              <p>Avg. Rating</p>
            </div>
            <div>
              <h3>${Data.funding || "400"}k+</h3>
              <p>Funding Raised</p>
            </div>
          </div>
        )}

        <div className="project1-actions">
          {Data.type === "Project" && <button 
          // className="project1-btn-primary"
          className="project1-btn-secondary"
          //  onClick={() => Navigate(`/Details/${encryptData(Data.heading,Data.logo_url)}`)}
          // Encrypt each individually or pass as is
          onClick={() => Navigate(`/Details/${encryptData(Data.heading)}/${encryptData(Data.logo_url)}`)}
           
           >View Case Study</button>}
          {Data.type !== "Project" && <button className="project1-btn-secondary">Get In Touch</button>}
        </div>
      </div>

      {/* Right https://cspv.in/image/oxymora_imgs/image Section */}
      <div ref={rightRef} className="project1-right project1-hidden-bottom">
        <img
          src={
            Data.logo_url ||
            "https://cspv.in/image/oxymora_imgs/image/Homy2.png"
          }
          alt="App Mockup"
          className={
            Data.type === "Dashboard"
              ? "project10-phone-img"
              : "project1-phone-img"
          }
        />
      </div>
    </section>
  );
};

export default Project1;
