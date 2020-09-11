import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";
import { getLinks } from "../api";
import Links from "./Links";
import { Container, Row } from "react-bootstrap";


// import { getAllLinks } from "../../db";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// import { getLinks } from "../api";


const LinkListing = () => {
  //const SearchResults = ({ search, setSearchInput }) => {
  const [links, setLinks] = useState([]);

  console.log ("Link data into SearchResults ", links);    //test only remove later
  useEffect(() => {
    getLinks()
      .then((response) => {
        setLinks(response.allLinks);
        console.log ("Links inside of useEffect ", response.allLinks)
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