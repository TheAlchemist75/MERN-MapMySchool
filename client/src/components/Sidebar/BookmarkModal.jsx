import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";

const BookmarkModal = ({ isOpen, onClose, bookmarkedItem }) => {
  if (!isOpen || !bookmarkedItem) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Bookmarked Item</h2>
          <button className="close-button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal-body">
          <div className="data-card">
            <div className="data-card-header">
              <h3>{bookmarkedItem.properties.TRAEGER}</h3>
            </div>
            <p>
              <strong>Leistungen:</strong>{" "}
              {bookmarkedItem.properties.LEISTUNGEN}
            </p>
            <p>
              <strong>Adresse:</strong> {bookmarkedItem.properties.STRASSE},{" "}
              {bookmarkedItem.properties.ORT}
            </p>
            <p>
              <strong>Telefon:</strong> {bookmarkedItem.properties.TELEFON}
            </p>
            {bookmarkedItem.properties.EMAIL && (
              <p>
                <strong>Email:</strong> {bookmarkedItem.properties.EMAIL}
              </p>
            )}
            {bookmarkedItem.properties.FAX && (
              <p>
                <strong>Fax:</strong> {bookmarkedItem.properties.FAX}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkModal;
