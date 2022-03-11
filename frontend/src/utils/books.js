import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

export const getBooksByStatus = async (stautsID, setMyBooks) => {
  const res = await axios.get(`${URL}book/category/${stautsID}`);
  setMyBooks(res.data.books);
};
export const fetchBook = async (isbn, setBook, setLoading) => {
  if (!isbn) return;
  if (setLoading) setLoading(true);
  const res = await axios.get(`${URL}book/${isbn}`);
  setBook(res.data.book);
  if (setLoading) setLoading(false);
};

export const fetchBooks = async (setBooks, setLoading) => {
  const res = await axios.get(`${URL}books`);
  setBooks(res.data.books);
  setLoading(false);
};
