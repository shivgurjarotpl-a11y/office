import React from "react";
import "../css/Software.css";

const servicesData = [
  {
    id: 1,
    title: "IoT Web & Mobile Applications",
    description:
      "Device dashboards, remote monitoring apps, and analytics platforms provide powerful tools for managing and analyzing connected systems. Dashboards offer real-time insights into device performance, remote monitoring apps allow users to track and control devices from anywhere, and analytics platforms process data to identify trends and improve efficiency.",
    image: "/image/frm.png",
  },
  {
    id: 2,
    title: "Custom Software Development",
    description:
      "Cloud integration, data management, and automation solutions streamline operations and enhance efficiency. Cloud integration connects devices and systems for seamless data sharing, data management ensures secure storage and organization of information, and automation solutions optimize workflows by reducing manual effort and improving accuracy.",
    image: "/image/hrd.png",
  },
  {
    id: 3,
    title: "API Development & Integration",
    description:
      "Connect devices to third-party services and cloud platforms to enable seamless data exchange, remote access, and enhanced functionality. This integration allows devices to communicate with external systems, improving scalability, automation, and real-time monitoring capabilities.",
    image: "/image/prt.png",
  },
];

const SoftwareSection = ({ title, description, image, reverse }) => (
  <div className={`software-section ${reverse ? "software-reverse" : ""}`}>
    <div className="software-image">
      <img src={image} alt={title} />
    </div>
    <div className="software-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const Software = () => (
  <section className="software-services">
    <div className="software-heading">
      <h1>Software & Application Product Development</h1>
      <p>
      We design and develop powerful software and applications from concept to deployment. Our expertise covers UI/UX design, backend development, API integration, testing, and scalable deployment — ensuring high performance, reliability, and innovation at every stage of the development process.
      </p>
    </div>

    {servicesData.map((service, index) => (
      <SoftwareSection
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
        reverse={index % 2 !== 0}
      />
    ))}
  </section>
);

export default Software;
