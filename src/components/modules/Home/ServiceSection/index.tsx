"use client";
import React from "react";
import Image from "next/image";
import serviceImage from "../../../../assets/image-removebg-preview.png";
import serviceImage2 from "../../../../assets/image-removebg-preview (1).png";
import serviceImage3 from "../../../../assets/image-removebg-preview (2).png";
import serviceImage4 from "../../../../assets/image-removebg-preview (3).png";

const services = [
  {
    title: "ROHRREINIGUNG",
    description:
      "Sanitär Notdienst bietet Ihnen eine professionelle Rohrreinigung zu fairen Preisen an! Erfahrene Handwerker sind schnell vor Ort und beseitigen alle Arten von Verstopfungen.",
    image: serviceImage,
    backText:
      "Sanitär Notdienst bietet Ihnen eine professionelle Rohrreinigung zu fairen Preisen an! Erfahrene Handwerker sind schnell vor Ort und beseitigen alle Arten von Verstopfungen.",
  },
  {
    title: "WC REPARATUR",
    description:
      "Wir vermitteln Ihnen den richtigen Installateur, der sich bestens mit Installation und Reparatur von Waschbecken, Badewannen, WCs und Sanitär Anlagen auskennt.",
    image: serviceImage2,
    backText:
      "Wir vermitteln Ihnen den richtigen Installateur, der sich bestens mit der Installation und Reparatur von Waschbecken, Badewannen und auch WCs und Sanitär Anlagen auskennt.",
  },
  {
    title: "ROHRBRUCH",
    description:
      "Professionelle Fachmänner helfen bei Rohrbruch Notdienst. Per Leckortung ermitteln sie das beschädigte Rohr und tauschen es bei Bedarf aus.",
    image: serviceImage3,
    backText:
      "Ebenfalls helfen professionelle Fachmänner bei einem Rohrbruch Notdienst. Per Leckortung ermitteln sie das beschädigte Rohr und falls nötig ist, tauschen es aus.",
  },
  {
    title: "WASSERSCHADEN",
    description:
      "Droht ein Wasserschaden in der Wohnung oder gar eine Überschwemmung? Klempner beheben Wasserschaden, sodass Sie sich wieder wohl fühlen können.",
    image: serviceImage4,
    backText:
      "Droht ein Wasserschaden in der Wohnung oder gar eine Überschwemmung? Klempner beheben Wasserschaden, sodass Sie sich wieder wohl in Ihrem zuhause fühlen können.",
  },
];

export default function ServiceSection() {
  return (
    <div className="bg-[#0057B6] py-16">
      <div className="text-center mb-12">
        <p className="text-white uppercase tracking-wide">Übersicht</p>
        <h2 className="text-6xl font-bold text-white">UNSER SERVICE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16 max-w-7xl mx-auto ">
        {services.map((service, index) => (
          <div key={index} className="group [perspective:1000px] ">
            <div className="relative  h-96 shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] my-7">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FF7E00] text-white p-6 rounded-md [backface-visibility:hidden]">
                <div className="mb-4 size-28 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed text-center">
                  {service.description}
                </p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-blue-700 p-6 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-center mb-6">{service.backText}</p>
                <button className="px-4 py-2 bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-700 transition">
                  Beratung
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
