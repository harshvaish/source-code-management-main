import React, { useEffect, useState } from "react";

const DetailsModal = ({ show, url, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show && url) {
      setLoading(true); // Show loading state when the modal opens
    }
  }, [show, url]);

  const handleLoad = () => {
    setLoading(false); // Hide loading state once the iframe content has loaded
  };

  if (!show) return null; // Don't render the modal if it's not visible

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      onClick={onClose}
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="modal-dialog"
        role="document"
        style={{
          maxWidth: "80%", // Adjust modal width as needed
          width: "80%",
          background: "#fff",
          borderRadius: "8px",
          padding: "20px",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on modal content
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Details</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {loading && <p>Loading...</p>}
            <iframe
              src={url}
              width="100%"
              height="500px" // Adjust height as needed
              frameBorder="0"
              title="URL Content"
              onLoad={handleLoad} // Hide loading text when the iframe has finished loading
              style={{
                display: loading ? "none" : "block",
                transition: "display 0.5s ease-in-out",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
