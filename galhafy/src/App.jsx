import React from "react";
import "./App.css";
import MainPage from "./Components/MainPage";
import { Route, Switch } from "wouter";

import SearchPage from "./Components/SearchPage";
import Footer from "./Components/Footer";
import ErrorStatus from "./Components/ErrorStatus";
import NotFoundGif from "./img/404.gif";

function App() {
  return (
    // esto es raro no  lo hagas aqui el layout
    <div className="w-2/4 p-10 mx-auto mt-10 font-mono text-white border-2 border-pink-500 rounded App bg-mainColor">
      <Switch>
        <Route path="/" component={MainPage}></Route>
        <Route
          path="/search/:search"
          component={(props) => <SearchPage searchTopic={props} />}
        />
        <Route>
          <ErrorStatus title={"404"} src={NotFoundGif} />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

// espera que primero le hago un commit XD
