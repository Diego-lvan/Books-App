import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

export const fetchMyBooksStatus = async (setStatusSelected, isbn) => {
  const res = await axios.get(`${URL}my-books/${isbn}`);
  setStatusSelected(res.data.status_id);
};

export const updateStatus = async (statusSelected, isbn, setStatusSelected) => {
  if (statusSelected === "delete") {
    setStatusSelected("");
    return removeMyBook(isbn);
  }
  if (statusSelected) {
    await axios.post(`${URL}my-books`, { isbn, statusSelected });
  }
};

const removeMyBook = async (isbn) => {
  await axios.delete(`${URL}my-books/${isbn}`);
};
