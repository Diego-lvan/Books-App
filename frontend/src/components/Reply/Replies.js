import React, { useEffect, useState } from "react";
import URL from "config";
import axios from "axios";
import Reply from "components/Reply/Reply";

axios.defaults.withCredentials = true;
const Replies = ({ isbn, commentID, setReplies, replies }) => {
  const getReplies = async () => {
    if (!commentID) return;
    const res = await axios.get(`${URL}reply/${commentID}`);
    setReplies(res.data.replies);
  };
  useEffect(() => {
    getReplies();
  }, []);
  return (
    <div style={{ padding: "0 20px" }}>
      {replies.map((reply) => (
        <Reply {...reply} replyID={reply.reply_id} />
      ))}
    </div>
  );
};

export default Replies;
