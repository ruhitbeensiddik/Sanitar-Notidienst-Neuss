"use client";
import Image from "next/image";
// import loveIcon from "@/assets/love.png";
import { Button } from "../ui/button";
import {
  Book,
  Building2,
  HelpCircle,
  Home,
  LogInIcon,
  Mail,
  Phone,
  ShoppingBag,
  UserCircle2,
  UserPlus,
} from "lucide-react";
import Container from "./Container";
import NavigationLink from "./NavigationLink";
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
// import newArrivalImage from "@/assets/new-arrivals.jpg";
import { useEffect, useState } from "react";

// In your MegaMenu component
export const MegaMenu = () => {
  return (
    <div className="absolute left-0 mt-2 max-w-screen bg-white shadow-2xl rounded-md p-4 grid gap-4 z-100 invisible group-hover:visible">
      {/* category and new arrivals */}
      <div className="flex gap-20">
        {/* category */}
        <div>
          <h3 className="font-bold">Category</h3>
          <div className="mt-4">
            <ul className="space-y-2">
              <li>
                <NavigationLink route="Property" path="/category/property" />
              </li>
              <li>
                <NavigationLink route="Home" path="/category/home" />
              </li>
              <li>
                <NavigationLink route="Vehicles" path="/category/vehicles" />
              </li>
              <NavigationLink
                route="Electronics"
                path="/category/electronics"
              />
              <li></li>
              <li>
                <NavigationLink route="Mobile" path="/category/mobile" />
              </li>
              <li>
                <NavigationLink route="Pets" path="/category/pets" />
              </li>
              <li>
                <NavigationLink route="Sports" path="/category/sports" />
              </li>
              <li>
                <NavigationLink route="Clothes" path="/category/clothes" />
              </li>
            </ul>
          </div>
        </div>

        {/* new arrivals */}
        <div>
          <h3 className="font-bold">New Arrivals</h3>
        </div>

        {/* actionable images */}
        <div className=" flex gap-4">
          <div className="flex flex-col gap-4">
            {/* <Link href="/products">
              <div className="w-50 h-50 relative overflow-hidden rounded-lg flex-1">
                <Image
                  src={newArrivalImage}
                  alt="Thumbnail Image"
                  fill
                  className="object-cover"
                />
              </div>
            </Link> */}
            <div className="w-50 h-50 relative flex-1">
              <Image
                src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                alt="New Arrival Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-50 h-auto relative">
            <Image
              src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="New Arrival Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* blogs */}
      <div>
        <h3 className="font-bold">New Blogs</h3>
      </div>
    </div>
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
      className={` ${
        isScrolled
          ? "lg:fixed lg:top-0 lg:left-0 lg:w-full lg:bg-[#FAF6F2] lg:z-50 lg:shadow-md"
          : ""
      }`}
    >
      <Container>
        <nav className="mt-4">
          <div
            className={`flex lg:items-center gap-4 flex-col lg:flex-row lg:justify-between ${
              isScrolled ? "hidden" : ""
            }`}
          >
            {/* right side */}
            <div className="space-y-4">
              {/* contact info */}
              <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-4">
                <p className="text-sm">
                  <Phone size={18} className="inline text-[#F59E0B]" /> Contact:
                  +880 131 577 3424
                </p>
                <p className="text-sm">
                  <Mail size={18} className="inline text-[#F59E0B]" />{" "}
                  support@resellbd.com
                </p>
                {/* <div className="text-sm flex items-center gap-1">
                  <Image src={usaFlag} width={25} height={25} alt="usa flag" />
                  English
                </div> */}
              </div>

              {/* signin button */}
              <div className="  flex flex-col md:flex-row md:justify-end gap-2 md:gap-4">
                <Link href="/login" className="block ">
                  <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] cursor-pointer">
                    <LogInIcon size={18} />
                    SignIn With Your Account
                  </Button>
                </Link>
                <Link href="/register" className="block ">
                  <Button
                    variant="outline"
                    className="text-[#1F2937] cursor-pointer"
                  >
                    <UserPlus size={18} />
                    Create A New Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4  flex justify-end lg:justify-between lg:mb-4">
            {/* menubar */}

            <ul className="hidden lg:flex gap-4 text-lg">
              <li>
                <NavigationLink route="Home" path="/" />
              </li>
              <li>
                <NavigationLink route="Products" path="/products" />
              </li>
              <li className="group relative">
                {/* MegaMenu will open when hovering over Products */}
                <NavigationLink route="Discover" path="#" />
                <MegaMenu />
              </li>
              <li>
                <NavigationLink route="About Us" path="/aboutUs" />
              </li>
              <li>
                <NavigationLink route="Contact Us" path="/contactUs" />
              </li>
              <li>
                <NavigationLink route="FAQs" path="/faq" />
              </li>
              <li>
                <NavigationLink route="Blogs" path="/blogs" />
              </li>
            </ul>
            {/* wishlist and profile */}
            <div className="flex items-center gap-4">
              {/* <Link href="/wishlist">
                <Button variant="outline" className="cursor-pointer">
                  <Image src={loveIcon} width={22} height={22} alt="wishlist" />
                  Wishlist
                </Button>
              </Link> */}

              {/* full dropdown visible for small devices */}
              <div className="lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="cursor-pointer">
                    <UserCircle2 size={28} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Explore</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link
                          href="/"
                          className="flex gap-2 text-base items-center"
                        >
                          <Home className="w-6 h-6  " />
                          Home
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/products"
                          className="flex gap-2 text-base items-center"
                        >
                          <ShoppingBag className="w-6 h-6" />{" "}
                          {/* Browse Products */}
                          Products
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/aboutUs"
                          className="flex gap-2 text-base items-center"
                        >
                          <Building2 className="w-6 h-6" />
                          About Us
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/contactUs"
                          className="flex gap-2 text-base items-center"
                        >
                          <Mail className="w-6 h-6" />
                          Contact Us
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/faq"
                          className="flex gap-2 text-base items-center"
                        >
                          <HelpCircle className="w-6 h-6" />
                          FAQs
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/blogs"
                          className="flex gap-2 text-base items-center"
                        >
                          <Book className="w-6 h-6" />
                          Blogs
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
