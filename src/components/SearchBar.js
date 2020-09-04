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

const SearchBar = ({ setResults, search, setSearchInput }) => {
  const urlNameChange = (event) => {
    setSearchInput(event.target.value);
  };

  async function searchUrlResult(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  return (
    <div className="link-search">
      <Card
        style={{
          color: "black",
          backgroundColor: "#00fff0",
          width: "900px",
        }}
      >
        <Card.Title
          style={{
            fontSize: "36px",
            paddingTop: "9px",
          }}
        >
          {" "}
          Linkerator
        </Card.Title>
        <Card.Img
        // style={{ padding: "18px" }}
        // src="https://picsum.photos/800/150"
        />
        <Card.Body>
          <Form onSubmit={setSearchInput}>
            <Form.Group>
              <Form.Label>Welcome! Begin by searching ANY url</Form.Label>
              <Form.Control
                type="text"
                placeholder="text"
                value={search}
                onChange={urlNameChange}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchBar;
