import React, { useState } from 'react';
import DetailsModal from '../modal/DetailsModal';

const SourceCode = ({ tableData }) => {
  const [showModal, setShowModal] = useState(false);  // State to control modal visibility
  const [modalContent, setModalContent] = useState(''); // State to store content for the modal

  // Function to open modal with the details content
  const openModal = (content) => {
    setModalContent(content);  // Set the modal content
    setShowModal(true);  // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);  // Close the modal
    setModalContent('');  // Clear the modal content
  };

  return (
    <div
      style={{
        padding: '20px',
        marginTop: "-200px"
      }}
    >
      {/* Table count */}
      <div
        style={{
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        Total: {tableData.length}
      </div>

      {/* Table structure */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr', // Single column layout
          gap: '20px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
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
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px 20px',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span style={{ flex: 1, fontWeight: '500', color: '#333' }}>
              {row.source}
            </span>
            {/* Clickable Details */}
            <span
              style={{ flex: 2, color: '#555', cursor: 'pointer' }}
              onClick={() => window.open(row.details, "_blank")} // Open URL in new tab

              // onClick={() => openModal(row.details)} // Trigger the modal on click
            >
              {row.details}
            </span>
            <span
              style={{
                flex: 1,
                color: row.status === 'Active' ? 'green' : 'red',
                fontWeight: 'bold',
              }}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      <DetailsModal show={showModal} url={modalContent} onClose={closeModal} />
    </div>
  );
};

export default SourceCode;
