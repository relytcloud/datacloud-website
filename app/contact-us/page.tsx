"use client";

import { KeyOutlined } from "@/components/ui/icons/key-outlined";
import { SampleDataOutlined } from "@/components/ui/icons/sample-data-outlined";
import { SmartToyOutlined } from "@/components/ui/icons/smart-toy-outlined";
import { SystemDataOutlined } from "@/components/ui/icons/system-data-outlined";
import { TransferOutlined } from "@/components/ui/icons/transfer-outlined";
import { AndTransfer } from "@/lib/utils";
import ConsultForm from "./_components/consult-form";


export default function Contact() {
  return (
    <div className="h-auto gap-20 px-6 py-10 lg:flex lg:flex-row lg:justify-around lg:px-20 lg:py-[100px] xl:px-20">
      <div className="h-fit flex-1 pr-10 pb-10 lg:sticky lg:top-[164px]">
        <h1 className="bg-linear-to-r from-[#51A4F6] to-[#3867FF] bg-clip-text text-3xl-700 text-transparent lg:text-4xl-700">
          Build Your Tailored AI and Data Intelligence Today
        </h1>
        <div className="mt-10 flex flex-col gap-6">
          <div className="flex min-w-fit flex-row items-start gap-2">
            <p className="my-0.5 h-4 w-4 shrink-0 lg:my-0 lg:h-6 lg:w-6">
              <TransferOutlined
                height="auto"
                viewBox="0 0 24 24"
                width="100%"
              />
            </p>
            <p className="text-sm-400 text-white lg:text-base-500">
              Serverless architecture with metadata, data, storage, and compute
              decoupled
            </p>
          </div>
          <div className="flex min-w-fit flex-row items-start gap-2">
            <p className="my-0.5 h-4 w-4 shrink-0 lg:my-0 lg:h-6 lg:w-6">
              <SampleDataOutlined
                height="auto"
                viewBox="0 0 24 24"
                width="100%"
              />
            </p>
            <p className="text-sm-400 text-white lg:text-base-500">
              One data for diverse workloads
            </p>
          </div>
          <div className="flex min-w-fit flex-row items-start gap-2">
            <p className="my-0.5 h-4 w-4 shrink-0 lg:my-0 lg:h-6 lg:w-6">
              <SmartToyOutlined
                height="auto"
                viewBox="0 0 24 24"
                width="100%"
              />
            </p>
            <p className="text-sm-400 text-white lg:text-base-500">
              High-quality analysis results, validated by leading AI data
              analysis platforms
            </p>
          </div>
          <div className="flex min-w-fit flex-row items-start gap-2">
            <p className="my-0.5 h-4 w-4 shrink-0 lg:my-0 lg:h-6 lg:w-6">
              <SystemDataOutlined
                height="auto"
                viewBox="0 0 24 24"
                width="100%"
              />
            </p>
            <p className="text-sm-400 text-white lg:text-base-500">
              90% cost off, benefited from operator-level performance
              optimization
            </p>
          </div>
          <div className="flex min-w-fit flex-row items-start gap-2">
            <p className="my-0.5 h-4 w-4 shrink-0 lg:my-0 lg:h-6 lg:w-6">
              <KeyOutlined height="auto" viewBox="0 0 24 24" width="100%" />
            </p>
            <p
              className="text-sm-400 text-white lg:text-base-500"
              dangerouslySetInnerHTML={{
                __html: AndTransfer("Enterprise-grade security & compliance"),
              }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto rounded-2xl md:border md:border-gradient-card-outlineBorder md:bg-grey-900 md:px-12 md:py-10 lg:w-[480px] xl:w-[540px]">
        <ConsultForm />
      </div>
    </div>
  );
}
