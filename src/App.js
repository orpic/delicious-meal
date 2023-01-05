import React from "react";
import "./App.css";
import {
  CallToActionSection,
  FeaturedSection,
  FooterSection,
  HeaderSection,
  HowItWorksSection,
  MainHeroSection,
  MealsSection,
  PricingSection,
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
      <PricingSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}

export default App;
