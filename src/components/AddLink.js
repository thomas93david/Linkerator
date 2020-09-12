import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddLink.css";

import { Button, Card, Form, Col } from "react-bootstrap";

import { getLinks } from "../api";


const SearchResults = ({ search, setSearchInput }) => {
const [Links, setLinks] = useState("");
  console.log (Links);    //test only remove later
  useEffect(() => {
    getLinks()
      .then((response) => {
        setLinks(response.allLinks);
      })
      .catch((error) => {
        console.log(error.message);
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
  );}


export default SearchResults;
