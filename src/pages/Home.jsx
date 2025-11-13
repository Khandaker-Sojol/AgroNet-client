import React from "react";
import Banner from "../components/Banner";
import LatestCrops from "../components/LatestCrops";
import AgroNews from "../components/AgroNwes";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import ExpertsSection from "../components/ExpertsSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestCrops></LatestCrops>
      <HowItWorks></HowItWorks>
      <ExpertsSection></ExpertsSection>
      <AgroNews></AgroNews>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
