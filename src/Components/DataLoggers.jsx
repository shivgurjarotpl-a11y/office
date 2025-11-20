import React from "react";
import DataLoggerCard from "../Components/DataLoggerCard";

const DataLoggers = () => {
  const products = [
    {
      id: 1,
      title: "WiFi IoT Gateway (Model: OX-WiFi-100)",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      features: [
        "Data Input: RS485 / RS232 / Modbus RTU / Analog / Digital",
        "Wireless Output: WiFi (2.4GHz)",
        "Supports multiple sensor interfaces",
        "Real-time data push via MQTT or HTTP",
        "Configurable via Web UI or mobile app",
        "Local buffering in case of network loss",
        "Ideal for indoor applications (factories, labs)"
      ],
      reverse: false,
    },
    {
      id: 2,
      title: "WiFi IoT Gateway (Model: OX-WiFi-100)",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      features: [
        "Data Input: RS485 / RS232 / Modbus RTU / Analog / Digital",
        "Wireless Output: WiFi (2.4GHz)",
        "Supports multiple sensor interfaces",
        "Real-time data push via MQTT or HTTP",
        "Configurable via Web UI or mobile app",
        "Local buffering in case of network loss",
        "Ideal for indoor applications (factories, labs)"
      ],
      reverse: true,
    },
    {
      id: 3,
      title: "WiFi IoT Gateway (Model: OX-WiFi-100)",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      features: [
        "Data Input: RS485 / RS232 / Modbus RTU / Analog / Digital",
        "Wireless Output: WiFi (2.4GHz)",
        "Supports multiple sensor interfaces",
        "Real-time data push via MQTT or HTTP",
        "Configurable via Web UI or mobile app",
        "Local buffering in case of network loss",
        "Ideal for indoor applications (factories, labs)"
      ],
      reverse: false,
    },
    {
      id: 4,
      title: "WiFi IoT Gateway (Model: OX-WiFi-100)",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      features: [
        "Data Input: RS485 / RS232 / Modbus RTU / Analog / Digital",
        "Wireless Output: WiFi (2.4GHz)",
        "Supports multiple sensor interfaces",
        "Real-time data push via MQTT or HTTP",
        "Configurable via Web UI or mobile app",
        "Local buffering in case of network loss",
        "Ideal for indoor applications (factories, labs)"
      ],
      reverse: true,
    },
    {
      id: 5,
      title: "WiFi IoT Gateway (Model: OX-WiFi-100)",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      features: [
        "Data Input: RS485 / RS232 / Modbus RTU / Analog / Digital",
        "Wireless Output: WiFi (2.4GHz)",
        "Supports multiple sensor interfaces",
        "Real-time data push via MQTT or HTTP",
        "Configurable via Web UI or mobile app",
        "Local buffering in case of network loss",
        "Ideal for indoor applications (factories, labs)"
      ],
      reverse: false,
    },
  ];

  return (
    <>
      {products.map((item) => (
        <DataLoggerCard key={item.id} {...item} />
      ))}
    </>
  );
};

export default DataLoggers;
