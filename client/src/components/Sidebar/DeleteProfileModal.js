import React from "react";
import "./Modal.css";

const DeleteProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDeleteProfile = () => {
    // Logic for deleting profile
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Delete Profile</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete your profile?</p>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleDeleteProfile}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfileModal;
