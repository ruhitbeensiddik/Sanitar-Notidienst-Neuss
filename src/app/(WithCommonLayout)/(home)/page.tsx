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
      {/* Hero Banner Section */}
      <section className="w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <HeroBanner />
        </div>
      </section>

      {/* Sanitar Notdienst Section */}
      <section className="w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <SanitarNotdienstSection />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full overflow-hidden bg-gray-50">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <ServicesSection />
        </div>
      </section>

      {/* WC Installation Section */}
      <section className="w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <WCInstallationSection />
        </div>
      </section>

      {/* Plumber Emergency Section */}
      <section className="w-full overflow-hidden bg-blue-50">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <PlumberEmergency />
        </div>
      </section>

      {/* Service Section */}
      <section className="w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <ServiceSection />
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="w-full overflow-hidden bg-red-50">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <EmergencyServiceSection />
        </div>
      </section>

      {/* Drain Cleaning Section */}
      <section className="w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <DrainCleaningSection />
        </div>
      </section>

      {/* Maintenance Repair Section */}
      <section className="w-full overflow-hidden bg-gray-50">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <MaintenanceRepairSection />
        </div>
      </section>

      {/* Drain Cleaning 24h Section */}
      <section className="w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <DrainCleaning24hSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full overflow-hidden bg-blue-600 text-white">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <Testimonials />
        </div>
      </section>

      {/* Plumbing Service Component */}
      <section className="w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2 sm:px-4">
          <PlumbingServiceComponent />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
