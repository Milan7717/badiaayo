import {useState} from "react";
import MapComponent from "../components/Map.tsx";
import Search from "../components/Search";
import {SearchResult} from "../types/types.ts";

const Home = () => {
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const handleLocationSelect = (results: any) => {
        if (results.success && results.data?.features) {
            setSearchResults(results.data.features);
        }
    };

    return (
        <div className="min-h-screen w-full relative">
            <MapComponent searchResults={searchResults}/>
            <Search onLocationSelect={handleLocationSelect}/>
        </div>
    );
};

export default Home;