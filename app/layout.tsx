import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "DATACLOUD - Making Humanity Multiplanetary",
    template: "%s | DATACLOUD",
  },
  description:
    "Building the future of space exploration and advancing human presence beyond Earth. Explore our missions, technology, and latest news.",
  keywords: [
    "space exploration",
    "space missions",
    "rocket technology",
    "spacecraft",
    "interplanetary travel",
  ],
  authors: [{ name: "DATACLOUD" }],
  creator: "DATACLOUD",
  publisher: "DATACLOUD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://data.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://data.cloud",
    title: "DATACLOUD - Making Humanity Multiplanetary",
    description:
      "Building the future of space exploration and advancing human presence beyond Earth.",
    siteName: "DATACLOUD",
  },
  twitter: {
    card: "summary_large_image",
    title: "DATACLOUD - Making Humanity Multiplanetary",
    description:
      "Building the future of space exploration and advancing human presence beyond Earth.",
    creator: "@datacloud",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {children}
      </body>
    </html>
  );
}
