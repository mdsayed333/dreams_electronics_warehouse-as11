import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import navbarLogo from '../../../images/dreams-electronics-logo1.png';

const HeaderNavbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  }
  return (
    <div className="mt-2">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>
          {/* Dreams Electronics */}
          <img src={navbarLogo} alt="" className="m-0 p-0" style={{height: '80px', width: ''}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
              
            </Nav>
            <Nav>
            
              {
                user ? 
                <>
                  <Nav.Link  as={Link} to='/additem'>Add Item</Nav.Link>
                  <Nav.Link  as={Link} to='/manageitem'>Manage Item</Nav.Link>
                  <Nav.Link  as={Link} to='/myitems' className=" me-4">My Items</Nav.Link>
                  <button onClick={handleLogout} className="btn btn-outline-dark">Log Out</button>
                </>
                : <Link to='/login' className="btn btn-outline-dark">Login</Link>
              }
              {/* <Link to='/login' className="btn btn-outline-dark">Login</Link> */}
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
