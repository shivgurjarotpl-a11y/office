import React from "react";
import ProductCard from "../Components/DataLoggerCard";

const Controllers = () => { 
  const controllerProducts = [
    {
      title: "Industrial Controller CX-400",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      features: [
        "Supports Modbus RTU / Modbus TCP",
        "Digital & Analog I/O support",
        "Real-time control logic execution",
        "Built-in scheduling and automation",
        "Remote control over MQTT/HTTP APIs",
        "Ideal for machines & industrial automation",
      ],
    },

    {
      title: "Smart Control Unit SCU-250",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      description:
        "Edge-based controller with advanced rule engine, GSM connectivity, and cloud sync.",
    },

    {
      title: "Programmable Automation Controller PAC-X7",
      image: "https://cspv.in/image/oxymora_imgs/image/oxymora-fusion1.png",
      features: [
        "High speed 32-bit processor",
        "Multiple protocol support (BACnet, CAN, MQTT)",
        "Advanced PLC-like programming",
        "Perfect for industrial robotics & automation",
      ],
    },
  ];

  return (
    <>
      {controllerProducts.map((product, index) => (
        <ProductCard key={index} index={index} {...product} />
      ))}
    </>
  );
};

export default Controllers;
