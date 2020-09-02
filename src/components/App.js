import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSomething } from "../api";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import "./App.css";

import { Button, Card, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getSomething()
      .then((response) => {
        setMessage(response.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  });

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
