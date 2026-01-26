import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import dynamic from "next/dynamic";
import { type Locale, routing } from "@/i18n/routing";

const Header = dynamic(() => import("@/components/header"));
const Footer = dynamic(() => import("@/components/footer"));

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const {locale} = await params;

  // 校验 locale 是否有效
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="scroll-smooth" lang={locale}>
      <body className={`${barlow.variable} relative min-h-screen antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
