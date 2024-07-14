import type { NextPage } from "next";

export type DeviceGridType = {
  className?: string;
};

const DeviceGrid: NextPage<DeviceGridType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1126px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-lg text-new-1f font-plus-jakarta-sans mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <img
          className="w-16 h-16 relative"
          loading="lazy"
          alt=""
          src="/group-1171275073.svg"
        />
        <div className="relative leading-[112.2%] inline-block min-w-[60px]">
          Device
        </div>
      </div>
      <div className="flex flex-col items-center justify-start py-0 px-0 gap-[8px]">
        <img
          className="w-16 h-16 relative"
          loading="lazy"
          alt=""
          src="/group-1171275073.svg"
        />
        <div className="relative leading-[112.2%] inline-block min-w-[70px]">
          Physical
        </div>
      </div>
      <div className="w-16 flex flex-col items-center justify-start text-darkslategray">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-0 gap-[8px]">
          <img
            className="w-16 h-16 relative"
            loading="lazy"
            alt=""
            src="/group-1171275073-1.svg"
          />
          <div className="relative leading-[112.2%] inline-block min-w-[90px]">
            Functional
          </div>
        </div>
      </div>
      <div className="w-16 flex flex-col items-center justify-start text-darkslategray">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-0 gap-[8px]">
          <img
            className="w-16 h-16 relative"
            loading="lazy"
            alt=""
            src="/group-1171275073-1.svg"
          />
          <div className="relative leading-[112.2%] inline-block min-w-[77px]">
            Warranty
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceGrid;
