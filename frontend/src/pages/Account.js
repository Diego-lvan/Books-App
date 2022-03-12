import React, { useEffect, useState, useContext } from "react";
import UserForm from "components/auth/UserForm";
import axios from "axios";
import URL from "config";
import { AppContext } from "App";
axios.defaults.withCredentials = true;

const Account = () => {
  const { logged } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const updateUserData = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${URL}user`, { user: username, email });
    console.log(res);
  };

  useEffect(() => {
    setUsername(logged.username);
    setEmail(logged.email);
  }, [logged]);

  return (
    <div style={{ marginTop: "50px" }}>
      <UserForm
        title="Update your info"
        handleSubmit={updateUserData}
        setUsername={setUsername}
        username={username}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
};

export default Account;
