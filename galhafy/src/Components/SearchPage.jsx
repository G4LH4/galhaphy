/* eslint-disable react/prop-types */
import React from "react";
import { Title } from "./Header";
import GifsSection from "../Components/GifsSection";

const SearchPage = ({ searchTopic }) => {
  const { params } = searchTopic;

  return (
    <div>
      <Title />
      <GifsSection topic={params.search} limit={9} searchStyle={"search"} />
    </div>
  );
};

export default SearchPage;
