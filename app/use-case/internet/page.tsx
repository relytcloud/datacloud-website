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
import { DatabaseGrandient } from "@/components/ui/icons/database-grandient";
import { DatasetGrandient } from "@/components/ui/icons/dataset-grandient";
import { SystemDataOutlined } from "@/components/ui/icons/system-data-outlined";

const capabilitiesContent: {
  icon: ReactElement;
  title: string;
  desc?: string | undefined;
}[] = [
  {
    icon: <SystemDataOutlined height={28} width={28} />,
    title: "Business operations analysis",
    desc: "",
  },
];

const pointList: IPoint[] = [
  {
    icon: (
      <DatabaseGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Rapidly growing data volume",
    des: "The company handles tens of billions of records, including user behavior logs and advertising data, putting significant pressure on storage and processing capacity.",
  },
  {
    icon: <Clock className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />,
    title: "Stringent real-time analytics demands",
    des: "To stay ahead of the curve in a fast-evolving industry, the company requires timely predictive analytics on user behavior and ad performance.",
  },
  {
    icon: (
      <CostGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Cost control urgency",
    des: "As data volume continues to expand, there is a pressing need to reduce data management and processing costs without compromising performance.",
  },
  {
    icon: (
      <DatasetGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "System stability issues",
    des: "With the increasing data volume and growing complexity of business queries, the current system is facing significant stability challenges and performance bottlenecks.",
  },
];

export default function Internet() {
  const benefitsDesList = [
    {
      title: "Performance improvement",
      des: "Data processing is 1176% faster, especially in ad log processing.",
    },
    {
      title: "Cost Savings",
      des: "Dynamic compute scaling doubles cost-performance in complex queries compared to traditional cloud solutions.",
    },
    {
      title: "System Stability",
      des: "Elastic computing ensures a 99.9% query success rate, even under high concurrency.",
    },
    {
      title: "Enhanced Business Insights",
      des: "Real-time queries and efficient batch processing boost insights and performance in large data handling.",
    },
  ];
  return (
    <div className={"} relative h-full min-h-full overflow-y-auto"}>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title="Internet" />
        <Background background="An internet entertainment group is facing challenges in data processing and analysis. With the rapid growth of its business, the volume of data has increased sharply, creating an urgent need for an efficient and cost-effective data processing solution to support business decision-making and operational optimization." />
      </div>
      <PainPoints pointList={pointList} />
      <Solution solution="The Relyt AI-ready Data Cloud delivers a scalable, cost-effective solution through its compute-storage separation architecture. As a cloud-agnostic platform, it boosts performance with vectorized query execution and algorithmic optimization. Its Adaptive Query Scaling (AQS) feature ensures high availability and efficient management of large-scale queries, offering a powerful solution for modern data workloads.">
        <Image
          alt="internet solution"
          className="mx-auto mt-10 bg-contain lg:pt-10"
          height={434}
          src="/assets/use-case/internet-arch.svg"
          width={800}
        />
      </Solution>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-auto bg-top-left bg-no-repeat">
        <Capabilities content={capabilitiesContent} />
        <Benefits>
          <div className="flex flex-1 flex-col gap-6 lg:gap-10">
            <p className="text-3xl-700 lg:text-4xl-700">Customer Benefits</p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-between gap-20 lg:flex-row">
                <BenefitDesList list={benefitsDesList} />
                <div className="grid h-fit max-w-fit flex-1 grid-flow-row grid-cols-1 flex-wrap gap-10 md:grid-cols-2">
                  <GradientNumberDes des="deduction in ETL costs" title="90%" />
                  <GradientNumberDes
                    des="query latency optimization"
                    title="10x"
                  />
                  <GradientNumberDes
                    classname="md:col-span-2"
                    title="Real-time queries"
                  />
                  <GradientNumberDes
                    classname="md:col-span-2"
                    title="Multidimensional analytics"
                  />
                </div>
              </div>
            </div>
          </div>
        </Benefits>
      </div>
    </div>
  );
}
