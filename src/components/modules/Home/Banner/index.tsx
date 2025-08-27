import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import bannerImage from "../../../../assets/banner.jpg";
import bannerImage2 from "../../../../assets/coverImage2.png";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile Layout (sm and below) */}
      <div className="block lg:hidden">
        {/* Mobile Image Section */}
        <div className="relative w-full h-[300px] sm:h-[350px]">
          <Image
            src={bannerImage2}
            alt="Professional plumber in blue uniform with tools"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Optional overlay for better readability */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Mobile Content Section */}
        <div className="bg-white px-4 py-8 sm:px-6 sm:py-10">
          <div className="text-center max-w-md mx-auto">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0057B6] leading-tight mb-4">
              100% FREIE
              <br />
              ROHRE. KLEMPNER
              <br />
              IN <span className="text-[#0057B6]">NEUSS.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 max-w-sm mx-auto">
              Der Service für Sanitär Notfälle aller Art.
              <br />
              Informieren Sie sich jetzt kostenlos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <Link
                href="/sofort-hilfe"
                className="inline-flex items-center justify-center 
                          px-6 py-3 bg-orange-500 hover:bg-orange-600 
                          text-white font-semibold rounded-full 
                          transition-all duration-300 shadow-lg hover:shadow-xl
                          text-sm w-full"
              >
                <Phone className="mr-2" size={18} />
                Soforthilfe
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center 
                          px-6 py-3 bg-transparent border-2 border-[#0057B6] 
                          hover:border-orange-500 text-[#0057B6] 
                          hover:text-orange-500 hover:bg-orange-50
                          font-semibold rounded-full 
                          transition-all duration-300 text-sm w-full"
              >
                <MessageCircle className="mr-2" size={18} />
                Kontakt
              </Link>
            </div>

            {/* 24/7 Service Badge */}
            <div className="mt-6">
              <div
                className="inline-flex items-center justify-center 
                            px-4 py-2 bg-[#0057B6]/10 rounded-full 
                            text-[#0057B6] font-semibold text-sm"
              >
                <Phone className="mr-2" size={16} />
                24/7 Notdienst verfügbar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:block relative min-h-[700px] xl:min-h-[900px]">
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

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full flex justify-start px-8 xl:px-24">
            <div className="text-left max-w-2xl xl:max-w-3xl mt-32 xl:mt-48">
              {/* Main Heading */}
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl 
                            font-bold text-[#0057B6] leading-tight 
                            mb-6 drop-shadow-lg"
              >
                100% FREIE
                <br />
                ROHRE. KLEMPNER
                <br />
                IN <span className="text-[#0057B6]">NEUSS.</span>
              </h1>

              {/* Subheading */}
              <p
                className="text-lg md:text-xl text-white leading-relaxed
                          mb-8 max-w-lg drop-shadow-md"
              >
                Der Service für Sanitär Notfälle aller Art.
                <br />
                Informieren Sie sich jetzt kostenlos.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-4">
                <Link
                  href="/sofort-hilfe"
                  className="inline-flex items-center justify-center 
                            px-8 py-4 bg-orange-500 hover:bg-orange-600 
                            text-white font-semibold rounded-full 
                            transition-all duration-300 shadow-lg hover:shadow-xl
                            text-base min-w-[220px]"
                >
                  <Phone className="mr-2" size={18} />
                  Soforthilfe
                </Link>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center 
                            px-8 py-4 bg-transparent border-2 border-white 
                            hover:border-orange-500 text-white 
                            hover:text-orange-500 hover:bg-white/10
                            font-semibold rounded-full 
                            transition-all duration-300 text-base min-w-[220px]"
                >
                  <MessageCircle className="mr-2" size={18} />
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
