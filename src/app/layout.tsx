import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "sanitar-notidienst-neuss",
  description: "Its a sanitar-notidienst-neuss (plumber ) website",
  keywords: ["Plumber werbsite"],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  publisher: "Ruhit's LTD",
  authors: [
    {
      name: "Ruhit Been SIddik",
      url: "https://www.facebook.com/ruhitbeensiddiq",
    },
  ],
  creator: "Ruhit Been Siddik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
