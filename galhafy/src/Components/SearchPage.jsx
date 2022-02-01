import React from "react";

import Header from "../Components/Header";
import GifsSection from "../Components/GifsSection";
import { Router, Route } from "wouter";

const SearchPage = ({ searchTopic }) => {
  return (
    <Router>
      <Route
        path={`/search/${searchTopic}`}
        component={
          <>
            <Header />
            <GifsSection
              topic={searchTopic}
              limit={9}
              searchStyle={"trending"}
            />
          </>
        }
      ></Route>
    </Router>
  );
};

export default SearchPage;
