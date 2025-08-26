"use client";
import { useState } from "react";
import Image from "next/image";
import sectionImage from "../../../../assets/womanImage.png";

export default function DrainCleaning24hSection() {
  const [showTipBox, setShowTipBox] = useState(true);

  const closeTipBox = () => {
    setShowTipBox(false);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#EFEFEF]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-[800px]">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-500 font-semibold text-lg">
                Service
              </span>
              <div className="w-16 h-0.5 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8 leading-tight">
              Kanal und Abflussreinigung rund um die Uhr in Neuss
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Unser{" "}
                <span className="font-semibold text-gray-900">
                  24 Stunden Notdienst Sanitär
                </span>{" "}
                in Neuss steht Ihnen für eine Kanal und Abflussreinigung rund um
                die Uhr 365 Tage zur Verfügung. Die Firma besitzt ein stark
                ausgebautes Netz an zertifizierten Klempnern, die mobil sind.
                Monteure kommen schnell zu Ihnen nach Hause. Somit sind auch{" "}
                <span className="font-semibold text-gray-900">
                  unmittelbare Termine in Notlagen
                </span>{" "}
                möglich.
              </p>

              <p className="text-lg">
                Eine{" "}
                <span className="font-semibold text-gray-900">
                  kurze Reaktionszeit, freundliche Installateure
                </span>{" "}
                und{" "}
                <span className="font-semibold text-gray-900">
                  transparente Preise
                </span>{" "}
                sind uns genauso entscheidend, wie eine geeignete und versierte
                Arbeitsweise. Durch aktuellste Werkzeuge und Arbeitsweisen
                beherrschen die Heizung- und Sanitär Monteure in Neuss das
                geeignete Know-How, wie sie schnell und effizient eine
                Verstopfung oder Verunreinigung entfernen können.
              </p>
            </div>

            {/* Tip Box - Only show if showTipBox is true */}
            {showTipBox && (
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="bg-[#F4CDA7] border-l-4 border-orange-500 p-6 rounded-r-lg relative">
                  {/* Close button */}
                  <button
                    onClick={closeTipBox}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl transition-colors cursor-pointer"
                  >
                    ×
                  </button>

                  <div className="pr-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">
                      Tipp bei einem Sanitär Notfall:
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      Klempner und Sanitär Notdienst in Neuss bespricht mit
                      Ihnen zusammen Fragen, die Sie noch haben und klärt die
                      darauffolgende Schritte mit Ihnen ab. Rufen Sie uns
                      einfach an und schildern Sie uns Ihre Anliegen. Die
                      freundlichen Mitarbeiter helfen Ihnen weiter und finden
                      eine Lösung zu Ihren Problem!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Image
                src={sectionImage}
                alt="Female plumber with professional drain cleaning equipment"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
