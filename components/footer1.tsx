import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Footer1Type = {
  className?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Footer1: NextPage<Footer1Type> = ({ className = "", propHeight }) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start py-0 px-0 box-border max-w-full text-left text-base text-darkslategray font-work-sans ${className}`}
      style={footerStyle}
    >
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-16 px-5 box-border max-w-full z-[1] mq750:gap-[16px] mq1275:gap-[32px]">
        <div className="w-[1126px] flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[0px] mq1275:flex-wrap">
          <div className="w-[437px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[172px] flex flex-row items-start justify-start pt-2.5 pb-[40.7px] pr-0 pl-2.5 box-border">
                <img
                  className="h-[18.3px] w-[250px] relative object-cover shrink-0"
                  loading="lazy"
                  alt=""
                  src="/image-128-11@2x.png"
                />
              </div>
            </div>
            <div className="relative capitalize inline-block min-w-[103px]">
              Follow Us on
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-end min-w-[689px] max-w-full mq750:min-w-full mq1275:flex-1">
            <div className="flex flex-col items-end justify-start py-2.5 pr-0 pl-[532px] box-border gap-[22px] max-w-full mq450:pl-5 mq450:box-border mq750:pl-[266px] mq750:box-border">
              <div className="relative capitalize">Our 360° Platform</div>
              <div className="relative capitalize">Mobile Renewability</div>
              <a className="[text-decoration:none] relative capitalize text-[inherit] inline-block min-w-[72px]">
                About Us
              </a>
              <a className="[text-decoration:none] relative capitalize text-[inherit] inline-block min-w-[87px]">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-midnightblue-200" />
    </footer>
  );
};

export default Footer1;
