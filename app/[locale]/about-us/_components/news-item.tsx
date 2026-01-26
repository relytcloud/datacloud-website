import { TimeLineDot } from "@/components/ui/icons/time-line-dot";
import { cn } from "@/lib/utils";

interface INewsItem {
  title: string;
  content: string;
  reverse?: boolean;
}

export default function NewsItem({
  title,
  content,
  reverse = false,
}: INewsItem) {
  return (
    <div
      className={cn(
        "relative flex flex-row lg:w-[160px]",
        reverse
          ? "lg:mb-[144px] lg:flex-col-reverse"
          : "lg:mt-[144px] lg:flex-col"
      )}
    >
      <TimeLineDot
        className={cn("timeline-dot-shadow absolute top-1.5 z-10 lg:top-auto")}
      />
      <p
        className={cn(
          "mt-[12px] mb-[5.5px] ml-4 h-px w-6 bg-linear-to-r from-white to-transparent pl-6 lg:mx-[5.5px] lg:h-6 lg:w-px lg:pl-0",
          reverse
            ? "lg:mt-[6px] lg:mb-4 lg:bg-linear-to-t"
            : "lg:mt-4 lg:mb-[6px] lg:bg-linear-to-b"
        )}
      />
      <div className="pl-[7px] lg:pl-[5.5px]">
        <p className="timeline-title text-base-500">{title}</p>
        <p className="text-grey-400 text-sm-400">{content}</p>
      </div>
    </div>
  );
}
