import React, { useRef, useEffect, useState } from "react";
import maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import api from "../api/instance";

const MapComponent: React.FC<any> = ({ userLocation, setUserLocation }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const [intersections, setIntersections] = useState<
    { latitude: number; longitude: number }[]
  >([]);
  const [riverCoordinate, setRiverCoordinate] = useState<
    { latitude: number; longitude: number }[]
  >([]);
  const [squareCoordinate, setSquareCoordinate] = useState<
    { latitude: number; longitude: number }[]
  >([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // const { latitude, longitude } = position.coords;
          // setUserLocation([longitude, latitude]);
          setUserLocation([85.3485, 27.7166]);
        },
        (error) => {
          console.error("Error obtaining user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      const fetchDangerZones = async () => {
        try {
          const response = await api.get("/getNearestRiver", {
            params: {
              // latitude: userLocation[1],
              // longitude: userLocation[0],
              latitude: 27.7166,
              longitude: 85.3485,
            },
          });
          console.log(response.data);
          setIntersections(response.data.intersections);
          setRiverCoordinate(response.data.riverCoordinate); // Fix key here if needed
          setSquareCoordinate(response.data.squareCoordinate);
        } catch (error) {
          console.error("Error fetching danger zones:", error);
        }
      };

      fetchDangerZones();
    }
  }, [userLocation]);

  useEffect(() => {
    if (mapContainerRef.current && userLocation) {
      const map = new maplibre.Map({
        container: mapContainerRef.current,
        style:
          "https://map-init.gallimap.com/styles/light/style.json?accessToken=28c1ef6e-50c0-42c1-9cbf-b41516dd600e",
        center: userLocation,
        zoom: 14,
      });

      new maplibre.Marker({ color: "blue" })
        .setLngLat(userLocation)
        .setPopup(new maplibre.Popup().setText("You are here"))
        .addTo(map);

      map.on("load", () => {
        if (intersections.length > 0) {
          const intersectionGeoJson: GeoJSON.FeatureCollection<GeoJSON.Geometry> =
            {
              type: "FeatureCollection",
              features: intersections.map((zone) => ({
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [zone.longitude, zone.latitude],
                },
                properties: {},
              })),
            };

          map.addSource("intersections", {
            type: "geojson",
            data: intersectionGeoJson,
          });

          map.addLayer({
            id: "intersection-layer",
            type: "circle",
            source: "intersections",
            paint: {
              "circle-radius": 5,
              "circle-color": "red",
              "circle-opacity": 1,
            },
          });
        }

        if (riverCoordinate.length > 0) {
          const riverGeoJson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
            type: "FeatureCollection",
            features: riverCoordinate.map((zone) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [zone.longitude, zone.latitude],
              },
              properties: {},
            })),
          };

          map.addSource("river-coordinates", {
            type: "geojson",
            data: riverGeoJson,
          });

          map.addLayer({
            id: "river-layer",
            type: "circle",
            source: "river-coordinates",
            paint: {
              "circle-radius": 7,
              "circle-color": "green",
              "circle-opacity": 1,
            },
          });
        }

        if (squareCoordinate.length > 0) {
          const squareGeoJson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
            type: "FeatureCollection",
            features: squareCoordinate.map((zone) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [zone.longitude, zone.latitude],
              },
              properties: {},
            })),
          };

          map.addSource("square-coordinates", {
            type: "geojson",
            data: squareGeoJson,
          });

          map.addLayer({
            id: "square-layer",
            type: "circle",
            source: "square-coordinates",
            paint: {
              "circle-radius": 5,
              "circle-color": "blue",
              "circle-opacity": 1,
            },
          });
        }
      });

      return () => map.remove();
    }
  }, [userLocation, intersections, riverCoordinate, squareCoordinate]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }}>
      {!userLocation && <p>Loading user location...</p>}
    </div>
  );
};

export default MapComponent;
