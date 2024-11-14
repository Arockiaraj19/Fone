import type { NextPage } from "next";
import TestimonialCards1 from "./testimonial-cards1";
import TestimonialCards from "./testimonial-cards";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-full flex flex-col items-center justify-center pt-0 pb-[120px] box-border gap-[64px] max-w-full text-center text-lg text-anew-black font-work-sans mq800:gap-[32px]   mq800:box-border mq450:gap-[16px]  mq450:box-border  mq1350:box-border ${className}`}
    >
      <div className="w-full overflow-hidden flex flex-row items-start justify-start gap-[32px] shrink-0 ">
        <TestimonialCards1 />
        <TestimonialCards1 />
      
      
        <TestimonialCards1 />
        <TestimonialCards1 />
      </div>
      <div className=" w-full flex justify-center items-center">
      <div className=" flex flex-row flex-wrap items-center justify-start py-0 pr-[60px] pl-0 box-border gap-[16px]  mq450:pr-5 mq450:box-border">
              <div className="h-[71.8px] w-[70.9px] rounded-25xl bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 pr-2.5 pl-3 border-[1px] border-solid border-gray-100">
                <img
                  className="h-[47.8px] w-[46.9px] relative"
                  alt=""
                  src="/svgrepo-iconcarrier.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[16px] min-w-[144px]">
                <div className="flex flex-row items-start justify-start gap-[5px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-px pl-0">
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/svgrepo-iconcarrier-1.svg"
                    />
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-px pl-0">
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/svgrepo-iconcarrier-1.svg"
                    />
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-px pl-0">
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/svgrepo-iconcarrier-1.svg"
                    />
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-px pl-0">
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/svgrepo-iconcarrier-1.svg"
                    />
                  </div>
                  <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-px pl-0">
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/svgrepo-iconcarrier-1.svg"
                    />
                  </div>
                </div>
                <div className="relative tracking-[-0.06em] leading-[28px] font-medium whitespace-pre-wrap">
                  4.8/5 | 200+ Google reviews
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default FrameComponent;
