import type { NextPage } from "next";

export type NewsletterContentType = {
  className?: string;
};

const NewsletterContent: NextPage<NewsletterContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-anew-black font-inter ${className}`}
    >
      <div className="w-[1126px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-[19.5px] px-0 pb-0 box-border min-w-[415px] max-w-full mq800:min-w-full">
          <div className="self-stretch relative font-medium mq450:text-base">
            Sign up to our newsletter!
          </div>
        </div>
        <div className="w-[477px] rounded-sm box-border flex flex-row items-start justify-between py-0 pr-[3px] pl-[17px] max-w-full gap-[20px] text-lg font-poppins border-[1px] border-solid border-black mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            <div className="relative tracking-[-0.06em] font-medium">
              Enter your email
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-[47px] bg-new-1f rounded-xl flex flex-row items-start justify-start hover:bg-darkslateblue-200">
            <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[82px]">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterContent;
