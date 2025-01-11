import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Cursor from "@/components/cursor";
import NavBar from "@/components/navbar";
import ReturnToTop from "@/components/returntotop";

const poppins = Poppins({ subsets:['latin'], weight:"400" })

export const metadata: Metadata = {
  title: "marshyi.dev",
  description: "marshyi's Developer Portfolio",
  keywords: ["marshyi", "Developer", "Portfolio", "Dev", "JavaScript", "React", "Next.js"],
  openGraph: {
    title: "marshyi.dev",
    description: "marshyi's Developer Portfolio",
    url: "marshyi.dev",
    siteName: "marshyi.dev",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "marshyi.dev",
    description: "marshyi's Developer Portfolio"
  }
};

export const viewport: Viewport = {
  themeColor: "black"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} flex flex-col items-center justify-center overflow-y-hidden font-sans antialiased text-stone-50 bg-black outline-none selection:bg-stone-50 selection:text-black`}
      >
        <Cursor />
        <NavBar />
        {children}
        <ReturnToTop />
      </body>
    </html>
  );
}
