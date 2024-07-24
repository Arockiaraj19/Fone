import { useState } from "react";



export const QuestionComponent=({title,body}:{title:any,body:any})=>{
const [isExpand,setIsExpand]=useState(false);

    return (   <div className="w-full  flex flex-col items-start justify-start py-5 px-0">
    <div className=" flex flex-row items-start justify-between gap-[20px]">
      <h3 className="flex-1 text-wrap m-0 relative leading-[28px] font-medium mq450:text-lg ">
       {title}
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
    isExpand&& <div className={"flex-1 text-wrap relative text-lg leading-[28px] text-anew-black"}>{body}</div>
   }
  </div>);
}