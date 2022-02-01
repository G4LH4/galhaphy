import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className={` top-0 bg-black z-10`} id="header">
      <div className="w-1/3 text-left">
        <h1 className="text-4xl pt-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
          GALHAPHY
        </h1>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
