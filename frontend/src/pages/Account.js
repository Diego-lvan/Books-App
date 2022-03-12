import React, { useEffect, useState, useContext } from "react";
import UserForm from "components/auth/UserForm";
import axios from "axios";
import URL from "config";
import { AppContext } from "App";
const config = { headers: { "Content-Type": "multipart/form-data" } };

axios.defaults.withCredentials = true;

const Account = () => {
  const { logged } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userImg, setUserImg] = useState("");
  const updateUserData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", userImg);
    formData.append("email", email);
    formData.append("user", username);

    const res = await axios.put(`${URL}user`, formData, config);
    console.log(res);
  };

  const handleFile = (e) => {
    setUserImg(e.target.files[0]);
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
        userImg={userImg}
        handleFile={handleFile}
      />
    </div>
  );
};

export default Account;
