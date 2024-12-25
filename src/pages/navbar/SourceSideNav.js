import React, { useState } from "react";

const SourceSideNav = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks the selected nav
  const navItems = [
    { name: "Show All", modal: "sourceCode" },
    { name: "Cloud Providers", modal: "help" },
  ];

  return (
    <div className="d-flex mt-0 mb-0">
      {/* Side Navigation */}
      <nav className="nav flex-column vh-100" style={{ width: "250px", backgroundColor: "#0a3364" }}>
        {navItems.map((item, index) => (
          <button
            key={index}
            className="nav-link text-white text-start border-0 py-3 px-3"
            style={{
              backgroundColor: activeIndex === index ? "#0278d5" : "#0a3364",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              if (activeIndex !== index) e.target.style.backgroundColor = "#B1B0B4";
            }}
            onMouseOut={(e) => {
              if (activeIndex !== index) e.target.style.backgroundColor = "#0a3364";
            }}
          >
            {item.name}
          </button>
        ))}
      </nav>

    </div>
  );
};

export default SourceSideNav;
