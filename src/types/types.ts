export interface SearchResult {
    type: string;
    properties: {
        distance: number;
        district: string;
        municipality: string;
        province: string;
        searchedItem: string;
        ward: string;
    };
    geometry: {
        type: string;
        coordinates: [number, number];
    };
}

export interface Location {
    lat: number;
    lng: number;
}

export interface DangerZone {
    latitude: number;
    longitude: number;
}