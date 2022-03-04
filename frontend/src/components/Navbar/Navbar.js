import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import URL from "../../config";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
axios.defaults.withCredentials = true;
const NavbarComponent = () => {
  const { pathname } = useLocation() || "/";
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
        <Navbar.Brand href="#home">Uniread</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Mybooks" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Liked</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Read</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reading</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
