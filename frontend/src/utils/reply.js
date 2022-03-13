import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;
export const addReply = async (commentID, reply, setReplies) => {
  await axios.post(`${URL}reply`, { commentID, reply });
  const newReplies = await axios.get(`${URL}reply/${commentID}`);
  setReplies(newReplies.data.replies);
};
