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
    <div className="sticky">
      <input
        type="text"
        placeholder="Search gif"
        className="bg-white w-full mt-10 p-3 rounded  border-2   border-gray-600 text-black outline-0"
        onChange={(e) => setSearch(e.target.value)}
      />

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => handleClick()}
        className="float-right  text-black  mt-11  absolute -ml-28  rounded   text-1xl font-extrabold bg-gradient-to-br from-pink-400 to-red-600"
      >
        Search
      </motion.button>
    </div>
  );
};

export default SearchBar;
