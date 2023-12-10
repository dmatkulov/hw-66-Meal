import React from 'react';
import Cards from "../Cards/Cards";
import TotalCalories from "../../components/TotalCalories/TotalCalories";

const Home: React.FC = () => {
  return (
    <div>
      <TotalCalories/>
      <Cards/>
    </div>
  );
};

export default Home;