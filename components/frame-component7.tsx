import type { NextPage } from "next";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[73px] pr-5 pl-[26px] box-border max-w-full text-center text-29xl text-new-1f font-poppins ${className}`}
    >
      <div className="w-[1126px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-light font-inherit mq450:text-10xl mq450:leading-[42px] mq750:text-19xl mq750:leading-[56px]">
            Backed by global VCs and
          </h1>
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-work-sans mq450:text-10xl mq450:leading-[42px] mq750:text-19xl mq750:leading-[56px]">
            led by an experienced team
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap mq750:justify-center">
          <img
            className="self-stretch w-[71px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
            loading="lazy"
            alt=""
            src="/frame11388.svg"
          />
          <img
            className="h-10 w-[37px] relative overflow-hidden shrink-0 min-h-[40px]"
            loading="lazy"
            alt=""
            src="/frame11385.svg"
          />
          <img
            className="self-stretch w-[91px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
            loading="lazy"
            alt=""
            src="/frame113831.svg"
          />
          <img
            className="self-stretch w-24 relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
            loading="lazy"
            alt=""
            src="/frame11389.svg"
          />
          <img
            className="self-stretch w-[95px] relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
            loading="lazy"
            alt=""
            src="/frame11384.svg"
          />
          <img
            className="self-stretch w-32 relative max-h-full overflow-hidden shrink-0 min-h-[40px]"
            loading="lazy"
            alt=""
            src="/frame11386.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
