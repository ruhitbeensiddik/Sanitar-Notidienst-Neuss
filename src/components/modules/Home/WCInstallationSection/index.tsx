import Image from "next/image";
import image1 from "../../../../assets/image copy.png";
import image2 from "../../../../assets/image copy 2.png";
import image3 from "../../../../assets/image copy 3.png";
import image4 from "../../../../assets/image copy 4.png";
import image5 from "../../../../assets/image copy 7.png";
import image from "../../../../assets/image.png";

export default function WCInstallationSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Image
                src={image}
                alt="Toilet installation with plumbing tools and pipes"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-2xl">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-500 font-semibold text-lg">
                WC & Co.
              </span>
              <div className="w-12 h-0.5 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8 leading-tight">
              Installation von
              <br />
              Sanitäranlagen im Bad
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Ein neues Bad ist{" "}
                <span className="font-semibold text-gray-900">langfristig</span>{" "}
                zu planen, da Ihr Bad mindestens 20 Jahren Ihren Ansprüchen
                genügen sollte. Es lohnt sich daher einen Spezialisten bei der{" "}
                <span className="font-semibold text-gray-900">
                  Planung und Umsetzung
                </span>{" "}
                hinzu zu ziehen. Anders als noch früher stehen in Neubauten
                deutlich mehr Platz zur Verfügung. Moderne Armaturen und
                Sanitäranlagen können nun ganz{" "}
                <span className="font-semibold text-gray-900">
                  nach den Voraussetzungen und Wünschen
                </span>{" "}
                integriert werden.
              </p>

              <p className="text-lg">
                Gerne tauschen die Installateure in Neuss Ihre alten Anlagen
                gegen Neue und optimieren so Ihr Badezimmer, damit Sie auch zu
                Hause in den Genuss von Wellness kommen. Beauftragen Sie hierfür
                unseren{" "}
                <span className="font-semibold text-gray-900">
                  telefonischen Kundendienst
                </span>{" "}
                Klempner und Sanitär Notdienst in Neuss.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Partners Section */}
      <div className="my-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-center lg:justify-between flex-wrap gap-4 lg:gap-12 opacity-60">
            <div className="flex items-center justify-center h-9">
              <Image
                src={image1}
                alt="Miele"
                width={120}
                height={60}
                className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-9">
              <Image
                src={image2}
                alt="MTF Austria - Innovation in the Air"
                width={140}
                height={60}
                className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-9">
              <Image
                src={image3}
                alt="Bosch"
                width={120}
                height={60}
                className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-9">
              <Image
                src={image4}
                alt="Hilti"
                width={100}
                height={60}
                className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-9">
              <Image
                src={image5}
                alt="Hilti"
                width={100}
                height={60}
                className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
