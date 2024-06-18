import React, { useEffect, useRef, useState } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./AddHomeModal.css";
import axios from "axios";
import mapboxgl from "mapbox-gl";

const AddHomeModal = ({ isOpen, onClose }) => {
  const addressInputRef = useRef(null);
  const [geocoderResult, setGeocoderResult] = useState(null);
  const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    if (isOpen && addressInputRef.current) {
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxToken,
        types: "address",
        placeholder: "Search for an address",
        mapboxgl: mapboxgl,
      });

      geocoder.addTo(addressInputRef.current);

      geocoder.on("result", (e) => setGeocoderResult(e.result));
      geocoder.on("clear", () => setGeocoderResult(null));

      return () => {
        geocoder.off("result", (e) => setGeocoderResult(e.result));
        geocoder.off("clear", () => setGeocoderResult(null));
      };
    }
  }, [isOpen]);

  const handleAddHome = async () => {
    const homeName = document.querySelector(".add-home-modal-input").value;

    if (!geocoderResult) {
      console.error("Address not selected");
      return;
    }

    const homeData = {
      name: homeName,
      address: geocoderResult.place_name,
      coordinates: geocoderResult.geometry.coordinates,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/homes",
        homeData,
        config
      );
      console.log("Home added:", response.data);
      onClose(); // Close the modal
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="add-home-modal-overlay" onClick={onClose}>
      <div
        className="add-home-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="add-home-modal-header">
          <h2>Add Home</h2>
          <button className="add-home-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="add-home-modal-body">
          <input
            type="text"
            placeholder="Home Name"
            className="add-home-modal-input"
          />
          <div
            className="add-home-mapboxgl-ctrl-geocoder"
            ref={addressInputRef}
          />
        </div>
        <div className="add-home-modal-footer">
          <button className="add-home-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="add-home-confirm-button" onClick={handleAddHome}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHomeModal;
