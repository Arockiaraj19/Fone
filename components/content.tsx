import type { NextPage } from "next";
import DeviceTypes from "./device-types";
import SearchField from "./search-field";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center py-[120px] px-5 box-border gap-[32px] max-w-full text-left text-base text-new-1f font-work-sans mq750:gap-[16px] mq750:pt-[78px] mq750:pb-[78px] mq750:box-border ${className}`}
    >
      <DeviceTypes />
      <div className="flex flex-row items-start justify-start p-2.5 box-border gap-[10px] max-w-full mq450:flex-wrap">
        <div className="rounded-md bg-midnightblue-100 flex flex-row items-center justify-start py-0.5 px-[11px] gap-[10px] border-[1px] border-solid border-darkslateblue-100">
          <a className="[text-decoration:none] relative tracking-[-0.06em] text-[inherit] inline-block min-w-[47px]">
            Mobile
          </a>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="w-[93px] rounded-md bg-midnightblue-100 box-border flex flex-row items-center justify-start py-0.5 px-[11px] gap-[10px] border-[1px] border-solid border-darkslateblue-100">
          <div className="relative tracking-[-0.06em] inline-block min-w-[39px]">
            Oppo
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="rounded-md bg-midnightblue-100 flex flex-row items-center justify-start py-0.5 px-[11px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-darkslateblue-100">
          <div className="relative tracking-[-0.06em] inline-block min-w-[66px]">
            Oppo A16
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
      </div>
      <div className="w-[1126px] flex flex-col items-start justify-start max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <SearchField />
          <div className="self-stretch flex flex-col items-center justify-start max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center p-2.5 box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-[282px] box-border gap-[24px] max-w-full lg:pl-[141px] lg:pr-[141px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[70px] mq750:pr-[70px] mq750:box-border">
                <textarea
                  className="bg-white h-[130px] w-auto [outline:none] flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl box-border flex flex-col items-center justify-center py-[39px] px-[69px] font-plus-jakarta-sans text-lg text-new-1f min-w-[103px] border-[1px] border-solid border-plum"
                  placeholder="3 GB/32 GB"
                  rows={7}
                  cols={13}
                />
                <textarea
                  className="bg-white h-[130px] w-auto [outline:none] flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl box-border flex flex-col items-center justify-center py-[39px] px-[69px] font-plus-jakarta-sans text-lg text-new-1f min-w-[103px] border-[1px] border-solid border-plum"
                  placeholder="4 GB/64 GB"
                  rows={7}
                  cols={13}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
