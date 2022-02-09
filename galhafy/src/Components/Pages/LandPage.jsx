import React from "react";
import { Header } from "../Header";
import GifsSection from "../GifsSection";

const LandPage = () => {
  return (
    <>
      <Header />
      <GifsSection topic={"Trending"} limit={9} searchStyle={"trending"} />
      <GifsSection topic={"jk"} limit={9} searchStyle={"search"} />
      <GifsSection topic={"nervous"} limit={9} searchStyle={"search"} />
      <GifsSection topic={"High five"} limit={9} searchStyle={"search"} />
      <GifsSection topic={"nba"} limit={9} searchStyle={"search"} />
      <GifsSection topic={"football"} limit={9} searchStyle={"search"} />
    </>
  );
};

export default LandPage;
