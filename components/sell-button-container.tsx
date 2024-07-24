import type { NextPage } from "next";

export type SellButtonContainerType = {
  className?: string;
};

const SellButtonContainer: NextPage<SellButtonContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[8.5px] max-w-full text-left text-3xl text-new-1f font-work-sans mq1350:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
       
      </div>
     
    </div>
  );
};

export default SellButtonContainer;
