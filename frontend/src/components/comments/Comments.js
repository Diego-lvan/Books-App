import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Comment from "./Comment";
import "bootstrap/dist/css/bootstrap.min.css";
const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.comment_id} {...comment} />
      ))}
    </div>
  );
};

export default Comments;
