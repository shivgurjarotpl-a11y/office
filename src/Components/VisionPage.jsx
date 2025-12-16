import React from "react";
import "../css/VisionPage.css";
import { FaHandsHelping, FaStar, FaBalanceScale } from "react-icons/fa";

const VisionPage = () => {
  return (
    <main className="vision-container">

      {/* Vision Hero */}
      <section className="vision-hero vision-animate">
        <div className="vision-hero-image">
          <img src="https://cspv.in/image/oxymora_imgs/image/img1.jpg" alt="Vision Illustration" />
        </div>

        <div className="vision-hero-text">
          <h1>Our Vision</h1>
          <p>
            At EmpowerOrg, our vision is to create a world where individuals and
            communities flourish through equal opportunities, innovation, and
            empowerment.
          </p>
          <p>
            We aim to inspire sustainable progress, foster inclusivity, and
            nurture growth that benefits both people and the planet.
          </p>

          <blockquote>"Envisioning a brighter, empowered tomorrow."</blockquote>
          <button>Join Our Vision</button>
        </div>
      </section>

      {/* Core Values */}
      <section className="vision-core-values vision-animate">
        <h2>Our Core Values</h2>

        <div className="vision-values-grid">
          <div className="vision-value-card">
            <div className="vision-icon">
              <FaBalanceScale size={32} color="#ffffffff" />
            </div>
            <h3>Integrity</h3>
            <p>
              We uphold the highest ethical standards, ensuring transparency and
              accountability in all our actions.
            </p>
          </div>

          <div className="vision-value-card">
            <div className="vision-icon">
              <FaHandsHelping size={32} color="#ffffffff" />
            </div>
            <h3>Collaboration</h3>
            <p>
              We believe in the power of partnerships to amplify impact and
              achieve sustainable solutions.
            </p>
          </div>

          <div className="vision-value-card">
            <div className="vision-icon">
              <FaStar size={32} color="#ffffffff" />
            </div>
            <h3>Excellence</h3>
            <p>
              We strive for exceptional quality in everything we do, constantly
              improving and innovating.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="vision-approach vision-animate">
        <h2>Our Approach</h2>

        <div className="vision-approach-text">
          <p>
            We believe that meaningful change happens through a thoughtful,
            inclusive approach. Our process includes:
          </p>

          <ul>
            <li>
              <strong>Community Engagement:</strong> Listening and collaborating
              with local communities to understand their unique needs and
              strengths.
            </li>

            <li>
              <strong>Innovative Solutions:</strong> Leveraging technology and
              creative strategies to address complex challenges.
            </li>

            <li>
              <strong>Capacity Building:</strong> Empowering individuals and
              organizations with skills and resources for sustainable growth.
            </li>

            <li>
              <strong>Impact Measurement:</strong> Continuously evaluating our
              programs to ensure effectiveness and transparency.
            </li>
          </ul>
        </div>
      </section>

      {/* Impact Section */}
      <section className="vision-impact vision-animate">
        <h2>Our Impact</h2>

        <div className="vision-impact-grid">
          <div>
            <div className="vision-impact-number">5M+</div>
            <p>Individuals Empowered</p>
          </div>

          <div>
            <div className="vision-impact-number">200+</div>
            <p>Partner Organizations</p>
          </div>

          <div>
            <div className="vision-impact-number">50+</div>
            <p>Countries Reached</p>
          </div>

          <div>
            <div className="vision-impact-number">100+</div>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="vision-testimonials vision-animate">
        <h2>What People Say</h2>

        <blockquote>
          EmpowerOrg's vision and dedication transformed our community. Their
          commitment to innovation and partnership is unmatched.
          <footer>— Maria Gonzalez, Community Leader</footer>
        </blockquote>

        <blockquote>
          Working with this team has opened new avenues for collaboration. Their
          expertise in sustainable development is impressive.
          <footer>— David Thompson, Partner Organization</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="vision-cta vision-animate">
        <h2>Ready to Shape the Future?</h2>
        <p>
          Join us in realizing our shared vision of empowerment and global
          progress.
        </p>
        <button>Get Involved</button>
      </section>

    </main>
  );
};

export default VisionPage;
