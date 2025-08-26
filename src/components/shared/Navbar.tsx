"use client";
import {
  Building2,
  HelpCircle,
  Home,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Clock,
  User,
  Menu,
} from "lucide-react";
import Container from "./Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Social media icons as React components
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Navigation Link component with proper TypeScript types
interface NavigationLinkProps {
  route: string;
  path: string;
  className?: string;
}

const NavigationLink = ({
  route,
  path,
  className = "",
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`
        transition-colors duration-200
        ${isActive ? "text-orange-300" : "text-white hover:text-orange-200"}
        ${className}
      `}
    >
      {route}
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "lg:fixed lg:top-0 lg:left-0 lg:w-full lg:bg-white lg:z-50 lg:shadow-md"
          : ""
      }`}
    >
      {/* Top Header */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <Container>
          <div className="flex justify-between items-center">
            {/* Left side - Contact info */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link
                href="/einsatzgebiete"
                className="flex items-center gap-1 hover:text-orange-500 transition-colors"
              >
                <MapPin size={16} className="text-orange-500" />
                <span>Einsatzgebiete</span>
              </Link>
              <Link
                href="/kontakt"
                className="flex items-center gap-1 hover:text-orange-500 transition-colors"
              >
                <Mail size={16} className="text-orange-500" />
                <span>Kontakt</span>
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-1 hover:text-orange-500 transition-colors"
              >
                <User size={16} className="text-orange-500" />
                <span>Login</span>
              </Link>
            </div>

            {/* Right side - Social media */}
            <div className="flex items-center gap-1">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white p-2 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white p-2 transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white p-2 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-orange-500 rounded-full p-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blue-600">
                    Sanitär<span className="text-orange-500">+</span>
                  </h1>
                  <p className="text-sm font-medium text-blue-600">NEUSS</p>
                </div>
              </Link>
            </div>

            {/* Info Cards - Hidden on mobile, shown on large screens */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Opening Hours */}
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-orange-500 font-semibold text-base">
                    Öffnungszeiten
                  </p>
                  <p className="text-sm text-gray-600 whitespace-nowrap">
                    Montag - Sonntag / 0-24 Uhr
                  </p>
                </div>
              </div>

              {/* Emergency Number */}
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-orange-500 font-semibold text-base">
                    Notfall-Nummer
                  </p>
                  <p className="text-sm text-gray-600 whitespace-nowrap">
                    0176 - 15 706 043
                  </p>
                </div>
              </div>

              {/* Consultation */}
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-orange-500 font-semibold text-base">
                    Beratung
                  </p>
                  <p className="text-sm text-gray-600">Kostenloser Service</p>
                </div>
              </div>
            </div>

            {/* Mobile Emergency Number */}
            <div className="lg:hidden">
              <Link
                href="tel:017615706043"
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded"
              >
                <Phone size={18} />
                <span className="font-semibold">Anrufen</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Bar */}
      <div className="bg-blue-600">
        <Container>
          <div className="flex justify-between items-center">
            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex text-white">
                <li>
                  <NavigationLink
                    route="START"
                    path="/"
                    className="block px-6 py-4 hover:bg-blue-700 transition-colors font-medium"
                  />
                </li>
                <li>
                  <NavigationLink
                    route="NOTDIENST"
                    path="/notdienst"
                    className="block px-6 py-4 hover:bg-blue-700 transition-colors font-medium"
                  />
                </li>
                <li>
                  <NavigationLink
                    route="LEISTUNGEN"
                    path="/leistungen"
                    className="block px-6 py-4 hover:bg-blue-700 transition-colors font-medium"
                  />
                </li>
                <li>
                  <NavigationLink
                    route="SERVICE"
                    path="/service"
                    className="block px-6 py-4 hover:bg-blue-700 transition-colors font-medium"
                  />
                </li>
                <li>
                  <NavigationLink
                    route="WC"
                    path="/wc"
                    className="block px-6 py-4 hover:bg-blue-700 transition-colors font-medium"
                  />
                </li>
                <li>
                  <NavigationLink
                    route="SOS"
                    path="/sos"
                    className="block px-6 py-4 hover:bg-blue-700 transition-colors font-medium"
                  />
                </li>
              </ul>
            </nav>

            {/* Emergency Call Button - Desktop */}
            <div className="bg-orange-500 px-8 py-4 text-white hidden lg:block">
              <Link href="tel:017615706043" className="flex items-center gap-3">
                <Phone size={24} />
                <div>
                  <p className="text-2xl font-bold">0176 - 15 706 043</p>
                  <p className="text-sm">✓ Notdienst: Neuss</p>
                </div>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden w-full flex justify-between items-center py-4">
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="cursor-pointer text-white flex items-center gap-2">
                      <Menu size={24} />
                      <span>Menu</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/"
                          className="flex gap-2 text-base items-center w-full"
                        >
                          <Home className="w-4 h-4" />
                          START
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/notdienst"
                          className="flex gap-2 text-base items-center w-full"
                        >
                          <Phone className="w-4 h-4" />
                          NOTDIENST
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/leistungen"
                          className="flex gap-2 text-base items-center w-full"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          LEISTUNGEN
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/service"
                          className="flex gap-2 text-base items-center w-full"
                        >
                          <Building2 className="w-4 h-4" />
                          SERVICE
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/wc"
                          className="flex gap-2 text-base items-center w-full"
                        >
                          <HelpCircle className="w-4 h-4" />
                          WC
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/sos"
                          className="flex gap-2 text-base items-center w-full"
                        >
                          <Phone className="w-4 h-4" />
                          SOS
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link
                href="tel:017615706043"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
              >
                <Phone size={18} />
                <span className="font-semibold">Notdienst</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
