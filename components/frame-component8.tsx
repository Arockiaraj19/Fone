import type { NextPage } from "next";
import { useRouter } from "next/router";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  const router=useRouter()
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[73px] box-border max-w-full text-left text-xs text-white font-work-sans mq450:pb-[31px] mq450:box-border mq1100:pb-[47px] mq1100:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center py-[120px] px-60 box-border gap-[76px] bg-[url('/trade-ins-content@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[19px] mq750:py-[78px] mq750:px-[60px] mq750:box-border mq1275:flex-wrap mq1275:gap-[38px] mq1275:pl-[120px] mq1275:pr-[120px] mq1275:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[37.2px] min-w-[372px] max-w-full mq750:flex-wrap mq750:gap-[19px] mq1100:min-w-full">
          <img
            className="h-[418px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover min-w-[174px]"
            loading="lazy"
            alt=""
            src="/rectangle-346244111@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border min-w-[174px] mq750:pt-[45px] mq750:box-border">
            <img
              className="self-stretch h-[418px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-34624413@2x.png"
            />
          </div>
        </div>
        <div className="w-[471px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[471px] max-w-full mq1100:min-w-full mq1275:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch relative font-medium font-inter">
              TRADE-IN’S CAN BE HARD
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full text-center text-29xl">
              <h1 className="m-0 w-[352px] relative text-inherit tracking-[-0.06em] leading-[70px] font-light font-inherit flex items-center justify-center max-w-full mq450:text-10xl mq450:leading-[42px] mq750:text-19xl mq750:leading-[56px]">
                Highly impactful…
              </h1>
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[55px] font-medium font-inherit text-left mq450:text-10xl mq450:leading-[33px] mq750:text-19xl mq750:leading-[44px]">
                … with a comprehensive solution
              </h1>
            </div>
            <div className="self-stretch relative text-xl mq450:text-base">
              From finding the best prices to the best technologies and
              operations support, we will support you with what it takes.
            </div>
            <button onClick={(e)=>{
router.push("/sell-now")
    }} className="cursor-pointer [border:none] py-4 px-10 bg-white rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
              <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-new-1f text-left inline-block min-w-[127px]">
                Sell Your Device
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
