import React from "react";
import "../css/EmbeddedServices.css";

const servicesData = [
  {
    id: 1,
    title: "Firmware Development",
    description:
      "Embedded software enables devices to control hardware and perform specific tasks efficiently. With sensor integration, it can collect and process real-world data, improving functionality and intelligence. Real-time systems ensure quick and accurate responses, making them essential for reliable and high-performance applications like IoT, automotive, and industrial devices.",
    image: "https://cspv.in/image/oxymora_imgs/image/frm.png",
  },
  {
    id: 2,
    title: "Hardware Development",
    description:
      "Circuit design and PCB design are essential steps in creating efficient electronic systems. They define how components are connected and how signals flow through the device. Sensor modules collect data from the environment, while microcontrollers process this data and control device operations. Together, they form the foundation of modern embedded and electronic systems.",
    image: "https://cspv.in/image/oxymora_imgs/image/hrd.png",
  },
  {
    id: 3,
    title: "Prototyping Development",
    description:
      "Rapid prototyping helps quickly turn ideas into working models for evaluation and improvement. Proof of concept devices demonstrate the feasibility of a design or technology before full-scale production. Testing ensures that these prototypes meet performance, safety, and reliability standards, making the development process faster and more efficient.",
    image: "https://cspv.in/image/oxymora_imgs/image/prt.png",
  },
  {
    id: 4,
    title: "Manufacturing Services",
    description:
      "Mass production enables large-scale manufacturing of products with consistency and efficiency. Assembly involves putting together all components to create the final device. Quality control ensures that each product meets required standards and performs reliably. Supply chain support manages the flow of materials and components, ensuring smooth and timely production.",
    image: "https://cspv.in/image/oxymora_imgs/image/mni.png",
  },
];

const EmbeddedServiceSection = ({ title, description, image, reverse }) => (
  <div className={`embedded-service-section ${reverse ? "embedded-reverse" : ""}`}>
    <div className="embedded-service-image">
      <img src={image} alt={title} />
    </div>
    <div className="embedded-service-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const EmbeddedServices = () => (
  <section className="embedded-services">
    <div className="embedded-heading">
      <h1>Embedded Product Development</h1>
      <p>
        We design and build advanced embedded systems from concept to
        production. Our expertise spans firmware, hardware design, prototyping,
        and manufacturing — ensuring performance, reliability, and scalability
        at every stage.
      </p>
    </div>

    {servicesData.map((service, index) => (
      <EmbeddedServiceSection
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
        reverse={index % 2 !== 0}
      />
    ))}
  </section>
);

export default EmbeddedServices;
