import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Comments from "actions/comments";
const AddComment = ({ setComments, buttonText, comment, setComment }) => {
  const { isbn } = useParams();
  return (
    <div>
      <h3>Comments</h3>
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
            onClick={() => Comments.addComment(comment, isbn, setComments, setComment)}
          >
            {buttonText}
          </Button>
        </Form.Group>
      </div>
    </div>
  );
};

export default AddComment;
