import React, { useEffect, useState, useContext } from "react";
import defaultUser from "assets/img/user.png";
import URL from "config";
import axios from "axios";
import { AiTwotoneLike } from "react-icons/ai";
import { AppContext } from "App";
axios.defaults.withCredentials = true;
const Reply = ({ user_img, username, reply, replyID }) => {
  const { logged } = useContext(AppContext);
  const [likes, setLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const getLikes = async () => {
    const res = await axios.get(`${URL}reply/likes/${replyID}`);
    setLikes(res.data.likes.length);
    if (userAlreadyLiked(res.data.likes)) {
      setUserLiked(true);
    }
  };

  const userAlreadyLiked = (usersID) => {
    if (!usersID) return false;
    return usersID.find(({ user_id }) => user_id == logged.userID);
  };

  const addLike = async () => {
    if (userLiked) return;
    const res = await axios.post(`${URL}reply/like`, { replyID });
    getLikes();
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div style={{ margin: "10px 0" }} className="col-xxl-8">
      <div className="user-info" style={{ display: "flex", alignItems: "center" }}>
        <img
          alt=""
          style={{ width: "40px", borderRadius: "50%" }}
          src={`${URL}users/${user_img}`}
          onError={(e) => (e.target.src = defaultUser)}
        ></img>
        <h5 style={{ display: "inline-block", marginLeft: "8px" }}>{username}</h5>
      </div>
      <span style={{ display: "block" }}>{reply}</span>
      <AiTwotoneLike
        style={{
          background: "none",
          cursor: "pointer",
          color: userLiked ? "#1465A2" : "",
        }}
        onClick={() => addLike()}
      />
      <span>{likes}</span>
    </div>
  );
};

export default Reply;
