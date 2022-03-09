import axios from "axios";
import URL from "../config";
axios.defaults.withCredentials = true;

export const getBooksByStatus = async (stautsID, setMyBooks) => {
  const res = await axios.get(`${URL}book/category/${stautsID}`);
  setMyBooks(res.data.books);
};
export const fetchBook = async (isbn, setLoading, setBook) => {
  setLoading(true);
  const res = await axios.get(`${URL}book/${isbn}`);
  setBook(res.data.book);
  setLoading(false);
};
