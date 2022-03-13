import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;
export const addReply = async (commentID, reply) => {
  const res = await axios.post(`${URL}reply`, { commentID, reply });
  console.log(res);
};
