import type { NextPage } from "next";
import { useRouter } from "next/router";

export type MainComponentType = {
  className?: string;
};

const MainComponent: NextPage<MainComponentType> = ({ className = "" }) => {
  const router=useRouter()
  return (
    <section
      className={`self-stretch mt-0 mq750:mt-8 bg-ghostwhite flex flex-row items-start justify-start py-[120px] px-20 box-border gap-[10px] max-w-full text-left text-45xl text-new-1f font-poppins mq800:py-[40px] mq800:px-[40px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start pt-[23.5px] px-0 pb-0 box-border  max-w-full mq1125:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">   
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
              Sell phone, get 7% extra with Amazon.ae
            </h1>
          </div>
          <div className="self-stretch relative text-xl font-medium font-inter text-anew-black mq450:text-base">{`Select Amazon.ae Gift Card when you sell your old device & get 7% extra credit with Amazon Gift Card`}</div>
          <button onClick={(e)=>{
router.push("/sell-now")
    }} className="cursor-pointer [border:none] py-4 px-10 bg-new-1f rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslateblue-200">
            <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[127px]">
              Sell Your Device
            </div>
          </button>
        </div>
      </div>
      <img
        className="h-[461px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[349px] mq1125:min-w-full"
        loading="lazy"
        alt=""
        src="/rectangle-34624411@2x.png"
      />
    </section>
  );
};

export default MainComponent;
