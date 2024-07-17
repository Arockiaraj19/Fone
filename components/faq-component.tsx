import { useState } from "react";



export const QuestionComponent=()=>{
const [isExpand,setIsExpand]=useState(false);

    return (   <div className="self-stretch rounded-[27px] flex flex-col items-start justify-start py-5 px-0">
    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
      <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit mq450:text-lg ">
        What is AI application development? 
      </h3>
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
      {isExpand?<img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          alt=""
          src="/answer-content.svg"
          onClick={(e)=>setIsExpand(!isExpand)}
        />: <img
        className="w-6 h-6 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/frame-1.svg"
        onClick={(e)=>setIsExpand(!isExpand)}
      />}  
      </div>
    </div>
   {
    isExpand&& <div className={"self-stretch relative text-lg leading-[28px] text-anew-black"}>{`It’s simple. Check the price of your phone or any other device, confirm, and get cash. Use our free home pick-up service and get cash on the spot. `}</div>
   }
  </div>);
}