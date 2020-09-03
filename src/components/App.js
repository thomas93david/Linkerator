import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getSomething } from "../api";

const App = () => {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <SearchResults />
      </div>
    </Router>
  );
};

export default App;
