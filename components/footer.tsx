import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4.3px] max-w-full text-left text-base text-darkslategray font-work-sans ${className}`}
    >
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-16 px-5 box-border max-w-full z-[1] mq800:gap-[16px] mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq1350:gap-[32px]">
        <div className="w-[1126px] flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[0px] mq1350:flex-wrap">
          <div className="w-[437px] flex flex-col items-start justify-start max-w-full">
            <div className="w-[172px] flex flex-row items-start justify-start pt-2.5 pb-[40.7px] pr-0 pl-2.5 box-border">
            <img
          className="h-10 w-40 relative object-cover"
          loading="lazy"
          alt=""
          src="/logo.png"
        />
            </div>
          </div>
          <div className="w-[689px] flex flex-row flex-wrap items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[24px_22.6px] min-w-[689px] max-w-full mq800:min-w-full mq1350:flex-1 mq1350:pr-0 mq1350:box-border">
            <div className="flex-1 flex flex-col items-start justify-start py-2.5 px-0 box-border gap-[21.3px] min-w-[62px]">
              <div className="relative text-xl capitalize font-medium inline-block min-w-[107px] mq450:text-base">
                navigation
              </div>
              <div className="self-stretch relative capitalize">
                Sell Mobile Phone
              </div>
              <div className="relative capitalize inline-block min-w-[90px]">
                Sell Laptop
              </div>
              <div className="relative capitalize inline-block min-w-[82px]">
                Sell Tablet
              </div>
              <div className="relative capitalize inline-block min-w-[129px]">
                Sell Smartwatch
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-2.5 px-0 box-border gap-[19.4px] min-w-[62px]">
              <div className="relative text-xl capitalize font-medium inline-block min-w-[86px] mq450:text-base">
                Services
              </div>
              <div className="w-[110px] relative capitalize inline-block">
                Sell Device
              </div>
              <div className="relative capitalize">Trade-in Solutions</div>
              <div className="relative capitalize whitespace-nowrap">
                Corporate Solutions
              </div>
              <div className="w-[162px] relative capitalize inline-block">
                Become a Dealer
              </div>
              <div className="w-[170px] relative capitalize inline-block">
                Junk to jungles
              </div>
            </div>
            <div className="flex-[0.8701] flex flex-col items-start justify-start py-2.5 pr-5 pl-0 box-border gap-[19px] min-w-[62px]">
              <div className="relative text-xl capitalize font-medium inline-block min-w-[99px] mq450:text-base">
                Company
              </div>
              <div className="relative capitalize inline-block min-w-[34px]">
                blog
              </div>
              <div className="relative capitalize inline-block min-w-[75px]">
                About us
              </div>
              <a className="[text-decoration:none] relative capitalize text-[inherit] inline-block min-w-[43px]">{`News `}</a>
            </div>
            <div className="flex flex-col items-start justify-start py-2.5 px-0 gap-[20px] text-xl">
              <div className="relative capitalize font-medium mq450:text-base">{`Help & support`}</div>
              <div className="w-[138px] relative text-base capitalize inline-block">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-midnightblue-200" />
    </div>
  );
};

export default Footer;
