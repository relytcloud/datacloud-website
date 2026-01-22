import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/header"));
const Footer = dynamic(() => import("@/components/footer"));

// const orbitron = Orbitron({
//   variable: "--font-orbitron",
//   subsets: ["latin"],
// });

// const rajdhani = Rajdhani({
//   variable: "--font-rajdhani",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataCloud: The Serverless AI-ready Data Cloud",
  description:
    "Serverless for Data Warehousing, Data Lakes & AI: A secure, open data cloud that's built for scale, accuracy, and native reliability, offering 10x TCO savings.",
  keywords: [
    "Serverless",
    "Data Platform",
    "Data Intelligence",
    "Data Warehouse",
    "OLAP",
    "Vector Database",
    "Lakehouse",
    "Intelligent Lakehouse",
    "Data Analysis",
    "Unstructured Data",
    "Generative AI",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${barlow.variable} relative min-h-screen antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
