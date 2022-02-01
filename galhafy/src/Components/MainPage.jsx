import React from "react";

import Header from "../Components/Header";
import GifsSection from "../Components/GifsSection";

const MainPage = () => {
  return (
    <>
      <Header />
      <GifsSection topic={"Trending"} limit={9} searchStyle={"trending"} />
      <GifsSection topic={"Emotional"} limit={9} searchStyle={"search"} />
      <GifsSection topic={"Sports"} limit={9} searchStyle={"search"} />
    </>
  );
};

export default MainPage;
