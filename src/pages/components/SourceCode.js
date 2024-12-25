import React, { useState } from "react";
import ConfigureModal from "../modal/ConfigureModal";
import DropArea from "./DropArea";
import { useModal } from "../../context/ModalContext";

const SourceCode = ({ tableData }) => {
  const { activeModal, openModal, closeModal } = useModal();

  const [modalData, setModalData] = useState(null);
  const [showData, setShowData] = useState(false);

  const handleDrop = (item) => {
    setModalData(item);
    closeModal();
    openModal("ConfigureModal");
  };

  const closeConfigureModal = () => {
    closeModal();
    setModalData(null);
  };

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "-300px",
      }}
    >
      {/* DropArea */}
      <DropArea onDrop={handleDrop} />

      {showData && (
        <>
          {/* Table count */}
          <div
            style={{
              marginBottom: "20px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Total: {tableData.length}
          </div>

          {/* Table structure */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr", // Single column layout
              gap: "20px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              <span style={{ flex: 1 }}>Source</span>
              <span style={{ flex: 2 }}>Details</span>
              <span style={{ flex: 1 }}>Status</span>
            </div>

            {/* Rows */}
            {tableData.map((row, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span style={{ flex: 1, fontWeight: "500", color: "#333" }}>
                  {row.source}
                </span>
                {/* Clickable Details */}
                <span
                  style={{ flex: 2, color: "#555", cursor: "pointer" }}
                  onClick={() => window.open(row.details, "_blank")} // Open URL in new tab
                >
                  {row.details}
                </span>
                <span
                  style={{
                    flex: 1,
                    color: row.status === "Active" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ConfigureModal */}
      {activeModal === "ConfigureModal" && (
        <ConfigureModal
          show={true}
          showData={showData}
          setShowData={setShowData}
          item={modalData}
          onClose={closeConfigureModal}
        />
      )}
    </div>
  );
};

export default SourceCode;
