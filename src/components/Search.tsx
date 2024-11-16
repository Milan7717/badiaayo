import React, {useState, useEffect} from "react";
import axios from "axios";

interface SearchProps {
    onLocationSelect: (location: { lat: number; lng: number }) => void;
}

const Search: React.FC<SearchProps> = ({onLocationSelect}) => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(
        null
    );

    // Fetch user's current location on component mount
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error obtaining user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleSearch = async () => {
        if (!query.trim() || !currentLocation) {
            console.error("Query or current location is missing.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.get(
                `https://route-init.gallimap.com/api/v1/search/currentLocation`,
                {
                    params: {
                        accessToken: "28c1ef6e-50c0-42c1-9cbf-b41516dd600e",
                        name: query,
                        currentLat: currentLocation.lat,
                        currentLng: currentLocation.lng,
                    },
                }
            );

            console.log("Search response:", response.data);
            onLocationSelect(response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }
    };

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
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    disabled={!currentLocation}
                >
                    {loading ? "Loading..." : "Search"}
                </button>
            </div>
            {!currentLocation && (
                <p className="text-red-500 mt-2">Unable to fetch user location. Please try again.</p>
            )}
        </div>
    );
};

export default Search;
