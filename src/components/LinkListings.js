import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";
import { getLinks } from "../api";
import Links from "./Links";
import { Container, Row } from "react-bootstrap";

const LinkListing = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getLinks()
      .then((response) => {
        setLinks(response.allLinks);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
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
          {links.map((link) => (
            <Links 
              key = {link.id}
              // tags = {link.tags}
              link={link.url} 
              comment={link.comment} 
              clickCount={link.clickCount} 
            />
          ))}
        </Row>
      </Container>
    </div>
    );}

  export default LinkListing;