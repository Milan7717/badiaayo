// src/components/Map.tsx
import React, { useRef, useEffect, useState } from 'react';
import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ENV } from '../config/env';
import { SearchResult } from '../types/types';

interface MapComponentProps {
    searchResults: SearchResult[];
}

const MapComponent: React.FC<MapComponentProps> = ({ searchResults }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<maplibre.Map | null>(null);
    const [userLocation, setUserLocation] = useState<{ lng: number; lat: number } | null>(null);
    const [dangerZones, setDangerZones] = useState<{ latitude: number; longitude: number }[]>([]);
    const markersRef = useRef<maplibre.Marker[]>([]);

    // Get user location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lng: longitude, lat: latitude });
                },
                (error) => {
                    console.error("Error obtaining user location:", error);
                }
            );
        }
    }, []);

    // Initialize map
    useEffect(() => {
        if (mapContainerRef.current && userLocation) {
            const map = new maplibre.Map({
                container: mapContainerRef.current,
                style: `${ENV.MAP_STYLE_URL}?accessToken=${ENV.MAP_ACCESS_TOKEN}`,
                center: [userLocation.lng, userLocation.lat],
                zoom: 14,
            });

            mapRef.current = map;

            // Add user location marker
            new maplibre.Marker({ color: "blue" })
                .setLngLat([userLocation.lng, userLocation.lat])
                .setPopup(new maplibre.Popup().setText("You are here"))
                .addTo(map);

            return () => {
                map.remove();
                markersRef.current.forEach(marker => marker.remove());
                markersRef.current = [];
            };
        }
    }, [userLocation]);

    // Handle search results
    useEffect(() => {
        if (mapRef.current && searchResults.length > 0) {
            // Clear existing markers
            markersRef.current.forEach(marker => marker.remove());
            markersRef.current = [];

            const bounds = new maplibre.LngLatBounds();

            // Add new markers
            searchResults.forEach((result) => {
                const coordinates = result.geometry.coordinates;
                // Ensure coordinates are in [lng, lat] format
                const [lng, lat] = coordinates;

                const popupContent = `
                    <div>
                        <h4>${result.properties.searchedItem}</h4>
                        <p>District: ${result.properties.district}</p>
                        <p>Municipality: ${result.properties.municipality}</p>
                        <p>Ward: ${result.properties.ward}</p>
                        <p>Distance: ${result.properties.distance.toFixed(2)} km</p>
                    </div>
                `;

                const marker = new maplibre.Marker({ color: "red" })
                    .setLngLat([lng, lat])
                    .setPopup(new maplibre.Popup().setHTML(popupContent))
                    .addTo(mapRef.current!);

                markersRef.current.push(marker);
                bounds.extend([lng, lat]);
            });

            // Only fit bounds if we have valid coordinates
            if (!bounds.isEmpty()) {
                mapRef.current.fitBounds(bounds, { padding: 50 });
            }
        }
    }, [searchResults]);

    // Handle danger zones
    useEffect(() => {
        if (mapRef.current && dangerZones.length > 0) {
            const map = mapRef.current;

            const geoJson = {
                type: "FeatureCollection",
                features: dangerZones.map((zone) => ({
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [zone.longitude, zone.latitude],
                    },
                    properties: {},
                })),
            } as GeoJSON.FeatureCollection;

            map.on("load", () => {
                if (!map.getSource("danger-zones")) {
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
                }
            });
        }
    }, [dangerZones]);

    // Debug logging
    useEffect(() => {
        if (searchResults.length > 0) {
            console.log('Search Results:', searchResults);
            searchResults.forEach((result, index) => {
                console.log(`Result ${index} coordinates:`, result.geometry.coordinates);
            });
        }
    }, [searchResults]);

    return (
        <div
            ref={mapContainerRef}
            style={{ width: "100%", height: "100vh" }}
        >
            {!userLocation && <p>Loading user location...</p>}
        </div>
    );
};

export default MapComponent;