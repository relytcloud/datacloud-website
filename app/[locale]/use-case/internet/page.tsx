"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
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

export default function Internet() {
  const t = useTranslations("useCases.internet");
  const tShared = useTranslations("shared.benefits");

  const capabilitiesContent: {
    icon: ReactElement;
    title: string;
    desc?: string | undefined;
  }[] = [
    {
      icon: <SystemDataOutlined height={28} width={28} />,
      title: t("capabilities.capability1.title"),
      desc: t("capabilities.capability1.desc"),
    },
  ];

  const pointList: IPoint[] = [
    {
      icon: (
        <DatabaseGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point1.title"),
      des: t("painPoints.point1.des"),
    },
    {
      icon: <Clock className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />,
      title: t("painPoints.point2.title"),
      des: t("painPoints.point2.des"),
    },
    {
      icon: (
        <CostGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point3.title"),
      des: t("painPoints.point3.des"),
    },
    {
      icon: (
        <DatasetGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point4.title"),
      des: t("painPoints.point4.des"),
    },
  ];

  const benefitsDesList = [
    {
      title: t("benefits.des.performance.title"),
      des: t("benefits.des.performance.des"),
    },
    {
      title: t("benefits.des.cost.title"),
      des: t("benefits.des.cost.des"),
    },
    {
      title: t("benefits.des.system.title"),
      des: t("benefits.des.system.des"),
    },
    {
      title: t("benefits.des.enhanced.title"),
      des: t("benefits.des.enhanced.des"),
    },
  ];
  return (
    <div className={"} relative h-full min-h-full overflow-y-auto"}>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title={t("title")} />
        <Background background={t("background")} />
      </div>
      <PainPoints pointList={pointList} />
      <Solution solution={t("solution")}>
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
            <p className="text-3xl-700 lg:text-4xl-700">{tShared("title")}</p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-between gap-20 lg:flex-row">
                <BenefitDesList list={benefitsDesList} />
                <div className="grid h-fit max-w-fit flex-1 grid-flow-row grid-cols-1 flex-wrap gap-10 md:grid-cols-2">
                  <GradientNumberDes
                    des={t("benefits.numbers.costs.des")}
                    title={t("benefits.numbers.costs.title")}
                  />
                  <GradientNumberDes
                    des={t("benefits.numbers.optimization.des")}
                    title={t("benefits.numbers.optimization.title")}
                  />
                  <GradientNumberDes
                    classname="md:col-span-2"
                    title={t("benefits.numbers.queries.title")}
                  />
                  <GradientNumberDes
                    classname="md:col-span-2"
                    title={t("benefits.numbers.analytics.title")}
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
