import React from "react";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import MonthlyReport from "../MonthlyReport/MonthlyReport";
import NewCustomer from "../NewCustomer/NewCustomer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <NewCustomer></NewCustomer>
      <MonthlyReport></MonthlyReport>
    </div>
  );
};

export default Home;
