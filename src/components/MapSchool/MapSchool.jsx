import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapGL, { Source, Layer } from "react-map-gl";
import jugendberufshilfenData from "../../api/Jugendberufshilfen.geojson";
import kindertageseinrichtungen from "../../api/Kindertageseinrichtungen.geojson";
import "./MapSchool.css";

function MapSchool() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();

      if (map) {
        map.on("style.load", () => {
          map.setFog({});
        });
      }
    }
  }, []);

  const handleMapLoad = () => {
    const map = mapRef.current.getMap();

    map.on("click", "jugendberufshilfen", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const { TRAEGER, LEISTUNGEN, STRASSE, PLZ, ORT, TELEFON } =
        e.features[0].properties;

      // Ensure the popup doesn't appear out of view
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

    map.on("mouseenter", "jugendberufshilfen", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "jugendberufshilfen", () => {
      map.getCanvas().style.cursor = "";
    });
  };

  return (
    <div style={{ width: "100%", height: "calc(100vh - 70px)" }}>
      <MapGL
        ref={mapRef}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
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
        <Source
          id="jugendberufshilfen"
          type="geojson"
          data={jugendberufshilfenData}
        >
          <Layer
            id="jugendberufshilfen"
            type="symbol"
            layout={{
              "icon-image": "mapbox-circle",
              "icon-size": 1,
            }}
            paint={{
              "icon-color": "#FF0000", // Set the color you want
            }}
          />
        </Source>

        <Source
          id="kindertageseinrichtungen"
          type="geojson"
          data={kindertageseinrichtungen}
        >
          <Layer
            id="kindertageseinrichtungen"
            type="symbol"
            layout={{
              "icon-image": "mapbox-square",
              "icon-size": 1,
            }}
          />
        </Source>

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
