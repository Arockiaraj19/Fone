import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[73px] pr-5 pl-[26px] box-border max-w-full text-center text-29xl text-new-1f font-poppins mq750:pb-[47px] mq750:box-border ${className}`}
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
        <div className="self-stretch grid flex-row items-start justify-start gap-[24px] grid-cols-[repeat(4,_minmax(198px,_1fr))] text-left text-xl font-work-sans mq450:grid-cols-[minmax(198px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(198px,_343px))]">
          <FrameComponent6 memberPhotos="/rectangle-34624400@2x.png" />
          <FrameComponent6 memberPhotos="/rectangle-34624400-1@2x.png" />
          <FrameComponent6 memberPhotos="/rectangle-34624400-2@2x.png" />
          <FrameComponent6 memberPhotos="/rectangle-34624400-3@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
