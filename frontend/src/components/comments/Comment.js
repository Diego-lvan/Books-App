import React, { useEffect, useState, useContext } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import URL from "config";
import axios from "axios";
import { addLike } from "utils/comments";
import { AppContext } from "App";
axios.defaults.withCredentials = true;
const Comment = ({ comment_id, username, comment, isbn, user_id }) => {
  const [likes, setLikes] = useState("");
  const { logged } = useContext(AppContext);
  const [userLiked, setUserLiked] = useState();
  const userID = logged.user_id;
  const getLikes = async () => {
    const res = await axios.get(`${URL}comment/like/${comment_id}`);
    if (userAlreadyLiked(res.data.users)) {
      setUserLiked(true);
    }

    setLikes(res.data.likes);
  };
  const userAlreadyLiked = (usersID) => {
    if (!usersID) return false;
    return usersID.find(({ user_id }) => user_id === userID);
  };
  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <h2>{username}</h2>
      <span>{comment}</span>
      <AiTwotoneLike
        style={{
          background: "none",
          cursor: "pointer",
          color: userLiked ? "#1465A2" : "",
        }}
        onClick={() => addLike(isbn, comment_id, setLikes, likes, setUserLiked)}
      />
      <span>{likes}</span>
    </div>
  );
};

export default Comment;
