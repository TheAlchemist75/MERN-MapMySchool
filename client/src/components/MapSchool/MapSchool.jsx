// import React, { useState, useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import MapGL, { Source, Layer } from "react-map-gl";
// import jugendberufshilfenData from "../../api/Jugendberufshilfen.geojson";
// import kindertageseinrichtungen from "../../api/Kindertageseinrichtungen.geojson";
// import "./MapSchool.css";

// function MapSchool({ token }) {
//   const mapRef = useRef(null);
//   const [selectedData, setSelectedData] = useState("jugendberufshilfen");
//   const [mapLoaded, setMapLoaded] = useState(false);

//   useEffect(() => {
//     console.log("Initializing map...");
//   }, []);

//   const handleMapLoad = () => {
//     console.log("Map loaded successfully");
//     setMapLoaded(true);
//     const map = mapRef.current.getMap();

//     // Event listener for jugendberufshilfen
//     map.on("click", "jugendberufshilfen-layer", (e) => {
//       const coordinates = e.features[0].geometry.coordinates.slice();
//       const { TRAEGER, LEISTUNGEN, STRASSE, PLZ, ORT, TELEFON } =
//         e.features[0].properties;

//       while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//       }

//       const popupContent = `
//         <div>
//           <strong>${TRAEGER}</strong><br/>
//           Leistungen: ${LEISTUNGEN}<br/>
//           Adresse: ${STRASSE}, ${PLZ} ${ORT}<br/>
//           Telefon: ${TELEFON}
//         </div>
//       `;

//       new mapboxgl.Popup({ offset: 25 })
//         .setLngLat(coordinates)
//         .setHTML(popupContent)
//         .addTo(map);
//     });

//     map.on("mouseenter", "jugendberufshilfen-layer", () => {
//       map.getCanvas().style.cursor = "pointer";
//     });

//     map.on("mouseleave", "jugendberufshilfen-layer", () => {
//       map.getCanvas().style.cursor = "";
//     });

//     // Event listener for kindertageseinrichtungen
//     map.on("click", "kindertageseinrichtungen-layer", (e) => {
//       const coordinates = e.features[0].geometry.coordinates.slice();
//       const { NAME, STRASSE, PLZ, ORT, TELEFON } = e.features[0].properties;

//       while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//       }

//       const popupContent = `
//         <div>
//           <strong>${NAME}</strong><br/>
//           Adresse: ${STRASSE}, ${PLZ} ${ORT}<br/>
//           Telefon: ${TELEFON}
//         </div>
//       `;

//       new mapboxgl.Popup({ offset: 25 })
//         .setLngLat(coordinates)
//         .setHTML(popupContent)
//         .addTo(map);
//     });

//     map.on("mouseenter", "kindertageseinrichtungen-layer", () => {
//       map.getCanvas().style.cursor = "pointer";
//     });

//     map.on("mouseleave", "kindertageseinrichtungen-layer", () => {
//       map.getCanvas().style.cursor = "";
//     });
//   };

//   const handleDataChange = (event) => {
//     setSelectedData(event.target.value);
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "calc(100vh - 70px)",
//         position: "relative",
//       }}
//     >
//       <div className="dropdown-container">
//         <label htmlFor="data-select">Select Data: </label>
//         <select
//           id="data-select"
//           value={selectedData}
//           onChange={handleDataChange}
//         >
//           <option value="jugendberufshilfen">Jugendberufshilfen</option>
//           <option value="kindertageseinrichtungen">
//             Kindertageseinrichtungen
//           </option>
//         </select>
//       </div>

//       <MapGL
//         ref={mapRef}
//         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
//         initialViewState={{
//           longitude: 12.92922,
//           latitude: 50.8357,
//           zoom: 12.5,
//           pitch: 60,
//           attributionControl: false,
//           projection: "globe",
//         }}
//         style={{ width: "100%", height: "100%" }}
//         mapStyle="mapbox://styles/alchemist75/clwhv8vyk00pe01r00pxh11qo"
//         onLoad={handleMapLoad}
//       >
//         <Source
//           id="jugendberufshilfen"
//           type="geojson"
//           data={jugendberufshilfenData}
//         >
//           <Layer
//             id="jugendberufshilfen-layer"
//             type="symbol"
//             layout={{
//               "icon-image": "mapbox-circle",
//               "icon-size": 1,
//               visibility:
//                 selectedData === "jugendberufshilfen" ? "visible" : "none",
//             }}
//             interactive={true}
//           />
//         </Source>

//         <Source
//           id="kindertageseinrichtungen"
//           type="geojson"
//           data={kindertageseinrichtungen}
//         >
//           <Layer
//             id="kindertageseinrichtungen-layer"
//             type="symbol"
//             layout={{
//               "icon-image": "mapbox-square",
//               "icon-size": 1,
//               visibility:
//                 selectedData === "kindertageseinrichtungen"
//                   ? "visible"
//                   : "none",
//             }}
//             interactive={true}
//           />
//         </Source>

//         <div className="custom-attribution">
//           <a
//             href="https://www.mapbox.com/about/maps"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             © Mapbox
//           </a>{" "}
//           <a
//             href="https://www.openstreetmap.org/about/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             © OpenStreetMap
//           </a>{" "}
//           <a
//             href="https://www.mapbox.com/map-feedback/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Improve this map
//           </a>
//         </div>
//       </MapGL>
//     </div>
//   );
// }

// export default MapSchool;
// ------------------------------------------------------------------

import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapGL, { Source, Layer } from "react-map-gl";
import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import jugendberufshilfenData from "../../api/Jugendberufshilfen.geojson";
import kindertageseinrichtungen from "../../api/Kindertageseinrichtungen.geojson";
import "./MapSchool.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapSchool({ token }) {
  const mapRef = useRef(null);
  const [selectedData, setSelectedData] = useState("jugendberufshilfen");
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    console.log("Initializing map...");
  }, []);

  const handleMapLoad = () => {
    console.log("Map loaded successfully");
    setMapLoaded(true);
    const map = mapRef.current.getMap();

    // Ensure the style is fully loaded before adding sources and layers
    if (!map.isStyleLoaded()) {
      map.on("style.load", () => {
        addMapLayers(map);
      });
    } else {
      addMapLayers(map);
    }

    // Add the directions control to the map
    const directions = new Directions({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });

    map.addControl(directions, "top-left");
  };

  const addMapLayers = (map) => {
    // Event listener for jugendberufshilfen
    map.on("click", "jugendberufshilfen-layer", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const { TRAEGER, LEISTUNGEN, STRASSE, PLZ, ORT, TELEFON } =
        e.features[0].properties;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      const popupContent = `
        <div>
          <strong>${TRAEGER}</strong><br/>
          Leistungen: ${LEISTUNGEN}<br/>
          Adresse: ${STRASSE}, ${PLZ} ${ORT}<br/>
          Telefon: ${TELEFON}
        </div>
      `;

      new mapboxgl.Popup({ offset: 25 })
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
    });

    map.on("mouseenter", "jugendberufshilfen-layer", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "jugendberufshilfen-layer", () => {
      map.getCanvas().style.cursor = "";
    });

    // Event listener for kindertageseinrichtungen
    map.on("click", "kindertageseinrichtungen-layer", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const { NAME, STRASSE, PLZ, ORT, TELEFON } = e.features[0].properties;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      const popupContent = `
        <div>
          <strong>${NAME}</strong><br/>
          Adresse: ${STRASSE}, ${PLZ} ${ORT}<br/>
          Telefon: ${TELEFON}
        </div>
      `;

      new mapboxgl.Popup({ offset: 25 })
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
    });

    map.on("mouseenter", "kindertageseinrichtungen-layer", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "kindertageseinrichtungen-layer", () => {
      map.getCanvas().style.cursor = "";
    });
  };

  const handleDataChange = (event) => {
    setSelectedData(event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 70px)",
        position: "relative",
      }}
    >
      <div className="dropdown-container">
        <label htmlFor="data-select">Select Data: </label>
        <select
          id="data-select"
          value={selectedData}
          onChange={handleDataChange}
        >
          <option value="jugendberufshilfen">Jugendberufshilfen</option>
          <option value="kindertageseinrichtungen">
            Kindertageseinrichtungen
          </option>
        </select>
      </div>

      <MapGL
        ref={mapRef}
        mapboxApiAccessToken={mapboxgl.accessToken}
        initialViewState={{
          longitude: 12.92922,
          latitude: 50.8357,
          zoom: 12.5,
          pitch: 60,
          attributionControl: false,
          projection: "globe",
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/alchemist75/clwhv8vyk00pe01r00pxh11qo"
        onLoad={handleMapLoad}
      >
        {mapLoaded && (
          <>
            <Source
              id="jugendberufshilfen"
              type="geojson"
              data={jugendberufshilfenData}
            >
              <Layer
                id="jugendberufshilfen-layer"
                type="symbol"
                layout={{
                  "icon-image": "mapbox-circle",
                  "icon-size": 1,
                  visibility:
                    selectedData === "jugendberufshilfen" ? "visible" : "none",
                }}
                interactive={true}
              />
            </Source>

            <Source
              id="kindertageseinrichtungen"
              type="geojson"
              data={kindertageseinrichtungen}
            >
              <Layer
                id="kindertageseinrichtungen-layer"
                type="symbol"
                layout={{
                  "icon-image": "mapbox-square",
                  "icon-size": 1,
                  visibility:
                    selectedData === "kindertageseinrichtungen"
                      ? "visible"
                      : "none",
                }}
                interactive={true}
              />
            </Source>
          </>
        )}

        <div className="custom-attribution">
          <a
            href="https://www.mapbox.com/about/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Mapbox
          </a>{" "}
          <a
            href="https://www.openstreetmap.org/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            © OpenStreetMap
          </a>{" "}
          <a
            href="https://www.mapbox.com/map-feedback/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Improve this map
          </a>
        </div>
      </MapGL>
    </div>
  );
}

export default MapSchool;
