import type { NextPage } from "next";

export type SearchFieldType = {
  className?: string;
  heading?:string;
};

const SearchField: NextPage<SearchFieldType> = ({ className = "",heading }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between max-w-full  text-left text-13xl text-new-1f font-work-sans mq750:flex-wrap ${className}`}
    >
      <h2 className="m-0 relative text-inherit font-medium font-inherit mq1050:text-7xl  mq450:text-lgi ">
      {heading}
      </h2>
     
    </div>
  );
};

export default SearchField;
