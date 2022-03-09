import axios from "axios";
import URL from "config";

axios.defaults.withCredentials = true;
export const isAuth = async (setLogged, setLoading) => {
  const res = await axios.get(`${URL}login`);
  if (res.data.user) {
    setLogged(res.data.user);
  } else {
    setLogged({});
  }
  setLoading(false);
};
