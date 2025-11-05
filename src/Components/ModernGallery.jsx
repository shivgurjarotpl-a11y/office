// ModernGallery.jsx
import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "../css/ModernGallery.css";

const ModernGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const data = [
    {
      title: "Office Space",
      boxs: [
        { image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg", title: "Reception Area" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img2.jpg", title: "Workspace" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img3.jpg", title: "Conference Room" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img4.jpeg", title: "Breakout Zone" },
      ],
    },
    {
      title: "Team at Work",
      boxs: [
        { image: "https://cspv.in/image/oxymora_imgs/image/img5.jpg", title: "Brainstorming" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img6.jpg", title: "Daily Standup" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img7.jpg", title: "Pair Programming" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img8.jpg", title: "Client Meeting" },
      ],
    },
    {
      title: "Events & Celebrations",
      boxs: [
        { image: "https://cspv.in/image/oxymora_imgs/image/img1.jpg", title: "Birthday" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img2.jpg", title: "Diwali" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img3.jpg", title: "New Year" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img4.jpeg", title: "Women's Day" },
      ],
    },
    {
      title: "Company Culture",
      boxs: [
        { image: "https://cspv.in/image/oxymora_imgs/image/img9.jpg", title: "Team Lunch" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img10.jpg", title: "Fun Friday" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img11.jpg", title: "Workshop" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img12.jpg", title: "CSR Activity" },
      ],
    },
    {
      title: "Behind the Scenes",
      boxs: [
        { image: "https://cspv.in/image/oxymora_imgs/image/img13.jpg", title: "Setup" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img14.jpg", title: "Rehearsal" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img15.jpg", title: "Candid Moments" },
        { image: "https://cspv.in/image/oxymora_imgs/image/img8.jpg", title: "After Party" },
      ],
    },
  ];

  // Flatten all images for lightbox
  const allImages = data.flatMap(section =>
    section.boxs.map(box => ({ src: box.image, title: box.title }))
  );

  // Scroll animation
  useEffect(() => {
    const boxes = document.querySelectorAll(".gallery-box");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="modern-gallery-wrapper">
      {data.map((section, sIndex) => (
        <div key={sIndex} className="gallery-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="gallery-grid">
            {section.boxs.map((box, bIndex) => {
              const lightboxIndex = allImages.findIndex(
                img => img.src === box.image
              );
              return (
                <div
                  key={bIndex}
                  className="gallery-box"
                  onClick={() => {
                    setIndex(lightboxIndex);
                    setOpen(true);
                  }}
                >
                  <img src={box.image} alt={box.title} />
                  <div className="overlay">{box.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={allImages}
        plugins={[Captions, Zoom, Thumbnails]}
      />
    </div>
  );
};

export default ModernGallery;
