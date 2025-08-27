import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import bannerImage from "../../../../assets/banner.jpg";

export default function HeroBanner() {
  return (
    // ✅ section now full width
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bannerImage}
          alt="Professional plumber in blue uniform with tools"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10 md:bg-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        {/* ✅ removed container restriction from parent, 
             wrapped only text part in container */}
        <div className="w-full flex justify-center lg:justify-start px-4 sm:px-6 lg:px-8">
          <div
            className="text-center lg:text-left max-w-2xl xl:max-w-3xl 
                          mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-48 
                          mx-auto lg:mx-0 lg:ml-8 xl:ml-24"
          >
            {/* Main Heading */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold text-[#0057B6] leading-tight 
                          mb-4 sm:mb-5 md:mb-6 
                          drop-shadow-lg sm:drop-shadow-none"
            >
              100% FREIE
              <br />
              ROHRE. KLEMPNER
              <br />
              IN <span className="text-[#0057B6]">NEUSS.</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg md:text-xl 
                          text-white leading-relaxed
                          mb-6 sm:mb-7 md:mb-8 
                          max-w-sm sm:max-w-md lg:max-w-lg 
                          mx-auto lg:mx-0
                          drop-shadow-md sm:drop-shadow-sm"
            >
              Der Service für Sanitär Notfälle aller Art.
              <br />
              Informieren Sie sich jetzt kostenlos.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 
                            justify-center lg:justify-start 
                            max-w-sm sm:max-w-none mx-auto lg:mx-0"
            >
              <Link
                href="/sofort-hilfe"
                className="inline-flex items-center justify-center 
                          px-6 sm:px-8 py-3 sm:py-4 
                          bg-orange-500 hover:bg-orange-600 
                          text-white font-semibold rounded-full 
                          transition-all duration-300 
                          shadow-lg hover:shadow-xl
                          text-sm sm:text-base
                          min-w-[200px] sm:min-w-[220px]"
              >
                <Phone className="mr-2" size={18} />
                Soforthilfe
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center 
                          px-6 sm:px-8 py-3 sm:py-4 
                          bg-transparent border-2 border-white 
                          hover:border-orange-500 text-white 
                          hover:text-orange-500 hover:bg-white/10
                          font-semibold rounded-full 
                          transition-all duration-300
                          text-sm sm:text-base
                          min-w-[200px] sm:min-w-[220px]"
              >
                <MessageCircle className="mr-2" size={18} />
                Kontakt
              </Link>
            </div>

            {/* Additional mobile-friendly info */}
            <div className="mt-8 sm:mt-10 lg:hidden">
              <div
                className="inline-flex items-center justify-center 
                            px-4 py-2 bg-white/90 rounded-full 
                            text-[#0057B6] font-semibold text-sm
                            backdrop-blur-sm"
              >
                <Phone className="mr-2" size={16} />
                24/7 Notdienst verfügbar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency contact strip for mobile */}
      <div
        className="absolute bottom-0 left-0 right-0 
                      bg-gradient-to-t from-[#0057B6] to-[#0057B6]/80 
                      text-white p-3 sm:p-4 lg:hidden"
      ></div>
    </section>
  );
}
