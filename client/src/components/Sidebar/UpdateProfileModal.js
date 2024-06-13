import React from "react";
import "./Modal.css";

const UpdateProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleUpdateProfile = () => {
    // Logic for updating profile
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Update Profile</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="Username" className="modal-input" />
          <input type="email" placeholder="Email" className="modal-input" />
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleUpdateProfile}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
