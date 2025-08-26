import Image from "next/image";
import santaImage from "../../../../assets/notdienst_sanitaer_ducato_kl.jpg";
import { ArrowDownRightIcon } from "lucide-react";

export default function EmergencyServiceSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <Image
                src={santaImage}
                alt="Sanitär Notdienst van with professional plumber"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none text-center lg:text-left">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="text-orange-500 font-semibold text-base sm:text-lg">
                24h Notdienst
              </span>
              <div className="w-12 sm:w-16 h-0.5 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-6 sm:mb-8 leading-tight">
              24 Std. Klempner und Sanitär Notdienst in Neuss
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
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
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <button className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2 font-medium group">
                <span className="text-lg group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                  <ArrowDownRightIcon size={20} />
                </span>
                <span className="text-base sm:text-lg">Mehr lesen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
