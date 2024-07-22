import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent10 from "../components/frame-component10";
import Footer from "../components/footer";
import SearchField from "../components/search-field";
import { useScroll } from "framer-motion";
import { useState,useEffect } from "react";
import { SelectDevice } from "../components/select-device-component";
import { SelectDeviceCompo } from "../components/selected-device-compo";


const SellNow: NextPage = () => {
  const [data, setData] = useState([]);
  const [selectedDevicesList,setSelectedDevicesList] = useState([]);
  const [deviceChoosing, setDeviceChoosing] = useState("devices");
useEffect(() => {
 console.log("what is the UseEffect");
 console.log(selectedDevicesList);

 
}, [selectedDevicesList])

  return (
    <div className="w-full h-auto  bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 box-border  text-left text-xl text-anew-black font-inter">
      <Header/>
      <section className="px-[94px] mq1050:pl-[47px] mq1050:pr-[47px] mq450:pl-5 mq450:pr-5 w-full mt-24 gap-10 bg-white flex flex-col items-center justify-center box-border max-w-full text-left text-base text-new-1f font-work-sans  mq1050:box-border  mq450:box-border">
        <FrameComponent10 selectedDevicesList={selectedDevicesList}/>
        <div className="flex flex-row flex-wrap items-start justify-start gap-2">
          {selectedDevicesList.map((item) => <SelectDeviceCompo key={item} item={item} selectedDevicesList={selectedDevicesList} setSelectedDevicesList={setSelectedDevicesList} setDeviceChoosing={setDeviceChoosing} />)}
        </div>
        <div className="w-full flex flex-col items-start justify-start max-w-full text-13xl mq750:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full ">
            <SearchField heading={deviceChoosing=="devices"?"Select Your Device":deviceChoosing=="brands"?"Select Your Device Brand":deviceChoosing=="brandmodels"?"Select Your Device Brand Model":deviceChoosing=="brandmodelsizes"?"Select Your Device Configuration":deviceChoosing=="selectCondition"?"Select Your Device Condition":deviceChoosing=="sellnowForm"?"Enter your address details":""} />
            <SelectDevice isHome={false} selectedDevicesList={selectedDevicesList} setSelectedDevicesList={setSelectedDevicesList} deviceChoosing={deviceChoosing} setDeviceChoosing={setDeviceChoosing} />
          </div>
        </div>
      </section>
    
      <Footer />

    </div>
  );
};

export default SellNow;
