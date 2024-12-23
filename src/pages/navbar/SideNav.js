import React, { useState } from "react";
// import HelpModal from "../modal/HelpModal";
import SourceCodeModal from "../modal/SourceCodeModal";

const SideNav = ({ activeContent, setActiveContent }) => {
  const [activeModal, setActiveModal] = useState(null);

  const handleModalClose = () => setActiveModal(null);

  const navItems = [
    { name: "Source Code Management", modal: "sourceCode", id: "sourceCode" },
    { name: "Help", modal: "help", id: "help" },
  ];

  return (
    <div className="d-flex mt-0">
      {/* Side Navigation */}
      <nav
        className="nav flex-column vh-100 sidebar-btn"
        style={{ width: "250px", backgroundColor: "#0a3364" }}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            className="nav-link text-start border-0 py-3 px-3"
            style={{
              color: activeContent === item.id ? "#3DC7F6" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setActiveContent(item.id);
              if (item.modal) setActiveModal(item.modal);
            }}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Modals */}
      {/* <HelpModal show={activeModal === "help"} onClose={handleModalClose} /> */}
      <SourceCodeModal
        show={activeModal === "sourceCode"}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default SideNav;
