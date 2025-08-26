import Image from "next/image";
import sectionImage from "../../../../assets/washingMsin.png";

export default function MaintenanceRepairSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Image
                src={sectionImage}
                alt="Professional plumber with tools working on appliance maintenance"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-3xl">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-orange-500 font-semibold text-lg">
                Soforthilfe
              </span>
              <div className="w-16 h-0.5 bg-orange-500"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-8 leading-tight">
              Regelmäßige Wartungen und Reparaturarbeiten mit Notdienst Sanitär
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Der{" "}
                <span className="font-semibold text-gray-900">
                  mobile Klempner und Sanitär Service in Ihrer Nähe
                </span>{" "}
                kommt umgehend und beseitigt die Verstopfung und Ablagerung in
                den Rohren. Ebenso kann der Klempner und Sanitär Notdienst in
                Neuss im Zuge dessen eine{" "}
                <span className="font-semibold text-gray-900">
                  Wartung Ihrer restlichen Rohre
                </span>{" "}
                durchführen, sodass dieses Problem nicht gleich beim nächsten
                Zylinder wieder auftritt.
              </p>

              <p className="text-lg">
                Gerne berät der Monteur Sie im Vorfeld über die{" "}
                <span className="font-semibold text-gray-900">Kosten</span>{" "}
                einer Rohrreinigung, Fehlerbehebung oder Wartung. Vereinbaren
                Sie einfach über das Telefon einen Termin und Handwerker sind
                innerhalb von{" "}
                <span className="font-semibold text-gray-900">
                  40 Minuten vor Ort.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
