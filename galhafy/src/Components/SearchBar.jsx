import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const SearchBar = () => {
  const [search, setSearch] = useState();
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setLocation(`/search/${search}`);
  };

  return (
    <div id="search-bar">
      <input
        type="text"
        placeholder="Search gif"
        className="w-full p-3 mt-10 text-black bg-white border-2 border-gray-600 rounded-xl outline-0"
        onChange={(e) => setSearch(e.target.value)}
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleClick()}
        className="absolute float-right p-1 mt-12 -ml-24 text-xl text-white rounded bg-gradient-to-br from-pink-400 to-red-600"
      >
        Search
      </motion.button>
    </div>
  );
};

export default SearchBar;
