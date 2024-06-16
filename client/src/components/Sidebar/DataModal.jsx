// import React from "react";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import CloseIcon from "@mui/icons-material/Close";
// import "./Modal.css";

// const DataModal = ({ isOpen, onClose, data }) => {
//   if (!isOpen || !data) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header">
//           <h2>Data Details</h2>
//           <button className="close-button" onClick={onClose}>
//             <CloseIcon />
//           </button>
//         </div>
//         <div className="modal-body">
//           {data.map((item, index) => (
//             <div key={index} className="data-card">
//               <div className="data-card-header">
//                 <h3>{item.properties.TRAEGER}</h3>
//                 <BookmarkIcon className="bookmark-icon" />
//               </div>
//               <p>
//                 <strong>Leistungen:</strong> {item.properties.LEISTUNGEN}
//               </p>
//               <p>
//                 <strong>Adresse:</strong> {item.properties.STRASSE},{" "}
//                 {item.properties.ORT}
//               </p>
//               <p>
//                 <strong>Telefon:</strong> {item.properties.TELEFON}
//               </p>
//               {item.properties.EMAIL && (
//                 <p>
//                   <strong>Email:</strong> {item.properties.EMAIL}
//                 </p>
//               )}
//               {item.properties.FAX && (
//                 <p>
//                   <strong>Fax:</strong> {item.properties.FAX}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataModal;

// ----------------------------------------------------------------------------

import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";
import config from "../../config";

const DataModal = ({ isOpen, onClose, data, onBookmark }) => {
  if (!isOpen || !data) return null;

  const handleBookmarkClick = async (item) => {
    try {
      console.log(
        "Sending bookmark request to:",
        `${config.backendUrl}/api/bookmark`
      );
      console.log("Request payload:", JSON.stringify({ item }));

      const response = await fetch(`${config.backendUrl}/api/bookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item }),
      });

      if (!response.ok) {
        throw new Error("Failed to save the bookmark");
      }

      const result = await response.json();
      console.log("Bookmark saved:", result);
      onBookmark(item);
    } catch (error) {
      console.error("Error saving bookmark:", error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Data Details</h2>
          <button className="close-button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal-body">
          {data.map((item, index) => (
            <div key={index} className="data-card">
              <div className="data-card-header">
                <h3>{item.properties.TRAEGER}</h3>
                <BookmarkIcon
                  className="bookmark-icon"
                  onClick={() => handleBookmarkClick(item)}
                />
              </div>
              <p>
                <strong>Leistungen:</strong> {item.properties.LEISTUNGEN}
              </p>
              <p>
                <strong>Adresse:</strong> {item.properties.STRASSE},{" "}
                {item.properties.ORT}
              </p>
              <p>
                <strong>Telefon:</strong> {item.properties.TELEFON}
              </p>
              {item.properties.EMAIL && (
                <p>
                  <strong>Email:</strong> {item.properties.EMAIL}
                </p>
              )}
              {item.properties.FAX && (
                <p>
                  <strong>Fax:</strong> {item.properties.FAX}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataModal;
