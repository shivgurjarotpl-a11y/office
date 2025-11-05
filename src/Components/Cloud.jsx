import React from "react";
import "../css/Cloud.css";

const servicesData = [
  {
    id: 1,
    title: "IoT Cloud Platforms",
    description:
      "Cloud-based device management, storage, and analytics enable efficient control, secure data handling, and real-time insights. These solutions allow seamless monitoring of connected devices, reliable data storage, and advanced analytics to optimize performance and decision-making..",
    image: "https://cspv.in/image/oxymora_imgs/image/frm.png",
  },
  {
    id: 2,
    title: "Big Data & Analytics",
    description:
      "Sensor data processing, visualization, and reporting transform raw data into meaningful insights. Data from sensors is analyzed in real time, visualized through interactive dashboards, and compiled into reports that help monitor performance, detect patterns, and support informed decision-making.",
    image: "https://cspv.in/image/oxymora_imgs/image/hrd.png",
  },
  {
    id: 3,
    title: "AI & Machine Learning for IoT",
    description:
      "Predictive maintenance, anomaly detection, and smart automation enhance system efficiency and reliability. Predictive maintenance anticipates issues before they occur, anomaly detection identifies unusual patterns or faults, and smart automation optimizes operations by enabling intelligent, data-driven decision-making.",
    image: "https://cspv.in/image/oxymora_imgs/image/prt.png",
  },
];

const CloudSection = ({ title, description, image, reverse }) => (
  <div className={`cloud-section ${reverse ? "cloud-reverse" : ""}`}>
    <div className="cloud-image">
      <img src={image} alt={title} />
    </div>
    <div className="cloud-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const Cloud = () => (
  <section className="cloud-services">
    <div className="cloud-heading">
      <h1>Cloud Product Development</h1>
      <p>
        We design and build cutting-edge cloud-based systems from concept to
        production. Our expertise includes firmware, hardware integration,
        prototyping, and large-scale deployment — ensuring seamless performance,
        scalability, and reliability in every solution.
      </p>
    </div>

    {servicesData.map((service, index) => (
      <CloudSection
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
        reverse={index % 2 !== 0}
      />
    ))}
  </section>
);

export default Cloud;
