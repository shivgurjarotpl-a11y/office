import React from "react";
import DataLoggerCard from "../Components/DataLoggerCard";

const DataLoggers = () => {
  const products = [
    {
      id: 1,
      title: "WiFi IoT Gateway (Model: OX-WiFi-100)",
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      title: "BLE IoT Gateway (Model: OX-BLE-200) ",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Data Input: UART / I2C / Analog / Digital I/O ",
        "Wireless Output: Bluetooth Low Energy (BLE 4.2/5.0)",
        "Low power consumption ",
        "Integrates with mobile apps or BLE Mesh networks ",
        "Quick pairing with smartphones/tablets",
        "Suitable for proximity-based sensing or configuration ",
        "Useful in consumer electronics and smart devices "
      ],
      reverse: true,
    },
    {
      id: 3,
      title: "GSM/GPRS Data Logger (Model: OX-GSM-300)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Data Input: RS485 / RS232 / Analog / Digital",
        "Wireless Output: GSM/GPRS (2G/3G/4G fallback)",
        "Works in remote areas with cellular connectivity",
        "Supports SIM-based secure communication",
        "Pushes data to cloud via MQTT/HTTP",
        "Battery backup for power failure resilience ",
        "Best for agriculture, utilities, remote infrastructure"
      ],
      reverse: false,
    },
    {
      id: 4,
      title: "NB-IoT/4G LTE Device (Model: OX-NB-400)",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Data Input: Modbus / UART / SPI / I2C / Analog / Digital ",
        "Wireless Output:  NB-IoT / CAT-M1 / 4G LTE ",
        "Low bandwidth, low power wide-area connectivity ",
        "Deep coverage for underground/basement deployment",
        "Compact and optimised for smart city infrastructure",
        "Perfect for smart metering, waste management, street lighting ",
      ],
      reverse: true,
    },
    {
      id: 5,
      title: "LoRaWAN Smart Node (Model: OX-LoRa-500) ",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Data Input: RS485 / Modbus / Analog / Digital",
        "Wireless Output: LoRaWAN (EU868 / IN865 / US915) ",
        "Ultra-long-range (5-10 km)",
        "Extremely low power – battery powered for years",
        "Compatible with standard LoRaWAN gateways",
        " Ideal for agriculture, environmental monitoring, utilities ",
      ],
      reverse: false,
    },
    {
  id: 6,
  title: "Industrial Data Logger (Model: OX-LOG-100)",
  image: "https://plus.unsplash.com/premium_photo-1661782505582-07ea68e3e760?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Input Interface: RS485 / RS232 / Modbus RTU / Analog / Digital I/O",
    "Output Interface: USB / Ethernet / RS485",
    "Logs and stores sensor/machine data locally",
    "High-frequency sampling support",
    "Internal memory + optional SD card",
    "Real-time clock (RTC) with time-stamped logs",
    "Ideal for audit trails, machine diagnostics, and compliance"
  ],
  reverse: true,
},
{
  id: 7,
  title: "Protocol Converter (Model: OX-PROT-200)",
  image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=806&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Input Interface: Modbus RTU / CAN / RS485 / RS232",
    "Output Interface: RS232 / RS485 / CAN",
    "Converts one protocol/interface to another",
    "Bridges incompatible machine communication standards",
    "Configurable baud rate and message mapping",
    "Useful in legacy machine integrations and cross-protocol communication"
  ],
  reverse: false,
},
{
  id: 8,
  title: "Edge Controller (Model: OX-CTRL-300)",
  image: "https://plus.unsplash.com/premium_photo-1661270474108-2c2e60c4ff15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Input Interface: Analog / Digital / Modbus / CAN / I2C / SPI",
    "Output Interface: RS485 / Ethernet / USB / Modbus TCP",
    "Onboard microcontroller for edge processing",
    "Local decision-making (thresholds, triggers, logic)",
    "Acts as a mini-PLC for low-cost automation",
    "Compatible with SCADA systems",
    "Ideal for closed-loop control or data pre-processing"
  ],
  reverse: true,
},
{
  id: 9,
  title: "CAN Bus Logger (Model: OX-CAN-400)",
  image: "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?q=80&w=951&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Input Interface: CAN 2.0 / J1939",
    "Output Interface: USB / RS232 / Ethernet",
    "Logs CAN messages (raw or filtered)",
    "Diagnostic capabilities for vehicle/fleet equipment",
    "High-resolution timestamped data",
    "Optional integration with analysis tools or dashboards"
  ],
  reverse: false,
},
{
  id: 10,
  title: "K-Line / KWP / UDS Diagnostic Tool (Model: OX-DIAG-500)",
  image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Input Interface: K-Line / KWP-2000 / UDS over ISO 9141",
    "Output Interface: USB / RS232",
    "Diagnostics for legacy vehicle/machine protocols",
    "Reads and logs Diagnostic Trouble Codes (DTCs)",
    "Interfaces with laptops or embedded systems",
    "For automotive and industrial service applications"
  ],
  reverse: true,
},
{
  id: 11,
  title: "Wired Sensor Hub (Model: OX-HUB-600)",
  image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Input Interface: Analog (0-10V, 4-20mA), Digital, Thermocouples, RTDs",
    "Output Interface: Modbus RTU / RS485",
    "Central hub for multiple wired sensors",
    "Provides power to external sensors",
    "Compact DIN-rail mountable enclosure",
    "Supports scalable wired daisy-chain sensor nodes"
  ],
  reverse: false,
},
{
  id: 12,
  title: "LoRa-Based Smart Sensor Node (Model: OX-LoRa-100)",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Wireless Input: Integrated sensors (temperature, humidity, soil moisture, motion) or BLE sensor interface",
    "Wireless Output: LoRaWAN (EU868 / IN865 / US915)",
    "Ultra-long range (up to 10 km line-of-sight)",
    "Ultra-low power for multi-year battery life",
    "Periodic or event-based data transmission",
    "Configurable via OTA or local BLE",
    "Ideal for agriculture, smart cities, asset monitoring"
  ],
  reverse: true,
},
{
  id: 13,
  title: "BLE to WiFi Bridge (Model: OX-BLEWiFi-200)",
  image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Wireless Input: BLE (from BLE-enabled wearables or nodes)",
    "Wireless Output: WiFi (2.4 GHz) to cloud/server",
    "Acts as a BLE sensor aggregator",
    "Pushes data via MQTT/HTTP to the cloud",
    "Used in health tech, indoor tracking, and smart homes",
    "Dual power mode: USB + battery"
  ],
  reverse: false,
},
{
  id: 14,
  title: "BLE Mesh Node (Model: OX-Mesh-300)",
  image: "https://plus.unsplash.com/premium_photo-1661963113301-4398abb2246c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Wireless Input: BLE 5.0 from sensors or mesh nodes",
    "Wireless Output: BLE 5.0 mesh communication",
    "Supports mesh routing and relaying",
    "Can trigger actions based on sensor data",
    "Ideal for building automation and large indoor deployments",
    "Long battery life with OTA update support"
  ],
  reverse: true,
},
{
  id: 15,
  title: "WiFi Sensor Node (Model: OX-WiFi-400)",
  image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Wireless Input: Integrated sensors or BLE module",
    "Wireless Output: WiFi (802.11 b/g/n)",
    "Directly connects to internet or local server",
    "Configurable via browser or app",
    "Common in home automation, air quality monitoring, smart utility meters",
    "Optional battery or USB powered"
  ],
  reverse: false,
},
{
  id: 16,
  title: "GSM/GPRS Remote Sensor Node (Model: OX-GSM-500)",
  image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Wireless Input: BLE/Wireless sensors or onboard sensing (vibration, temperature, GPS)",
    "Wireless Output: GSM/GPRS (SIM-based)",
    "Operates in remote/no-WiFi regions",
    "Secure data transmission via MQTT/HTTP",
    "GPS integration for tracking",
    "Ideal for logistics, mobile assets, cold chain monitoring"
  ],
  reverse: true,
},
{
  id: 17,
  title: "NB-IoT Smart Tracker (Model: OX-NB-600)",
  image: "https://plus.unsplash.com/premium_photo-1661782518010-4bc9952da474?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Wireless Input: GPS, Accelerometer, BLE Sensors",
    "Wireless Output: NB-IoT / LTE-M",
    "Ultra-low power wide-area technology",
    "GPS + motion-triggered alerts",
    "Used in asset tracking, livestock monitoring, bike/scooter sharing",
    "Configurable frequency and geofencing alerts"
  ],
  reverse: false,
},
{
  id: 18,
  title: "Zigbee Wireless Sensor Node (Model: OX-Zig-700)",
  image: "https://plus.unsplash.com/premium_photo-1661371781504-7672ab0743e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Wireless Input: Onboard or external sensors (temperature, CO2, pressure)",
    "Wireless Output: Zigbee Mesh",
    "Seamless integration with Zigbee coordinators",
    "Self-healing mesh for building-wide deployment",
    "Ideal for energy management and smart lighting"
  ],
  reverse: true,
}


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
