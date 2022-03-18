import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Replies from "actions/reply";
const AddComment = ({
  setReplyInput,
  replyInput,
  setReplies,
  commentID,
  setShowReplyForm,
}) => {
  const handleSubmit = () => {
    Replies.addReply(commentID, replyInput, setReplies);
    setShowReplyForm(false);
  };

  return (
    <div>
      <div className="comment-input">
        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Add a new comment"
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Reply
          </Button>
        </Form.Group>
      </div>
    </div>
  );
};

export default AddComment;
