import React from "react";
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
