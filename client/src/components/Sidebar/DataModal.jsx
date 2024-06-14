import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";

const DataModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

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
                <BookmarkIcon className="bookmark-icon" />
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
