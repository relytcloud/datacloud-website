"use client";

import memorylakeLogo from "@/public/memorylake.svg";
import powerdrillLogo from "@/public/powerdrill.svg";
import relytLogo from "@/public/relyt.svg";
import Section from "./_components/section";

export default function Home() {
  const sections = [
    {
      id: "hero",
      className:
        "[&>.section-content]:text-center [&_.section-content_h2]:w-[70%] [&_.section-content_h2]:mx-auto",
      title: "MEMORY-CENTRIC DATA CLOUD",
      subtitle: "The Complete AI Data Stack — From Memory to Insights.",
      description:
        "Enterprise-proven memory platform delivering integrated memory management, data LLM, and AI analytics. The complete infrastructure for intelligent AI systems.",
      videoName: "main",
      logo: "",
    },
    {
      id: "powerdrill",
      className:
        "[&>.section-content]:top-[20%] [&>.section-content]:left-[10%]",
      title: "POWERDRILL",
      subtitle: "From Data to Decisions in Minutes, Not Days or Hours. ",
      description:
        "AI-powered data analysis platform that transforms raw data into actionable insights 100x faster. No coding required—just upload, ask, and explore with intelligent AI agents.",
      buttonText: "View",
      buttonHref: "https://powerdrill.ai/",
      videoName: "pd",
      logo: powerdrillLogo.src,
    },
    {
      id: "memory-lake",
      className:
        "[&>.section-content]:top-[20%] [&>.section-content]:right-[10%]",
      title: "MEMORYLAKE",
      subtitle: "Every AI Agent Needs a Memory — We Built It. ",
      description:
        "The memory layer enabling AI agents to think and act like humans. Transforms any data into 98% accurate, PB-scale knowledge for all LLM systems.",
      buttonText: "View",
      buttonHref: "https://memorylake.ai/",
      videoName: "memorylake",
      logo: memorylakeLogo.src,
    },
    {
      id: "relyt",
      className:
        "[&>.section-content]:top-[20%] [&>.section-content]:left-[10%]",
      title: "RELYT",
      subtitle: "One Data Cloud, Every Data Model — AI-Ready. ",
      description:
        "Multi-model serverless data cloud with extreme performance. 100% PostgreSQL compatible, handles structured tables, vectors, graphs, and JSON at PB-scale effortlessly.",
      buttonText: "View",
      buttonHref: "https://data.cloud/relytone",
      videoName: "relyt",
      logo: relytLogo.src,
    },
  ];

  return (
    <main>
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </main>
  );
}
