import type { NextPage } from "next";
import FrameComponent13 from "../components/frame-component13";
import FrameComponent11 from "../components/frame-component11";
import Footer from "../components/footer";

const ContactUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border leading-[normal] tracking-[normal]">
      <FrameComponent13 />
      <FrameComponent11 />
      <section className="w-[1376px] flex flex-row flex-wrap items-start justify-center py-0 pr-5 pl-0 box-border gap-[74px] max-w-full mq450:gap-[18px] mq750:gap-[37px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border min-w-[554px] max-w-full mq450:pt-[27px] mq450:box-border mq750:min-w-full">
          <img
            className="self-stretch h-[347px] max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-1171275730@2x.png"
          />
        </div>
        <button className="cursor-pointer [border:none] py-4 px-5 bg-new-1f w-[430px] rounded-xl flex flex-row items-start justify-center box-border max-w-full hover:bg-darkslateblue-200">
          <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[60px]">
            Submit
          </div>
        </button>
      </section>
      <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-midnightblue-200" />
      <Footer />
      <footer className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[26px] box-border max-w-full text-left text-xl text-anew-black font-inter">
        <div className="w-[1126px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
            <h3 className="m-0 relative text-inherit [text-decoration:underline] font-medium font-inherit mq450:text-base">
              Terms and Conditions
            </h3>
            <h3 className="m-0 relative text-inherit [text-decoration:underline] font-medium font-inherit mq450:text-base">
              Privacy Policy
            </h3>
          </div>
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 text-sm">
            <div className="relative [text-decoration:underline] font-medium inline-block min-w-[106px]">
              Copyright 2024
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
