import React from "react";
import Header from "./Header";
import CountriesData from "./CountriesData";
import { Practice } from "./Pratice";
import { AccountForm } from "./AccountForm";

const Home = () => {
  return (
    <div>
      <CountriesData />
      <br></br>
      <br></br>
      <br></br>
      <h2>Practicing</h2>
      <Practice />
      <AccountForm />
    </div>
  );
};

export default Home;
