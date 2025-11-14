// import React from 'react';
// import "../css/BlogSection.css";

// const posts = [
//   {
//     title: 'How to Select Microcontrollers For IoT Projects',
//     meta: 'February 22, 2024 · oxymora',
//     excerpt: 'Selecting the right microcontroller (MCU) for your Internet of Things (IoT) project',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png',
//     featured: false,
//   },
//   {
//     title: 'Securing IoT: The Essential Role Of ISO 27001',
//     meta: 'February 22, 2024 · oxymora',
//     excerpt: 'ISO 27001 is an international standard that specifies a management system.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_2.png',
//     featured: false,
//   },
//   {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
//     meta: 'April 30, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_9.png',
//     featured: false,
//   },
//     {
//     title: 'Securing IoT: The Essential Role Of ISO 27001',
//     meta: 'February 22, 2024 · oxymora',
//     excerpt: 'ISO 27001 is an international standard that specifies a management system.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_5.png',
//     featured: false,
//   },
//      {
//     title: 'How to Select Microcontrollers For IoT Projects',
//     meta: 'February 22, 2024 · oxymora',
//     excerpt: 'Selecting the right microcontroller (MCU) for your Internet of Things (IoT) project',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_7.png',
//     featured: false,
//   },
//  {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
//     meta: 'April 30, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
//     featured: false,
//   },
//  {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6, Raspberry Pi RP2040, STM32F7, nRF52840 microcontrollers',
//     meta: 'February 22, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6 wireless RISC-V microcontroller, and the company also built a Matter sample based on ESP-IDF and ESP-Matter SDKs. ',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_10.png',
//     featured: true,
//   },
//   {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
//     meta: 'April 30, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
//     featured: false,
//   },
//   {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
//     meta: 'April 30, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
//     featured: false,
//   },
//   {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
//     meta: 'April 30, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
//     featured: false,
//   },
//   {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
//     meta: 'April 30, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
//     featured: false,
//   },
//    {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6, Raspberry Pi RP2040, STM32F7, nRF52840 microcontrollers',
//     meta: 'February 22, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6 wireless RISC-V microcontroller, and the company also built a Matter sample based on ESP-IDF and ESP-Matter SDKs. ',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_10.png',
//     featured: true,
//   },
//   {
//     title: 'Apple’s Embedded Swift programming language supports ESP32-C6,',
//     meta: 'April 30, 2024 · oxymora',
//     excerpt: 'Apple has released a beta version of Embedded Swift that notably works with Espressif ESP32-C6.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_11.png',
//     featured: false,
//   },
//     {
//     title: 'Securing IoT: The Essential Role Of ISO 27001',
//     meta: 'February 22, 2024 · oxymora',
//     excerpt: 'ISO 27001 is an international standard that specifies a management system.',
//     img: 'https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_5.png',
//     featured: false,
//   },
  
// ];

// function BlogSection() {
//   return (
//     <section className="blog-wrapper">
//       <div className="blog-container">
//         <p className="blog-label">Blogs</p>
//         <h2 className="blog-title">Insights from the Internet of Things.</h2>

//         <div className="blog-list">
//           {posts.map((post, idx) => (
//             <article
//               key={idx}
//               className={`blog-item${post.featured ? ' blog-item-featured' : ''}`}
//               style={{ ['--i']: idx }}
//             >
//               <div className="blog-thumb">
//                 <img src={post.img} alt={post.title} />
//               </div>

//               <div className="blog-content">
//                 <div className="blog-meta">{post.meta}</div>
//                 <h3 className="blog-heading">{post.title}</h3>
//                 <p className="blog-excerpt">{post.excerpt}</p>
//                 <a className="blog-link" href="#">Read more →</a>
//               </div>
//             </article>
//           ))}
//         </div>

//         <a className="blog-more-link" href="#">View  more articles →</a>
//       </div>
//     </section>
//   );
// }

// export default BlogSection;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/BlogSection.css";

const cardsData = [
  {
    id: 1,
    category: "AI & Tech",
    title: "How AI Is Transforming Modern Businesses",
    desc: "Explore how AI is automating workflows and decision-making.",
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
  },
  {
    id: 2,
    category: "AI & Tech",
    title: "Top Programming Languages of 2025",
    desc: "A breakdown of the most popular languages shaping the future.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    id: 3,
    category: "AI & Tech",
    title: "Protecting Your Digital Identity",
    desc: "Learn how to secure your online accounts with simple methods.",
    img: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
  },
  {
    id: 4,
    category: "AI & Tech",
    title: "Why Businesses Are Moving to the Cloud",
    desc: "Scalability, cost efficiency and speed explained.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },

  {
    id: 5,
    category: "Cloud",
    title: "AWS vs Azure vs Google Cloud",
    desc: "Which cloud platform is best for your business?",
    img: "https://images.unsplash.com/photo-1762715461167-69eaae9758d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    category: "Cloud",
    title: "Cloud Security Essentials",
    desc: "Learn why cloud security is more important than ever.",
    img: "https://images.unsplash.com/photo-1762205907900-1e651d68afd2?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    category: "Cloud",
    title: "Future of Serverless Computing",
    desc: "How serverless is changing backend development.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 8,
    category: "Cloud",
    title: "Multi-Cloud Strategy Explained",
    desc: "Why businesses choose multiple cloud providers.",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    id: 9,
    category: "Data",
    title: "AWS vs Azure vs Google Cloud",
    desc: "Which cloud platform is best for your business?",
    img: "https://images.unsplash.com/photo-1762793215729-28ef9e336677?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    category: "Data",
    title: "Cloud Security Essentials",
    desc: "Learn why cloud security is more important than ever.",
    img: "https://images.unsplash.com/photo-1762705402471-8f0cf07d694f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    category: "Data",
    title: "Future of Serverless Computing",
    desc: "How serverless is changing backend development.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 12,
    category: "Data",
    title: "Multi-Cloud Strategy Explained",
    desc: "Why businesses choose multiple cloud providers.",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const categories = [...new Set(cardsData.map((item) => item.category))];

  return (
    <section className="highblog-section">

      {categories.map((categoryName) => {
        const filteredCards = cardsData
          .filter((card) => card.category === categoryName)
          .slice(0, 4); 

        return (
          <div key={categoryName} className="highblog-category-block">

         
            <h2 className="highblog-heading">{categoryName}</h2>
            <p className="highblog-subheading">
              Latest insights & articles in {categoryName}
            </p>

          
            <div className="highblog-container">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  className={`highblog-card ${
                    hoveredCard === card.id ? "active" : ""
                  }`}
                  style={{ backgroundImage: `url(${card.img})` }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="highblog-overlay"></div>

                  <div className="highblog-content">
                    <span className="highblog-category">{card.category}</span>
                    <h3 className="highblog-title">{card.title}</h3>

                    {hoveredCard === card.id && (
                      <>
                        <p className="highblog-desc">{card.desc}</p>

                        <button
                          className="highblog-btn"
                          onClick={() => navigate(`/blog/${card.id}`)}
                        >
                          Read More <span>›</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        );
      })}

    </section>
  );
};

export default BlogSection;
