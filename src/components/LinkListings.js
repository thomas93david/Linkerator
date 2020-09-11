import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";
import Links from "./Links";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
// import { getLinks } from "../api";

const LinkListings = () => {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    getLinks();
  }, []);

  async function getLinks() {
    try {
      const { data } = await axios.get("/routes/links");
      console.log(data);
      setUrl(data.allLinks);
      // return data;
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="link-container">
      <Container
        style={{
          width: "auto",
          height: "700px",
          backgroundColor: "purple",
        }}
        fluid
      >
        <Row>
          {url.map((url) => (
            <Links
              link={url.url}
              comment={url.comment}
              // tags={url.tags}
              clickCount={url.clickCount}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LinkListings;
