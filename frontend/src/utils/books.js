import axios from "axios";
import URL from "../config";
export const getBooksByStatus = async (stautsID, setMyBooks) => {
  const res = await axios.get(`${URL}book/category/${stautsID}`);
  setMyBooks(res.data.books);
  console.log(res);
};
