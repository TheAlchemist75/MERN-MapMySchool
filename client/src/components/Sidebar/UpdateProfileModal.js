// import React from "react";
// import "./Modal.css";

// const UpdateProfileModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const handleUpdateProfile = () => {
//     // Logic for updating profile
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Update Profile</h2>
//           <button className="close-button" onClick={onClose}>
//             ×
//           </button>
//         </div>
//         <div className="modal-body">
//           <input type="text" placeholder="Username" className="modal-input" />
//           <input type="email" placeholder="Email" className="modal-input" />
//         </div>
//         <div className="modal-footer">
//           <button className="cancel-button" onClick={onClose}>
//             Cancel
//           </button>
//           <button className="confirm-button" onClick={handleUpdateProfile}>
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfileModal;

import React, { useState, useEffect } from "react";
import "./Modal.css";
import config from "../../config"; // Import config to get backend URL

const UpdateProfileModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${config.backendUrl}/api/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in local storage
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]);

  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(`${config.backendUrl}/api/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in local storage
        },
        body: JSON.stringify({ username, email }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!isOpen) return null;

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
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="modal-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="modal-input"
          />
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
