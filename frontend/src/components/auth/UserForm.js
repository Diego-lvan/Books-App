import React, { useState, useContext } from "react";

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from "App";
import { Navigate } from "react-router-dom";

const UserForm = ({ handleSubmit, title, signup, username, setUsername }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setLogged } = useContext(AppContext);

  return (
    <div style={{ marginTop: "60px" }}>
      <Form>
        <h2>{title}</h2>
        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {signup && (
          <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-xl-4 col-md-8 col-sm-10" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e, email, setLogged, pwd)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
