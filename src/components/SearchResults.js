import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchResults.css";

import { Button, Card, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getSomething } from "../api";

const SearchResults = ({}) => {
  return (
    <div className="results">
      <div className="Link-List">
        <Card
          style={{
            textAlign: "center",
            fontSize: "16px",
            backgroundColor: "#00d1ff",
            width: "550px",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "36px" }}> URL Results</Card.Title>
            <Form>
              <Form.Group>
                <Form.Label>Links</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default SearchResults;
