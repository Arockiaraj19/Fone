import type { NextPage } from "next";

import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const router = useRouter();
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4.3px] max-w-full text-left text-base text-darkslategray font-work-sans ${className}`}
    >
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-16 px-5 box-border max-w-full z-[1] mq800:gap-[16px] mq450:pt-[42px]  mq450:box-border mq1350:gap-[32px]">
        <div className="w-[1126px] flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[0px] mq1350:flex-wrap">
          <div className="w-[437px] flex flex-col items-start justify-start max-w-full">
            <div className="flex gap-4 flex-col items-start justify-start pt-2.5  pr-0 pl-2.5 box-border">
              <img
                onClick={(e) => router.push("/")}
                className="h-10 w-40 relative object-cover"
                loading="lazy"
                alt=""
                src="/logo.png"
              />
              <div className="flex flex-row gap-2">
                <img
                  onClick={(e) =>
                    window.open(
                      "https://www.instagram.com/fonegarage.ae?igsh=MWRoNzA0cTJlZ2MweQ==",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="h-10 w-10 relative object-cover cursor-pointer "
                  loading="lazy"
                  alt=""
                  src="/instagram-brands-solid.svg"
                />
                <img
                  onClick={(e) =>
                    window.open(
                      "https://www.instagram.com/jamshi_fone_garage?igsh=MWdkaXYzandyZjA1bg==",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="h-10 w-10 relative object-cover cursor-pointer "
                  loading="lazy"
                  alt=""
                  src="/instagram-brands-solid.svg"
                />
                <img
                  onClick={(e) =>
                    window.open(
                      "https://www.instagram.com/thrissurkkaran_fonegarage?igsh=MXAwZ2doaTBzbmQxOQ==",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="h-10 w-10 relative object-cover cursor-pointer "
                  loading="lazy"
                  alt=""
                  src="/instagram-brands-solid.svg"
                />
                <img
                  onClick={(e) =>
                    window.open(
                      "https://www.instagram.com/sajju_fonegarage?igsh=ZWtjMDlnYnQ1NDUz",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="h-10 w-10 relative object-cover cursor-pointer "
                  loading="lazy"
                  alt=""
                  src="/instagram-brands-solid.svg"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-row flex-wrap items-start justify-end py-0 pr-[5px] pl-0 box-border gap-[24px_22.6px] min-w-[689px] max-w-full mq800:min-w-full mq1350:flex-1 mq1350:pr-0 mq1350:box-border">
            <div className=" flex flex-col items-start justify-start py-2.5 pr-5 pl-0 box-border gap-[19px] min-w-[62px]">
              <div className="relative text-xl capitalize font-medium inline-block min-w-[99px] mq450:text-base">
                Company
              </div>

              <div
                onClick={(e) => router.push("/about-us")}
                className="cursor-pointer relative capitalize inline-block min-w-[75px]"
              >
                About us
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-2.5 px-0 gap-[20px] text-xl">
              <div className="relative capitalize font-medium mq450:text-base">{`Help & support`}</div>
              <div
                onClick={(e) => router.push("/contact-us")}
                className="cursor-pointer relative text-base capitalize inline-block"
              >
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
