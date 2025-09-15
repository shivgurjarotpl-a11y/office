import React, { useState, useEffect } from "react";
import "../css/Topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // prevent background scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= 768;

  // Toggle drawer (hamburger). Also ensure dropdown closed when toggling.
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  // Toggle dropdown — only enable click-toggle on mobile.
  const toggleDropdown = (name) => {
    if (!isMobile()) return; // on desktop rely on hover, don't toggle on click
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Use this for all links so:
  // - if drawer was open, it closes
  // - dropdown closes
  // - on desktop it won't accidentally toggle drawer
  const handleLinkClick = () => {
    if (isNavOpen) setIsNavOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="topbar-logo">
          <img src="/oxymora_logo (1).png" alt="Logo" className="logo" />
        </div>

        <button
          className="topbar-toggle"
          onClick={toggleNav}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
        >
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
        </button>

        <nav className={`topbar-nav ${isNavOpen ? "active" : ""}`}>
          <Link to="/home" onClick={handleLinkClick}>
            Home
          </Link>

          <div className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}>
            {/* button so it's keyboard accessible */}
            <button
              className="dropbtn"
              onClick={() => toggleDropdown("about")}
              aria-expanded={activeDropdown === "about"}
            >
              About Us
            </button>

            <div className="dropdown-content" onClick={(e) => e.stopPropagation()}>
              <div className="submenu">
                <span>About</span>
                <Link to="/about/mission" onClick={handleLinkClick}>
                  Mission
                </Link>
                <Link to="/about/vision" onClick={handleLinkClick}>
                  Vision
                </Link>
                <Link to="/about/core-team" onClick={handleLinkClick}>
                  Core Team
                </Link>
              </div>
              <div className="submenu">
                <span>Media</span>
                <Link to="/about/office-gallery" onClick={handleLinkClick}>
                  Office Gallery
                </Link>
              </div>
            </div>
          </div>

          <Link to="/services" onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/products" onClick={handleLinkClick}>
            Products
          </Link>
          <Link to="/Blog" onClick={handleLinkClick}>
            Projects
          </Link>
          <Link to="/work" onClick={handleLinkClick}>
            Work
          </Link>
          <Link to="/career" onClick={handleLinkClick}>
            Career
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
