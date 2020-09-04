import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import LinkListings from "./LinkListings";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getSomething } from "../api";

const App = () => {
  const [search, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  return (
    <Router>
      <div className="App">
        <SearchBar search={search} setSearchInput={setSearchInput} />
        <SearchResults search={search} setSearchInput={setSearchInput} />
        <LinkListings />
      </div>
    </Router>
  );
};

export default App;
