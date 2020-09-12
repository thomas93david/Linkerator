import React from "react";
import { Card } from "react-bootstrap";
import "./Links.css";

const Links = ({ link, comment, clickCount, tags }) => {
  return (
    <div className="Links">
      <Card
        className="text-center"
        style={{
          margin: "9px",
          width: "250px",
          height: "200px",
          color: "green",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h2>{link}</h2>
          </Card.Title>
          <p>{tags}</p>
          <p>{comment}</p>
          <p>{clickCount}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Links;
