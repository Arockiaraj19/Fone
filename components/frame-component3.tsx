import type { NextPage } from "next";
import StepsCards from "./steps-cards";
import { SelectDevice } from "./select-device-component";

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
<SelectDevice/>
    </section>
  );
};

export default FrameComponent3;
