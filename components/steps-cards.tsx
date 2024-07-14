import type { NextPage } from "next";

export type StepsCardsType = {
  className?: string;
  getAPriceInLessThan2Minut?: string;
};

const StepsCards: NextPage<StepsCardsType> = ({
  className = "",
  getAPriceInLessThan2Minut,
}) => {
  return (
    <div
      className={`flex-1 rounded-xl overflow-hidden flex flex-col items-center justify-center py-4 px-6 box-border gap-[12px] min-w-[196px] text-center text-45xl text-new-1f font-work-sans ${className}`}
    >
      <div className="self-stretch h-[60px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[12px]">
        <div className="w-[65px] relative font-semibold flex items-center justify-center shrink-0 mq800:text-32xl mq450:text-19xl">
          1
        </div>
        <div className="flex-1 relative text-xl text-left mq450:text-base">
          {getAPriceInLessThan2Minut}
        </div>
      </div>
      <div className="w-[142px] shadow-[0px_-3px_34.1px_#060c1a,_0px_8px_40px_-20px_#01050d,_1px_1px_8.5px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1px_rgba(255,_255,_255,_0.06)_inset] rounded-38xl [background:linear-gradient(#784cd5,_#784cd5),_linear-gradient(130.02deg,_rgba(95,_46,_216,_0.2),_rgba(95,_46,_216,_0.2))] box-border hidden flex-row items-center justify-center py-2.5 px-[31px] text-left text-5xl text-white font-poppins border-[1px] border-solid border-mediumblue">
        <div className="flex-1 relative tracking-[-0.06em] font-medium mq450:text-lgi">
          Search
        </div>
      </div>
    </div>
  );
};

export default StepsCards;
