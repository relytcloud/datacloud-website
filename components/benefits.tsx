import SessionContainer from "@/components/session-container";

export default function Benefits({ children }: { children: React.ReactNode }) {
  return (
    <SessionContainer>
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-20">
        {children}
      </div>
    </SessionContainer>
  );
}
