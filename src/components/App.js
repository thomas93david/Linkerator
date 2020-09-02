import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Button, Card, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getSomething } from "../api";

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
        <div className="App-Header">
          <Card style={{ color: "black" }}>
            <Card.Img src="https://picsum.photos/550/200" />
            <Card.Body>
              <Card.Title style={{ fontSize: "36px" }}>Linkerator</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label>Welcome! Begin by searching ANY url</Form.Label>
                  <Form.Control type="text" placeholder="url link" />
                </Form.Group>
              </Form>
              <Button type="submit">Submit</Button>
            </Card.Body>
          </Card>
          <div className="App-container">
            <h2>{message}</h2>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
