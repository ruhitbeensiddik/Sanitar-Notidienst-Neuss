import Image from "next/image";
import santaImage from "../../../../assets/notdienst_sanitaer_ducato_kl.jpg";
import { ArrowDownRightIcon } from "lucide-react";

export default function EmergencyServiceSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Image
                src={santaImage}
                alt="Sanitär Notdienst van with professional plumber"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-2xl">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-500 font-semibold text-lg">
                24h Notdienst
              </span>
              <div className="w-16 h-0.5 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8 leading-tight">
              24 Std. Klempner und Sanitär Notdienst in Neuss
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Ganz gleich, ob Sie einen{" "}
                <span className="font-semibold text-gray-900">
                  Klempner und Sanitär Notdienst Neuss
                </span>{" "}
                am Wochenende, an Feiertagen oder mitten in der Nacht brauchen.
                Die flexiblen und top ausgebildeten zertifizierten Heizung- und
                Sanitärmonteure sind blitzschnell bei Ihnen und unterstützen Sie{" "}
                <span className="font-semibold text-gray-900">
                  zuvorkommend und versiert!
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
        </div>
      </div>
    </section>
  );
}
