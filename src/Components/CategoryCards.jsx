import React from "react";
import CategoryCard from "./CategoryCard";
import "../css/CategoryCards.css";

const CategoryCards = ({ setSelectedCategory }) => {
  const sections = [
    {
      title: "Office Space",
      cards: [
        { name: "Meeting Rooms", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Workspaces", image: "https://cspv.in/image/oxymora_imgs/image/img2.jpg" },
        { name: "Recreation Area", image: "https://cspv.in/image/oxymora_imgs/image/img3.jpg" },
        { name: "Events & Functions", image: "https://cspv.in/image/oxymora_imgs/image/img5.jpg" },
      ],
    },
    {
      title: "Team at Work",
      cards: [
        { name: "Developers", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Designers", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Marketing", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "HR Team", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
      ],
    },
    {
      title: "Events & Celebrations",
      cards: [
        { name: "Annual Party", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Festivals", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Team Outings", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Award Ceremonies", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
      ],
    },
    {
      title: "Company Culture",
      cards: [
        { name: "Work Environment", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Team Bonding", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Innovation", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Learning", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
      ],
    },
    {
      title: "Behind the Scenes",
      cards: [
        { name: "Setup & Prep", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Office Life", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Events Prep", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
        { name: "Daily Work", image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg" },
      ],
    },
  ];

  return (
    <div className="category-section-container">
      {sections.map((section, idx) => (
        <div key={idx} className="category-section">
          <h2 className="category-section-heading">{section.title}</h2>
          <div className="category-cards-grid">
            {section.cards.map((card, i) => (
              <CategoryCard key={i} {...card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
