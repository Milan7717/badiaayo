import React from 'react';
import maplibre from 'maplibre-gl';
import {SearchResult} from "../types/types.ts";

interface MapMarkerProps {
    map: maplibre.Map;
    result: SearchResult;
}

export const MapMarker: React.FC<MapMarkerProps> = ({map, result}) => {
    const {coordinates} = result.geometry;
    const popupContent = `
        <div>
            <h4>${result.properties.searchedItem}</h4>
            <p>District: ${result.properties.district}</p>
            <p>Municipality: ${result.properties.municipality}</p>
            <p>Ward: ${result.properties.ward}</p>
            <p>Distance: ${result.properties.distance.toFixed(2)} km</p>
        </div>
    `;

    return new maplibre.Marker({color: "red"})
        .setLngLat(coordinates)
        .setPopup(new maplibre.Popup().setHTML(popupContent))
        .addTo(map);
};