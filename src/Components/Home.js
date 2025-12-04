import React from "react";
import Header from "./Header";
import CountriesData from "./CountriesData";
import { Practice } from "./Pratice";

const Home = () => {
  return (
    <div>
      <CountriesData />
      <br></br>
      <br></br>
      <br></br>
      <h2>Practicing</h2>
      <Practice />
    </div>
  );
};

export default Home;
