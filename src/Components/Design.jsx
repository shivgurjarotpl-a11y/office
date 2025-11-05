import React from "react";
import "../css/Design.css";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Mobile and web interface design focuses on creating visually appealing and user-friendly layouts for digital platforms. Usability testing ensures that these designs are easy to navigate and meet user needs effectively. User experience optimization enhances overall satisfaction by improving accessibility, performance, and interaction flow across devices.",
    image: "https://cspv.in/image/oxymora_imgs/image/uiux.png",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "Company websites, landing pages, and e-commerce portals help businesses build a strong online presence. Company websites showcase brand identity and services, landing pages focus on specific campaigns or products to drive conversions, and e-commerce portals enable online sales with smooth shopping experiences for customers.",
    image: "https://cspv.in/image/oxymora_imgs/image/web.png",
  },
  {
    id: 3,
    title: "Mobile Application Development",
    description:
      "iOS, Android, and cross-platform apps enable businesses to reach users across different devices and operating systems. iOS apps are optimized for Apple devices, Android apps cater to a wide range of smartphones, and cross-platform apps provide a unified solution that works seamlessly on both, ensuring broader accessibility and consistent performance.",
    image: "https://cspv.in/image/oxymora_imgs/image/app.png",
  },
];

const DesignSection = ({ title, description, image, reverse }) => (
  <div className={`design-section ${reverse ? "design-reverse" : ""}`}>
    <div className="design-image">
      <img src={image} alt={title} />
    </div>
    <div className="design-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const Design = () => (
  <section className="design-services">
    <div className="design-heading">
      <h1>Design Product Development</h1>
      <p>
        We design and build advanced embedded systems from concept to
        production. Our expertise spans firmware, hardware design, prototyping,
        and manufacturing — ensuring performance, reliability, and scalability
        at every stage.
      </p>
    </div>

    {servicesData.map((service, index) => (
      <DesignSection
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
        reverse={index % 2 !== 0}
      />
    ))}
  </section>
);

export default Design;
