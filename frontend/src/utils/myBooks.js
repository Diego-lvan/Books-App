import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

export const fetchMyBooksStatus = async (setStatusSelected, isbn) => {
  const res = await axios.get(`${URL}my-books/${isbn}`);
  setStatusSelected(res.data.status_id);
};
