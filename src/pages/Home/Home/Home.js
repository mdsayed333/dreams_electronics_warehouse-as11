import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import HeaderNavber from "../../Shared/HeaderNavber/HeaderNavber";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
