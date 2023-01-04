import React from "react";
import "./App.css";
import {
  FeaturedSection,
  HeaderSection,
  HowItWorksSection,
  MainHeroSection,
} from "./components";

function App() {
  return (
    <div className="">
      <HeaderSection />
      <MainHeroSection />
      <FeaturedSection />
      <HowItWorksSection />
    </div>
  );
}

export default App;
