import axios from "axios";
import URL from "config";

axios.defaults.withCredentials = true;

class Auth {
  async isAuth(setLogged, setLoading) {
    const res = await axios.get(`${URL}login`);
    console.log(res);
    if (res.data.user) {
      setLogged(res.data.user);
    } else {
      setLogged({});
    }
    setLoading(false);
  }
  async logout(setLogged) {
    await axios.post(`${URL}logout`);
    setLogged({});
  }
}

export default new Auth();
