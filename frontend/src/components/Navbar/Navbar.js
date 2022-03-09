import React, { useEffect, useState, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useLocation, Link, Navigate } from "react-router-dom";
import { getAllstatus } from "utils/status";
import { isAuth } from "utils/auth";
import { AppContext } from "App";
axios.defaults.withCredentials = true;
const NavbarComponent = () => {
  const [status, setStatus] = useState([]);
  const { pathname } = useLocation() || "/";
  const { logged, setLogged } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isAuth(setLogged, setLoading);
    getAllstatus(setStatus);
  }, []);

  // protecting routes
  if (!loading && logged.email == null && pathname !== "/" && pathname !== "/signup") {
    return <Navigate to="/" />;
  }

  if (!loading && logged.email && (pathname === "/" || pathname === "/signup")) {
    return <Navigate to="/home" />;
  }

  if (pathname === "/" || pathname === "/signup") {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Uniread
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={pathname === "/" ? "signup" : "/"}>
                {pathname === "/" ? "Sign up" : "Login"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{ marginBottom: "50px" }}>
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Uniread
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <NavDropdown title="Mybooks" id="basic-nav-dropdown">
              {status.map(({ status_id, status }) => (
                <NavDropdown.Item key={status_id} as={Link} to={`/my-books/${status_id}`}>
                  {status}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="#link">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
