import React, { useEffect, useState, useContext } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import URL from "config";
import axios from "axios";
import { addLike } from "utils/comments";
axios.defaults.withCredentials = true;
const Comment = ({ comment_id, username, comment, isbn }) => {
  const [likes, setLikes] = useState("");
  const getLikes = async () => {
    const res = await axios.get(`${URL}comment/like/${comment_id}`);
    setLikes(res.data.likes);
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <h2>{username}</h2>
      <span>{comment}</span>
      <AiTwotoneLike
        style={{ background: "none", cursor: "pointer" }}
        onClick={() => addLike(isbn, comment_id, setLikes, likes)}
      />
      <span>{likes}</span>
    </div>
  );
};

export default Comment;
