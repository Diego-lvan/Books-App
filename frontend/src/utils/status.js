import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;
class Status {
  async getAllstatus(setStatus) {
    const res = await axios.get(`${URL}status`);
    setStatus(res.data.status);
  }

  async fetchStatus(setStatus) {
    const res = await axios.get(`${URL}status`);
    setStatus(res.data.status);
  }
}

export default new Status();
