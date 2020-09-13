import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";
import Links from "./Links";
import { Container, Row, Card } from "react-bootstrap";
import { getLinks } from "../api";

const LinkListing = ({ createdLink }) => {
  const [allLinksData, setAllLinksData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getLinks();
      setAllLinksData(result.allLinks);
    }
    fetchData();
  }, [createdLink]);

  useEffect(() => {
    setFilteredLinks(
      allLinksData.filter((link) => {
        return (
          link.url.toLowerCase().includes(search.toLowerCase()) ||
          link.tags.filter((tag) => {
            return tag.tagName.toLowerCase().includes(search.toLowerCase());
          }).length > 0
        );
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
          display: "flex",
          justifyContent: "center",
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
              tags={link.tags}
              date={link.date}
              clickCount={link.clickCount}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LinkListing;
