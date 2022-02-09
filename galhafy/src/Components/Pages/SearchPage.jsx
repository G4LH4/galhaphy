/* eslint-disable react/prop-types */
import React from "react";
import { Header } from "../Header";
import GifsSection from "../GifsSection";

const SearchPage = ({ searchTopic }) => {
  const { params } = searchTopic;

  return (
    <div>
      <Header />
      <GifsSection topic={params.search} limit={9} searchStyle={"search"} />
    </div>
  );
};

export default SearchPage;
