import React, { useEffect, useState } from "react";
import URL from "config";
import axios from "axios";
import Replie from "components/comments/Comment";
import defaultUser from "assets/img/user.png";
axios.defaults.withCredentials = true;
const Replies = ({ isbn, commentID, setReplies, replies }) => {
  const getReplies = async () => {
    if (!commentID) return;
    const res = await axios.get(`${URL}reply/${commentID}`);
    setReplies(res.data.replies);
    console.log(res.data.replies);
  };
  useEffect(() => {
    getReplies();
  }, []);
  return (
    <div style={{ padding: "0 20px" }}>
      {replies.map(({ user_img, username, reply }) => (
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
        </div>
      ))}
    </div>
  );
};

export default Replies;
