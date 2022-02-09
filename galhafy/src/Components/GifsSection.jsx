import React from "react";
import CreateGifs from "./CreateGifs";

const GifsSection = ({ topic, limit, searchStyle }) => {
  return (
    <>
      <CreateGifs topic={topic} limit={limit} searchStyle={searchStyle} />
    </>
  );
};

export default GifsSection;
