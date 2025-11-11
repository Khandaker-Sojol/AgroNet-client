import React from "react";
import Banner from "../components/Banner";
import LatestCrops from "../components/LatestCrops";
import AgroNews from "../components/AgroNwes";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestCrops></LatestCrops>
      <AgroNews></AgroNews>
    </div>
  );
};

export default Home;
