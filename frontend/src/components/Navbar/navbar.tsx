import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const AppNavbar = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Shufersal Online</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cart">Shopping Cart</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default AppNavbar;
