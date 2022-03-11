import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

export const getAllstatus = async (setStatus) => {
  const res = await axios.get(`${URL}status`);
  setStatus(res.data.status);
};

export const fetchStatus = async (setStatus) => {
  const res = await axios.get(`${URL}status`);
  setStatus(res.data.status);
};
