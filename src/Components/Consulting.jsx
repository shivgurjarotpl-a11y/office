import React from "react";
import "../css/Consulting.css";

const servicesData = [
  {
    id: 1,
    title: "IoT Strategy Consulting",
    description:
      "Feasibility studies, roadmap planning, and technology selection ensure a strong foundation for successful projects. Feasibility studies evaluate project viability, roadmap planning outlines the development path, and technology selection identifies the best tools and platforms to achieve performance, scalability, and innovation goals.",
    image: "/image/frm.png",
  },
  {
    id: 2,
    title: "Maintenance & Support",
    description:
      "Firmware updates, hardware maintenance, and app updates ensure devices and applications run smoothly and securely. Firmware updates enhance performance and fix bugs, hardware maintenance keeps systems reliable, and app updates deliver new features and improved user experiences.",
    image: "/image/hrd.png",
  },
  {
    id: 3,
    title: "Security & Compliance",
    description:
      "IoT device security, data privacy compliance, and regulatory guidance ensure safe and trustworthy connected systems. Security measures protect devices from cyber threats, data privacy compliance safeguards user information, and regulatory guidance helps meet industry standards and legal requirements.",
    image: "/image/prt.png",
  },
 
];

const ConsultingSection = ({ title, description, image, reverse }) => (
  <div className={`consulting-section ${reverse ? "consulting-reverse" : ""}`}>
    <div className="consulting-image">
      <img src={image} alt={title} />
    </div>
    <div className="consulting-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const Consulting = () => (
  <section className="consulting-services">
    <div className="consulting-heading">
      <h1>Consulting Product Development</h1>
      <p>
        We design and build cutting-edge consulting-based systems from concept
        to production. Our expertise includes firmware, hardware integration,
        prototyping, and large-scale deployment — ensuring seamless performance,
        scalability, and reliability in every solution.
      </p>
    </div>

    {servicesData.map((service, index) => (
      <ConsultingSection
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
        reverse={index % 2 !== 0}
      />
    ))}
  </section>
);

export default Consulting;
