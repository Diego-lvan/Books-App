import axios from "axios";
import URL from "config";
import Books from "./books";

axios.defaults.withCredentials = true;
class MyBoks {
  async fetchMyBooksStatus(setStatusSelected, isbn) {
    const res = await axios.get(`${URL}my-books/${isbn}`);
    setStatusSelected(res.data.status_id);
  }

  async updateStatus(statusSelected, isbn, setStatusSelected) {
    if (statusSelected === "delete") {
      setStatusSelected("");
      return this.removeMyBook(isbn);
    }
    if (statusSelected) {
      await axios.post(`${URL}my-books`, { isbn, statusSelected });
    }
  }

  async removeMyBook(isbn) {
    await axios.delete(`${URL}my-books/${isbn}`);
  }
  async rateBook(isbn, score) {
    if (!score) return;
    const res = await axios.post(`${URL}my-books/rate`, { score, isbn });
  }
  async getRate(isbn, setScore) {
    const res = await axios.get(`${URL}my-books/score/${isbn}`);
    setScore(res.data.score);
    console.log(res.data);
  }
}

export default new MyBoks();
