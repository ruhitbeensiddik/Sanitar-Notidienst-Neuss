import React from "react";
import HeroBanner from "../../../components/modules/Home/Banner";
import SanitarNotdienstSection from "../../../components/modules/Home/SanitarNotdienstSection";
import ServicesSection from "../../../components/modules/Home/ServicesSection";
import WCInstallationSection from "../../../components/modules/Home/WCInstallationSection";
import EmergencyServiceSection from "../../../components/modules/Home/EmergencyServiceSection";
import DrainCleaningSection from "../../../components/modules/Home/DrainCleaningSection";
import MaintenanceRepairSection from "../../../components/modules/Home/MaintenanceRepairSection";
import DrainCleaning24hSection from "../../../components/modules/Home/DrainCleaning24hSection";
import PlumbingServiceComponent from "../../../components/modules/Home/PlumbingServiceComponent";
import PlumberEmergency from "../../../components/modules/Home/PlumberEmergency";
import Testimonials from "../../../components/modules/Home/Tesitimonial";
import ServiceSection from "../../../components/modules/Home/ServiceSection";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-[1650px] mx-auto">
        <HeroBanner />
      </div>

      <div className="max-w-[1650px] mx-auto">
        <SanitarNotdienstSection />
      </div>

      <ServicesSection />

      <WCInstallationSection />
      <PlumberEmergency />
      <ServiceSection />
      <EmergencyServiceSection />
      <DrainCleaningSection />
      <MaintenanceRepairSection />
      <DrainCleaning24hSection />
      <Testimonials />
      <PlumbingServiceComponent />
    </div>
  );
};

export default HomePage;
