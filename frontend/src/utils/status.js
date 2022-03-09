import axios from "axios";
import URL from "../config";
axios.defaults.withCredentials = true;

export const getAllstatus = async (setStatus) => {
  const res = await axios.get(`${URL}status`);
  setStatus(res.data.status);
};

export const updateStatus = async (statusSelected, isbn) => {
  if (statusSelected) {
    await axios.post(`${URL}my-books`, { isbn, statusSelected });
  }
};

export const fetchStatus = async (setStatus) => {
  const res = await axios.get(`${URL}status`);
  setStatus(res.data.status);
};
