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
        <button className="cursor-pointer [border:none] py-4 px-10 bg-new-1f rounded-xl flex flex-row items-start justify-start shrink-0 whitespace-nowrap hover:bg-darkslateblue-200">
          <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[127px]">
            Sell Your Device
          </div>
        </button>
      </div>
     
    </div>
  );
};

export default SellButtonContainer;
