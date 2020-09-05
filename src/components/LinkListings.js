import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";

// import { getAllLinks } from "../../db";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

import { getLinks } from "../api";

import Links from "./Links";

const LinkListings = ({ setPreview }) => {
  const [id, setId] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  const [comment, setComment] = useState("");
  // const data = getLinks();
  // console.log(data);
  // results = getLinks();
  // console.log(results);

  async function previewLinkResult(event) {
    event.preventDefault();

    const dummyLinks = await getLinks({
      id,
      url,
      tags,
      comment,
    });
    setPreview(dummyLinks);
  }

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
            {setPreview.map(({ id, url, tags, comment }) => (
              <Links key={id} />
            ))}
          </Col>
        </Row>
        <Form onSubmit={previewLinkResult}>
          <Button type="submit"> Preview</Button>
        </Form>
      </Container>
    </div>
  );
};

export default LinkListings;
