import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import AddLink from "./AddLink";
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
  const [newLink, setNewLink] = useState("");

  return (
    <Router>
      <div className="App">
        <SearchBar search={search} setSearchInput={setSearchInput} />
        <AddLink newLink={newLink} setNewLink={setNewLink} />
        <LinkListings results={results} setResults={setResults} />
      </div>
    </Router>
  );
};

export default App;
