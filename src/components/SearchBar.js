import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";

import { Button, Card, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getSomething } from "../api";

const SearchBar = ({ setResults }) => {
  const [url, setUrl] = useState("");

  const urlNameChange = (event) => {
    setUrl(event.target.value);
  };

  async function searchUrlResult(event) {
    event.preventDefault();
    const url = await getSomething({});
    setResults(url);
  }
  return (
    <div className="link-search">
      <Card
        style={{
          color: "black",
          backgroundColor: "#00fff0",
          width: "600px",
        }}
      >
        <Card.Img src="https://picsum.photos/550/200" />
        <Card.Body>
          <Card.Title style={{ fontSize: "36px" }}>Linkerator</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Welcome! Begin by searching ANY url</Form.Label>
              <Form.Control type="text" placeholder="url link" />
            </Form.Group>
          </Form>
          <Button type="submit" variant="primary" size="lg">
            Link
          </Button>
        </Card.Body>
      </Card>
      <div className="api-container">{/* <h2>{message}</h2> */}</div>
    </div>
  );
};

export default SearchBar;
