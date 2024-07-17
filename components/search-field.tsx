import type { NextPage } from "next";

export type SearchFieldType = {
  className?: string;
  heading?:string;
};

const SearchField: NextPage<SearchFieldType> = ({ className = "",heading }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-left text-13xl text-new-1f font-work-sans mq750:flex-wrap ${className}`}
    >
      <h2 className="m-0 relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit mq1050:text-7xl mq1050:leading-[56px] mq450:text-lgi mq450:leading-[42px]">
      {heading}
      </h2>
      {/* <div className="w-[412px] rounded-sm box-border flex flex-row items-center justify-start py-3.5 pr-[210px] pl-[17px] gap-[10px] max-w-full border-[1px] border-solid border-darkslateblue-100 mq450:pr-5 mq450:box-border">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/frame-2.svg"
        />
        <input
          className="w-[calc(100%_-_251px)] [border:none] [outline:none] font-medium font-work-sans text-lg bg-[transparent] h-[21px] flex-1 relative tracking-[-0.06em] text-thistle text-left flex items-center min-w-[89px] p-0"
          placeholder="Search your model"
          type="text"
        />
      </div> */}
    </div>
  );
};

export default SearchField;
