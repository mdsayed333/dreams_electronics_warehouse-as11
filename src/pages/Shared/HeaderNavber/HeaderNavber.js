import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loadding from "../Loadding/Loadding";

const HeaderNavbar = () => {
  const [user, loading] = useAuthState(auth);

  if(loading){
    return <Loadding></Loadding>
  }
  const handleLogout = () => {
    signOut(auth);
  }
  return (
    <div className="mt-2">
      <Navbar collapseOnSelect expand="lg">
        <Container className="px-0">
          <Navbar.Brand as={Link} to='/'>
          <img src='https://i.ibb.co/RpPycr8/dreams-electronics-logo.png' alt="" className="m-0 p-0" style={{height: '80px', width: ''}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="linkStyle"  as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/blogs' className="linkStyle">Blogs</Nav.Link>
            </Nav>
            <Nav>
            
              {
                user ? 
                <>
                  <Nav.Link  as={Link} to='/additem' className="linkStyle">Add Item</Nav.Link>
                  <Nav.Link  as={Link} to='/manageitem' className="linkStyle">Manage Item</Nav.Link>
                  <Nav.Link  as={Link} to='/myitems' className="linkStyle me-4">My Items</Nav.Link>
                  <button onClick={handleLogout} className="btn btn-outline-dark">Log Out</button>
                </>
                : <Link to='/login' className="btn btn-outline-dark">Login</Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
