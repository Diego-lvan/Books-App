import React from "react";

const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((userComment) => {
        const { username, comment, comment_id } = userComment;
        return (
          <>
            <h2>{username}</h2>
            <span>{comment} comment</span>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
