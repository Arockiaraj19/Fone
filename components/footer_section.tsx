import Footer from "./footer";


export default function FooterSection() {
    return <section className="self-stretch flex flex-col items-start justify-start gap-[42.7px] max-w-full text-left text-xl text-anew-black font-inter mq450:gap-[21px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[74px] max-w-full mq800:gap-[37px] mq450:gap-[18px]">
  
        <Footer />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 box-border max-w-full">
        <div className="w-[1126px] flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
            <div className="relative font-medium mq450:text-base">
              Terms and Conditions
            </div>
            <a className="[text-decoration:none] relative font-medium text-[inherit] mq450:text-base">
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 text-sm">
            <div className="relative font-medium inline-block min-w-[106px]">
              Copyright 2024
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
  