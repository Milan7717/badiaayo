import React, { useState } from "react";
import MapComponent from "../componenets/GalliMap";
import Search from "../componenets/Search";



const Home = () => {
  const [searchedLocation, setSearchedLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  return (
    <div className="min-h-screen w-full relative">
      {/* Map Component */}
      <MapComponent />
{/* 
      Search Component
      <Search onLocationSelect={setSearchedLocation} /> */}
    </div>
  );
};

export default Home;
