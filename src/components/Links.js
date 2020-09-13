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
          width: "300px",
          height: "250px",
          color: "green",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h2>{link}</h2>
          </Card.Title>
          <p>{date}</p>
          <p>{comment}</p>
          <p>{tags.map((tag) => tag.tagName).join(", ")}</p>
          <p>{clickCount}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Links;
