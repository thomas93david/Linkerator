import React from "react";
import { Card } from "react-bootstrap";
import "./Links.css";

const Links = ({ link, comment, date, clickCount, tags }) => {
  return (
    <div className="Links">
      <Card
        className="text-center"
        style={{
          margin: "9px",
          width: "275px",
          height: "250px",
          color: "black",
          backgroundColor: "#ffd717",
        }}
      >
        <Card.Body>
          <p>Link: {link}</p>
          <p>Submit-Date: {date}</p>
          <p>Comment: {comment}</p>
          <p>Tags: {tags.map((tag) => tag.tagName).join(", ")}</p>
          <p>Click-Count: {clickCount}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Links;
