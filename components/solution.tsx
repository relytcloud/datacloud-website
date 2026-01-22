import type React from "react";
import SessionContainer from "@/components/session-container";

export default function Solution({
  titleClassName = "",
  solution,
  children,
}: {
  titleClassName?: string;
  solution: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <SessionContainer title="Solution Overview" titleClassName={titleClassName}>
      {typeof solution === "string" ? (
        <p className="mx-auto max-w-[800px] text-center text-base-400 text-grey-400">
          {solution}
        </p>
      ) : (
        solution
      )}
      {/* <Image
        alt="solution"
        className={`mx-auto mt-10 lg:pt-10 ${imgClassname}`}
        height={imgHeight}
        src={img || "/assets/home/what.svg"}
        width={imgWidth}
      /> */}
      {children}
    </SessionContainer>
  );
}
