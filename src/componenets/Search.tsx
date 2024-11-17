import React, { useState, useEffect } from "react";
import axios from "axios";

interface SearchProps {
  handleSearch: (inputText: string) => void;
  searchResults: any;
}

const Search: React.FC<SearchProps> = ({ handleSearch, searchResults }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded shadow">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search places..."
          className="border border-gray-300 rounded px-2 py-1 w-64"
        />
        <button
          onClick={(e) => handleSearch(query)}
          className={`bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600`}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
