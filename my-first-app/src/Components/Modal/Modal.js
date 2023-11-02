import React, { useState, useEffect, useRef } from 'react';

const Modal = () => {
  // State to manage the visibility of the modal
  const [isModalVisible, setModalVisible] = useState(false);
  // Ref to store a reference to the modal content
  const modalRef = useRef(null);
  // Reference to the close button
  const closeModalButton = document.querySelector(".close-btn");
  // Reference to the open button
  const openModalButton = document.querySelector(".open-btn");

  // Function to open the modal
  const openModal = () => {
    setModalVisible(true);
    closeModalButton.focus();
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    openModalButton.focus();
  };

  useEffect(() => {
    // Event listener to handle keyboard navigation within the modal
    const handleKeyDown = (event) => {
      if (isModalVisible && event.key === 'Tab') {
        event.preventDefault();
        // Select all focusable elements within the modal
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        // Get the first and last focusable elements
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Handle tab and shift+tab navigation
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
          } else {
            const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
            focusableElements[currentIndex - 1].focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
          } else {
            const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
            focusableElements[currentIndex + 1].focus();
          }
        }
      }
    };

    // Add event listener for keydown when modal is visible
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove event listener when component unmounts or isModalVisible changes
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalVisible]);

  return (
    <>
      {/* Button to open the modal */}
      <div>
        <button className="open-btn" onClick={openModal}>
          Open Modal
        </button>
      </div>

      {/* Modal overlay with conditional display */}
      <div className="modal-overlay" style={{ display: isModalVisible ? "block" : "none" }} role="dialog">
        {/* Modal content */}
        <div className="modal-content" ref={modalRef}>
          <h2>Modal Title</h2>
          <p>This is a modal....</p>
<a href = "www.youtube.com"> Youtube </a>
          {/* Button to close the modal */}
          <button className="close-btn" onClick={closeModal}>
            Close Modal
          </button>
          <br />
          {/* Link within the modal */}
          <a href="https://www.facebook.com" className="link">
            Facebook
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
