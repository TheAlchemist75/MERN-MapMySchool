import React from "react";
import "./Modal.css";

function BookmarkModal({ isOpen, onClose, bookmarkedItems }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Saved Bookmarks</h2>
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>
        <div className="modal-body">
          {bookmarkedItems && bookmarkedItems.length > 0 ? (
            <ul>
              {bookmarkedItems.map((item, index) => (
                <li key={index} className="data-card">
                  <div className="data-card-header">
                    <h3>{item.item.properties.TRAEGER}</h3>
                  </div>
                  <p>
                    <strong>Leistungen:</strong>{" "}
                    {item.item.properties.LEISTUNGEN}
                  </p>
                  <p>
                    <strong>Adresse:</strong> {item.item.properties.STRASSE},{" "}
                    {item.item.properties.ORT}
                  </p>
                  <p>
                    <strong>Telefon:</strong> {item.item.properties.TELEFON}
                  </p>
                  {item.item.properties.EMAIL && (
                    <p>
                      <strong>Email:</strong> {item.item.properties.EMAIL}
                    </p>
                  )}
                  {item.item.properties.FAX && (
                    <p>
                      <strong>Fax:</strong> {item.item.properties.FAX}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No bookmarks saved</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookmarkModal;
