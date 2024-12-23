import React, { useState } from "react";
import HelpModal from "../modal/HelpModal";
import SourceCodeModal from "../modal/SourceCodeModal";


const SourceSideNav = () => {
    const [activeModal, setActiveModal] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // Tracks the selected nav

  const handleModalClose = () => setActiveModal(null);

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
            onClick={() => {
              setActiveModal(item.modal);
              setActiveIndex(index);
            }}
          >
            {item.name}
          </button>
        ))}
      </nav>



      {/* Modals */}
      <HelpModal show={activeModal === "help"} onClose={handleModalClose} />
      <SourceCodeModal
        show={activeModal === "sourceCode"}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default SourceSideNav;
