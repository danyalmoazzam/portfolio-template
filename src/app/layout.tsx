import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Abdul Baqi | Portfolio",
  metadataBase: new URL("https://abdulbaqi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Abdul Baqi", url: "https://github.com/abdulbaqi-dev" },
    { name: "Abdul Baqi", url: "https://github.com/abdulbaqi-dev" },
  ],
  description: "Abdul Baqi's personal portfolio website",
  openGraph: {
    title: "Abdul Baqi | Personal",
    description: "Abdul Baqi's personal portfolio website",
    images: [
      {
        url: "/abdulbaqi.jpeg",
        alt: "Abdul Baqi's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* <Header /> */}
        {/* <GridBackground /> */}
        <main className="container overflow-x-hidden border-b-2 border-b-foreground selection:bg-purple-500/30 lg:px-28">
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
