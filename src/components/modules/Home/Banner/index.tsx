import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import bannerImage from "../../../../assets/banner.jpg";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bannerImage}
          alt="Professional plumber in blue uniform with tools"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-start">
        <div className="max-w-2xl flex justify-center items-center">
          <div className="flex justify-center items-center mt-48 ml-24">
            <div>
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0057B6] leading-tight mb-6">
                100% FREIE
                <br />
                ROHRE. KLEMPNER
                <br />
                IN <span className="text-[#0057B6]">NEUSS.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-white mb-8 max-w-lg leading-relaxed">
                Der Service für Sanitär Notfälle aller Art.
                <br />
                Informieren Sie sich jetzt kostenlos.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sofort-hilfe"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="mr-2" size={20} />
                  Soforthilfe
                </Link>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:border-orange-500 text-white hover:text-orange-500 font-semibold rounded-full transition-all duration-300"
                >
                  <MessageCircle className="mr-2" size={20} />
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
