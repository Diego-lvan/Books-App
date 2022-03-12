import React, { useEffect, useState, useContext } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import URL from "config";
import axios from "axios";
import { addLike } from "utils/comments";
import { AppContext } from "App";
import userDefault from "assets/img/user.png";

axios.defaults.withCredentials = true;
const Comment = ({ comment_id, username, comment, isbn, user_id, user_img }) => {
  const [likes, setLikes] = useState("");
  const { logged } = useContext(AppContext);
  const [userLiked, setUserLiked] = useState();
  const userID = logged.userID;
  const getLikes = async () => {
    const res = await axios.get(`${URL}comment/like/${comment_id}`);
    console.log(res.data.users);
    if (userAlreadyLiked(res.data.users)) {
      setUserLiked(true);
    }

    setLikes(res.data.likes);
  };
  const userAlreadyLiked = (usersID) => {
    console.log(userID);
    if (!usersID) return false;
    return usersID.find(({ user_id }) => user_id == userID);
  };
  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <img
        alt=""
        style={{ width: "40px", borderRadius: "50%" }}
        src={`${URL}users/${logged.img}`}
        onError={(e) => (e.target.src = userDefault)}
      ></img>
      <h2 style={{ display: "inline-block" }}>{username}</h2>
      <span style={{ display: "block" }}>{comment}</span>
      <AiTwotoneLike
        style={{
          background: "none",
          cursor: "pointer",
          color: userLiked ? "#1465A2" : "",
        }}
        onClick={() => addLike(isbn, comment_id, setLikes, likes, setUserLiked, userLiked)}
      />
      <span>{likes}</span>
    </div>
  );
};

export default Comment;
