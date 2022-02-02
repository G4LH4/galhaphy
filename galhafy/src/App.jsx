import React from "react";
import "./App.css";
import MainPage from "./Components/MainPage";

import { Router, Route } from "wouter";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="w-2/4 p-10 mx-auto mt-10 font-mono text-white border-2 border-pink-500 rounded App bg-mainColor">
      <Router>
        <Route path="/" component={MainPage}></Route>
        <Route
          path="/search/:search"
          component={(props) => <SearchPage searchTopic={props} />}
        ></Route>
      </Router>

      <h6 className="mt-10 text-left">
        Created with ♥ by
        <a href="https://github.com/G4LH4" target="_BLANK" rel="noreferrer">
          G4LH4
        </a>
      </h6>
    </div>
  );
}

export default App;
