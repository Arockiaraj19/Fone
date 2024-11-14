import { useRouter } from "next/router";
import { QuestionComponent } from "./faq-component";
import { QuestionComponentTwo } from "./faq-component_type_two";

const FAQMainComponent = () => {
  const router = useRouter();
  return (
    <div className="overflow-auto   grid grid-cols-2 mq750:grid-cols-1 mq750:px-5 px-[94px] mq1050:px-[47px] mq450:px-5 text-45xl text-new-1f font-poppins">
      <div className="w-full   flex-col justify-start mq450:justify-center mq450:items-center   box-border gap-[10px] ">
        <h1 className="relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit flex items-center  mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
          FAQs
        </h1>
        <div className="text-xl mt-10 text-anew-black self-stretch relative font-medium mq450:text-base">
          Can’t find the answer you are looking for?
        </div>
        <button
          onClick={(e) => {
            router.push("/sell-now");
          }}
          className="cursor-pointer mt-10 [border:none] py-4 px-10 bg-new-1f rounded-xl flex flex-row items-start justify-start hover:bg-darkslateblue-200"
        >
          <div className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block">
            Sell Your Device
          </div>
        </button>
      </div>
      <div className="w-full   flex  flex-col items-start mq450:justify-center mq450:items-center justify-end  box-border text-3xl font-work-sans ">
        <QuestionComponent
          title={"1. What is a pre-owned iPhone?"}
          body={
            "A pre-owned iPhone is a previously used device that has been inspected, tested, and restored to a fully functional condition. These phones often come from trade-ins or returns and are typically sold at a lower price than new models."
          }
        />
        <QuestionComponent
          title={"2. Are pre-owned iPhones reliable?"}
          body={
            "Yes, pre-owned iPhones from reputable sellers are thoroughly tested to ensure they meet high standards of quality and functionality. At Fone Garage, all our pre-owned iPhones undergo a rigorous inspection process to guarantee they work like new."
          }
        />
        <QuestionComponentTwo
          title={
            "3. What is the difference between pre-owned, refurbished, and used iPhones?"
          }
          body={
            <div
              className={
                "flex-1 gap-1 flex-col text-wrap relative text-lg leading-[28px] text-anew-black"
              }
            >
              <p>
                <span className="font-semibold">Pre-owned iPhone:</span> A
                previously owned device that has been tested and restored to
                ensure it works properly.
              </p>
              <p>
                <span className="font-semibold">Refurbished iPhone:</span>{" "}
                Similar to pre-owned, but often involves more extensive repairs
                and replacements of parts to bring the device to a like-new
                condition.
              </p>
              <p>
                <span className="font-semibold">Used iPhone:</span>A device sold
                as-is without any refurbishing or guaranteed testing. We only
                sell Pre-owned / Used devices
              </p>
            </div>
          }
        />
        <QuestionComponent
          title={"4. Do pre-owned iPhones come with a warranty?"}
          body={
            " Yes, all pre-owned iPhones purchased from Fone Garage come with a Month warranty that covers defects and malfunctions. But there is also extended insurance available for an year just at a cost of AED 100. This gives you peace of mind knowing that you are protected in case any issues arise."
          }
        />
        <QuestionComponentTwo
          title={"5.What condition can I expect my pre-owned iPhone to be in?"}
          body={
            <div
              className={
                "flex-1 gap-1 flex-col text-wrap relative text-lg leading-[28px] text-anew-black"
              }
            >
              <p>
                Our pre-owned iPhones are categorized based on their cosmetic
                condition:
              </p>
              <p>
                <span className="font-semibold">Excellent:</span>Like-new
                appearance with no visible scratches or dents.
              </p>
              <p>
                <span className="font-semibold">Good:</span> Minor signs of
                wear, such as small scratches or light scuffs.
              </p>
              <p>
                <span className="font-semibold">Fair:</span>Noticeable signs of
                use but fully functional.
              </p>
            </div>
          }
        />
        <QuestionComponent
          title={"6. Can I return a pre-owned iPhone if I’m not satisfied?"}
          body={
            "Yes, we offer a same-day return policy for pre-owned iPhones. If you are not completely satisfied with your purchase, you can return the device within same day for a full refund or exchange, subject to our return policy terms and conditions. "
          }
        />
        <QuestionComponentTwo
          title={"7.How do you test the iPhones?"}
          body={
            <div
              className={
                "flex-1 gap-1 flex-col text-wrap relative text-lg leading-[28px] text-anew-black"
              }
            >
              <p>Our QC process includes:</p>
              <p>Comprehensive functionality testing.</p>
              <p>Battery health check and replacement if necessary.</p>
              <p>Cleaning and sanitizing the device.</p>
              <p>Software updates and resetting to factory settings.</p>
            </div>
          }
        />
        <QuestionComponent
          title={"8. Are the accessories included with a pre-owned iPhone?"}
          body={
            "Pre-owned iPhones from Fone Garage come with essential accessories, including a Screen Guard, Type c to lightning cable and Back pouch. Original packaging and accessories such as earbuds may not be included."
          }
        />
        <QuestionComponent
          title={"9. Will my pre-owned iPhone work with my carrier?"}
          body={
            "Most of our pre-owned iPhones are unlocked and compatible with major carriers. However, we recommend checking the product listing or contacting our customer service to confirm compatibility with your specific carrier."
          }
        />
        <QuestionComponent
          title={"10. How can I be sure I’m getting a genuine Apple product?"}
          body={
            "At Fone Garage, we guarantee that all our pre-owned iPhones are genuine Apple products. We do not sell counterfeit or imitation devices. Each phone is verified for authenticity before being offered for sale."
          }
        />
        <QuestionComponent
          title={"10. How can I be sure I’m getting a genuine Apple product?"}
          body={
            "At Fone Garage, we guarantee that all our pre-owned iPhones are genuine Apple products. We do not sell counterfeit or imitation devices. Each phone is verified for authenticity before being offered for sale."
          }
        />
        <QuestionComponent
          title={"11. How do I purchase a pre-owned iPhone from your store?"}
          body={
            "You can browse our selection of pre-owned iPhones on our website or visit our physical store. Once you find the model you want, simply add it to your cart and proceed to checkout. For in-store purchases, our staff will assist you with your purchase and answer any questions you may have."
          }
        />
        <QuestionComponent
          title={"12. Do you offer financing options?"}
          body={
            "Yes, we offer Tabby and Tamara options to make purchasing a pre-owned iPhone more affordable. Please check our financing page for more details or speak with a store representative for available plans."
          }
        />
        <QuestionComponent
          title={
            "13. What should I do if I have an issue with my pre-owned iPhone?"
          }
          body={
            "If you encounter any problems with your pre-owned iPhone, please contact our customer service team. We are here to help and will assist you with troubleshooting, repairs, or processing a warranty claim if needed."
          }
        />
        <QuestionComponent
          title={
            "14. Can I trade in my old phone for a discount on a pre-owned iPhone?"
          }
          body={
            "Yes, we offer trade-in programs where you can exchange your old phone for credit towards the purchase of a pre-owned iPhone. Please visit our trade-in page for more details and to get an estimate for your device."
          }
        />
      </div>
    </div>
  );
};

export default FAQMainComponent;
