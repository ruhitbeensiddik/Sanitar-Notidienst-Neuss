import Image from "next/image";
import sectionImage from "../../../../assets/24Stunden_Sanitaer_Notdienst_A1.jpg";

export default function SanitarNotdienstSection() {
  return (
    <section className="py-16 lg:py-20 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-500 font-semibold text-lg">
                Soforthilfe
              </span>
              <div className="w-12 h-0.5 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8 leading-tight">
              Sanitär Notdienst in Neuss
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Haben Sie einen Notfall und benötigen einen{" "}
                <span className="font-semibold text-gray-900">
                  Klempner und Sanitär Notdienst in Neuss?
                </span>{" "}
                Haben Sie besondere Wünsche und Vorstellung hinsichtlich einer
                Inbetriebnahme oder Modernisierung?{" "}
                <span className="font-semibold text-gray-900">
                  Notdienst Sanitär
                </span>{" "}
                steht Ihnen 24 Stunden zur Verfügung!
              </p>

              <p className="text-lg">
                Gerade im Badezimmer hält man sich des längeren auf und möchte
                sich besonders dort gut fühlen. Hierfür ist es relevant, dass
                die Sanitäranlagen{" "}
                <span className="font-semibold text-gray-900">richtig</span>{" "}
                laufen und{" "}
                <span className="font-semibold text-gray-900">regelmäßig</span>{" "}
                gewartet werden. Dann der Klempner und Sanitär Notdienst in
                Neuss ist genau der passende Ansprechpartner für Sie!
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden shadow-lg rounded-full">
                <Image
                  src={sectionImage}
                  alt="Plumbing tools and equipment for emergency service"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Orange Label */}
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                <div className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg">
                  <span className="text-xl lg:text-2xl font-bold">
                    Klempner
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
