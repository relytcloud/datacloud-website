import { AndTransfer } from "@/lib/utils";

interface IGradientNumberDes {
  title: string;
  subTitle?: string;
  des?: string;
  classname?: string;
  titleClassname?: string;
  subTitleClassname?: string;
  desClassname?: string;
}

export default function GradientNumberDes({
  title,
  subTitle,
  des,
  classname,
  titleClassname,
  subTitleClassname,
  desClassname,
}: IGradientNumberDes) {
  return (
    <div className={`flex flex-col gap-1 ${classname}`}>
      <p
        className={`benefit-liner-gradient text-3xl-700 md:text-5xl-700 ${titleClassname}`}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: AndTransfer(
              Number.
              isFinite(Number(title))
                ? Number(title).toLocaleString("en")
                : title
            ),
          }}
        />
        {subTitle && (
          <span className={`text-2xl-500 ${subTitleClassname}`}>
            {" "}
            {subTitle}
          </span>
        )}
      </p>
      {des && (
        <p
          className={`text-grey-400 text-sm-400 lg:text-base-400 ${desClassname}`}
        >
          {des}
        </p>
      )}
    </div>
  );
}
