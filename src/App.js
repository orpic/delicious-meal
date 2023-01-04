import React from "react";
import "./App.css";
import {
  FeaturedSection,
  HeaderSection,
  HowItWorksSection,
  MainHeroSection,
  MealsSection,
} from "./components";

function App() {
  return (
    <div className="">
      <HeaderSection />
      <MainHeroSection />
      <FeaturedSection />
      <HowItWorksSection />
      <MealsSection />
    </div>
  );
}

export default App;
