import React from "react";
import "../css/ProductTypeSelector.css";
import { Globe, Smartphone, Monitor, LayoutDashboard } from "lucide-react";

const ProductTypeSelector = ({ active, setActive }) => {
  const categories = [
    { id: "DataLoggers ", label: "Data Loggers ", icon: <Globe size={28} /> },
    { id: "Controllers ", label: "Controllers ", icon: <Smartphone size={28} /> },
    { id: "VendingMachines ", label: "Vending Machines ", icon: <Monitor size={28} /> },
    { id: "HomeAutomations", label: "Home Automations", icon: <LayoutDashboard size={28} /> },
  ];

  return (
    <div className="pt-selector-grid">
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={`pt-selector-card ${active === cat.id ? "pt-active" : ""}`}
        >
          <div className="pt-selector-icon">{cat.icon}</div>
          <span className="pt-selector-label">{cat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductTypeSelector;
