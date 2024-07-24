import { QuestionComponent } from "./faq-component"


const FAQMainComponent=()=>{
    return (   <div className="w-full overflow-auto   grid grid-cols-2 mq750:grid-cols-1 mq750:px-5 px-[94px] mq1050:px-[47px] mq450:px-5 text-45xl text-new-1f font-poppins">
    <div className="w-full  flex-col justify-start mq450:justify-center mq450:items-center   box-border gap-[10px] ">
      <h1 className="relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit flex items-center shrink-0  mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
        FAQs
      </h1>
      <div className="text-xl mt-10 text-anew-black self-stretch relative font-medium mq450:text-base">
      Can’t find the answer you are looking for?
    </div>
    <button className="cursor-pointer mt-10 [border:none] py-4 px-10 bg-new-1f rounded-xl flex flex-row items-start justify-start shrink-0 whitespace-nowrap hover:bg-darkslateblue-200">
    <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[127px]">
      Sell Your Device
    </div>
  </button>
   
    </div>
      <div className="w-full   flex h-28 flex-col items-start mq450:justify-center mq450:items-center justify-end  box-border text-3xl font-work-sans ">
<QuestionComponent title={"1. What is a pre-owned iPhone?"} body={"A pre-owned iPhone is a previously used device that has been inspected, tested, and restored to a fully functional condition. These phones often come from trade-ins or returns and are typically sold at a lower price than new models."}/>
<QuestionComponent title={"2. Are pre-owned iPhones reliable?"} body={"Yes, pre-owned iPhones from reputable sellers are thoroughly tested to ensure they meet high standards of quality and functionality. At Fone Garage, all our pre-owned iPhones undergo a rigorous inspection process to guarantee they work like new."}/>
<QuestionComponent title={"3. What is the difference between pre-owned, refurbished, and used iPhones?"} body={"Pre-owned iPhone: A previously owned device that has been tested and restored to ensure it works properly.Refurbished iPhone: Similar to pre-owned, but often involves more extensive repairs and replacements of parts to bring the device to a like-new condition.Used iPhone: A device sold as-is without any refurbishing or guaranteed testing.We only sell Pre-owned / Used devices"}/>
<QuestionComponent title={"4. Do pre-owned iPhones come with a warranty?"} body={" Yes, all pre-owned iPhones purchased from Fone Garage come with a Month warranty that covers defects and malfunctions. But there is also extended insurance available for an year just at a cost of AED 100. This gives you peace of mind knowing that you are protected in case any issues arise."}/>
<QuestionComponent title={"5. What condition can I expect my pre-owned iPhone to be in?"} body={"Our pre-owned iPhones are categorized based on their cosmetic condition:Excellent: Like-new appearance with no visible scratches or dents.Good: Minor signs of wear, such as small scratches or light scuffs.Fair: Noticeable signs of use but fully functional.Regardless of cosmetic condition, all phones are tested to ensure full functionality."}/>
<QuestionComponent title={"6. Can I return a pre-owned iPhone if I’m not satisfied?"} body={"Yes, we offer a same-day return policy for pre-owned iPhones. If you are not completely satisfied with your purchase, you can return the device within same day for a full refund or exchange, subject to our return policy terms and conditions. "}/>
<QuestionComponent title={"7. How do you test the iPhones?"} body={"Our QC process includes: Comprehensive functionality testing.Battery health check and replacement if necessary.Cleaning and sanitizing the device.Software updates and resetting to factory settings."}/>

    
        
      </div>
  </div>)
}

export default FAQMainComponent