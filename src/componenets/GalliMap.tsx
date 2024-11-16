import React, { useRef, useEffect, useState } from "react";
import maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";

const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [dangerZones, setDangerZones] = useState<{ latitude: number; longitude: number }[]>([]);

  // Fetch user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);
        },
        (error) => {
          console.error("Error obtaining user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Fetch danger zones when the user location is available
  useEffect(() => {
    if (userLocation) {
      const fetchDangerZones = async () => {
        try {
          const response = await axios.get("http://192.168.1.97:8000/getdangerzones/", {
            params: {
              lat: userLocation[1],
              lng: userLocation[0],
            },
          });
          console.log(response.data);
          setDangerZones(response.data); // Store the array of danger zones
        } catch (error) {
          console.error("Error fetching danger zones:", error);
        }
      };

      fetchDangerZones();
    }
  }, [userLocation]);

  // Initialize the map once the user location is available
  useEffect(() => {
    if (mapContainerRef.current && userLocation) {
      // Initialize the map
      const map = new maplibre.Map({
        container: mapContainerRef.current,
        style: "https://map-init.gallimap.com/styles/light/style.json?accessToken=28c1ef6e-50c0-42c1-9cbf-b41516dd600e",
        center: userLocation,
        zoom: 14,
      });

      // Add a marker for the user's location
      new maplibre.Marker({ color: "blue" })
        .setLngLat(userLocation)
        .setPopup(new maplibre.Popup().setText("You are here"))
        .addTo(map);

      // Add danger zones if available
      if (dangerZones.length > 0) {
        const geoJson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
          type: "FeatureCollection",
          features: dangerZones.map((zone) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [zone.longitude, zone.latitude], // Correct order: [longitude, latitude]
            },
            properties: {},
          })),
        };

        map.on("load", () => {
          map.addSource("danger-zones", {
            type: "geojson",
            data: geoJson,
          });

          map.addLayer({
            id: "danger-zone-layer",
            type: "circle",
            source: "danger-zones",
            paint: {
              "circle-radius": 50,
              "circle-color": "red",
              "circle-opacity": 0.5,
            },
          });
        });
      }

      return () => map.remove(); // Clean up the map on unmount
    }
  }, [userLocation, dangerZones]); // Depend on both userLocation and dangerZones

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "100vh" }}
    >
      {!userLocation && <p>Loading user location...</p>} {/* Loading message */}
    </div>
  );
};

export default MapComponent;