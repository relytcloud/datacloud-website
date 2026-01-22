export default function Background({ background }: { background: React.ReactNode }) {
  return (
    <section className="mb-10 bg-[url('/assets/use-case/bg-background.svg')] bg-cover bg-top bg-no-repeat py-10 pb-0 lg:mb-0 lg:py-25 lg:pb-[100px]">
      <div className="container mx-auto px-6 xl:px-20">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-20">
          <h2
            className={
              "text-center text-3xl-700 lg:h-[96px] lg:w-[400px] lg:text-left lg:text-4xl-700"
            }
          >
            Background
          </h2>
          <p className="flex-1 text-base-400 text-grey-400">{background}</p>
        </div>
      </div>
    </section>
  );
}
