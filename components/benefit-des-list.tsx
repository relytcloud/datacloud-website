interface IBenefitDes {
  title?: string;
  des: string;
}

const BenefitDes = ({ title, des }: IBenefitDes) => {
  return (
    <div className="flex flex-col gap-1">
      {title && <p className="text-2xl-500">{title}</p>}
      <p className="text-base-400 text-grey-400">{des}</p>
    </div>
  );
};

export default function BenefitDesList({ list }: { list: IBenefitDes[] }) {
  return (
    <div className="flex flex-col gap-6">
      {list.map((benefit) => (
        <BenefitDes des={benefit?.des} key={benefit.title} title={benefit?.title} />
      ))}
    </div>
  );
}
