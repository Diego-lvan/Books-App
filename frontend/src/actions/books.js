import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

class Book {
  async getBooksByStatus(stautsID, setMyBooks) {
    const res = await axios.get(`${URL}book/category/${stautsID}`);
    setMyBooks(res.data.books);
  }
  async fetchBook(isbn, setBook, setLoading) {
    if (!isbn) return;
    if (setLoading) setLoading(true);
    const res = await axios.get(`${URL}book/${isbn}`);
    setBook(res.data.book);
    if (setLoading) setLoading(false);
  }

  async fetchBooks(setBooks, setLoading) {
    const res = await axios.get(`${URL}books`);
    setBooks(res.data.books);
    setLoading(false);
  }
  async getAverageScore(isbn, setAverageScore) {
    const res = await axios.get(`${URL}book/score/${isbn}`);
    setAverageScore(res.data.averageScore);
  }
}

export default new Book();
