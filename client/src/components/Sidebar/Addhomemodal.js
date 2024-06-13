import React from "react";
import "./Modal.css";

const AddHomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleAddHome = () => {
    // Logic for adding home
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Home</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="Home Name" className="modal-input" />
          <input type="text" placeholder="Address" className="modal-input" />
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleAddHome}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHomeModal;
