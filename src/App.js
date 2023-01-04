import React from "react";
import "./App.css";
import {
  FeaturedSection,
  HeaderSection,
  HowItWorksSection,
  MainHeroSection,
  MealsSection,
  TestimonialSection,
} from "./components";

function App() {
  return (
    <div className="">
      <HeaderSection />
      <MainHeroSection />
      <FeaturedSection />
      <HowItWorksSection />
      <MealsSection />
      <TestimonialSection />
    </div>
  );
}

export default App;
