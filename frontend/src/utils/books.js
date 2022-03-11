import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

export const getBooksByStatus = async (stautsID, setMyBooks) => {
  const res = await axios.get(`${URL}book/category/${stautsID}`);
  setMyBooks(res.data.books);
};
export const fetchBook = async (isbn, setLoading, setBook) => {
  if (isbn) {
    setLoading(true);
    const res = await axios.get(`${URL}book/${isbn}`);
    console.log(res.data);
    setBook(res.data.book);
    setLoading(false);
  }
};

export const fetchBooks = async (setBooks, setLoading) => {
  const res = await axios.get(`${URL}books`);
  console.log(res.data);
  setBooks(res.data.books);
  setLoading(false);
};
