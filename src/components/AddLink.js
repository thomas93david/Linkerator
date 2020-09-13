import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddLink.css";
import { createLink } from "../api";

import { Button, Card, Form, Col } from "react-bootstrap";

const AddLink = ({ setCreatedLink }) => {
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const [tags, setTags] = useState("");

  async function handleSubmit() {
    await createLink(link, new Date(), comment, tags);
    setCreatedLink(link);
    setLink("");
    setComment("");
    setTags("");
  }
  const updateLink = (event) => {
    setLink(event.target.value);
  };

  const updateComment = (event) => {
    setComment(event.target.value);
  };

  const updateTags = (event) => {
    setTags(event.target.value);
  };

  return (
    <div className="results">
      <div className="Link-List">
        <Card
          style={{
            textAlign: "center",
            fontSize: "16px",
            backgroundColor: "#00d1ff",
            width: "auto",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "24px" }}> Welcome to</Card.Title>

            <Card.Title style={{ fontSize: "36px" }}>
              {" "}
              Alpha-Linkerator!
            </Card.Title>
            <p>
              Simply fill out the form below with your favorite links and see
              your results in the cards
            </p>
            <p>FYI - seperate each tag with a space </p>
            <Form>
              <Form.Row>
                <Col xs={4}>
                  <Form.Control
                    placeholder="url"
                    value={link}
                    onChange={updateLink}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Tags"
                    value={tags}
                    onChange={updateTags}
                  />
                </Col>
                <Col xs={5}>
                  <Form.Control
                    placeholder="Comments"
                    value={comment}
                    onChange={updateComment}
                  />
                </Col>
                <Button variant="primary" size="sm" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddLink;
