import React, { useState } from "react";
import Modal from "react-modal";
import "./customModal.css"; // Import your custom styles

const CustomModal = ({ isOpen, onRequestClose, contentComponent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div>
        <button className="close-button" onClick={onRequestClose}>
          &times;
        </button>
      </div>
      <div style={{ marginTop: "20px", marginRight: "2px" }}>
        {contentComponent}
      </div>
    </Modal>
  );
};

export default CustomModal;
