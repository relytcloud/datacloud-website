"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

// DocumentationCard component
function DocumentationCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-black">
      {/* Card content container */}
      <div className="relative z-10 p-6">
        {/* Background image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            alt="Card Background"
            className="h-full w-full object-cover"
            height={500}
            priority
            src="/assets/documentation/documentation-card-gradient-bg.svg"
            width={500}
          />
        </div>

        <div className="relative z-10 mb-6 flex items-center justify-center overflow-hidden rounded-lg border border-grey-700">
          <Image
            alt={`${title} Documentation`}
            className="h-auto w-full object-contain"
            height={250}
            src={image}
            width={500}
          />
        </div>

        <div className="relative z-10 text-left">
          <h3 className="font-medium text-2xl-500 text-white md:text-3xl-500">
            {title}
          </h3>
          <p className="mt-2 mb-6 text-grey-400">{description}</p>
          <Button className="text-white" size="sm" variant="outline">
            <Link className="flex items-center" href={link} target="_blank">
              Documentation
              <svg
                className="ml-2"
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>

      {/* Gradient border - must be last to appear on top */}
      <div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          background: "linear-gradient(135deg, #51A4F6, #24D0E7, #BB61FF)",
          padding: "1px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "exclude",
          zIndex: 20,
        }}
      />
    </div>
  );
}

export default function DocumentationIndexPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-black pt-[80px] pb-[80px] lg:pt-[120px] lg:pb-[160px]">
        {/* Background image */}
        <div className="absolute inset-0 flex h-full w-full items-end">
          <div className="absolute inset-0 -mx-[100vw] flex items-end justify-center overflow-hidden">
            <Image
              alt="Background"
              className="h-auto w-auto min-w-screen object-cover"
              height={1080}
              priority
              sizes="100vw"
              src="/assets/documentation/documentation-hero-bg2.svg"
              width={3000}
            />
          </div>
        </div>
        <Container className="relative z-10 px-6 md:px-[24px]">
          <h1 className="text-center font-bold text-4xl text-white md:text-5xl lg:text-6xl">
            DataCloud Documentation
          </h1>
        </Container>
      </section>

      {/* Documentation Cards */}
      <section className="relative py-[40px] lg:py-[100px]">
        <Container className="px-6 md:px-[24px]">
          <div className="grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-2">
            <DocumentationCard
              description="Serverless Data Cloud for Data Warehouse, Data Lake, AI"
              image="/assets/documentation/documentation-card-relyt.svg"
              link="https://docs.data.cloud"
              title="Relyt"
            />
            <DocumentationCard
              description="AI Analytics Cloud for Serious Data Work"
              image="/assets/documentation/documentation-card-powerdrill.svg"
              link="https://docs.powerdrill.ai"
              title="Powerdrill"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
