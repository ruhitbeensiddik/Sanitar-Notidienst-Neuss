/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import pipeImage from "../../../../assets/pipeImage.png";
import { ArrowDownRightIcon } from "lucide-react";

export default function DrainCleaningSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-500 font-semibold text-lg">
                Service
              </span>
              <div className="w-16 h-0.5 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8 leading-tight">
              Klempner Notdienst in Neuss kümmert sich um die verstopften
              Abflüsse
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Wenn eines Ihrer{" "}
                <span className="font-semibold text-gray-900">
                  Abflussrohre verstopft ist
                </span>
                , können Sie zunächst mit einer{" "}
                <span className="font-semibold text-gray-900">Saugglocke</span>{" "}
                oder auch einem „Pömpel" genannt, versuchen die Rohre selbst zu
                putzen. Oft wird auf Hausmittel wie{" "}
                <span className="font-semibold text-gray-900">
                  Essig und Backpulver
                </span>{" "}
                zurückgegriffen, falls dies keine Besserung mit sich bringt.
                Hiervon raten allerdings die Spezialisten ab.
              </p>

              <p className="text-lg">
                Heutzutage sind oft Plastikrohre verbaut, die durch den Einsatz
                von Essig und Backpulver stark angegriffen werden. Aus diesem
                Grund empfehlen die Fachmänner in diesem Fall eine{" "}
                <span className="font-semibold text-gray-900">
                  Rohrreinigung mit einer Spirale, Motorspirale oder einem
                  Hochdruck-Reinigungsgerät.
                </span>
              </p>
            </div>

            {/* More Info Button */}
            <div className="mt-8">
              <button className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2 font-medium">
                <span className="text-lg">
                  <ArrowDownRightIcon />
                </span>
                <span>Mehr lesen</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Image
                src={pipeImage}
                alt="Drain cleaning with specialized equipment and tools"
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
