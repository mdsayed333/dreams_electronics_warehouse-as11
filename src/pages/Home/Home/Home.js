import React from "react";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import NewCustomer from "../NewCustomer/NewCustomer";

const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <Inventory></Inventory>

      <NewCustomer></NewCustomer>
      <h1>Add 1 New Section...</h1>
    </div>
  );
};

export default Home;
