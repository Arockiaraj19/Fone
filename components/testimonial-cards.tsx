import type { NextPage } from "next";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export type TestimonialCardsType = {
  item: any;
};

const TestimonialCards: NextPage<TestimonialCardsType> = ({
  item ,
}) => {
  return (
    <div
      className={`w-[454px] shadow-[0px_2px_20px_rgba(210,_206,_221,_0.25)] rounded-3xl bg-white box-border shrink-0 flex flex-col items-start justify-start pt-[46px] px-[23px] pb-[30px] gap-[32px] max-w-full text-center text-lg text-anew-black font-work-sans border-[1px] border-solid border-plum mq450:gap-[16px] mq450:pt-[30px] mq450:pb-5 mq450:box-border`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-1 pl-0">
        <img
          className="h-[47.7px] w-[59.2px] relative object-contain"
          loading="lazy"
          alt=""
          src="/group-1171275337@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[29px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
          <div className="self-stretch relative leading-[28px]">
            <p className="m-0">
            {item?.quote}
            </p>
          
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-plum" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[41px] text-left text-3xl text-new-1f font-poppins">
          <div className="flex-1 flex flex-row items-start justify-center gap-[10px] mq450:flex-wrap">
            <img
              className="h-[100px] w-[101px] relative object-cover mq450:flex-1"
              loading="lazy"
              alt=""
              src="/image-127@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[23.5px] px-0 pb-0 box-border min-w-[136px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[20px] font-semibold font-inherit mq450:text-lg mq450:leading-[16px]">
                {item?.name}
                </h3>
                <div className="flex flex-row gap-1 self-stretch relative text-base tracking-[-0.06em] leading-[24px] font-medium text-anew-black">
                  <FontAwesomeIcon
                    icon={faStar}
                    className=" text-yellow-200 h-7 w-7"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className=" text-yellow-200 h-7 w-7"
                  />

                  <FontAwesomeIcon
                    icon={faStar}
                    className=" text-yellow-200 h-7 w-7"
                  />

                  <FontAwesomeIcon
                    icon={faStar}
                    className=" text-yellow-200 h-7 w-7"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className=" text-yellow-200 h-7 w-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
