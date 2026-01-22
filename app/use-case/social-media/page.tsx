"use client";
import Image from "next/image";
import type { ReactElement } from "react";
import Background from "@/components/background";
import BenefitDesList from "@/components/benefit-des-list";
import Benefits from "@/components/benefits";
import Capabilities from "@/components/capabilities";
import FirstScreen from "@/components/first-screen";
import GradientNumberDes from "@/components/gradient-number-des";
import PainPoints, { type IPoint } from "@/components/pain-points";
import Solution from "@/components/solution";
import { AppRegistration } from "@/components/ui/icons/app-registration";
import { Clock } from "@/components/ui/icons/clock";
import { DatasetGrandient } from "@/components/ui/icons/dataset-grandient";
import { OverviewOutlined } from "@/components/ui/icons/overview-outlined";
import { SearchInsights } from "@/components/ui/icons/search-insights";
import { SearchOutlined } from "@/components/ui/icons/search-outlined";
import { SystemDataOutlined } from "@/components/ui/icons/system-data-outlined";

const capabilitiesContent: {
  icon: ReactElement;
  title: string;
  desc?: string | undefined;
}[] = [
  {
    icon: <SearchOutlined />,
    title: "Unified public opinion retrieval",
    desc: "",
  },
  {
    icon: <OverviewOutlined />,
    title: "Real-time content verification",
    desc: "",
  },
  {
    icon: <SystemDataOutlined height={28} width={28} />,
    title: "Real-time multi-dimensional analysis",
    desc: "",
  },
];

const pointList: IPoint[] = [
  {
    icon: (
      <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "High recall rate requirements",
    des: "The business relies on high recall rates to ensure accurate data analysis. A recall rate below 98% leads to inaccurate insights, affecting overall business precision.",
  },
  {
    icon: <Clock className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />,
    title: "Lack of real-time data access",
    des: "Immediate data retrieval upon ingestion is essential for real-time monitoring in public sentiment analysis. Without this capability, the business risks missing critical insights.",
  },
  {
    icon: (
      <AppRegistration className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Limited scalability for high concurrent reads/writes",
    des: "The current system struggles to support the high concurrent demands of tens of thousands of QPS and 2000 TPS while maintaining a 99% recall rate, impacting performance during peak loads.",
  },
  {
    icon: (
      <DatasetGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Inefficient data management",
    des: "The business primarily relies on the last 7 days of hot data for vector searches, but without proper data lifecycle management, handling and accessing this data becomes inefficient.",
  },
];

export default function SocialMedia() {
  return (
    <div className="relative h-full min-h-full overflow-y-auto">
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title="Social Media" />
        <Background background="A major online media company manages vast data across scenarios like real-time public opinion monitoring, content verification, and multidimensional analysis. As data grows, they face significant challenges, including handling high concurrency during peak traffic periods, ensuring the accuracy of data and insights, and maintaining high performance. To overcome these hurdles, the company urgently requires a unified solution that can efficiently manage these complexities while providing the scalability and flexibility needed for future growth." />
      </div>
      <PainPoints pointList={pointList} />
      <Solution solution="The Relyt AI-ready Data Cloud revolutionizes data processing and analytics through cutting-edge vector storage and retrieval capabilities. This solution converts unstructured data into vectors using advanced embedding models. These vectors, along with structured data, are securely stored in specialized vector databases, facilitating real-time hybrid search and retrieval of both structured data and unstructured data.">
        <Image
          alt="social media solution"
          className="mx-auto mt-10 bg-contain lg:pt-10"
          height={186}
          src="/assets/use-case/social-media-arch.svg"
          width={800}
        />
      </Solution>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-auto bg-top-left bg-no-repeat">
        <Capabilities content={capabilitiesContent} />
        <Benefits>
          <div className="flex w-full flex-col gap-6 lg:gap-10">
            <p className="text-3xl-700 lg:text-4xl-700">Customer Benefits</p>
            <div className="flex w-full flex-col justify-between gap-20 lg:flex-row">
              <div className="flex flex-col gap-6">
                <BenefitDesList
                  list={[
                    {
                      title: "High recall rate",
                      des: "ensuring comprehensive retrieval and accurate decision-making.",
                    },
                    {
                      title: "High concurrency",
                      des: "with a peak write TPS of 2,000 and a peak QPS of 13,000.",
                    },
                    {
                      title: "Automatic data management",
                      des: "with a default data retention period of 7 days.",
                    },
                  ]}
                />
              </div>
              <div className="flex min-w-fit flex-col justify-between gap-10 lg:items-end">
                <GradientNumberDes
                  des="vectors"
                  title="Hundred billion-scale"
                />
                <div className="flex flex-row gap-10">
                  <GradientNumberDes
                    des="queries per day"
                    title="200 million"
                  />
                  <GradientNumberDes
                    des="average latency"
                    subTitle="ms"
                    title="10"
                  />
                  <GradientNumberDes
                    classname="hidden md:block"
                    des="recall rate"
                    title="98%"
                  />
                </div>
                <div className="flex flex-row flex-wrap gap-10">
                  <GradientNumberDes
                    classname="block md:hidden"
                    des="recall rate"
                    title="98%"
                  />
                  <GradientNumberDes
                    classname="block md:hidden"
                    des="QPS"
                    title="13,000"
                  />
                </div>
                <div className="flex flex-col gap-10 md:flex-row lg:items-end">
                  <GradientNumberDes
                    classname="hidden md:block"
                    des="QPS"
                    title="13,000"
                  />
                  <GradientNumberDes des="TPS" title="2,000" />
                </div>
              </div>
            </div>
          </div>
        </Benefits>
      </div>
    </div>
  );
}
