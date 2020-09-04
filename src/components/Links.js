import React from "react";
import "./Links.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Links = ({ id, url, tags, comment }) => {
  return (
    <div className="Links">
      <Card className="text-center">
        <Card.Header>{id}</Card.Header>
        <Card.Body>
          <Card.Title>{url}</Card.Title>
          <Card.Text>{comment}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{tags}</Card.Footer>
      </Card>
    </div>
  );
};

export default Links;
