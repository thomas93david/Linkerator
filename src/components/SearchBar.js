import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";

import { Card, Form } from "react-bootstrap";

// import { fetchQueryResults } from "../api";

const SearchBar = ({ search, setSearchInput }) => {
  // const [queryString, setQueryString] = useState("");

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
          style={{ padding: "18px" }}
          src="https://picsum.photos/700/250"
        />
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                Need to add search functionality connected to LinkListings
              </Form.Label>
              <Form.Control
                id="keywords"
                type="text"
                placeholder="enter keywords..."
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchBar;
