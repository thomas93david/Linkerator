import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import LinkListings from "./LinkListings";
import "./App.css";
import { getLinks, getTags } from "../api";

import {
  BrowserRouter as Router,
  // Route,
  // Switch,
  // Redirect,
} from "react-router-dom";

const App = () => {
  const [results, setResults] = useState("");
  const [search, setSearchInput] = useState("");

  return (
    <Router>
      <div className="App">
        {/* <SearchBar /> */}
        <SearchResults search={search} setSearchInput={setSearchInput} />
        <LinkListings results={results} setResults={setResults} />
      </div>
    </Router>
  );
};

export default App;
