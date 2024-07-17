import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent10 from "../components/frame-component10";
import Footer from "../components/footer";
import SearchField from "../components/search-field";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { SelectDevice } from "../components/select-device-component";


const SellNow: NextPage = () => {
  const [data, setData] = useState([]);
  const [selectedDevicesList,setSelectedDevicesList] = useState([]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[84px] box-border leading-[normal] tracking-[normal] text-left text-xl text-anew-black font-inter">
      <Header frameDivFlex="unset" frameDivAlignSelf="stretch" />
      <section className="self-stretch bg-white flex flex-col items-center justify-center py-[120px] px-5 box-border gap-[32px] max-w-full text-left text-base text-new-1f font-work-sans mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq750:gap-[16px]">
        <FrameComponent10 />
        <div className="flex flex-row items-start justify-start p-2.5">
          {selectedDevicesList.map((item) => <div key={item} className="rounded-md bg-midnightblue-100 flex flex-row items-center justify-start py-0.5 px-[11px] gap-[10px] border-[1px] border-solid border-darkslateblue-100">
            <a className="[text-decoration:none] relative tracking-[-0.06em] text-[inherit] inline-block min-w-[47px]">
              {item}
            </a>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>)}
        </div>
        <div className="w-[1126px] flex flex-col items-start justify-start max-w-full text-13xl mq750:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            <SearchField heading="Select Your Device" />
            <SelectDevice setSelectedDevicesList={setSelectedDevicesList} />
            
          </div>
        </div>
      </section>
      <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-midnightblue-200" />
      <Footer />

    </div>
  );
};

export default SellNow;
