import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import { useRouter } from "next/router";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const router=useRouter()
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[120px] box-border max-w-full text-left text-45xl text-new-1f font-poppins mq800:pb-[51px] mq800:box-border mq1125:pb-[78px] mq1125:box-border ${className}`}
    >
      <div className="flex-1 bg-ghostwhite flex flex-row items-start justify-center py-[120px] px-5 box-border gap-[10px] max-w-full mq1125:flex-wrap mq1125:pt-[78px] mq1125:pb-[78px] mq1125:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border">
        <img
          className="w-[377px] relative max-h-full object-contain max-w-full mq1125:flex-1"
          loading="lazy"
          alt=""
          src="/rectangle-34624411-1@2x.png"
        />
        <div className="w-[733px] flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0 box-border min-w-[733px] max-w-full mq1125:flex-1 mq1125:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
              Better | Safer | Easier
            </h1>
            <div className="w-[511px] rounded-11xl flex flex-col items-start justify-center py-6 pr-6 pl-0 box-border gap-[24px] max-w-full text-13xl font-work-sans mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="w-[407px] overflow-hidden flex flex-row items-start justify-center max-w-full mq450:gap-[16px]">
                <FrameComponent2
                  customerCountLabel="100,000+
"
                  customersServed="Customers served"
                />
              </div>
              <FrameComponent2
                customerCountLabel="3,500+"
                customersServed="Devices with live prices"
                propFlex="unset"
              />
              <div className="self-stretch flex flex-row items-end justify-start max-w-full">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <div className="rounded-25xl overflow-hidden flex flex-row items-center justify-start p-3">
                    <img
                      className="h-[37px] w-[63px] relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/image-125-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[250px] max-w-full mq450:flex-wrap">
                    <div className="relative tracking-[-0.06em] leading-[28px] font-medium inline-block min-w-[73px] mq800:text-7xl mq800:leading-[22px] mq450:text-lgi mq450:leading-[17px]">
                      500+
                    </div>
                    <div className="relative text-xl tracking-[-0.06em] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
                      <p className="m-0">Electronic dealers compete to give</p>
                      <p className="m-0">you the best price</p>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent2
                customerCountLabel="4.8/5"
                customersServed="
Customer rating"
                propFlex="unset"
              />
            </div>
            <button onClick={(e)=>{
router.push("/sell-now")
    }} className="cursor-pointer [border:none] py-4 px-10 bg-new-1f rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslateblue-200">
              <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[127px]">
                Sell Your Device
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
