import React from "react";
import "../css/Project2.css";
import { useParams } from "react-router-dom";
import { decryptData } from "../utills/crypto";


 const projectData = [
{
  id: 1,
  title: "Project 1: Sound & Magnetic Field Detector (Pinpoint)",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Defence Technology, Surveillance, Security & Monitoring Systems",
  clientBackground: "This project was developed as a specialised detection system aimed at identifying and localising hidden electronic devices, unauthorised equipment, or abnormal activity in sensitive environments. The solution is suitable for defence agencies, security teams, research organisations, and critical infrastructure operators.",
  problemStatement: [
    "In high-security and sensitive zones, detecting covert electronic devices, abnormal sound signatures, or magnetic field disturbances is a major challenge. Traditional inspection methods are time-consuming, intrusive, and often inaccurate, especially in environments with high electromagnetic noise.",
    "The requirement was to build a compact, portable system capable of accurately detecting sound patterns and magnetic field variations, and providing precise indications for pinpointing the source."
  ],
  solution: [
    "Oxymora designed and developed Pinpoint, a Sound & Magnetic Field Detection system that integrates advanced sensors, signal processing algorithms, and embedded intelligence.",
    "The system continuously monitors environmental sound and magnetic field data, filters background noise, and identifies anomalies that may indicate the presence of electronic devices, concealed objects, or suspicious activity."
  ],
  features: [
    "High-sensitivity sound detection for abnormal acoustic patterns",
    "Magnetic field sensing for electronic components and metallic objects",
    "Real-time signal processing and noise filtering",
    "Portable and compact embedded design",
    "Visual and alert-based indication",
    "Configurable sensitivity for different environments"
  ],
  technologies: {
    hardware: ["High-sensitivity microphones", "Magnetic field sensors (Hall-effect / magnetometer)", "Microcontroller-based embedded system", "Custom power management circuitry"],
    firmware: ["Embedded C / C++", "Sensor drivers and calibration algorithms", "Signal processing and filtering logic", "Real-time event detection"],
    communication: ["On-device indicators (LED / buzzer / display)", "Optional data logging and external interface support"]
  },
  scope: [
    "System architecture and hardware design",
    "Sensor selection, integration, and calibration",
    "Firmware development for signal processing",
    "Prototype development and testing",
    "Environmental validation and accuracy tuning"
  ],
  outcome: [
    "Faster and more reliable detection of hidden electronic sources",
    "Reduced manual inspection effort",
    "Improved accuracy and response time",
    "Scalable platform for future enhancements"
  ]
},
{
  id: 2,
  title: "Oxygen Plant Analyser Data Logger",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Healthcare Infrastructure, Industrial IoT, Medical Gas Systems",
  clientBackground: `
  The project was designed for oxygen generation plants and hospitals requiring continuous monitoring of oxygen purity and plant health. The system supports centralised supervision and remote diagnostics.
  `,
  problemStatement: [
    `Oxygen plants require real-time monitoring of oxygen concentration and operational status. Manual checks and non-connected analysers lead to delayed responses, safety risks, and inefficient plant management.`
  ],
  solution: [
    `Oxymora developed an IoT-enabled Oxygen Plant Analyser Data Logger that continuously captures oxygen analyser values and plant parameters.
     The system transmits data over GSM using M2M communication and supports bidirectional control for configuration and diagnostics from a centralised dashboard.`
  ],
  features: [
    "Real-time oxygen purity monitoring",
    "GSM-based M2M communication",
    "Bidirectional data exchange",
    "Alerts for abnormal oxygen levels",
    "Secure cloud dashboard access"
  ],
  technologies: {
    hardware: ["Microcontroller-based system", "GSM module"],
    communication: ["GSM", "M2M", "TCP/IP", "MQTT"],
    cloud: ['Web dashboard', 'data logging', 'alerts']
  },

  outcome: [
    "Improved plant safety and compliance",
    "Reduced manual intervention",
    "Enabled remote diagnostics and monitoring"
  ]
},
{
  id: 3,
  title: "Smart Mobile Operated Multi-Colour LED Controller (FloRo)",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Consumer Electronics, Smart Lighting",
  clientBackground: "This project targeted the replacement of low-cost imported LED controllers with a feature-rich, mobile-controlled smart lighting solution.",

  problemStatement: [
    "Conventional LED controllers offer limited color control, poor reliability, and no smart connectivity. Users demanded advanced color modes and mobile app control."
  ],
  solution: [
    "Oxymora designed FloRo, a BLE-based smart LED controller capable of generating millions of colours and dynamic lighting modes. A hybrid mobile application enables seamless user control."
  ],
    features: [
    "Millions of colour combinations",  
    "Multiple lighting effects and modes",
    "BLE-based mobile control",
    "Low power embedded design"
  ],
  technologies: {
    hardware: ["Microcontroller", "PWM LED drivers"],
    communication: ["Bluetooth Low Energy (BLE)"],
    cloud: ["Hybrid mobile application"]
  },

  outcome: [
    "Competed effectively with imported products",
    "Enhanced user experience and customisation",
    "Scalable for mass consumer deployment"
  ]
},
{
  id: 4,
  title: "GPS Enabled Smart Harness Safety Device",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Industrial Safety, Construction, Mining, Utilities & Workforce Monitoring",
  clientBackground: "This project was developed for industries where personnel work in hazardous environments such as construction sites, mining areas, towers, factories, and utility maintenance zones. The objective was to enhance worker safety by making traditional safety harnesses intelligent, location-aware, and event-driven.",

  problemStatement: [
   "Conventional safety harnesses are passive safety tools. In case of a fall, unconsciousness, or abnormal movement, there is no automatic way to detect the incident or alert supervisors. Delayed response during such incidents can lead to severe injuries or fatalities.",
   "The requirement was to create a smart safety system that could detect falls, track worker location, and immediately send alerts over long distances with low power consumption."
  ],
  solution: [
   "Oxymora designed a GPS-enabled Smart Harness Safety Device that integrates motion sensing, location tracking, and long-range wireless communication. The device is embedded into a safety harness and continuously monitors worker movement using gyro and motion sensors.",
   "In the event of a fall, tilt anomaly, or sudden impact, the system automatically triggers an alert containing the worker’s real-time GPS location. Using LoRa communication, alerts can be transmitted reliably over long distances, even in remote or low-connectivity environments."
  ],
  features: [
  "Real-time GPS-based worker location tracking",
  "Fall detection using gyro and motion sensors",
  "Abnormal posture and inactivity detection",
  "Long-range, low-power LoRa communication",
  "Emergency alert triggering without manual intervention",
  "Compact, rugged, and wearable embedded design",
  ],
  technologies: {
    hardware: [
      "GPS module",
      "Gyroscope and motion sensors",
      "Low-power microcontroller",
      "Battery management and power regulation circuitry"
    ],
    firmware: [
      "Embedded C/C++",
      "Sensor fusion and fall detection algorithms",
      "Power optimization and sleep-mode handling"
    ],
    communication: ["LoRa (long-range, low-power wireless communication)"]
  },
  scope: [
    "System architecture and wearable device design",
    "Sensor selection, calibration, and integration",
    "Firmware development for fall detection logic",
    "LoRa communication implementation",
    "Field testing in real working environments"
  ],
  outcome: [
    "Significantly improved worker safety in hazardous environments",
    "Faster emergency response through automatic alerts",
    "Enabled real-time workforce visibility and monitoring",
    "Reduced dependency on manual reporting during accidents"
  ]
},
{
  id: 5,
  title: "IoT Enabled Smart Dustbin",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Smart Cities, Waste Management, Municipal Infrastructure, IoT",
  clientBackground: "This project was developed for municipal corporations, smart city initiatives, campuses, industrial parks, and large public spaces where waste management efficiency and hygiene are critical. The goal was to modernize traditional waste bins by making them intelligent, secure, and remotely monitorable.",

  problemStatement: [
   `Traditional waste collection systems operate on fixed schedules without knowing the actual fill status of dustbins. This leads to 
    Overflowing bins and unhygienic conditions,
    Inefficient waste collection routes,
    Increased operational cost,
    Fire hazards due to improper waste disposal.
    Additionally, in many locations, unauthorized usage or misuse of waste bins creates security and cleanliness issues. A smart, connected, and secure solution was required.

   `
  ],
  solution: [
   "Oxymora developed an IoT Enabled Smart Dustbin that continuously monitors the fill level of waste bins and detects fire or abnormal conditions using integrated sensors. The system transmits real-time data to a centralized cloud dashboard, enabling authorities to monitor bin status remotely.",
   "To enhance security and controlled usage, the dustbin is equipped with an RFID-based access control system, allowing only authorized users or staff to open or access specific compartments."
  ],
  features: [
  "Real-time waste fill-level monitoring",
  "Fire and smoke detection inside the bin",
  "IoT-based remote monitoring and alerts",
  "RFID-based access control for authorized usage",
  "Cloud dashboard for status visualization",
  "Scalable design for city-wide deployment"
  ],
  technologies: {
    hardware: [
      "Ultrasonic sensors for fill-level detection",
      "Fire / smoke detection sensors",
      "RFID reader and tags",
      "Embedded microcontroller",
      "Power management circuitry"
    ],
    firmware: [
      "Embedded C/C++",
      "Sensor data acquisition and processing",
      "Event-based alert logic"
    ],
    communication: [
      "IoT connectivity (GSM / Wi-Fi, deployment dependent)",
      "MQTT protocol for data transmission",
      "Cloud-based monitoring dashboard"
    ]
  },
  scope: [
"Embedded system architecture and hardware design",
"Sensor integration and calibration",
"Firmware development for monitoring and alerts",
"RFID access control implementation",
"Cloud dashboard and IoT integration",
"Field testing and validation"
  ],
  outcome: [
    "Prevented overflow of waste bins through real-time monitoring",
    "Reduced waste collection costs with optimized routing",
    "Improved hygiene and cleanliness in public spaces",
    "Enhanced safety with fire detection and early alerts",
    "Enabled controlled and secure waste disposal"
  ]
},
{
  id: 6,
  title: "Blood Vibrator & Mixer Machine",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Medical Devices, Healthcare Equipment, Diagnostics",
  clientBackground: "This project was developed for hospitals, blood banks, diagnostic laboratories, and healthcare facilities that require reliable and uniform mixing of blood samples during storage, processing, and testing. Precision, safety, and reliability were critical requirements.",

  problemStatement: [
    "Manual or poorly controlled blood mixing can lead to improper sample consistency, clot formation, and inaccurate test results. Existing low-cost systems often lack precise speed control, stability, and long-term reliability.",
    "The requirement was to design an electronic blood vibrator and mixer system capable of controlled, continuous, and uniform mixing using medical-grade safety standards."
  ],
  solution: [
   "Oxymora designed an embedded-controlled Blood Vibrator & Mixer Machine that precisely controls DC and vibrator motors to ensure uniform and gentle blood mixing. The system allows stable operation over extended periods while minimizing heat generation and mechanical stress.",
   "The solution focuses on smooth motor control, consistent vibration patterns, and dependable operation suitable for medical environments."

  ],
  features: [
    "Precise control of DC and vibrator motors",
    "Uniform and continuous blood mixing",
    "Stable low-noise operation",
    "Embedded electronic control for reliability",
    "Compact and robust medical-grade design",
    "Low power consumption"
  ],
  technologies: {
    hardware: [
      "DC motor and vibrator motor",
      "Motor driver circuits",
      "Power supply and protection circuitry",
      "Embedded microcontroller"
    ],
    firmware: [
      "Embedded C",
      "Motor speed and timing control algorithms",
      "Safety and fault handling logic"
    ]
  },
  scope: [
"Electronic circuit and control system design",
"Motor driver selection and integration",
"Firmware development for speed and vibration control",
"Prototype development and testing",
"Reliability and performance validation"
  ],
  outcome: [
"Ensured consistent and accurate blood sample mixing",
"Reduced risk of clot formation and sample errors",
"Improved reliability compared to manual methods",
"Delivered a cost-effective and dependable medical device solution"
  ]
},
{
  id: 7,
  title: "Food Serving Train Controller System",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Hospitality Automation, Embedded Systems, Restaurant Technology",
  clientBackground: "This project was developed for restaurants, cafés, and themed dining environments looking to automate food delivery to tables while enhancing customer experience. The concept uses a toy train running on predefined tracks to serve food in a smart and controlled manner.",

  problemStatement: [
   "Manual food serving in busy restaurants can be inefficient, error-prone, and labor-intensive. Additionally, themed restaurants require innovative serving mechanisms that are reliable, safe, and easy to operate.",
   "The requirement was to build a smart embedded controller capable of accurately controlling train movement, speed, and stopping points using sensors and high-frequency control logic."
  ],
  solution: [
    "Oxymora designed a Food Serving Train Controller System using smart embedded and sensor technology. The controller manages train speed, direction, and halting positions with high precision, ensuring smooth and safe food delivery.",
    "The system uses a high-frequency microprocessor to handle real-time control, sensor feedback, and operational logic, enabling consistent performance even during peak hours."
  ],
  features: [
    "Precise speed and direction control of the train",
    "Sensor-based station detection and stopping",
    "Smooth acceleration and deceleration",
    "Reliable high-frequency embedded control",
    "Safe and stable operation in public environments",
    "Easy integration with restaurant layouts"
  ],
  technologies: {
    hardware: [
      "High-frequency microprocessor / microcontroller",
      "Motor drivers and power electronics",
      "Track-based or proximity sensors",
      "Power management circuitry"
    ],
    firmware: [
"Embedded C/C++",
"Real-time motor control logic",
"Sensor feedback handling",
"Fault detection and recovery logic"
    ]
  },
  scope: [
  "System architecture and controller design",
  "Motor control and sensor integration",
  "Firmware development for real-time operation",
  "Testing under continuous operational conditions",
  "Safety and reliability validation"
  ],
  outcome: [
    "Automated food serving with minimal human intervention",
    "Improved service efficiency and novelty dining experience",
    "Reduced operational workload for staff",
    "Delivered a reliable and scalable restaurant automation solution"
  ]
},
{
  id: 8,
  title: "Small Scale Ventilator",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Medical Devices, Critical Care, Emergency Healthcare",
  clientBackground: "This project was developed to address the need for affordable and reliable respiratory support devices for hospitals, emergency care units, and temporary medical facilities. The focus was on creating a compact ventilator suitable for low-resource and emergency situations.",
  problemStatement: [
  "During medical emergencies and high patient load situations, access to full-featured ventilators is often limited due to cost, availability, and infrastructure constraints. There was a need for a small-scale, cost-effective ventilator capable of providing controlled oxygen delivery while monitoring key patient parameters."
  ],
  solution: [
   "Oxymora designed a Small Scale Ventilator System using embedded technology to monitor oxygen levels and temperature while precisely controlling oxygen delivery. The system automates the compression of an Ambu bag using a stepper motor, allowing accurate control of breathing cycles based on patient requirements."
  ],
  features: [
    "Controlled oxygen delivery using Ambu bag mechanism",
    "Stepper motor-based precise pumping control",
    "Monitoring of oxygen level and temperature",
    "Adjustable breathing parameters based on patient needs",
    "Compact and portable embedded design",
    "Low-cost and easy-to-deploy solution"
  ],
  technologies: {
    hardware: [
      "Stepper motor and motor driver",
      "Oxygen and temperature sensors",
      "Embedded microcontroller",
      "Mechanical Ambu bag compression mechanism",
      "Power supply and protection circuits"
    ],
    firmware: [
      "Embedded C/C++",
      "Stepper motor control algorithms",
      "Sensor monitoring and feedback logic",
      "Safety limits and fault handling"
    ]
  },
  scope: [
    "System architecture and medical device design",
    "Sensor integration and calibration",
    "Motor control firmware development",
    "Mechanical and electronic system integration",
    "Functional testing and performance validation"
  ],
  outcome: [
    "Enabled affordable respiratory support in emergency scenarios",
    "Reduced dependency on high-cost ventilators",
    "Provided a rapid-deployment solution during medical crises",
    "Demonstrated Oxymora’s capability in medical-grade embedded systems"
  ]
},
{
  id: 9,
  title: "Antibacterial Gloves",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Healthcare Safety, Medical Wearables, Infection Control",
  clientBackground: "This project was developed for healthcare professionals, laboratory staff, and hygiene-critical environments where preventing bacterial contamination is essential. The objective was to enhance personal protective equipment (PPE) by embedding active antibacterial technology into wearable gloves.",
  
  problemStatement: [
    "Conventional gloves act only as a physical barrier and do not actively eliminate bacteria present on the glove surface. This increases the risk of cross-contamination, especially in hospitals and laboratories.",
    "The requirement was to design antibacterial gloves that could actively kill bacteria while being safe for human use, lightweight, and energy efficient."
  ],
  solution: [
    "Oxymora developed Antibacterial Gloves using low-power UVC technology embedded into the glove structure. The UVC system is designed to effectively kill bacteria on the glove surface while ensuring that the emitted radiation is non-harmful to human skin.",
    "The solution focuses on controlled UVC exposure, low power consumption, and wearable safety."
  ],
  features: [
    "Active bacterial elimination using UVC technology",
    "Human-safe UVC exposure design",
    "Low power consumption for extended use",
    "Lightweight and wearable electronics integration",
    "Enhanced hygiene and infection control"
  ],
  technologies: {
    hardware: [
      "Low-power UVC LEDs",
      "Power regulation and protection circuitry",
      "Compact embedded control module"
    ],
    firmware: [
    "Embedded control logic for UVC activation",
    "Timing and safety control algorithms"
    ]
  },
  scope: [
    "UVC LED selection and safety validation",
    "Electronic circuit and power design",
    "Embedded control logic development",
    "Wearable integration and ergonomics consideration",
    "Functional and safety testing"
  ],
  outcome: [
    "Improved infection control in healthcare environments",
    "Reduced risk of cross-contamination",
    "Added active safety functionality to traditional PPE",
    "Demonstrated innovation in wearable healthcare electronics"
  ]
},
{
  id: 10,
  title: "Mobile Application Controlled Multi-Processing & Multi-Tasking System",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Smart Infrastructure, Building Automation, Industrial Control Systems",
  clientBackground: "This project was developed for smart buildings, architectural model systems, and infrastructure automation setups where multiple subsystems need to be monitored and controlled simultaneously through a single interface.",

  problemStatement: [
    "Modern buildings and infrastructure systems involve multiple parallel operations such as lighting, access control, HVAC models, sensors, and automation modules. Traditional single-processor systems struggle with real-time multi-task handling and centralized control.",
    "The requirement was to design a scalable, multi-processing embedded system capable of handling multiple tasks concurrently and controlled through a mobile application."
  ],
  solution: [
    "Oxymora designed a multi-processing and multi-tasking control system based on an ARM application processor architecture. The system is capable of handling multiple independent tasks simultaneously while maintaining stability and responsiveness.",
    "A mobile application acts as the centralized control interface, enabling users to monitor and control different subsystems in real time. The architecture supports expansion and customization based on project requirements."
  ],
  features: [
    "ARM-based multi-processor architecture",
    "True multi-tasking capability",
    "Mobile application-based centralised control",
    "Scalable system architecture",
    "Real-time response and task prioritisation",
    "Suitable for smart building and model-based systems"
  ],
  technologies: {
    hardware: [
    "ARM-based application processor",
    "Peripheral controllers and I/O interfaces",
    "Power management circuitry"
    ],
    firmware: [
    "Embedded Linux / RTOS (architecture dependent)",
    "Multi-task scheduling and process management",
    "Device drivers and inter-process communication"
    ],
    communication: [
      "Mobile application for system control",
      "Communication interface between app and hardware"
    ]
  },
  scope: [
    "System architecture and processor selection",
    "Embedded firmware / OS configuration",
    "Application-to-hardware communication design",
    "Mobile application integration",
    "Functional and performance testing"
  ],
  outcome: [
    "Enabled centralised control of multiple systems",
    "Improved system scalability and responsiveness",
    "Simplified complex infrastructure automation",
    "Demonstrated advanced embedded system design capability"
  ]
},
{
  id: 11,
  title: "Fall Detector Device",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Healthcare Monitoring, Elder Care, Personal Safety Devices",
  clientBackground: "This project was developed for elderly care facilities, healthcare providers, and personal safety applications where immediate response to falls is critical. The device is suitable for senior citizens, patients under observation, and individuals working alone in risky environments.",

  problemStatement: [
    `Falls are a major health risk, especially for elderly people and patients with medical conditions. Manual reporting is often not possible after a fall, leading to delayed medical assistance.`,
    "The requirement was to build a compact, reliable fall detection device that could automatically detect a fall and immediately notify caregivers or emergency contacts."
  ],
  solution: [
   "Oxymora designed a Fall Detector Device using gyro and motion sensor technology to continuously monitor human movement patterns. When a fall or abnormal motion is detected, the device automatically transmits an alert using GSM and RF-based communication, ensuring redundancy and reliability.",
   "The solution emphasizes fast detection, automatic alerts, and dependable communication."
  ],
  features: [
    "Accurate fall detection using gyro sensors",
    "Automatic emergency alert generation",
    "Dual communication using GSM and RF",
    "Compact and wearable embedded design",
    "Low power operation for extended usage",
    "Reliable performance in indoor and outdoor environments"
  ],
  technologies: {
    hardware: [
      "Gyroscope and motion sensors",
      "Embedded microcontroller",
      "GSM module",
      "RF transmitter/receiver",
      "Battery and power management circuitry"
    ],
    firmware: [
      "Embedded C/C++",
      "Motion analysis and fall detection algorithms",
      "Communication and alert handling logic"
    ]
  },
  scope: [
    "Sensor integration and calibration",
    "Firmware development for fall detection",
    "GSM and RF communication implementation",
    "Wearable device optimization",
    "Functional and field testing"
  ],
  outcome: [
    "Enabled rapid emergency response for fall incidents",
    "Reduced risk of delayed medical assistance",
    "Improved safety and confidence for users",
    "Delivered a dependable personal safety solution"
  ]
},
{
  id: 12,
  title: "Touch-less Temple Bell System",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Public Automation, Smart Infrastructure, Religious & Community Facilities",
  clientBackground: "This project was developed for temples and public religious places where large numbers of devotees interact with shared objects. The goal was to preserve traditional practices while improving hygiene and safety through touchless technology.",
  
  problemStatement: [
    "Traditional temple bells require physical contact, which can lead to hygiene concerns, especially in high-footfall public places. During health-sensitive periods, touching common surfaces increases the risk of infection transmission.",
    "The requirement was to design a contactless bell-ringing system that maintains the spiritual experience while eliminating the need for physical touch."
  ],
  solution: [
    "Oxymora developed a Touchless Temple Bell System using ultrasonic and IR sensor-based detection. When a devotee moves their hand near the sensing zone, the system automatically triggers the bell through an embedded control mechanism.",
    "The solution ensures accurate detection, minimal false triggering, and seamless integration with existing bell setups."
  ],
  features: [
    "Touchless hand detection using ultrasonic and IR sensors",
    "Automatic bell activation without physical contact",
    "Hygienic and safe operation",
    "Fast response and reliable sensing",
    "Easy integration with existing temple infrastructure"
  ],
  technologies: {
    hardware: [
      "Ultrasonic sensors",
      "IR sensors",
      "Embedded microcontroller",
      "Actuation mechanism for bell triggering",
      "Power supply and protection circuitry"
    ],
    firmware: [
      "Embedded C/C++",
      "Sensor fusion and detection logic",
      "Actuator control algorithms"
    ]
  },
  scope: [
      "System design and sensor selection",
      "Embedded firmware development",
      "Sensor calibration and false-trigger prevention",
      "Mechanical integration with bell mechanism",
      "On-site testing and deployment support"
  ],
  outcome: [
      "Improved hygiene in public religious places",
      "Maintained traditional bell-ringing experience",
      "Reduced physical contact in high-footfall areas",
      "Demonstrated practical use of touchless automation"
  ]
},
{
  id: 13,
  title: "Distance & Area Calculator Device",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Surveying, Land Measurement, Smart Measurement Systems, IoT & Analytics",
  clientBackground: "This project was developed for land surveyors, agriculture professionals, infrastructure planners, and government agencies that require accurate and automated land area measurement without complex manual calculations.",
  
  problemStatement: [
    "Traditional land measurement methods are time-consuming, error-prone, and often require skilled manpower. Manual calculation of area from field measurements leads to inaccuracies, especially for irregular geometric shapes.",
    "The requirement was to develop a portable, automated device capable of capturing location data directly from the field and calculating distance and area accurately using cloud intelligence."
  ],
  solution: [
    "Oxymora designed a Distance and Area Calculator Device that captures latitude and longitude data using GPS technology. Users mark boundary points by pressing a button, and the collected data is transmitted to the cloud via GSM/GPRS.",
    "Using AI & ML algorithms on the cloud, the system calculates distances and the total area of irregular geometric shapes and provides accurate results through a digital interface."
  ],
  features: [
    "GPS-based latitude and longitude acquisition",
    "Button-based point marking for field use",
    "GSM/GPRS-based data transmission",
    "Cloud-based distance and area calculation",
    "AI/ML algorithms for geometric analysis",
    "Supports irregular land shapes"
  ],
  technologies: {
    hardware: [
    "GPS module",
    "Embedded microcontroller",
    "User input interface (buttons)",
    "Power management circuitry"
    ],
    firmware: [
    "Embedded C/C++",
    "GPS data processing logic",
    "Data packet formation and transmission"
    ],
    communication: [
    "GSM + GPRS connectivity",
    "Cloud platform for data processing",
    "AI & ML algorithms for area calculation"
    ]
  },
  scope: [
    "Device architecture and hardware design",
    "GPS integration and accuracy optimization",
    "Firmware development for data capture",
    "Cloud algorithm development for area computation",
    "End-to-end system testing and validation"
  ],
  outcome: [
    "Automated and accurate land area calculation",
    "Reduced dependency on manual surveying methods",
    "Improved speed and efficiency for field measurements",
    "Enabled data-driven planning and reporting"
  ]
},
{
  id: 14,
  title: "Aerodynamic Wind Tunnel",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Education, Research & Development, Aeronautical & Mechanical Engineering",
  clientBackground: "This project was developed for engineering colleges, research laboratories, and innovation centers that require a practical system to demonstrate and study aerodynamic principles in a controlled environment.",

  problemStatement: [
    "Aerodynamic concepts such as airflow behavior, drag, lift, and angle of attack are difficult to understand through theory alone. Most educational setups lack a compact and integrated platform that can visually demonstrate these principles in real time.",
    "The requirement was to build a single, electronics-driven system capable of demonstrating multiple aerodynamic concepts clearly and safely."
  ],
  solution: [
    "Oxymora designed an Aerodynamic Based Wind Tunnel that integrates multiple electronic and mechanical modules into one system. The setup allows controlled airflow using fan speed control, fog generation for airflow visualization, and an adjustable angle variation module to simulate different aerodynamic conditions.",
    "All modules are synchronized using embedded control logic, allowing users to observe real-time aerodynamic behavior under varying parameters."
  ],
  features: [
    "Variable fan speed control for airflow regulation",
    "Fog generation module for visualizing airflow patterns",
    "Angle variation mechanism to simulate angle of attack",
    "Centralized electronic control of all subsystems",
    "Safe and compact design for lab and classroom use"
  ],
  technologies: {
    hardware: [
      "High-speed fans with electronic speed controllers",
      "Fog generation module",
      "Angle variation and mechanical adjustment system",
      "Embedded microcontroller",
      "Power electronics and protection circuitry"
    ],
    firmware: [
      "Embedded C/C++",
      "Motor speed control algorithms",
      "Synchronized module control logic"
    ]
  },
  scope: [
      "System architecture and modular design",
      "Electronic control system development",
      "Motor and fog module integration",
      "Firmware development for coordinated control",
      "Testing and calibration for safe operation"
  ],
  outcome: [
      "Simplified learning of complex aerodynamic concepts",
      "Enabled hands-on experimentation for students",
      "Provided a single-platform demonstration system",
      "Enhanced practical understanding in engineering education"
  ]
},
{
  id: 15,
  title: "Real-Time Weather Data Logger",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Environmental Monitoring, Smart Agriculture, Smart Cities, IoT",
  clientBackground: "This project was developed for agriculture operators, research organizations, weather monitoring agencies, and smart city deployments that require continuous and accurate environmental data from remote locations.",
  
  problemStatement: [
   "Manual weather data collection and isolated weather stations do not provide real-time visibility or centralized access. Lack of timely data affects planning, agriculture decisions, and environmental analysis.",
   "The requirement was to design an automated, real-time weather data logging system capable of collecting multiple environmental parameters and transmitting them reliably to a cloud platform."
  ],
  solution: [
    "Oxymora developed a Real-Time Weather Data Logger using GSM, GPRS, and GPS technologies. The system collects data from multiple analog sensors such as temperature, humidity, and pressure, geo-tags the data using GPS, and transmits it to an IoT-enabled cloud using the MQTT protocol.",
    "The cloud dashboard allows users to visualize, analyze, and store weather data in real time."
  ],
  features: [
    "Real-time monitoring of multiple weather parameters",
    "GSM/GPRS-based data transmission",
    "GPS-based location tagging",
    "MQTT protocol for reliable IoT communication",
    "Cloud dashboard for data visualization and analytics",
    "Suitable for remote and unattended locations"
  ],
  technologies: {
    hardware: [
    "Temperature, humidity, pressure, and environmental sensors",
    "Embedded microcontroller",
    "GSM/GPRS module",
    "GPS module",
    "Power management circuitry"
    ],
    firmware: [
    "Embedded C/C++",
    "Sensor data acquisition and calibration",
    "Communication stack for GSM/GPRS and MQTT"
    ],
    communication: [
      "GSM + GPRS connectivity",
      "MQTT protocol",
      "IoT cloud platform and dashboard"
    ]
  },
  scope: [
    "Embedded hardware and system design",
    "Sensor integration and accuracy calibration",
    "Firmware development for data logging",
    "Cloud integration and dashboard setup",
    "Field deployment and validation testing"
  ],
  outcome: [
    "Enabled continuous and remote weather monitoring",
    "Improved data accuracy and availability",
    "Supported data-driven decisions in agriculture and planning",
    "Delivered a scalable IoT-based environmental monitoring solution " 
  ]
},
{
  id: 4,
  title: "Light Dependent Smart Switch System",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Home Automation, Energy Management, Industrial Utilities",
  clientBackground: "This project was developed for residential buildings, commercial spaces, and industrial facilities seeking automatic control of lighting and electrical loads to reduce energy consumption and manual effort.",
  
  problemStatement: [
   "Manual operation of lighting and electrical loads often leads to unnecessary energy wastage, especially during day–night transitions. In many installations, there is a need for a simple, reliable, and automatic switching system that works with both AC and DC loads without complex infrastructure.",

   ],
  solution: [
    "Oxymora designed a Light Dependent Smart Switch System that uses an LDR (Light Dependent Resistor) to detect ambient light intensity. Based on light conditions, the embedded controller automatically switches electrical loads ON or OFF using relay-based control.",
    "The system is designed for reliability, low maintenance, and compatibility with both AC and DC applications."
  ],
  features: [
    "Automatic day and night detection",
    "Supports both AC and DC electrical loads",
    "Reliable relay-based switching",
    "Simple and robust embedded design",
    "Low power consumption",
    "Minimal manual intervention"
  ],
  technologies: {
    hardware: [
      "LDR (Light Dependent Resistor) sensor",
      "Embedded microcontroller",
      "Relay modules for AC/DC switching",
      "Power supply and protection circuitry"
    ],
    firmware: [
      "Embedded C",
      "Light threshold detection logic",
      "Switching control and debounce handling"
    ]
  },
  scope: [
      "Circuit design and component selection",
      "Embedded firmware development",
      "Threshold tuning for different lighting conditions",
      "Electrical load testing (AC and DC)",
      "Reliability and endurance validation"
  ],
  outcome: [
      "Reduced energy consumption through automation",
      "Eliminated human dependency for routine switching",
      "Improved operational efficiency in lighting systems",
      "Delivered a cost-effective and scalable automation solution"
  ]
},
{
  id: 17,
  title: " IoT Based Customised RFID Attendance System",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Enterprise Automation, Smart Offices, Educational Institutions, IoT",
  clientBackground: "This project was developed for organizations, offices, factories, and educational institutions that require accurate, real-time attendance tracking and centralized record management with minimal manual effort.",
  
  problemStatement: [
   "Traditional attendance systems are often manual or standalone, leading to errors, data duplication, and lack of real-time visibility. Organizations required a customizable, IoT-enabled attendance system that could integrate with dashboards and operate reliably across multiple locations.",

  ],
  solution: [
   "Oxymora designed an IoT-Based Customised RFID Attendance System that uses RFID cards/tags for user identification. Attendance data is captured in real time and transmitted to a centralized cloud dashboard using GSM and Wi-Fi connectivity.",
   "The system is fully customisable based on organisational requirements, supporting role-based access, reporting, and scalability."
  ],
  features: [
    "RFID-based user identification",
    "Real-time attendance logging",
    "GSM and Wi-Fi based connectivity",
    "Centralized cloud dashboard",
    "Customizable attendance rules and reports",
    "Scalable for multi-location deployment"
  ],
  technologies: {
    hardware: [
      "RFID reader and tags/cards",
      "Embedded microcontroller",
      "GSM module",
      "Wi-Fi module",
      "Power management circuitry"
    ],
    firmware: [
      "Embedded C/C++",
      "RFID data handling and validation",
      "Communication and data packet management"
    ],
    communication: [
      "GSM and Wi-Fi connectivity",
      "Cloud-based IoT dashboard",
      "Secure data storage and reporting"
    ]
  },
  scope: [
      "System architecture and hardware design",
      "RFID integration and access logic",
      "Firmware development for data handling",
      "Cloud dashboard and backend integration",
      "Deployment and operational testing"
  ],
  outcome: [
    "Improved accuracy of attendance records",
    "Eliminated manual attendance errors",
    "Enabled real-time monitoring and reporting",
    "Simplified attendance management for organisations"
  ]
},
{
  id: 18,
  title: "EV Speed Controller",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Electric Vehicles, Automotive Electronics, Power Electronics",
  clientBackground: "This project was developed for electric vehicle manufacturers and EV retrofit solutions requiring reliable and efficient motor speed control systems for two-wheelers, three-wheelers, and small EV platforms.",
  
  problemStatement: [
    `Electric vehicles require precise speed control, smooth acceleration, and efficient power usage. Conventional controllers often suffer from poor throttle response, inefficiency, and overheating.
The requirement was to design a robust BLDC motor speed controller that provides smooth throttle-based control and reliable performance.`
  ],
  solution: [
    `Oxymora designed an EV Speed Controller (Electric Vehicle) using BLDC motor drive technology. The controller processes throttle input and regulates motor speed efficiently using power electronics and embedded control logic, ensuring smooth acceleration and optimal energy usage.`
  ],
  features: [
    "Throttle-based speed control",
    "Smooth acceleration and deceleration",
    "Efficient BLDC motor driving",
    "Reliable thermal and power management",
    "Compact and automotive-ready design"
  ],
  technologies: {
    hardware: [
 "BLDC motor driver", "power MOSFETs", "throttle interface"
    ],
    firmware: [
      " Embedded motor control algorithms"
    ]
  },
  outcome: [
    "Improved EV performance and efficiency",
    "Smooth driving experience",
    "Reliable speed control for EV applications"
  ]
},



    
{
  id: 19,
  title: "RF-based Security Device Controller (Single Channel)",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Security Systems, Wireless Control, Access Control",
  clientBackground: "Developed for residential, commercial, and industrial security applications requiring simple and reliable wireless locking or control systems.",
  
  problemStatement: [
    "Wired security systems are complex and costly to install. A wireless, cost-effective alternative was required for basic security control."
  ],
  solution: [
    "Oxymora developed a 433 MHz RF-based security controller using a multi-addressable transmitter–receiver system to control locks or devices wirelessly."
  ],
  features: [
    "Wireless RF-based operation",
    "Multi-addressable remote control",
    "Reliable and low-latency switching"
  ],
  technologies: {
    hardware: [
    "RF 433 MHz modules", "embedded controller"
    ],
    firmware: [
        "RF decoding and control logic"
    ]
  },

  outcome: [
    "Simple and affordable wireless security solution",
   "Reduced wiring and installation cost"
  ]
},
{
  id: 4,
  title: "Smart 3-Phase Motor Controller",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Industrial Automation, Agriculture, Energy Management",
  clientBackground: "Designed for industrial and agricultural users operating 3-phase motors who require remote control and voltage monitoring.",
  
  problemStatement: [
    "Manual motor operation and lack of voltage monitoring often lead to motor damage and downtime. Remote and automated control was required."
  ],
  solution: [
    "Oxymora designed a GSM-based Smart 3-Phase Motor Controller that allows motor ON/OFF control via missed calls and continuously monitors input voltage (220V–420V)."
  ],
  features: [
    "Missed-call based remote control",
    "3-phase voltage monitoring",
    "Power fault alerts via GSM"
  ],
  technologies: {
    hardware: [
      "Voltage sensors", "embedded controller"
    ],
    communication: ["GSM"]
  },

  outcome: [
    "Reduced motor failure",
    "Enabled remote operation and monitoring"
  ]
},
{
  id: 21,
  title: "IR Remote Controller Switch",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Home Automation, Consumer Electronics",
  clientBackground: "Developed for low-cost home automation solutions.",
  
  problemStatement: [
    "Users needed a simple way to control appliances remotely without complex infrastructure."
  ],
  solution: [
    "Oxymora built an IR-based remote controller switch capable of controlling appliances from 10–15 feet distance."
  ],
  features: [
    "IR-based wireless control",
    "Simple and cost-effective design"
  ],
  technologies: {
    hardware: [
      "IR receiver", "embedded controller"
    ]
  },
  outcome: [
    "Enabled basic home automation",
    "Low-cost consumer solution"
  ]
},
{
  id: 22,
  title: "2G Based GPS Tracking Device",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Fleet Tracking, Asset Tracking, Logistics",
  clientBackground: "Developed for cost-sensitive fleet and asset tracking applications.",
  
  problemStatement: [
    "A low-cost GPS tracking solution was required where 4G was not necessary."
  ],
  solution: [
    "Oxymora developed a 2G-based GPS tracking device that transmits real-time location data to a server."
  ],
  features: [
    "Real-time GPS tracking",
    "Low operational cost",
    "Compact embedded design"
  ],
  technologies: {
    hardware: [
      " GPS module", "GSM 2G module"
    ],
    firmware: [
      "Location data handling"
    ]
  },
  outcome: [
    "Affordable tracking solution",
    "Reliable location monitoring"
  ]
},
{
  id: 23,
  title: "4G Based GPS Tracking Device",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Telematics, Fleet Management",
  clientBackground: "Built for advanced fleet management and real-time analytics platforms.",
  
  problemStatement: [
    "2G networks have limitations in speed and future availability. A high-speed alternative was needed."
  ],
  solution: [
    "Oxymora designed a 4G LTE-based GPS tracking device for high-speed, real-time data transmission."
  ],
  features: [
    "4G LTE connectivity",
    "Low-latency data transmission",
    "Suitable for modern telematics platforms"
  ],
  technologies: {
    hardware: [
      "4G LTE module", "GPS"
    ],
    firmware: [
      "IoT backend integration"
    ],
    communication : [
      "IoT backend integration"
    ]
  },
  outcome: [
  "High-reliability real-time tracking",
  "Future-ready telematics solution"
  ]
},
{
  id: 24,
  title: "2G Based OBD Device",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Automotive Telematics, Vehicle Diagnostics",
  clientBackground: "Designed for fleet operators needing vehicle health and tracking data.",
  
  problemStatement: [
    "Fleet owners needed access to vehicle diagnostics without manual inspection."
  ],
  solution: [
   "Oxymora developed a 2G-based OBD device that plugs into the vehicle OBD port to read diagnostics and transmit data remotely."
  ],
  features: [
    "OBD-II data acquisition",
    "Vehicle health monitoring",
    "Remote data transmission"
  ],
  technologies: {
    hardware: [
      "OBD-II interface", "GSM 2G"
    ],
    firmware: [
      "Vehicle protocol handling"
    ]
  },
  outcome: [
    "Improved fleet visibility",
    "Preventive maintenance enablement"
  ]
},
{
  id: 25,
  title: " Voice Box for Trucks",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Commercial Vehicles, Driver Assistance Systems",
  clientBackground: "Developed for logistics and transport companies to improve driver communication.",
  
  problemStatement: [
    "Drivers often miss critical alerts or instructions during operation."
  ],
  solution: [
    "Oxymora developed two voice box variants: One-way voice alert system,Two-way voice communication system"
  ],
  features: [
    "Clear audio alerts",
    "Two-way driver communication",
    "Rugged vehicle-grade design"
  ],
  technologies: {
    hardware: [
      "Audio modules", "GSM"
    ],
    firmware: [
      "Voice processing logic"
    ]
  },
  outcome: [
    "Improved driver awareness and safety",
    "Better fleet communication"
  ]
},
{
  id: 26,
  title: "Automated Army Area Monitoring System",
  image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
  industry: "Defense, Secure Communication, Surveillance",
  clientBackground: "Developed for secured army and defense zones requiring long-range monitoring.",
  
  problemStatement: [
    "Traditional wired monitoring systems are difficult to deploy in large or remote defense areas."
  ],
  solution: [
    "Oxymora implemented a LoRa-based automated monitoring system for long-range, low-power communication in restricted zones."
  ],
  features: [
    "Long-range LoRa communication",
    "Secure and low-power operation",
    "Scalable monitoring architecture"
  ],
  technologies: {
    hardware: [
      "LoRa modules", "embedded controller"
    ],
    firmware: [
      "Secure communication protocols"
    ]
  },
  outcome: [
    "Reliable monitoring of sensitive areas",
    "Reduced infrastructure complexity"
  ]
}

];


const Project2 = () => {
//   const data = {
//   id: 1,
//   title: "Project 1: Sound & Magnetic Field Detector (Pinpoint)",
//   image: "https://cspv.in/hpotpl/oxymora-web/apis/product_image/1766144981_Unconfirmed 633430.crdownload",
//   industry: "Defence Technology, Surveillance, Security & Monitoring Systems",
//   clientBackground: "This project was developed as a specialised detection system aimed at identifying and localising hidden electronic devices, unauthorised equipment, or abnormal activity in sensitive environments. The solution is suitable for defence agencies, security teams, research organisations, and critical infrastructure operators.",
//   problemStatement: [
//     "In high-security and sensitive zones, detecting covert electronic devices, abnormal sound signatures, or magnetic field disturbances is a major challenge. Traditional inspection methods are time-consuming, intrusive, and often inaccurate, especially in environments with high electromagnetic noise.",
//     "The requirement was to build a compact, portable system capable of accurately detecting sound patterns and magnetic field variations, and providing precise indications for pinpointing the source."
//   ],
//   solution: [
//     "Oxymora designed and developed Pinpoint, a Sound & Magnetic Field Detection system that integrates advanced sensors, signal processing algorithms, and embedded intelligence.",
//     "The system continuously monitors environmental sound and magnetic field data, filters background noise, and identifies anomalies that may indicate the presence of electronic devices, concealed objects, or suspicious activity."
//   ],
//   features: [
//     "High-sensitivity sound detection for abnormal acoustic patterns",
//     "Magnetic field sensing for electronic components and metallic objects",
//     "Real-time signal processing and noise filtering",
//     "Portable and compact embedded design",
//     "Visual and alert-based indication",
//     "Configurable sensitivity for different environments"
//   ],
//   technologies: {
//     hardware: ["High-sensitivity microphones", "Magnetic field sensors (Hall-effect / magnetometer)", "Microcontroller-based embedded system", "Custom power management circuitry"],
//     firmware: ["Embedded C / C++", "Sensor drivers and calibration algorithms", "Signal processing and filtering logic", "Real-time event detection"],
//     communication: ["On-device indicators (LED / buzzer / display)", "Optional data logging and external interface support"]
//   },
//   scope: [
//     "System architecture and hardware design",
//     "Sensor selection, integration, and calibration",
//     "Firmware development for signal processing",
//     "Prototype development and testing",
//     "Environmental validation and accuracy tuning"
//   ],
//   outcome: [
//     "Faster and more reliable detection of hidden electronic sources",
//     "Reduced manual inspection effort",
//     "Improved accuracy and response time",
//     "Scalable platform for future enhancements"
//   ]
// }; // You can also pass this as a prop

  const location = useParams();
  const titledata = decryptData(location.name);
  const url = decryptData(location.url);
  // console.log(decryptData(location.name));

  const data = projectData.find(id => id.title.includes(titledata));
  console.log(data,url,"hii");

  return (
    <section className="case-study-wrapper">
      {data !== undefined ? 
      <div className="case-study-container">
        <h1>{data.title}</h1>

        <div>
          <img
            // // src={imgs}
            // src={`https://cspv.in/hpotpl/oxymora-web/apis/portfolio_images/${url}`}
            src={`${url}`}
            alt="App Mockup"
            height={"500"}
            style={{marginBottom:'10px'}}
          />
        </div>

        <div className="case-study-section">
          <h2>Industry / Domain</h2>
          <p>{data.industry}</p>
        </div>

        <div className="case-study-section">
          <h2>Client Background</h2>
          <p>{data.clientBackground}</p>
        </div>

        <div className="case-study-section">
          <h2>Problem Statement</h2>
          {data?.problemStatement.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="case-study-section">
          <h2>Oxymora Solution</h2>
          {data?.solution.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="case-study-section">
          <h2>Key Features & Capabilities</h2>
          <ul>
            {data?.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="case-study-section">
          <h2>Technologies Used</h2>

          {data?.technologies?.hardware?.length > 0 && (<>
          <h3>Hardware</h3>
          <ul>
            {data?.technologies?.hardware.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </>)}

          {data?.technologies?.firmware?.length > 0 && (
            <>
              <h3>Firmware</h3>
              <ul>
                {data.technologies.firmware.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {data?.technologies?.communication?.lenght > 0 && (
            <>
            <h3>Communication / Interface</h3>
          <ul>
            {data?.technologies?.communication.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
            </>
        )}
        </div>  

        {data?.scope?.lenght > 0 && 
        (<div className="case-study-section">
          <h2>Development Scope</h2>
          <ul>
            {data?.scope.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>)}

        <div className="case-study-section">
          <h2>Outcome / Impact</h2>
          <ul>
            {data?.outcome.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      :
      <h1 className="text-white " style={{ display : "flex", alignItems : "center", justifyContent : "center"}}>No Data</h1>
    }
    </section>
  );
};

export default Project2;
