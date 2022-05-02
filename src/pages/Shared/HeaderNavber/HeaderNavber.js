import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <div className="mt-2">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Dreams Electronics</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  as={Link} to='/'>Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              
            </Nav>
            <Nav>
              <Link to='/login' className="btn btn-outline-dark">Login</Link>
              {/* <Nav.Link href="#deets">Login</Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
