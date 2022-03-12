import React, { useState, useContext } from "react";
import UserForm from "components/auth/UserForm";
import axios from "axios";
import URL from "config";
import { AppContext } from "App";
axios.defaults.withCredentials = true;
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setLogged } = useContext(AppContext);
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}user`, {
        user: username,
        pwd,
        email,
      });
      console.log(res.data);
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
        handleSubmit={createUser}
        title="Sign Up"
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        pwd={pwd}
        setPwd={setPwd}
      />
    </div>
  );
};

export default SignUp;
