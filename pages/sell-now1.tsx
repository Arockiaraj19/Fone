import type { NextPage } from "next";
import RenewalOptions from "../components/renewal-options";
import DeviceTypes from "../components/device-types";
import Footer1 from "../components/footer1";

const SellNow11: NextPage = () => {
  return (
    <div className="w-full h-[1217px] relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-left text-xl text-anew-black font-inter mq450:h-auto">
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border shrink-0 max-w-full">
        <RenewalOptions />
        <main className="self-stretch bg-white flex flex-col items-center justify-center py-[120px] px-5 box-border gap-[32px] max-w-full text-left text-base text-new-1f font-work-sans mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border mq750:gap-[16px] mq750:pt-[51px] mq750:pb-[51px] mq750:box-border">
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
          <section className="w-[1126px] flex flex-col items-start justify-start max-w-full mq750:gap-[16px]">
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="self-stretch flex flex-row items-center justify-between py-0 px-2.5 box-border [row-gap:20px] max-w-full gap-[0px] lg:flex-wrap">
                <div className="w-[924px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="self-stretch relative text-3xl tracking-[-0.06em] leading-[20px] font-work-sans text-new-1f text-left mq450:text-lg mq450:leading-[16px]">
                    Is the Phone in Working Condition?
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.06em] leading-[24px] font-work-sans text-anew-black text-left">
                    Kindly check if the phone is switching on and ensure its in
                    working condition
                  </div>
                </div>
                <div className="w-[182px] flex flex-row items-center justify-start gap-[12px]">
                  <button className="cursor-pointer py-1.5 px-[19px] bg-new-1f flex-1 rounded-md flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-darkslateblue-100 hover:bg-darkslateblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-3.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-white text-left inline-block min-w-[27px]">
                      Yes
                    </div>
                  </button>
                  <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] flex-1 rounded-md flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-darkslateblue-100 hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-4.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[23px]">
                      No
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between py-0 px-2.5 box-border [row-gap:20px] max-w-full gap-[0px] lg:flex-wrap">
                <div className="w-[924px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="relative text-3xl tracking-[-0.06em] leading-[20px] font-work-sans text-new-1f text-left inline-block max-w-full mq450:text-lg mq450:leading-[16px]">
                    Is the touch screen working properly on your Phone?
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.06em] leading-[24px] font-work-sans text-anew-black text-left">
                    Kindly check the touchscreen functionality of the phone
                  </div>
                </div>
                <div className="w-[182px] flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 rounded-md flex flex-row items-center justify-start py-1.5 px-[19px] gap-[4px] border-[1px] border-solid border-darkslateblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-5.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[27px]">
                      Yes
                    </div>
                  </div>
                  <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] flex-1 rounded-md flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-darkslateblue-100 hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-4.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[23px]">
                      No
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between py-0 px-2.5 box-border [row-gap:20px] max-w-full gap-[0px] lg:flex-wrap">
                <div className="w-[924px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="self-stretch relative text-3xl tracking-[-0.06em] leading-[20px] font-work-sans text-new-1f text-left mq450:text-lg mq450:leading-[16px]">
                    Is the Phone in Working Condition?
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.06em] leading-[24px] font-work-sans text-anew-black text-left">
                    Sold old iPhone 12 Pro Max
                  </div>
                </div>
                <div className="w-[182px] flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 rounded-md flex flex-row items-center justify-start py-1.5 px-[19px] gap-[4px] border-[1px] border-solid border-darkslateblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-5.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[27px]">
                      Yes
                    </div>
                  </div>
                  <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] flex-1 rounded-md flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-darkslateblue-100 hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-4.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[23px]">
                      No
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between py-0 px-2.5 box-border [row-gap:20px] max-w-full gap-[0px] lg:flex-wrap">
                <div className="w-[924px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="self-stretch relative text-3xl tracking-[-0.06em] leading-[20px] font-work-sans text-new-1f text-left mq450:text-lg mq450:leading-[16px]">
                    Is the Phone in Working Condition?
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.06em] leading-[24px] font-work-sans text-anew-black text-left">
                    Sold old iPhone 12 Pro Max
                  </div>
                </div>
                <div className="w-[182px] flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 rounded-md flex flex-row items-center justify-start py-1.5 px-[19px] gap-[4px] border-[1px] border-solid border-darkslateblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-5.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[27px]">
                      Yes
                    </div>
                  </div>
                  <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] flex-1 rounded-md flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-darkslateblue-100 hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-4.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[23px]">
                      No
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between py-0 px-2.5 box-border [row-gap:20px] max-w-full gap-[0px] lg:flex-wrap">
                <div className="w-[924px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="self-stretch relative text-3xl tracking-[-0.06em] leading-[20px] font-work-sans text-new-1f text-left mq450:text-lg mq450:leading-[16px]">
                    Is the Phone in Working Condition?
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.06em] leading-[24px] font-work-sans text-anew-black text-left">
                    Sold old iPhone 12 Pro Max
                  </div>
                </div>
                <div className="w-[182px] flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex-1 rounded-md flex flex-row items-center justify-start py-1.5 px-[19px] gap-[4px] border-[1px] border-solid border-darkslateblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-5.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[27px]">
                      Yes
                    </div>
                  </div>
                  <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] flex-1 rounded-md flex flex-row items-center justify-start gap-[4px] border-[1px] border-solid border-darkslateblue-100 hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-4.svg"
                    />
                    <div className="relative text-lg tracking-[-0.06em] font-work-sans text-new-1f text-left inline-block min-w-[23px]">
                      No
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </section>
          <div className="flex flex-row items-start justify-start gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[16px]">
            <button className="cursor-pointer py-3.5 px-[72px] bg-[transparent] rounded-xl flex flex-row items-center justify-center border-[1px] border-solid border-darkslateblue-100 hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
              <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-new-1f text-left inline-block min-w-[60px]">
                Cancel
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 px-10 bg-new-1f rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslateblue-200">
              <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[127px]">
                Sell Your Device
              </div>
            </button>
          </div>
        </main>
      </div>
      <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-midnightblue-200" />
      <Footer1 propHeight="338px" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[26px] box-border max-w-full shrink-0">
        <div className="w-[1126px] flex flex-row items-start justify-between shrink-0 max-w-full gap-[20px] mq750:flex-wrap">
          <div className="w-[368px] flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
            <div className="h-6 flex-1 relative font-medium flex items-center min-w-[136px] mq450:text-base">
              Terms and Conditions
            </div>
            <a className="[text-decoration:none] h-6 w-[134px] relative font-medium text-[inherit] flex items-center mq450:text-base">
              Privacy Policy
            </a>
          </div>
          <div className="w-[106px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border text-sm">
            <div className="self-stretch h-[17px] relative font-medium flex items-center">
              Copyright 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellNow11;
