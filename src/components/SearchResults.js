import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchResults.css";

import { Button, Card, Form, Col, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getSomething } from "../api";

const SearchResults = ({ search, setSearchInput }) => {
  const [links, setLinks] = useState([]);
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState("");

  const onTagClick = (event) => {
    event.preventDefault();
    setSearchInput(event.target.name);
  };

  useEffect(() => {
    getSomething()
      .then((response) => {
        setLinks(response.allLinks);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  return (
    <div className="results">
      <div className="Link-List">
        <Card
          style={{
            textAlign: "center",
            fontSize: "16px",
            backgroundColor: "#00d1ff",
            width: "auto",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "36px" }}> Link-it!</Card.Title>
            <Form>
              <Form.Row>
                <Col xs={4}>
                  <Form.Control placeholder="Url" />
                </Col>
                <Col>
                  <Form.Control placeholder="Tags" />
                </Col>
                <Col xs={5}>
                  <Form.Control placeholder="Comments" />
                </Col>
                <Button variant="primary" size="sm">
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

/* <div className="api-container">
  {links
    .filter((links) => {
      const linksLowerCased = links.url.toLowerCase();
      if (linksLowerCased.includes(search.toLowerCase())) {
        return true;
      }
      const tagsInclude = links.tags.filter((tag) => {
        const tagsLowerCased = tag.tags.toLowerCase();
        if (tagsLowerCased.includes(search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      if (tagsInclude.length > 0) {
        return true;
      }
      return false;
    })

    .map((links, index) => (
      <div key={index} className="ps">
        <h3>
          <p>
            <a href={links.link} key={`${index}_link`} target="_new">
              <button id="linkbutton">
                <p>{links.link}</p>
              </button>
            </a>
          </p>
        </h3>
        <p>Added on: {links.date}</p>
        <p>Comments:{links.comment}</p>
        <p>Number of clicks:{links.clicks}</p>
        <div>
          Tagged as:
          {links.tags.map((tags, index) => (
            <button
              id="linktag"
              key={index}
              name={tags.name}
              onClick={onTagClick}
            >
              {tags.name}
            </button>
          ))}{" "}
        </div>
      </div>
    ))}{" "}
</div>; */

export default SearchResults;
