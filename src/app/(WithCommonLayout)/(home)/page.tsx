import React from "react";
import HeroBanner from "../../../components/modules/Home/Banner";
import SanitarNotdienstSection from "../../../components/modules/Home/SanitarNotdienstSection";
import ServicesSection from "../../../components/modules/Home/ServicesSection";

const HomePage = () => {
  return (
    <div className="">
      <div className="max-w-[1650px] mx-auto">
        <HeroBanner />
      </div>
      <div className="max-w-[1650px] mx-auto">
        <SanitarNotdienstSection />
      </div>
      <ServicesSection />
    </div>
  );
};

export default HomePage;
