"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Zap, Key, Wrench, MapPin, Copyright } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/whiteLogo.svg";

// Social media icons as React components
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  return (
    <motion.footer
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-orange-500 text-white px-4 sm:px-6 py-8 sm:py-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Logo & Description */}
          <div className="text-center md:text-left lg:pr-8 md:col-span-2 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={logo}
                      alt="product image"
                      width={150}
                      height={150}
                      className="w-[120px] sm:w-[150px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-white/90 leading-relaxed my-4 sm:my-6 text-sm sm:text-base">
              Der preiswerte Sanitär Notdienst Neuss bewertet von vielen
              zufriedenen Kunden in Ihrer Region. Schreiben auch Sie eine
              Rezension über Ihre Erfahrung mit dem Klempner Service.
            </p>

            {/* Services List */}
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-center justify-start md:justify-start gap-2">
                <Zap size={16} />
                <span>Elektronotdienst in Neuss</span>
              </li>
              <li className="flex items-center justify-start md:justify-start gap-2">
                <Wrench size={16} />
                <span>Kammerjäger in Neuss</span>
              </li>
              <li className="flex items-center justify-start md:justify-start gap-2">
                <Key size={16} />
                <span>Schlüsseldienst Neuss</span>
              </li>
            </ul>
          </div>

          {/* Navigation sections - Special layout for small screens */}
          <div className="md:hidden">
            <div className="flex justify-around">
              {/* Neuss Section */}
              <div className="text-center">
                <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 relative">
                  Neuss
                  <div className="w-8 sm:w-12 h-0.5 bg-white mt-2 mx-auto"></div>
                </h2>
                <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white/80 transition-colors"
                    >
                      Startseite
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ueber-uns"
                      className="hover:text-white/80 transition-colors"
                    >
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/impressum"
                      className="hover:text-white/80 transition-colors"
                    >
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/datenschutz"
                      className="hover:text-white/80 transition-colors"
                    >
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partner"
                      className="hover:text-white/80 transition-colors"
                    >
                      Partner werden
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-white/80 transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Regionen Section */}
              <div className="text-center">
                <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 relative">
                  Regionen
                  <div className="w-8 sm:w-12 h-0.5 bg-white mt-2 mx-auto"></div>
                </h2>
                <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
                  <li>
                    <Link
                      href="/berlin"
                      className="hover:text-white/80 transition-colors"
                    >
                      Berlin
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hamburg"
                      className="hover:text-white/80 transition-colors"
                    >
                      Hamburg
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/koeln"
                      className="hover:text-white/80 transition-colors"
                    >
                      Köln
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/muenchen"
                      className="hover:text-white/80 transition-colors"
                    >
                      München
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/frankfurt"
                      className="hover:text-white/80 transition-colors"
                    >
                      Frankfurt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/stuttgart"
                      className="hover:text-white/80 transition-colors"
                    >
                      Stuttgart
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation sections - Normal layout for medium+ screens */}
          <div className="hidden md:block">
            <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 relative text-center md:text-left">
              Neuss
              <div className="w-8 sm:w-12 h-0.5 bg-white mt-2 mx-auto md:mx-0"></div>
            </h2>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base text-center md:text-left">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="hover:text-white/80 transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-white/80 transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-white/80 transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-white/80 transition-colors"
                >
                  Partner werden
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white/80 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 relative text-center md:text-left">
              Regionen
              <div className="w-8 sm:w-12 h-0.5 bg-white mt-2 mx-auto md:mx-0"></div>
            </h2>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base text-center md:text-left">
              <li>
                <Link
                  href="/berlin"
                  className="hover:text-white/80 transition-colors"
                >
                  Berlin
                </Link>
              </li>
              <li>
                <Link
                  href="/hamburg"
                  className="hover:text-white/80 transition-colors"
                >
                  Hamburg
                </Link>
              </li>
              <li>
                <Link
                  href="/koeln"
                  className="hover:text-white/80 transition-colors"
                >
                  Köln
                </Link>
              </li>
              <li>
                <Link
                  href="/muenchen"
                  className="hover:text-white/80 transition-colors"
                >
                  München
                </Link>
              </li>
              <li>
                <Link
                  href="/frankfurt"
                  className="hover:text-white/80 transition-colors"
                >
                  Frankfurt
                </Link>
              </li>
              <li>
                <Link
                  href="/stuttgart"
                  className="hover:text-white/80 transition-colors"
                >
                  Stuttgart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className=" md:text-left">
            <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 relative">
              Folgen Sie uns
              <div className="w-8 sm:w-12 h-0.5 bg-white mt-2 md:mx-0"></div>
            </h2>

            {/* Social Media */}
            <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 justify-start md:justify-start">
              <Link
                href="https://facebook.com"
                className="bg-white/20 hover:bg-white/30 p-2 rounded transition-all duration-300"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://youtube.com"
                className="bg-white/20 hover:bg-white/30 p-2 rounded transition-all duration-300"
              >
                <YouTubeIcon />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-white/20 hover:bg-white/30 p-2 rounded transition-all duration-300"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                className="bg-white/20 hover:bg-white/30 p-2 rounded transition-all duration-300"
              >
                <LinkedInIcon />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-2 justify-start md:justify-start">
                <MapPin size={16} />
                <span className="font-semibold">Neuss</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-start">
                <Phone size={16} />
                <span className="font-semibold">0176 / 15 706 043</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-start">
                <Copyright size={16} />
                <span>2023 Notdienst Sanitär</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
