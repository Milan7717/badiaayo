import React, { useState, useEffect } from "react";
import axios from "axios";

interface SearchProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void;
  userLocation?: { lat: number; lng: number }; // Optional user location
  setUserLocation?: (location: { lat: number; lng: number }) => void; // Optional setter for user location
}

const Search: React.FC<SearchProps> = ({
  onLocationSelect,
  userLocation = { lat: 0, lng: 0 },
  setUserLocation,
}) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLocation, setSearchLocation] = useState(userLocation);

  const API_ENDPOINT =
    "https://route-init.gallimap.com/api/v1/search/currentLocation";
  const ACCESS_TOKEN = "28c1ef6e-50c0-42c1-9cbf-b41516dd600e";

  // Utility function for fetching search results
  const fetchSearchResults = async () => {
    try {
      const response = await axios.get(API_ENDPOINT, {
        params: {
          accessToken: ACCESS_TOKEN,
          name: query.trim(),
          currentLat: userLocation.lat,
          currentLng: userLocation.lng,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  };

  // Handle search logic
  const handleSearch = async () => {
    if (!query.trim()) {
      console.error("Search query cannot be empty.");
      return;
    }

    setLoading(true);

    try {
      const results = await fetchSearchResults();

      if (results && results[0]) {
        const location = {
          lat: results[0].latitude,
          lng: results[0].longitude,
        };

        onLocationSelect(location);
        setUserLocation?.(location);
      } else {
        console.warn("No search results found.");
      }
    } catch (error) {
      console.error("Search failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Update `searchLocation` when `userLocation` changes
  useEffect(() => {
    setSearchLocation(userLocation);
  }, [userLocation]);

  return (
    <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded shadow">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search places..."
          className="border border-gray-300 rounded px-2 py-1 w-64"
        />
        <button
          onClick={handleSearch}
          disabled={!searchLocation?.lat || !searchLocation?.lng || loading}
          className={`bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 ${
            (!searchLocation?.lat || !searchLocation?.lng || loading) &&
            "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      {!searchLocation?.lat && !searchLocation?.lng && (
        <p className="text-red-500 mt-2">
          Unable to fetch user location. Please ensure location services are
          enabled.
        </p>
      )}
    </div>
  );
};

export default Search;
