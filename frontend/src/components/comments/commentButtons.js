import React, { useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import AddReply from "components/Reply/AddReply";
import URL from "config";
import axios from "axios";
axios.defaults.withCredentials = true;
const CommentButtons = ({
  addLike,
  userLiked,
  isbn,
  commentID,
  setLikes,
  likes,
  setUserLiked,
  setShowReplyForm,
  showReplyForm,
  setReplies,
}) => {
  const [replyInput, setReplyInput] = useState("");

  return (
    <div>
      <div>
        <AiTwotoneLike
          style={{
            background: "none",
            cursor: "pointer",
            color: userLiked ? "#1465A2" : "",
          }}
          onClick={() => addLike(isbn, commentID, setLikes, likes, setUserLiked, userLiked)}
        />

        <span
          style={{ display: "inline-block", margin: "0 5px 0px 3px" }}
          className="col-xxl-1"
        >
          {likes > 0 ? likes : ""}
        </span>
        {showReplyForm !== null && (
          <span
            style={{ display: "inline-block", cursor: "pointer" }}
            className="col-xxl-3"
            onClick={() => setShowReplyForm(true)}
          >
            REPLY
          </span>
        )}
      </div>
      {showReplyForm && (
        <AddReply
          setReplyInput={setReplyInput}
          replyInput={replyInput}
          setReplies={setReplies}
          commentID={commentID}
          setShowReplyForm={setShowReplyForm}
        />
      )}
    </div>
  );
};

export default CommentButtons;
