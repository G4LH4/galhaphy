import React from "react";

import { Route, Switch, Redirect } from "wouter";

import SearchPage from "./SearchPage";
import Footer from "../Footer";

import LandPage from "./LandPage";

const MainPage = () => {
  return (
    <div className="w-2/4 p-10 mx-auto mt-10 font-mono text-white border-2 border-pink-500 rounded App bg-mainColor">
      <Switch>
        <Route path="/" component={LandPage}></Route>
        <Route
          path="/search/:search"
          component={(props) => <SearchPage searchTopic={props} />}
        />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default MainPage;
