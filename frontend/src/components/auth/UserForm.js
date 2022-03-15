import React, { useContext } from "react";

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "App";
import userDefault from "assets/img/user.png";
import URL from "config";
const UserForm = ({
  handleSubmit,
  title,
  username,
  setUsername,
  email,
  setEmail,
  pwd,
  setPwd,
  userImg,
  handleFile,
}) => {
  const { logged } = useContext(AppContext);
  console.log(logged.img);
  return (
    <div style={{ margin: "60px", display: "grid" }}>
      <h2 style={{ marginBottom: "20px" }}>{title}</h2>

      {/* Form in account */}
      {userImg != null && (
        <div>
          <img
            alt=""
            style={{ width: "90px" }}
            src={`${URL}users/${logged.img}`}
            onError={(e) => (e.target.src = userDefault)}
          ></img>
        </div>
      )}

      <Form>
        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {/* form in signup and in account */}
        {username != null && (
          <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
        )}
        {/* Form in login and signup */}
        {pwd != null && (
          <Form.Group
            className="mb-3 col-xl-4 col-md-8 col-sm-10"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </Form.Group>
        )}
        {/* Display only in account page */}
        {handleFile && (
          <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10">
            <Form.Control type="file" onChange={handleFile} name="user-img" />
          </Form.Group>
        )}

        <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
