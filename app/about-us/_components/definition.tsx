import Image from "next/image";
import { CheckOutlined } from "@/components/ui/icons/check-outlined";

export default function Definition() {
  return (
    <>
      <div className="flex flex-col-reverse items-center gap-10 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:py-[100px] xl:gap-0 xl:p-20">
        <p className="text-base-400 text-white lg:flex-1 xl:w-[640px] xl:flex-none">
          DataCloud Technology is an AI-ready Data cloud service provider and a
          global leader and practitioner in Serverless AI-ready Data Cloud
          solutions. Headquartered in Singapore with branches in the U.S., the
          company serves Fortune 500 technology clients and over 1 million
          individual users worldwide.
        </p>
        <div className="relative hidden h-[52px] w-[275px] lg:block">
          <Image alt="Who" fill src="/assets/about-us/who-we-are.svg" />
        </div>
        <div className="relative block h-[38px] w-[183.634px] lg:hidden">
          <Image
            alt="who-we-are"
            fill
            src="/assets/about-us/who-we-are-small.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:py-[100px] xl:p-20">
        <div className="relative hidden h-[104px] w-[175px] lg:block">
          <Image
            alt="our-mission"
            fill
            src="/assets/about-us/our-mission.svg"
          />
        </div>
        <div className="relative block h-[38px] w-[183.634px] lg:hidden">
          <Image
            alt="our-mission"
            fill
            src="/assets/about-us/our-mission-small.svg"
          />
        </div>
        <div className="flex flex-col gap-2 lg:flex-1 xl:flex-none">
          <p className="text-base-400 text-white xl:w-[640px]">
            With the exponential growth of data, the boundaries of enterprise
            data governance are expanding, leading to increasing challenges in
            data costs, privacy, and security. Concurrently, rapid advancements
            in technologies like generative AI are driving enterprises towards a
            new era of AI transformation and AI data business upgrades. In this
            context, based on typical enterprise data business scenarios and
            demand analysis, we believe there are two key requirements for
            enterprise-grade AI data infrastructure: First, it must be
            cost-effective and trustworthy for customers to adopt. Second, it
            must ensure optimal usage and maximize data value. The latter is
            more demanding, emphasizing AI-driven value creation and data
            collaboration to enable broader utilization of data value across the
            organization. AI-ready Data Cloud empowers organizations to:
          </p>
          <div className="flex flex-row gap-1 text-base-400 text-white xl:w-[640px]">
            <CheckOutlined className="my-0.5" height={20} width={20} />
            <p>
              Drive Al transformation, unlocking Al use cases and amplifying
              productivity.
            </p>
          </div>
          <div className="flex flex-row gap-1 text-base-400 text-white xl:w-[640px]">
            <CheckOutlined className="my-0.5" height={20} width={20} />
            <p>
              Democratize Al, fostering business exploration and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
