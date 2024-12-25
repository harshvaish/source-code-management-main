import React, { createContext, useState, useContext } from "react";

// Create the ModalContext
const ModalContext = createContext();

// Provider component to wrap around the part of the app that needs modal management
export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);

  // Function to open a modal
  const openModal = (modalId) => setActiveModal(modalId);

  // Function to close the modal
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use ModalContext
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
