import React from "react";
import Banner from "../components/Banner";
import LatestCrops from "../components/LatestCrops";
import AgroNews from "../components/AgroNwes";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestCrops></LatestCrops>
      <AgroNews></AgroNews>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
