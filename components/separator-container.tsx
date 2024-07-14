import type { NextPage } from "next";

export type SeparatorContainerType = {
  className?: string;
};

const SeparatorContainer: NextPage<SeparatorContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1456.5px] flex flex-col items-start justify-start gap-[3.5px] max-w-[108%] shrink-0 text-left text-xl text-anew-black font-inter ${className}`}
    >
      <div className="self-stretch h-px flex flex-row items-start justify-end max-w-full">
        <div className="self-stretch w-[1242px] relative box-border max-w-full border-t-[1px] border-solid border-gray-200" />
      </div>
      <div className="w-[1140px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[10px] max-w-full">
        <div className="w-[542px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch relative font-medium mq450:text-base">
            Can’t find the answer you are looking for?
          </div>
       
        </div>
      
      </div>
    </div>
  );
};

export default SeparatorContainer;
