import React, { useState } from "react";
import UserForm from "components/auth/UserForm";
import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;
const SignUp = () => {
  const [username, setUsername] = useState("");
  const createUser = async (e, email, setLogged, pwd) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}user`, {
        user: username,
        pwd,
        email,
      });
      //   if (res.data.success) {
      //     const { user } = res.data;
      //     setLogged(user);
      //   }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <UserForm
        handleSubmit={createUser}
        title="Sign Up"
        signup={true}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
};

export default SignUp;
