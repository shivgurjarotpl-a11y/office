import React from "react";
import "../css/ProductTypeSelector.css";
import { Server  , Gauge  , Refrigerator , Home   } from "lucide-react";

const ProductTypeSelector = ({ active, setActive }) => {
  const categories = [
    { id: "Data Loggers", label: "Data Loggers ", icon: <Server   size={28} /> },
    { id: "Controllers", label: "Controllers ", icon: <Gauge   size={28} /> },
    { id: "Vending Machines ", label: "Vending Machines ", icon: <Refrigerator  size={28} /> },
    { id: "Home Automations", label: "Home Automations", icon: <Home   size={28} /> },
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
