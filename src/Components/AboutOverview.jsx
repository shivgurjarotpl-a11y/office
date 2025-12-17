import React, { useState } from "react";
import "../css/MissionPage.css";
import { FaHandsHelping, FaStar, FaBalanceScale, FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../css/OfficeGallery.css";
import { useNavigate } from "react-router-dom";


const AboutOverview = () => {
  const navigation = useNavigate();

  const [showFullContent, setShowFullContent] = useState(true);

  const pageSummary = `EmpowerOrg is dedicated to empowering individuals and communities globally through innovative solutions and committed service, focusing on integrity, collaboration, and excellence to foster sustainable growth and positive impact. Key initiatives include community engagement, innovative solutions, capacity building, and impact measurement, reaching millions of individuals across over 50 countries.`;

  const sections = [
    {
      title: "Office Space",
      cards: [
        { name: "Meeting Rooms", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Workspaces", image: "https://cspv.in/image/oxymora_imgs/image/img2.jpg" },
        { name: "Recreation Area", image: "https://cspv.in/image/oxymora_imgs/image/img3.jpg" },
        { name: "Events & Functions", image: "https://cspv.in/image/oxymora_imgs/image/img5.jpg" },
      ],
    },
  ];

  return (
    <main className="mission-container">
      {/* Summary Section - Added */}
      <section className="about-summary mission-animate">
        <h2>About EmpowerOrg</h2>
        <p>{pageSummary}</p>
        <button onClick={() => setShowFullContent(!showFullContent)} className="toggle-button">
          {showFullContent ? (
            <>
              Read Less <FaAngleUp style={{ marginLeft: '8px' }} />
            </>
          ) : (
            <>
              Read More <FaAngleDown style={{ marginLeft: '8px' }} />
            </>
          )}
        </button>
      </section>

      {/* Conditional Rendering for the rest of the content */}
      {showFullContent && (
        <>
          {/* Mission Hero */}
          <section className="mission-hero mission-animate">
            <div className="mission-hero-image">
              <img
                src="https://cspv.in/image/oxymora_imgs/image/companyvision.jpg"
                alt="Mission Illustration"
              />
            </div>
            <div className="mission-hero-text">
              <h1>Our Mission</h1>
              <p>
                At EmpowerOrg, we are dedicated to empowering individuals and communities through innovative solutions and committed service. We believe in fostering sustainable growth by embracing integrity, collaboration, and excellence.
              </p>
              <p>
                Our mission is to create a positive impact that drives progress and enriches lives globally, building a future where everyone has the opportunity to thrive.
              </p>
              <blockquote>"Together, we build a better future."</blockquote>
              <button className="cta-button" onClick={() => navigation("/about/mission")}>More Details</button>
            </div>
          </section>

          {/* Vision Hero */}
          <section className="vision-hero vision-animate">
           
            <div className="vision-hero-text">
              <h1>Our Vision</h1>
              <p>
                At EmpowerOrg, our vision is to create a world where individuals and communities flourish through equal opportunities, innovation, and empowerment.
              </p>
              <p>
                We aim to inspire sustainable progress, foster inclusivity, and nurture growth that benefits both people and the planet.
              </p>
              <blockquote>"Envisioning a brighter, empowered tomorrow."</blockquote>
              <button className="cta-button" onClick={() => navigation("/about/vision")}>More Details</button>
            </div>
             <div className="vision-hero-image">
              <img src="https://cspv.in/image/oxymora_imgs/image/img1.jpg" alt="Vision Illustration" />
            </div>
          </section>



          {/* Impact Statistics */}
          <section className="mission-impact mission-animate">
            <h2>Our Impact</h2>
            <div className="mission-impact-grid">
              <div className="impact-item">
                <div className="mission-impact-number">5M+</div>
                <p>Individuals Empowered</p>
              </div>
              <div className="impact-item">
                <div className="mission-impact-number">200+</div>
                <p>Partner Organizations</p>
              </div>
              <div className="impact-item">
                <div className="mission-impact-number">50+</div>
                <p>Countries Reached</p>
              </div>
              <div className="impact-item">
                <div className="mission-impact-number">100+</div>
                <p>Projects Completed</p>
              </div>
            </div>
          </section>


       <section className="mission-impact mission-animate">
              {/* Office Space Section */}
          {sections.map((section, idx) => (
            <div key={idx} className="category-section" >
              <h2 >{section.title}</h2>
              <div className="mission-impact-grid">
                {section.cards.map((card, i) => (
                  <div key={i} className="impact-item">
                    <img src={card.image} alt={card.name} className="category-card-image" />
                    <h3 className="category-card-title">{card.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </section>


        
        </>
      )}
    </main>
  );
};

export default AboutOverview;
