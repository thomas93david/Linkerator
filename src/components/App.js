import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import LinkListings from "./LinkListings";
import "./App.css";
// import axios from "axios";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [search, setSearchInput] = useState();
  const [form, setForm] = useState("");
  // const [url, setUrl] = useState([]);

  // useEffect(() => {
  //   getLinks();
  // }, []);

  return (
    <Router>
      <div className="App">
        <SearchBar search={search} setSearchInput={setSearchInput} />
        <SearchResults form={form} setForm={setForm} />
        <LinkListings />
      </div>
    </Router>
  );
};

export default App;
