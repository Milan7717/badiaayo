import axios from 'axios';
import {ENV} from '../config/env';
import {DangerZone, Location} from "../types/types.ts";

const apiClient = axios.create({
    baseURL: ENV.API_BASE_URL
});

const searchApiClient = axios.create({
    baseURL: ENV.SEARCH_API_URL
});

export const mapService = {
    getDangerZones: async (location: Location): Promise<DangerZone[]> => {
        const {data} = await apiClient.get('/getdangerzones/', {
            params: {
                lat: location.lat,
                lng: location.lng,
            }
        });
        return data;
    },

    searchLocations: async (query: string, currentLocation: Location) => {
        const {data} = await searchApiClient.get('/currentLocation', {
            params: {
                accessToken: ENV.MAP_ACCESS_TOKEN,
                name: query,
                currentLat: currentLocation.lat,
                currentLng: currentLocation.lng,
            }
        });
        return data;
    }
};