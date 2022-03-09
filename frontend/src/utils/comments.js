import axios from "axios";
import URL from "../config";
axios.defaults.withCredentials = true;
export const getComments = async (isbn, setComments) => {
  const res = await axios.get(`${URL}comment/${isbn}`);
  setComments(res.data.comments);
};

export const addComment = async (comment, isbn, setComments) => {
  await axios.post(`${URL}comment`, { comment, isbn });
  await getComments(isbn, setComments);
};

export const addLike = async (isbn, comment_id, setLikes, likes) => {
  console.log(isbn);
  const data = {
    commentID: comment_id,
    isbn,
  };
  const res = await axios.post(`${URL}comment/like`, data);
  if (res.data.success) setLikes(likes + 1);
};
