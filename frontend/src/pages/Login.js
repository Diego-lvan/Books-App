import React, { useState, useContext } from "react";
import UserForm from "components/auth/UserForm";
import axios from "axios";
import URL from "config";
import { AppContext } from "App";

axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setLogged } = useContext(AppContext);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}login`, {
        email,
        pwd,
      });
      if (res.data.success) {
        const { user } = res.data;
        setLogged(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <UserForm
        handleSubmit={loginUser}
        title="Login"
        email={email}
        setEmail={setEmail}
        pwd={pwd}
        setPwd={setPwd}
      />
    </div>
  );
};

export default Login;
