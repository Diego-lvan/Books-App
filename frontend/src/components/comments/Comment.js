import React, { useEffect, useState, useContext } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import URL from "../../config";
import axios from "axios";
import { AppContext } from "../../App";
axios.defaults.withCredentials = true;
const Comment = ({ comment_id, username, comment, user_id, isbn }) => {
  //   const { loading, setLoading } = useContext(AppContext);
  const [likes, setLikes] = useState("");
  const getLikes = async () => {
    // setLoading(true);
    const res = await axios.get(`${URL}comment/like/${comment_id}`);
    setLikes(res.data.likes);
    // setLoading(false);
    console.log(res.data.likes);
  };

  useEffect(() => {
    getLikes();
  }, []);

  const addLike = async () => {
    console.log(isbn);
    const data = {
      commentID: comment_id,
      userID: user_id,
      isbn,
    };
    const res = await axios.post(`${URL}comment/like`, data);
    console.log(res);
  };
  //   if (loading) return <></>;
  return (
    <div>
      <h2>{username}</h2>
      <span>{comment} comment</span>
      <AiTwotoneLike
        style={{ background: "none", cursor: "pointer" }}
        onClick={addLike}
      />
      <span>{likes}</span>
    </div>
  );
};

export default Comment;
