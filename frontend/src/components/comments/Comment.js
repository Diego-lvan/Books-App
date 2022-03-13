import React, { useEffect, useState, useContext } from "react";
import URL from "config";
import axios from "axios";
import { addLike, getLikes } from "utils/comments";
import { AppContext } from "App";
import userDefault from "assets/img/user.png";
import AddComment from "components/comments/AddComment";
import CommentButtons from "components/comments/commentButtons";
import Replies from "components/Reply/Replies";
axios.defaults.withCredentials = true;
const Comment = ({ comment_id, username, comment, isbn, user_id, user_img }) => {
  const [likes, setLikes] = useState("");
  const { logged } = useContext(AppContext);
  const [userLiked, setUserLiked] = useState();
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replies, setReplies] = useState([]);
  const userID = logged.userID;

  const userAlreadyLiked = (usersID) => {
    if (!usersID) return false;
    return usersID.find(({ user_id }) => user_id == userID);
  };

  useEffect(() => {
    getLikes(userAlreadyLiked, comment_id, setUserLiked, setLikes);
  }, []);

  return (
    <div style={{ margin: "10px 0" }} className="col-xxl-8">
      <div className="user-info" style={{ display: "flex", alignItems: "center" }}>
        <img
          alt=""
          style={{ width: "40px", borderRadius: "50%" }}
          src={`${URL}users/${user_img}`}
          onError={(e) => (e.target.src = userDefault)}
        ></img>
        <h5 style={{ display: "inline-block", marginLeft: "8px" }}>{username}</h5>
      </div>

      <span style={{ display: "block" }}>{comment}</span>
      <CommentButtons
        addLike={addLike}
        userLiked={userLiked}
        isbn={isbn}
        commentID={comment_id}
        setLikes={setLikes}
        likes={likes}
        setUserLiked={setUserLiked}
        setShowReplyForm={setShowReplyForm}
        showReplyForm={showReplyForm}
        setReplies={setReplies}
      />
      <Replies replies={replies} setReplies={setReplies} commentID={comment_id} />
    </div>
  );
};

export default Comment;
