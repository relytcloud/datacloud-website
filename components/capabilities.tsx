import type { ReactElement } from "react";
import SessionContainer from "@/components/session-container";
import { SearchOutlined } from "@/components/ui/icons/search-outlined";

export default function Capabilities({
  content,
}: {
  content: {
    icon: ReactElement;
    title: string;
    desc?: string;
  }[];
}) {
  return (
    <SessionContainer title="Application Scenarios">
      <div className="flex w-full flex-col justify-center gap-6 md:flex-row">
        {content?.map((item) => (
          <div
            className="w-full rounded-2xl border border-grey-800 bg-bg-grey-900 bg-black p-6 text-center md:w-[320px]"
            key={item.title}
          >
            <div className="mx-auto w-fit rounded-md bg-icon p-2">
              {item?.icon || <SearchOutlined />}
            </div>
            <h4 className="mt-4 text-base-500 text-grey-100">{item.title}</h4>
            {item?.desc && (
              <p className="text-grey-400 text-sm-400">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </SessionContainer>
  );
}
