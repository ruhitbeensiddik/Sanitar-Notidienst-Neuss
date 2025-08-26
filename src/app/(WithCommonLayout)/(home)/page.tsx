import React from "react";
import HeroBanner from "../../../components/modules/Home/Banner";
import SanitarNotdienstSection from "../../../components/modules/Home/SanitarNotdienstSection";

const HomePage = () => {
  return (
    <div className="max-w-[1650px] mx-auto">
      <HeroBanner />
      <SanitarNotdienstSection />
    </div>
  );
};

export default HomePage;
