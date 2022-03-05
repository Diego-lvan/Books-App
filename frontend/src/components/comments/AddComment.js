import React, { useEffect, useState, useContext } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import URL from "../../config";
import { AppContext } from "../../App";
const AddComment = ({ comments, setComments, getComments }) => {
  const [comment, setComment] = useState("");
  const { isbn } = useParams();
  const { loading, setLoading } = useContext(AppContext);
  const addComment = async () => {
    setLoading(true);
    const res = await axios.post(`${URL}comment`, { comment, isbn });
    await getComments(isbn, URL, setLoading);
    setLoading(false);
  };

  return (
    <div>
      <div className="comment-input">
        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Add a new comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="button" onClick={addComment}>
            Comment
          </Button>
        </Form.Group>
      </div>
    </div>
  );
};

export default AddComment;
