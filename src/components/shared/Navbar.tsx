"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import NavigationLink from "./NavigationLink";
import Container from "./Container";
import {
  Book,
  Building2,
  HelpCircle,
  Home,
  Mail,
  ShoppingBag,
  Menu as HamburgerMenu,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMegaOpen, setIsMobileMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isScrolled
          ? "lg:fixed lg:top-0 lg:left-0 lg:w-full bg-opacity-75 lg:z-50 lg:shadow-md bg-white"
          : "lg:relative shadow-sm p-1"
      }`}
    >
      <Container>
        <nav className="mt-4">
          <div className="mt-4 lg:flex space-y-4 justify-between items-center lg:mb-4">
            <Link href={"/"}>
              <h1 className="lg:text-lg font-semibold">
                SecondHand<span className="text-teal-600">Marketplace</span>
              </h1>
            </Link>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-teal-700"
              >
                <HamburgerMenu size={28} />
              </button>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-4 text-base font-medium">
              <li>
                <NavigationLink route="Home" path="/" />
              </li>
              <li>
                <NavigationLink route="All Products" path="/products" />
              </li>
              <li>
                <NavigationLink route="About Us" path="/aboutUs" />
              </li>
              <li>
                <NavigationLink route="FAQ" path="/faq" />
              </li>
              <li>
                <NavigationLink route="Contact" path="/contactUs" />
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="lg:flex items-center gap-4">
              <Link href="/user/dashboard">
                <Button
                  variant="outline"
                  className="cursor-pointer border border-neutral-300 lg:px-4 flex lg:py-[6px] gap-3 rounded-full hover:bg-teal-700 hover:text-white bg-zinc-50"
                >
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white shadow-md py-4 px-6">
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="flex gap-2 items-center">
                    <Home className="w-6 h-6" /> Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="flex gap-2 items-center">
                    <ShoppingBag className="w-6 h-6" /> Products
                  </Link>
                </li>
                <li>
                  <Link href="/aboutUs" className="flex gap-2 items-center">
                    <Building2 className="w-6 h-6" /> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contactUs" className="flex gap-2 items-center">
                    <Mail className="w-6 h-6" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="flex gap-2 items-center">
                    <HelpCircle className="w-6 h-6" /> FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="flex gap-2 items-center">
                    <Book className="w-6 h-6" /> Blogs
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsMobileMegaOpen(!isMobileMegaOpen)}
                    className="flex gap-2 items-center text-teal-700 font-medium"
                  >
                    Discover
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
}
