import type { NextPage } from "next";
import { useRouter } from "next/router";

export type WhatMotivateUsType = {
  className?: string;
};

const WhatMotivateUs: NextPage<WhatMotivateUsType> = ({ className = "" }) => {
  const router = useRouter();
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[73px] box-border max-w-full text-left text-xs text-white font-work-sans mq450:pb-[31px] mq450:box-border mq1100:pb-[47px] mq1100:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center py-[120px] px-60 box-border gap-[76px] bg-[url('/trade-ins-content@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[19px] mq750:py-[78px] mq750:px-[60px] mq750:box-border mq1275:flex-wrap mq1275:gap-[38px] mq1275:pl-[120px] mq1275:pr-[120px] mq1275:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[471px] max-w-full mq1100:min-w-full mq1275:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full text-center text-29xl">
              <h1 className="m-0 w-[352px] relative text-inherit tracking-[-0.06em] leading-[70px] font-light font-inherit flex items-center justify-center max-w-full mq450:text-10xl mq450:leading-[42px] mq750:text-19xl mq750:leading-[56px]">
                Motivation for…
              </h1>
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[55px] font-medium font-inherit text-left mq450:text-10xl mq450:leading-[33px] mq750:text-19xl mq750:leading-[44px]">
                … starting the business.
              </h1>
            </div>
            <div className="self-stretch relative text-xl mq450:text-base">
              There's a significant and growing market for pre-owned
              smartphones, particularly iPhones. Many consumers seek
              high-quality phones at lower prices, and iPhones are known for
              their durability and longevity, making them ideal for the
              second-hand market.
            </div>
            <div className="self-stretch relative text-xl mq450:text-base">
              Offering pre-owned iPhones provides an affordable alternative to
              buying new devices, making high-end technology accessible to a
              broader audience. This can attract a wide range of customers, from
              students to budget-conscious consumers.
            </div>
            <div className="self-stretch relative text-xl mq450:text-base">
              The pre-owned electronics market supports sustainability efforts
              by reducing electronic waste. Selling pre owned iPhones promotes
              recycling and reusing, which helps decrease the environmental
              footprint associated with manufacturing new devices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMotivateUs;
