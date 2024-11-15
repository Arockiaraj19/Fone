import type { NextPage } from "next";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent5 from "../components/frame-component5";
import Header from "../components/header";
import FooterSection from "../components/footer_section";
import WhatMotivateUs from "../components/what_motivate_us_component";

const AboutUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 box-border gap-[47px] leading-[normal] tracking-[normal] text-left text-xl text-anew-black font-inter mq450:gap-[23px]">
      <Header />
      <section className="mt-0 mq750:mt-20 self-stretch flex flex-row items-start justify-end pt-0 px-60 pb-[73px] box-border max-w-full text-center text-xs text-white font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pb-[47px] mq750:box-border mq1100:pl-[120px] mq1100:pr-[120px] mq1100:box-border">
        <div className="flex-1 rounded-3xl flex flex-col items-start justify-start py-[223px] px-0 box-border gap-[32px] bg-[url('/frame-1171275752@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:gap-[16px] mq750:pt-[145px] mq750:pb-[145px] mq750:box-border">
          <div className="self-stretch relative font-medium">ABOUT US</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-45xl font-work-sans">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-light font-inherit mq450:text-19xl mq450:leading-[42px] mq750:text-32xl mq750:leading-[56px]">
              Shaping the Future
            </h1>
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit mq450:text-19xl mq450:leading-[42px] mq750:text-32xl mq750:leading-[56px]">
              Global Trade-Ins
            </h1>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[73px] pr-5 pl-[26px] box-border max-w-full text-left text-3xl text-white font-work-sans mq750:pb-[47px] mq750:box-border">
        <div className="w-[1126px] flex flex-row items-start justify-start gap-[24px] max-w-full mq1100:flex-wrap">
          <div className="text-lg text-new-1f text-justify flex-[0.9056] rounded-xl flex flex-col items-start justify-start  pr-5 pl-8  min-w-[358px]  max-w-full mq450:min-w-full mq750:pt-[21px]  mq750:box-border mq1100:flex-1">
            <p className="mb-2">
              Welcome to <span className="font-bold">Fone Garage</span>, your
              trusted destination for premium pre-owned iPhones. We specialize
              in providing high-quality, iPhones that offer the perfect blend of
              performance, reliability, and affordability. Our mission is to
              make top-tier technology accessible to everyone, without
              compromising on quality or breaking the bank.
            </p>
            <p className="mb-2">
              At <span className="font-bold">Fone Garage</span>, we understand
              the importance of having a dependable smartphone in today’s
              fast-paced world. That’s why every iPhone we sell undergoes a
              rigorous inspection process by our team of skilled technicians. We
              ensure that each device meets our high standards for
              functionality, appearance, and durability.
            </p>
            <p className="mb-2">
              When you shop with us, you’re not just getting a great phone at a
              great price—you’re also making an environmentally responsible
              choice. By choosing pre-owned, you’re helping to reduce electronic
              waste and promote sustainability.
            </p>
            <p className="mb-2">
              Explore our wide selection of iPhones, and experience the perfect
              combination of quality, affordability, and exceptional customer
              service at <span className="font-bold">Fone Garage</span>. Thank
              you for choosing us for your next iPhone purchase!
            </p>
          </div>
          {/* <div className="flex-[0.9056] rounded-xl flex flex-col items-start justify-start pt-8 pb-[454px] pr-5 pl-8 box-border bg-[url('/benefits-columns@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[358px] min-h-[548px] max-w-full mq450:min-w-full mq750:pt-[21px] mq750:pb-[295px] mq750:box-border mq1100:flex-1">
            <div className="relative tracking-[-0.06em] leading-[30px] font-light inline-block min-w-[122px] mq450:text-lg mq450:leading-[24px]">
              Increase your
            </div>
            <div className="relative text-5xl tracking-[-0.06em] leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
              new device sales
            </div>
          </div> */}
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[358px] max-w-full text-center mq450:min-w-full mq1100:flex-1">
            <div className="self-stretch h-[262px] rounded-xl flex flex-col items-start justify-start p-8 box-border bg-[url('/frame-11712757521@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="w-[206px] relative tracking-[-0.06em] leading-[32px] font-light flex items-center justify-center mq450:text-lg mq450:leading-[26px]">
                Support circularity and
              </div>
              <div className="w-[260px] relative text-5xl tracking-[-0.06em] leading-[32px] font-medium flex items-center justify-center mq450:text-lgi mq450:leading-[26px]">
                be mindful of the planet!
              </div>
            </div>
            <div className="self-stretch h-[262px] rounded-xl flex flex-col items-start justify-start py-8 pr-5 pl-8 box-border bg-[url('/frame-1171275753@3x.png')] bg-cover bg-no-repeat bg-[top] text-left">
              <div className="w-[173px] h-[35px] relative tracking-[-0.06em] leading-[70px] font-light flex items-center shrink-0 mq450:text-lg mq450:leading-[56px]">
                Improve
              </div>
              <div className="relative text-5xl tracking-[-0.06em] leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                customer retention
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent8 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[73px] pr-5 pl-[26px] box-border max-w-full text-left text-3xl text-white font-work-sans mq750:pb-[47px] mq750:box-border">
        <div className="w-[1126px] flex flex-row items-start justify-start gap-[24px] max-w-full mq1100:flex-wrap">
          <div className="flex-[0.9056] rounded-xl flex flex-col items-start justify-start pt-8 pb-[454px] pr-5 pl-8 box-border bg-[url('/benefits-columns@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[358px] min-h-[300px] max-w-full mq450:min-w-full mq750:pt-[21px] mq750:pb-[295px] mq750:box-border mq1100:flex-1">
            <div className="relative tracking-[-0.06em] leading-[30px] font-light inline-block min-w-[122px] mq450:text-lg mq450:leading-[24px]">
              Increase your
            </div>
            <div className="relative text-5xl tracking-[-0.06em] leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
              new device sales
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[358px] max-w-full text-center mq450:min-w-full mq1100:flex-1">
            <div className="text-lg text-new-1f text-justify flex-[0.9056] rounded-xl flex flex-col items-start justify-start  pr-5 pl-8  min-w-[358px]  max-w-full mq450:min-w-full mq750:pt-[21px]  mq750:box-border mq1100:flex-1">
              <h1 className="text-32xl m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-work-sans mq450:text-10xl mq450:leading-[42px] mq750:text-19xl mq750:leading-[56px]">
                Our Story
              </h1>
              <h1 className="text-19xl m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-light font-inherit mq450:text-10xl mq450:leading-[42px] mq750:text-19xl mq750:leading-[56px]">
                Background of the store
              </h1>
              <p className="mb-2">
                Founder Sadiq Ali, started his journey in his late 20’s in the
                toughest time of the economy in the UAE market in 2020. The idea
                was to provide quality pre owned iPhones in wholesale market
                building a trusted name in the market with no compromise on
                standards which was completely B2B. It succeeded in a way that
                ended up in compulsory retail store to entertain more customers.
              </p>
            </div>
          </div>
        </div>
      </section>
     
      <WhatMotivateUs/>
      {/* <FrameComponent7 />
      <FrameComponent5 /> */}
      <FooterSection />
    </div>
  );
};

export default AboutUs;
