import React from "react";
import "./App.css";
import MainPage from "./Components/MainPage";

import { Router, Route } from "wouter";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="App text-white mt-10 w-2/4  mx-auto font-mono border-2 p-2 rounded  border-gray-600 ">
      <Router>
        <Route path="/" component={MainPage}></Route>
        <Route path="/search/search/:search" component={SearchPage}></Route>
      </Router>
    </div>
  );
}

export default App;
