import axios from "axios";

const API_ENDPOINT =
  "https://route-init.gallimap.com/api/v1/search/currentLocation";
// const ACCESS_TOKEN = "28c1ef6e-50c0-42c1-9cbf-b41516dd600e";
const ACCESS_TOKEN = "89a40903-b75a-46b6-822b-86eebad4fa36";

// Utility function for fetching search results
export const fetchSearchResults = async (
  query: string,
  lat: number,
  long: number
) => {
  try {
    const response = await axios.get(API_ENDPOINT, {
      params: {
        accessToken: ACCESS_TOKEN,
        name: query.trim(),
        currentLat: lat,
        currentLng: long,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
