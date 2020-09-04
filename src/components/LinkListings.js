import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";

import { Container, Col, Row } from "react-bootstrap";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// import { getSomething } from "../api";

// import Links from "./Links";

const LinkListings = ({ results }) => {
  return (
    <div className="link-container">
      <Container
        style={{
          width: "900px",
          height: "700px",
          backgroundColor: "purple",
        }}
        fluid
      >
        <Row>
          <Col>
            <p>This is where we will filter and map the results </p>
            {/* {results.map((result) => (
              <Links key={result.id} />
            ))} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LinkListings;
