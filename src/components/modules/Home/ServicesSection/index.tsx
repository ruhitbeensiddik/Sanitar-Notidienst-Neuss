import Link from "next/link";
import { Phone, Check } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="bg-[#0057B6] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Sanitär Notdienst
              <br />
              in der Nähe
            </h2>

            <p className="text-lg mb-4 leading-relaxed">
              <strong>Klempner und Sanitär Notdienst in Neuss</strong>
              <br />
              schickt Ihnen professionelle Fachmänner!
            </p>

            <p className="text-base mb-6 leading-relaxed opacity-90">
              Sollten Sie eine <strong>akute Rohrverstopfung</strong> oder eine{" "}
              <strong>undichte Leitung</strong> bemerken, schicken die
              Mitarbeiten Ihnen einen ausgebildeten Fachmann. Dank seiner
              jahrelangen Erfahrung und seinem modernen Werkzeug behebt er den
              Schaden rasch und professionell.
            </p>

            <div className="mb-8">
              <button className="text-white hover:text-orange-300 transition-colors flex items-center gap-2">
                <span className="text-lg">▶</span>
                <span>Mehr lesen</span>
              </button>
            </div>

            <div className="mb-6">
              <p className="text-lg font-semibold mb-4">
                Zu den Leistungen vom Sanitär Service zählen:
              </p>
            </div>

            <Link
              href="tel:017615706043"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg text-xl"
            >
              <Phone className="mr-3" size={24} />
              0176 - 15 706 043
            </Link>
          </div>

          {/* Right Side - Two Columns */}
          <div className="lg:w-2/3 flex flex-col lg:flex-row mt-8 lg:mt-0">
            {/* Middle Services List (Orange) */}
            <div className="flex-1 bg-orange-500 p-8 text-white">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="text-white mt-1 flex-shrink-0" size={20} />
                  <span className="text-base leading-relaxed">
                    Sanitär Anlagen, wie Waschbecken, Badewanne, Dusche, Brause
                    oder WC installieren
                  </span>
                </div>

                <div className="border-t border-white/30 pt-4">
                  <div className="flex items-start gap-3">
                    <Check
                      className="text-white mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-base leading-relaxed">
                      Wartung von Sanitär Anlagen
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-4">
                  <div className="flex items-start gap-3">
                    <Check
                      className="text-white mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-base leading-relaxed">
                      Armaturen installieren oder austauschen
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-4">
                  <div className="flex items-start gap-3">
                    <Check
                      className="text-white mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-base leading-relaxed">
                      Fließen verfugen
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-4">
                  <div className="flex items-start gap-3">
                    <Check
                      className="text-white mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-base leading-relaxed">
                      Verstopfungen beseitigen
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-4">
                  <div className="flex items-start gap-3">
                    <Check
                      className="text-white mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-base leading-relaxed">
                      Rohrreinigung
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-4">
                  <div className="flex items-start gap-3">
                    <Check
                      className="text-white mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-base leading-relaxed">
                      Video Inspektion
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Services List (Light Gray) */}
            <div className="flex-1 bg-gray-100 p-8 text-[#0057B6]">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Sanitär Notdienst Service
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Rohrbruch Reparatur
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Klempner Arbeiten
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Undichte Rohre finden
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Hilfe bei verstopfter Toilette
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Badinstallation Trockenbau
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Leckortung
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Wasserschaden Sanierung
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    className="text-[#0057B6] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-base leading-relaxed font-medium">
                    Heizung Wartung
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
