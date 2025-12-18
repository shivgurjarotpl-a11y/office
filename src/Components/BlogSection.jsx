


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/BlogSection.css";
import axios from "axios";

// const cardsData = [
//   {
//     id: 1,
//     category: "AI & Tech",
//     title: "How AI Is Transforming Modern Businesses",
//     desc: "Explore how AI is automating workflows and decision-making.",
//     img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
//   },
//   {
//     id: 2,
//     category: "AI & Tech",
//     title: "Top Programming Languages of 2025",
//     desc: "A breakdown of the most popular languages shaping the future.",
//     img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
//   },
//   {
//     id: 3,
//     category: "AI & Tech",
//     title: "Protecting Your Digital Identity",
//     desc: "Learn how to secure your online accounts with simple methods.",
//     img: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
//   },
//   {
//     id: 4,
//     category: "AI & Tech",
//     title: "Why Businesses Are Moving to the Cloud",
//     desc: "Scalability, cost efficiency and speed explained.",
//     img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//   },

//   {
//     id: 5,
//     category: "Cloud",
//     title: "AWS vs Azure vs Google Cloud",
//     desc: "Which cloud platform is best for your business?",
//     img: "https://images.unsplash.com/photo-1762715461167-69eaae9758d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 6,
//     category: "Cloud",
//     title: "Cloud Security Essentials",
//     desc: "Learn why cloud security is more important than ever.",
//     img: "https://images.unsplash.com/photo-1762205907900-1e651d68afd2?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 7,
//     category: "Cloud",
//     title: "Future of Serverless Computing",
//     desc: "How serverless is changing backend development.",
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
//   },
//   {
//     id: 8,
//     category: "Cloud",
//     title: "Multi-Cloud Strategy Explained",
//     desc: "Why businesses choose multiple cloud providers.",
//     img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
//   },
//   {
//     id: 9,
//     category: "Data",
//     title: "AWS vs Azure vs Google Cloud",
//     desc: "Which cloud platform is best for your business?",
//     img: "https://images.unsplash.com/photo-1762793215729-28ef9e336677?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 10,
//     category: "Data",
//     title: "Cloud Security Essentials",
//     desc: "Learn why cloud security is more important than ever.",
//     img: "https://images.unsplash.com/photo-1762705402471-8f0cf07d694f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 11,
//     category: "Data",
//     title: "Future of Serverless Computing",
//     desc: "How serverless is changing backend development.",
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
//   },
//   {
//     id: 12,
//     category: "Data",
//     title: "Multi-Cloud Strategy Explained",
//     desc: "Why businesses choose multiple cloud providers.",
//     img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
//   },
// ];

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  const [Blogs,setBlogs] = useState([]);

  useEffect(()=> {
    var api = async () => {
       const res = await axios.post(" https://cspv.in/hpotpl/oxymora-web/apis/fetch_oxymora_web_blogs.php",{heading:"all"},{
        headers : {"Content-Type":"applications/json"}
       });
       console.log(res.data.blogs);
       setBlogs(res.data.blogs);
    }
    api();
  },[]);


  const categories = [...new Set(Blogs.map((item) => item.heading))];

  return (
    <section className="highblog-section">

      {categories.map((categoryName) => {
        console.log(categoryName)
        const filteredCards = Blogs
          .filter((card) => card.heading === categoryName)
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
                  style={{ backgroundImage: `url(${card.image_url})` }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="highblog-overlay"></div>

                  <div className="highblog-content">
                    <span className="highblog-category">{card.title}</span>
                    <h3 className="highblog-title">{card.subtitle}</h3>

                    {hoveredCard === card.id && (
                      <>
                        <p className="highblog-desc">{card.content}</p>

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
