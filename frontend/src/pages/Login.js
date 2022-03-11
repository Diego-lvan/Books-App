import React from "react";
import UserForm from "components/auth/UserForm";
import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

const Login = () => {
  const loginUser = async (e, email, setLogged, pwd) => {
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
      <UserForm handleSubmit={loginUser} title="Login" />
    </div>
  );
};

export default Login;
