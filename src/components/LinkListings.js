import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";
import { getLinks, getTags } from "../api";
import Links from "./Links";
import { Container, Row, Card } from "react-bootstrap";
import axios from "axios";

const LinkListing = () => {
  const [allLinksData, setAllLinksData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]);

  // import Links from routes/links
  async function getLinks() {
    try {
      const { data } = await axios.get("/routes/links");
      setAllLinksData(data.allLinks);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getLinks();
  }, []);

  useEffect(() => {
    setFilteredLinks(
      allLinksData.filter((link) => {
        return link.url.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, allLinksData]);

  return (
    <div className="link-container">
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
          <h1>Linkerator</h1>
        </Card.Title>
        <Card.Img
          style={{ padding: "18px" }}
          src="https://picsum.photos/600/150"
        />
        <Card.Body>
          <form className="search-form">
            <input
              className="search-bar"
              type="text"
              placeholder="enter keywords..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </Card.Body>
      </Card>
      <Container
        style={{
          width: "auto",
          height: "700px",
        }}
        fluid
      >
        <Row>
          {filteredLinks.map((link) => (
            <Links
              key={link.id}
              link={link.url}
              comment={link.comment}
              clickCount={link.clickCount}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LinkListing;
