import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";

import { Card, Form } from "react-bootstrap";

import { fetchQueryResults } from "../api";

const SearchBar = ({ setSearchInput }) => {
  const [queryString, setQueryString] = useState("");
  // const [comments, setComments] = useState([]);
  // const [tags, setTags] = useState([]);

  // useEffect(() => {
  //   Promise.all([
  //     fetchAllTags(),
  //     fetchAllComments()
  //   ])
  //   .then(([tags, comments]) => {
  //     setTags(tags);
  //     setComments(comments);
  //   })
  //   .catch(console.error);
  // }, []);

  // const urlNameChange = (event) => {
  //   setSearchInput(event.target.value);
  // };

  // async function searchUrlResult(event) {
  //   event.preventDefault();
  //   setSearchInput(event.target.value);
  // }

  return (
    <div className="link-search">
      <Card
        style={{
          color: "black",
          backgroundColor: "#00fff0",
          width: "600px",
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
          src="https://picsum.photos/600/150"
        />
        <Card.Body>
          <Form
            onChange={async (event) => {
              event.preventDefault();

              try {
                const results = await fetchQueryResults();
                setSearchInput(results);
              } catch (error) {
                console.error();
              } finally {
              }
            }}
          >
            <Form.Group>
              <Form.Label>
                Need to add search functionality connected to LinkListings
              </Form.Label>
              <Form.Control
                id="keywords"
                type="text"
                placeholder="enter keywords..."
                value={queryString}
                onChange={(event) => setQueryString(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchBar;
