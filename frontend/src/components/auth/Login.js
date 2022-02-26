import React, { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "http://localhost:5005/";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const loginUser = async () => {
    try {
      const res = await axios.post(`${URL}login`, {
        username: email,
        password: pwd,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
