


// import React, { useEffect } from "react";
// import "../css/ServicesSection.css";
// import { Cpu, Smartphone, Palette, Cloud, LifeBuoy } from "lucide-react"; 

// const services = [
//   {
//     id: 1,
//     title: "IoT Product Development",
//     icon: <Cpu className="category-icon" />,
//         subcategories: [
//       {
//         name: "Firmware Development",
//         desc: "Embedded software for devices, sensor integration, real-time systems.",
//         image: "/image/iot.webp",
//       },
//       {
//         name: "Hardware Development",
//         desc: "Circuit design, PCB design, sensor modules, microcontrollers.",
//         image: "/image/iot2.webp",
//       },
//       {
//         name: "Prototyping Development",
//         desc: "Rapid prototyping, proof of concept devices, testing.",
//         image: "/image/prototyping.jpg",
//       },
//       {
//         name: "Manufacturing Services",
//         desc: "Mass production, assembly, quality control, supply chain support.",
//         image: "/image/manufactur.jpg",
//       },
//     ],
//   },
//     {
//     id: 2,
//     title: "Embedded Software Development",
//     icon: <Cpu className="category-icon" />,
//         subcategories: [
//       {
//         name: "Firmware Development",
//         desc: "Embedded software for devices, sensor integration, real-time systems.",
//         image: "/image/iot.webp",
//       },
//       {
//         name: "Hardware Development",
//         desc: "Circuit design, PCB design, sensor modules, microcontrollers.",
//         image: "/image/iot2.webp",
//       },
//       {
//         name: "Prototyping Development",
//         desc: "Rapid prototyping, proof of concept devices, testing.",
//         image: "/image/prototyping.jpg",
//       },
//       {
//         name: "Manufacturing Services",
//         desc: "Mass production, assembly, quality control, supply chain support.",
//         image: "/image/manufactur.jpg",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Software & Application Development",
//     icon: <Smartphone className="category-icon" />,
//        subcategories: [
//       {
//         name: "IoT Web & Mobile Applications",
//         desc: "Device dashboards, remote monitoring apps, analytics platforms.",
//         image: "/image/mb.webp",
//       },
//       {
//         name: "Custom Software Development",
//         desc: "Cloud integration, data management, automation solutions.",
//         image: "/image/img17.jpg",
//       },
//       {
//         name: "API Development & Integration",
//         desc: "Connect devices to third-party services and cloud platforms.",
//         image: "/image/img17.jpg",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Digital & User Experience Design",
//     icon: <Palette className="category-icon" />,
//         subcategories: [
//       {
//         name: "UI/UX Design",
//         desc: "Mobile and web interface design, usability testing, user experience optimization.",
//         image: "/image/img17.jpg",
//       },
//       {
//         name: "Website Development",
//         desc: "Company websites, landing pages, e-commerce portals.",
//         image: "/image/img17.jpg",
//       },
//       {
//         name: "Mobile Application Development",
//         desc: "iOS, Android, and cross-platform apps.",
//         image: "/image/img17.jpg",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Data & Cloud Services",
//     icon: <Cloud className="category-icon" />,
//         subcategories: [
//       {
//         name: "IoT Cloud Platforms",
//         desc: "Cloud-based device management, storage, and analytics.",
//         image: "/image/img17.jpg",
//       },
//       {
//         name: "Big Data & Analytics",
//         desc: "Sensor data processing, visualization, and reporting.",
//         image: "/image/img17.jpg",
//       },
//       {
//         name: "AI & Machine Learning for IoT",
//         desc: "Predictive maintenance, anomaly detection, smart automation.",
//         image: "/image/img17.jpg",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "Consulting & Support",
//     icon: <LifeBuoy className="category-icon" />,
//         subcategories: [
//       {
//         name: "IoT Strategy Consulting",
//         desc: "Feasibility studies, roadmap planning, technology selection.",
//         image: "/image/img17.jpg",
//       },
//       {
//         name: "Maintenance & Support",
//         desc: "Firmware updates, hardware maintenance, app updates.",
//         image: "/image/img17.jpg",
//       },
//       {
//         name: "Security & Compliance",
//         desc: "IoT device security, data privacy compliance, regulatory guidance.",
//         image: "/image/img17.jpg",
//       },
//     ],
//   },
// ];

// const ServicesSection = () => {
//   useEffect(() => {
//     const cards = document.querySelectorAll(".subcategory-card");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => observer.observe(card));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="services-wrapper">
//       <h2 className="services-heading">Custom IoT Development Services</h2>

//       {services.map((category) => (
//         <div key={category.id} className="service-category">
//           <h3 className="category-title">
//             <span className="category-id">{category.id}</span>
//             {category.icon}
//             <span className="category-text">{category.title}</span>
//           </h3>
//           <div className="subcategory-grid">
//             {category.subcategories.map((sub, i) => (
//               <div key={i} className="subcategory-card">
//                 <img src={sub.image} alt={sub.name} className="subcategory-img" />
//                 <h4 className="subcategory-title">{sub.name}</h4>
//                 <p className="subcategory-desc">{sub.desc}</p>
//                 <button className="read-more-btn">Read More</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ServicesSection;


import React, { useState } from "react";
import "../css/ServicesSection.css";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      name: "IoT Product Development",
      title: "From concept to connected products",
      description:
        "End-to-end IoT product engineering covering hardware design, embedded firmware, connectivity, cloud integration, manufacturing support, and lifecycle management to build secure, scalable, production-ready connected products.",
      img: "/home/16.png",
    },
    {
      name: "Embedded Software Development",
      title: "Powering intelligence at the device level",
      description:
        "High-performance embedded software development for microcontrollers and processors, including RTOS, device drivers, communication protocols, OTA updates, and hardware optimisation for reliable, real-time system performance.",
      img: "/home/17.png",
    },
    {
      name: "Digital & User Experience Design",
      title: "Designing experiences users trust and love",
      description:
        "User-centric digital experience design combining UI/UX strategy, interaction design, and usability engineering to create intuitive, responsive, and engaging interfaces across web, mobile, and connected devices.",
      img: "/home/10.png",
    },
    {
      name: "Software & Application Development",
      title: "Building scalable software for modern businesses",
      description:
        "Custom software application development delivering scalable web, mobile, and enterprise solutions using modern architectures, secure APIs, and cloud-native technologies to support business growth and digital transformation.",
      img: "/home/9.png",
    },
    {
      name: "Data & Cloud Services",
      title: "Turning data into actionable intelligence",
      description:
        "Data-driven cloud services enabling secure data ingestion, analytics, AI integration, and scalable cloud infrastructure to deliver real-time insights, high availability, and optimised operational performance.",
      img: "/home/8.png",
    },
    {
      name: "Consulting & Support",
      title: "Guiding technology decisions with confidence",
      description:
        "Strategic technology consulting and long-term support services helping organisations define product roadmaps, optimise systems, reduce risk, and accelerate innovation from concept to deployment.",
      img: "/home/7.png",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);
  const [fade, setFade] = useState(false);

  const handleHover = (service) => {
    setFade(true);
    setTimeout(() => {
      setActiveService(service);
      setFade(false);
    }, 200);
  };

  const navigate = useNavigate();

  const handleClick = (service) => {
    if (service.name === "IoT Product Development") {
      navigate("/iot"); 
    }else if(service.name === "Embedded Software Development"){
      navigate("/embedded")
    }else if(service.name === "Digital & User Experience Design"){
      navigate("/design")
    } else if(service.name === "Software & Application Development"){
      navigate("/software & application")
    }else if(service.name === "Data & Cloud Services"){
      navigate("/cloud")
    }else if(service.name === "Consulting & Support"){
      navigate("/Consulting & Support")
    }
  };

  return (
    <div className="services-container">
      <div className="services-left">
        <h2>Our integrated solutions</h2>
        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              onMouseEnter={() => handleHover(service)}
              onClick={() => handleClick(service)} 
              className={activeService.name === service.name ? "active" : ""}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>

      <div className={`services-right ${fade ? "fade" : ""}`}>
        <h3>{activeService.title}</h3>
        <p>{activeService.description}</p>
        <div className="services-image">
          <img src={activeService.img} alt={activeService.name} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;



