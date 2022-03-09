import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { getAllstatus } from "../../utils/status";
axios.defaults.withCredentials = true;
const NavbarComponent = () => {
  const [status, setStatus] = useState([]);
  const { pathname } = useLocation() || "/";
  useEffect(() => {
    getAllstatus(setStatus);
  }, []);
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
