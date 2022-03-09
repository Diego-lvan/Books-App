import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { addComment } from "utils/comments";
const AddComment = ({ comments, setComments, getComments }) => {
  const [comment, setComment] = useState("");
  const { isbn } = useParams();
  console.log(isbn);

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
          <Button
            variant="primary"
            type="button"
            onClick={() => addComment(comment, isbn, setComments)}
          >
            Comment
          </Button>
        </Form.Group>
      </div>
    </div>
  );
};

export default AddComment;
