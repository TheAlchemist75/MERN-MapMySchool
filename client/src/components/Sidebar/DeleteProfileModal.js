import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import config from "../../config";

const DeleteProfileModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleDeleteProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found, authorization required");
      }

      const response = await fetch(`${config.backendUrl}/api/user`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete profile");
      }

      localStorage.clear(); // Clear all local storage data
      navigate("/login"); // Redirect to the login page
      onClose();
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  if (!isOpen) return null;

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
