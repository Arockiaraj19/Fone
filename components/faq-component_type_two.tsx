import { useState } from "react";

export const QuestionComponentTwo = ({
  title,
  body,
}: {
  title: any;
  body: any;
}) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="w-full  flex flex-col items-start justify-start py-1 px-0">
      <div className="w-full flex flex-row items-start justify-between ">
        <div className="flex-1">
          <h3 className=" text-wrap m-0 relative leading-[28px] font-normal  text-lg mq450:text-lg ">
            {title}
          </h3>
        </div>
        <div className="pt-0.5 px-0 pb-0">
          {isExpand ? (
            <img
              className="w-6 h-6"
              alt=""
              src="/answer-content.svg"
              onClick={(e) => setIsExpand(!isExpand)}
            />
          ) : (
            <img
              className="w-6 h-6 "
              loading="lazy"
              alt=""
              src="/frame-1.svg"
              onClick={(e) => setIsExpand(!isExpand)}
            />
          )}
        </div>
      </div>
      {isExpand && (
      body
      )}
    </div>
  );
};
