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

const App = () => {
  const [search, setSearchInput] = useState("");
  const [results, setResults] = useState("");

  return (
    <Router>
      <div className="App">
        <SearchBar search={search} setSearchInput={setSearchInput} />
        <SearchResults search={search} setSearchInput={setSearchInput} />
        <LinkListings results={results} setResults={setResults} />
      </div>
    </Router>
  );
};

export default App;
