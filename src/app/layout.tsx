import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppinsClassName: string = poppins.className;

export const metadata: Metadata = {
  title: "sanitar-notidienst-neuss",
  description: "Its a sanitar-notidienst-neuss (plumber ) website",
  keywords: ["Plumber werbsite"],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  publisher: "Ishtiak's LTD",
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
      <body className={`${poppinsClassName}`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
