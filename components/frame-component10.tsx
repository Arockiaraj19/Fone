import type { NextPage } from "next";

export type FrameComponent10Type = {
  className?: string;
  selectedDevicesList:any
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",selectedDevicesList
}) => {
  return (
    <div
      className={`w-full h-auto flex flex-row items-center justify-center gap-20 max-w-full text-left text-lg text-darkslategray font-plus-jakarta-sans mq450:flex-wrap ${className}`}
    >
      <div className={selectedDevicesList.length>=5? "flex flex-col items-center justify-center gap-[8px] text-new-1f":"flex flex-col items-center justify-center gap-[8px]"}>
        <img
          className="w-16 h-16"
        
          alt=""
          src={selectedDevicesList.length>=5?"/group-1171275073.svg":"/group-1171275073-1.svg"}
        />
        <div className="relative leading-[112.2%] inline-block">
          Device
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className={selectedDevicesList.length>=6? "flex flex-col items-center justify-center gap-[8px] text-new-1f":"flex flex-col items-center justify-center gap-[8px]"}>
          <img
            className="w-16 h-16 "
           
            alt=""
            src={selectedDevicesList.length>=6?"/group-1171275073.svg":"/group-1171275073-1.svg"}
          />
          <div >
        Payment
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className={selectedDevicesList.length>=7? "flex flex-col items-center justify-center gap-[8px] text-new-1f":"flex flex-col items-center justify-center gap-[8px]"}>
          <img
            className="w-16 h-16 "
           
            alt=""
            src={selectedDevicesList.length>=7?"/group-1171275073.svg":"/group-1171275073-1.svg"}
          />
          <div className="">
         Address
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default FrameComponent10;
