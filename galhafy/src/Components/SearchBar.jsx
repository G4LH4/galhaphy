import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import MotionBtn from "./MotionBtn";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const [location, setLocation] = useLocation();

  const [isError, setIsError] = useState({
    error: false,
    errorMSG: "",
  });

  const handleClick = () => {
    if (search === undefined) {
      console.log("Invalid search length");

      // throw new Error("Invalid search length");

      setIsError({
        error: true,
        errorMSG: "Invalid search length",
      });

      setTimeout(() => {
        setIsError({
          error: false,
          errorMSG: "",
        });
      }, 3000);
    }

    console.log(search);

    setLocation(`/search/${search}`);
  };

  return (
    <div id="search-bar">
      <input
        type="text"
        placeholder="Search gif"
        className="w-full p-3 mt-10 text-black bg-white border-2 border-gray-600 rounded-xl outline-0"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <MotionBtn title={"Search"} fn={handleClick} />

      {/* {isError.error && (
        <div
          id="errorMSG"
          className="p-1 mx-auto mt-4 bg-red-500 w-fit rounded-xl"
        >
          <p>{isError.errorMSG}</p>
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
