/* eslint-disable react/prop-types */
import React from "react";
import { Title } from "./Header";
import GifsSection from "./GifsSection";

const SpecificGifsPage = ({ searchTopic }) => {
  const { params } = searchTopic;

  return (
    <div>
      <Title />
      <GifsSection topic={params.search} limit={9} searchStyle={"search"} />
    </div>
  );
};

export default SpecificGifsPage;
