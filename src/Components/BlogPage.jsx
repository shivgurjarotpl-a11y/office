import React, { useState } from "react";
import BlogCard from "./BlogCard";
import "../css/BlogPage.css";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Machine Learning in Healthcare",
    image:
      "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Explore how AI is revolutionizing diagnostics and personalized medicine.",
    tag: "Machine Learning",
    date: "2023-10-15",
    author: "Dr. Alex Rivera",
  },
  {
    id: 2,
    title: "Latest AI News: Breakthrough in Neural Networks",
    image:
      "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "A deep dive into recent advancements in deep learning architectures.",
    tag: "AI News",
    date: "2023-10-10",
    author: "Sarah Chen",
  },
  {
    id: 3,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "Tools",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
    {
    id: 4,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "Machine Learning",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
    {
    id: 5,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "AI News",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
    {
    id: 6,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "Tools",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
    {
    id: 7,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "Machine Learning",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
    {
    id: 8,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "AI News",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
    {
    id: 9,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "Tools",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
    {
    id: 10,
    title: "Top Tools for AI Development in 2023",
    image: "https://cspv.in/image/oxymora_imgs/image/Gemini_Generated_Image_4.png",
    description:
      "Review of the best frameworks and libraries for building AI applications.",
    tag: "Machine Learning",
    date: "2023-10-05",
    author: "Mike Johnson",
  },
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "" || post.tag === selectedTag;
    return matchesQuery && matchesTag;
  });

  const tags = ["AI News", "Machine Learning", "Tools"];

  return (
    <div className="blogpage-wrapper">
      {/* Hero Section */}
      <section className="blogpage-hero">
        <div className="blogpage-hero-overlay"></div>
        <div className="blogpage-hero-content">
          <h1>Insights on AI & Innovation</h1>
          <p>
            Stay ahead with the latest trends, research, and breakthroughs in
            artificial intelligence.
          </p>
        </div>
      </section>

      {/* Search + Filter Bar */}
      <div className="blogpage-container">
        <div className="blogpage-filter-bar">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="blogpage-search"
          />

          <div className="blogpage-tags">
            <button
              onClick={() => setSelectedTag("")}
              className={`blogpage-tag ${
                selectedTag === "" ? "active" : ""
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`blogpage-tag ${
                  selectedTag === tag ? "active" : ""
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blogpage-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="blogpage-noresult">
            No posts found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
