import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LinkListings.css";

// import { getAllLinks } from "../../db";
import { Container, Col, Row } from "react-bootstrap";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// import { getLinks } from "../api";
import Links from "./Links";

const LinkListings = () => {
  // const [id, setId] = useState("");
  // const [url, setUrl] = useState("");
  // const [tags, setTags] = useState("");
  // const [comment, setComment] = useState("");

  const [urls, setUrls] = useState([]);
  const dummyLinks = [
    { link: "www.espn.com", clickCount: 1, comment: "Love watching sports" },
    { link: "www.youtube.com", clickCount: 1, comment: "Stream every video!" },
    { link: "www.hulu.com", clickCount: 1, comment: "Hulu has live sports" },
    {
      link: "www.fullstack.com",
      clickCount: 1,
      comment: "How should I react to this...",
    },
    {
      link: "www.google.com",
      clickCount: 1,
      comment: "world domination....soon..",
    },
  ];

  // async function previewLinkResult(event) {
  //   event.preventDefault();

  //   const dummyLinks = await getLinks({
  //     id,
  //     url,
  //     tags,
  //     comment,
  //   });
  //   setPreview(dummyLinks);
  // }

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
          {dummyLinks.map((url) => (
            <Links
              link={url.link}
              comment={url.comment}
              clickCount={url.clickCount}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LinkListings;
