"use client";
import Image from "next/image";
import type { ReactElement } from "react";
import Background from "@/components/background";
import BenefitDesList from "@/components/benefit-des-list";
import Benefits from "@/components/benefits";
import Capabilities from "@/components/capabilities";
import FirstScreen from "@/components/first-screen";
import GradientNumberDes from "@/components/gradient-number-des";
import type { IPoint } from "@/components/pain-points";
import PainPoints from "@/components/pain-points";
import Solution from "@/components/solution";
import { Clock } from "@/components/ui/icons/clock";
import { CostGrandient } from "@/components/ui/icons/cost-grandient";
import { OverviewOutlined } from "@/components/ui/icons/overview-outlined";
import { ReadinessScore } from "@/components/ui/icons/readiness-score";
import { SearchInsights } from "@/components/ui/icons/search-insights";
import { SearchOutlined } from "@/components/ui/icons/search-outlined";

const capabilitiesContent: {
  icon: ReactElement;
  title: string;
  desc?: string | undefined;
}[] = [
  {
    icon: <SearchOutlined />,
    title: "AI-powered data analysis",
    desc: "",
  },
  {
    icon: <OverviewOutlined />,
    title: "RAG",
    desc: "(Retrieval-Augmented Generation)",
  },
];
const pointList: IPoint[] = [
  {
    icon: (
      <CostGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "High cost of storage and retrieval",
    des: "Managing hundreds of billions of vectors costs tens of millions per month, creating financial strain.",
  },
  {
    icon: <Clock className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />,
    title: "Performance bottlenecks",
    des: "The legacy system struggles to handle millions of daily queries with sub-100ms response times, affecting real-time performance.",
  },
  {
    icon: (
      <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Low search accuracy",
    des: "Poor search accuracy and lack of multi-path recall mechanisms lead to unreliable results, impacting business effectiveness.",
  },
  {
    icon: (
      <ReadinessScore className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Complex infrastructure dependencies",
    des: "Managing multiple retrieval components adds complexity, with each new tool requiring security approval and creating operational inefficiencies.",
  },
];

export default function Aigc() {
  const benefitsDesList = [
    {
      title: "Cost efficiency at scale",
      des: "Save millions monthly, reducing storage and retrieval costs for large-scale vector data.",
          
    },
    {
      title: "High performance",
      des: "Support millions of queries daily with sub-100ms response times for real-time results.",
    },
    {
      title: "Accurate search",
      des: "Ensure precise results with high accuracy and multi-path recall mechanisms.",
    },
    {
      title: "Streamlined management",
      des: "We handle infrastructure, freeing the customer to focus on strategy, not complexity.",
    },
    {
      title: "Search optimization",
      des: "Easily adjust models and parameters for tailored search and ranking performance.",
    },
    {
      title: "Secure and compliant",
      des: "Safeguard data with robust security and governance, meeting all compliance standards.",
    },
  ];

  return (
    <div className={"relative h-full min-h-full overflow-y-auto"}>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title="Generative AI" />
        <Background background="This customer, a GenAI service provider, manages the daunting task of processing hundreds of billions of data records and millions of queries every day. Facing challenges such as data volume management, maintaining query speed, and ensuring accurate analytics, they require an AI RAG system capable of performing real-time analytics on massive datasets." />
      </div>
      <PainPoints pointList={pointList} />
      <Solution
        solution="The Relyt GenAI solution transforms unstructured data, including text and images, into vectors using embedding models and securely stores these vectors in vector databases. When an application accesses the data, it first retrieves semantically related text from the vector database. This text, along with user queries, is sent to Large Language Models (LLMs) as context or prompts. The LLMs then process and return the answers to the applications. This method effectively resolves challenges related to data privacy and the 'hallucination' issues commonly faced with LLMs."
      >
        <Image
          alt="aigc solution"
          className="mx-auto mt-10 bg-contain lg:pt-10"
          height={352}
          src="/assets/use-case/aigc-arch.svg"
          width={800}
        />
      </Solution>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-auto bg-top-left bg-no-repeat">
        <Capabilities content={capabilitiesContent} />
        <Benefits>
          <div className="flex flex-1 flex-col gap-6 lg:gap-10">
            <p className="text-3xl-700 lg:text-4xl-700">Customer Benefits</p>
            <div className="flex flex-col justify-between gap-20 lg:flex-row">
              <BenefitDesList list={benefitsDesList} />
              <div className="flex flex-col items-start gap-10 lg:items-end">
                <div className="flex flex-row gap-10">
                  <GradientNumberDes des="chats" title="1000万+" />
                  <GradientNumberDes des="files" title="1000万+" />
                </div>
                <GradientNumberDes
                  title="Real-time updates"
                  titleClassname="md:whitespace-nowrap"
                />
                <GradientNumberDes
                  title="Multimodal index"
                  titleClassname="md:whitespace-nowrap"
                />
                <GradientNumberDes des="reduction in TCO" title="90%" />
              </div>
            </div>
          </div>
        </Benefits>
      </div>
    </div>
  );
}
