import type { NextPage } from "next";
import StepsCards from "./steps-cards";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center py-[120px] px-5 box-border gap-[64px] max-w-full text-center text-45xl text-new-1f font-poppins mq800:gap-[16px] mq1125:pt-[78px] mq1125:pb-[78px] mq1125:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1350:gap-[32px] ${className}`}
    >
      <div className="w-[1126px] flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
          Sell your device in 3 easy steps
        </h1>
        <div className="self-stretch flex flex-row items-center justify-center gap-[24px] font-work-sans mq1125:flex-wrap">
          <StepsCards getAPriceInLessThan2Minut="Get a price in less than 2 minutes" />
          <img
            className="h-[37px] w-[63px] relative object-contain"
            loading="lazy"
            alt=""
            src="/image-125@2x.png"
          />
          <StepsCards getAPriceInLessThan2Minut="Free home pick-up within 24 hours" />
          <img
            className="h-[37px] w-[63px] relative object-contain"
            loading="lazy"
            alt=""
            src="/image-126@2x.png"
          />
          <StepsCards
            getAPriceInLessThan2Minut={`Get secure data wipe & cash instantly`}
          />
        </div>
      </div>
      <div className="w-[1126px] flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full text-5xl font-work-sans mq800:gap-[16px]">
        <div className="flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl bg-white box-border flex flex-col items-center justify-start py-[52px] pr-4 pl-3.5 gap-[12px] min-w-[195px] max-w-[257px] border-[1px] border-solid border-plum">
          <img
            className="w-[180px] h-[180px] relative object-contain"
            loading="lazy"
            alt=""
            src="/image-124@2x.png"
          />
          <h3 className="m-0 self-stretch relative text-inherit leading-[22px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px]">
            Sell Phone
          </h3>
        </div>
        <div className="flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl bg-white box-border flex flex-col items-center justify-start py-[52px] pr-4 pl-3.5 gap-[12px] min-w-[195px] max-w-[257px] border-[1px] border-solid border-plum">
          <img
            className="w-[180px] h-[180px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-124-1@2x.png"
          />
          <h3 className="m-0 self-stretch relative text-inherit leading-[22px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px]">
            Sell laptop
          </h3>
        </div>
        <div className="flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl bg-white box-border flex flex-col items-center justify-start py-[52px] pr-4 pl-3.5 gap-[12px] min-w-[195px] max-w-[257px] border-[1px] border-solid border-plum">
          <img
            className="w-[180px] h-[180px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-124-2@2x.png"
          />
          <h3 className="m-0 self-stretch relative text-inherit leading-[22px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px]">
            Sell Tablet
          </h3>
        </div>
        <div className="flex-1 shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl bg-white box-border flex flex-col items-center justify-start py-[52px] pr-4 pl-3.5 gap-[12px] min-w-[195px] max-w-[257px] border-[1px] border-solid border-plum">
          <img
            className="w-[180px] h-[180px] relative object-contain"
            loading="lazy"
            alt=""
            src="/image-124-3@2x.png"
          />
          <h3 className="m-0 self-stretch relative text-inherit leading-[22px] font-medium font-inherit mq450:text-lgi mq450:leading-[18px]">
            Sell Smartwtch
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
