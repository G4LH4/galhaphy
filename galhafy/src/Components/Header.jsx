import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "wouter";

const Title = () => {
  return (
    <div className="mx-auto w-fit">
      <Link to={"/"}>
        <h1 className="pt-8 text-5xl font-extrabold text-left text-transparent cursor-pointer hover:animate-bounce md:text-7xl bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
          GALHAPHY
        </h1>
      </Link>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-mainColor" id="header">
      <Title />
      <SearchBar />
    </div>
  );
};
