import type { NextPage } from "next";
import Header from "../components/header";
import Content from "../components/content";
import Footer1 from "../components/footer1";

const SellNow2: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border leading-[normal] tracking-[normal] text-left text-xl text-anew-black font-inter">
      <Header frameDivFlex="unset" frameDivAlignSelf="stretch" />
      <Content />
      <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-midnightblue-200" />
      <Footer1 propHeight="unset" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[26px] box-border max-w-full">
        <div className="w-[1126px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
            <div className="relative font-medium mq450:text-base">
              Terms and Conditions
            </div>
            <div className="relative font-medium mq450:text-base">
              Privacy Policy
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 text-sm">
            <div className="relative font-medium inline-block min-w-[106px]">
              Copyright 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellNow2;
