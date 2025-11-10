import React from "react";
import "../css/BlogCard.css";

const BlogCard = ({ post }) => {
  return (
    <div className="blogpagecard-wrapper">
      <img
        src={post.image}
        alt={post.title}
        className="blogpagecard-image"
      />
      <div className="blogpagecard-content">
        <h3 className="blogpagecard-title">{post.title}</h3>
        <p className="blogpagecard-description">{post.description}</p>
        <div className="blogpagecard-meta">
          <span className="blogpagecard-date">{post.date}</span>
          <span className="blogpagecard-author">By {post.author}</span>
        </div>
        <button className="blogpagecard-button">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
