import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import AddLink from "./AddLink";
import LinkListings from "./LinkListings";
import "./App.css";

 import {
  BrowserRouter as Router,
  // Route,
  // Switch,
  // Redirect,
} from "react-router-dom"; 

const App = () => {
  const [search, setSearchInput] = useState("");
  const [results, setResults] = useState("");
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
