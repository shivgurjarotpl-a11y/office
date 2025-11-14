import React from "react";
import { Link } from "react-router-dom";
import "../css/HighBlogSection.css";

const cardsData = [
  {
    id: 1,
    title:
      "How to Select Microcontrollers for IoT Projects: Evaluating ESP32, STM32, nRF52, and RP2040 Platforms",
    excerpt:
      "Smartphones are handheld computing devices that connect to cellular networks, first introduced by IBM in 1994 .",
    author: "BY admin",
    date: "2023-10-01T10:00:00Z",
    imageUrl: "https://cspv.in/image/oxymora_imgs/image/mcc.jpg",
    slug: "future-web-development",
    tags: ["Controller"],
  },
  {
    id: 2,
    title:
      "Securing IoT: The Essential Role of ISO 27001 in Safeguarding Connected Devices, Networks, and Data Across Smart Systems",
    excerpt:
      "ISO 27001 provides a globally recognized framework for managing information security, helping IoT companies secure devices, networks, and data while ensuring compliance,.",
    author: "BY admin",
    date: "2023-09-15T14:30:00Z",
    imageUrl: "https://cspv.in/image/oxymora_imgs/image/sec.jpg",
    slug: "mastering-css-grid",
    tags: ["Smartwatches", "Uncategorized"],
  },
  {
    id: 3,
    title:
      "Apple’s Embedded Swift programming language supports ESP32-C6, Raspberry Pi RP2040, STM32F7, nRF52840",
    excerpt:
      "Apple has released a beta version of Embedded Swift that works with Espressif ESP32-C6 wireless RISC-V microcontroller and other popular platforms",
    author: "BY admin",
    date: "2023-08-20T09:15:00Z",
    imageUrl: "https://cspv.in/image/oxymora_imgs/image/app.jpg",
    slug: "javascript-best-practices",
    tags: ["Programming", "IoT"],
  },
];

const HighBlogSection = ({ limit = 3, loading = false }) => {
  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const handleCardClick = (slug) => {
    console.log(`Navigating to /blog/${slug}`);
  };

  return (
    <section className="homeblog-container" aria-label="Blog preview">
      <div className="homeblog-grid">
        {loading
          ? Array.from({ length: limit }).map((_, index) => (
              <article key={index} className="homeblog-card skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-excerpt"></div>
              </article>
            ))
          : cardsData.slice(0, limit).map((card) => (
              <article key={card.id} className="homeblog-card">
                <Link
                  to={`/blog/${card.slug}`}
                  aria-label={`Read full post: ${card.title}`}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="homeblog-card-image"
                    loading="lazy"
                  />

                  <header className="homeblog-card-header">
                    <h3 className="homeblog-card-title">{card.title}</h3>
                  </header>

                  <p className="homeblog-card-excerpt">{card.excerpt}</p>

                  <div className="homeblog-card-meta">
                    <span>{card.author}</span>
                    <time dateTime={card.date}>{formatDate(card.date)}</time>
                  </div>

                  <div className="homeblog-card-tags">
                    {card.tags.map((tag, i) => (
                      <span key={i} className="homeblog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="homeblog-read-more">Read more →</span>
                </Link>
              </article>
            ))}
      </div>

      <div className="homeblog-view-all">
        <Link to="/blog" className="homeblog-button">
          View All Posts
        </Link>
      </div>
    </section>
  );
};

export default HighBlogSection;
