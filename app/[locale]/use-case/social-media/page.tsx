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
import PainPoints, { type IPoint } from "@/components/pain-points";
import Solution from "@/components/solution";
import { AppRegistration } from "@/components/ui/icons/app-registration";
import { Clock } from "@/components/ui/icons/clock";
import { DatasetGrandient } from "@/components/ui/icons/dataset-grandient";
import { OverviewOutlined } from "@/components/ui/icons/overview-outlined";
import { SearchInsights } from "@/components/ui/icons/search-insights";
import { SearchOutlined } from "@/components/ui/icons/search-outlined";
import { SystemDataOutlined } from "@/components/ui/icons/system-data-outlined";

export default function SocialMedia() {
  const t = useTranslations("useCases.socialMedia");
  const tShared = useTranslations("shared.benefits");

  const capabilitiesContent: {
    icon: ReactElement;
    title: string;
    desc?: string | undefined;
  }[] = [
    {
      icon: <SearchOutlined />,
      title: t("capabilities.capability1.title"),
      desc: t("capabilities.capability1.desc"),
    },
    {
      icon: <OverviewOutlined />,
      title: t("capabilities.capability2.title"),
      desc: t("capabilities.capability2.desc"),
    },
    {
      icon: <SystemDataOutlined height={28} width={28} />,
      title: t("capabilities.capability3.title"),
      desc: t("capabilities.capability3.desc"),
    },
  ];

  const pointList: IPoint[] = [
    {
      icon: (
        <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
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
        <AppRegistration className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
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
  return (
    <div className="relative h-full min-h-full overflow-y-auto">
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title={t("title")} />
        <Background background={t("background")} />
      </div>
      <PainPoints pointList={pointList} />
      <Solution solution={t("solution")}>
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
            <p className="text-3xl-700 lg:text-4xl-700">{tShared("title")}</p>
            <div className="flex w-full flex-col justify-between gap-20 lg:flex-row">
              <div className="flex flex-col gap-6">
                <BenefitDesList
                  list={[
                    {
                      title: t("benefits.des.rate.title"),
                      des: t("benefits.des.rate.des"),
                    },
                    {
                      title: t("benefits.des.concurrency.title"),
                      des: t("benefits.des.concurrency.des"),
                    },
                    {
                      title: t("benefits.des.management.title"),
                      des: t("benefits.des.management.des"),
                    },
                  ]}
                />
              </div>
              <div className="flex min-w-fit flex-col justify-between gap-10 lg:items-end">
                <GradientNumberDes
                  des={t("benefits.numbers.scale.des")}
                  title={t("benefits.numbers.scale.title")}
                />
                <div className="flex flex-row gap-10">
                  <GradientNumberDes
                    des={t("benefits.numbers.queries.des")}
                    subTitle={t("benefits.numbers.queries.subTitle")}
                    title={t("benefits.numbers.queries.title")}
                  />
                  <GradientNumberDes
                    des={t("benefits.numbers.latency.des")}
                    subTitle={t("benefits.numbers.latency.subTitle")}
                    title={t("benefits.numbers.latency.title")}
                  />
                  <GradientNumberDes
                    classname="hidden md:block"
                    des={t("benefits.numbers.rate.des")}
                    title={t("benefits.numbers.rate.title")}
                  />
                </div>
                <div className="flex flex-row flex-wrap gap-10">
                  <GradientNumberDes
                    classname="block md:hidden"
                    des={t("benefits.numbers.rate.des")}
                    title={t("benefits.numbers.rate.title")}
                  />
                  <GradientNumberDes
                    classname="block md:hidden"
                    des={t("benefits.numbers.qps.des")}
                    title={t("benefits.numbers.qps.title")}
                  />
                </div>
                <div className="flex flex-col gap-10 md:flex-row lg:items-end">
                  <GradientNumberDes
                    classname="hidden md:block"
                    des={t("benefits.numbers.qps.des")}
                    title={t("benefits.numbers.qps.title")}
                  />
                  <GradientNumberDes
                    des={t("benefits.numbers.TPS.des")}
                    title={t("benefits.numbers.TPS.title")}
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
