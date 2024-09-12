import type { NextPage } from "next";
import FrameComponent13 from "../components/frame-component13";
import FrameComponent11 from "../components/frame-component11";

import FooterSection from "../components/footer_section";

const ContactUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0  box-border leading-[normal] tracking-[normal]">
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
       
      </section>
      <FooterSection />
    </div>
  );
};

export default ContactUs;
