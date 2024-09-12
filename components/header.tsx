import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export type HeaderType = {
  className?: string;

  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
};

const Header: NextPage<HeaderType> = ({
  className = "",
  frameDivFlex,
  frameDivAlignSelf,
}) => {
  const frameHeader1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivAlignSelf]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const router=useRouter()
  return (
    <header className={`bg-white w-full fixed z-50 flex flex-col items-start justify-center py-0 mq750:py-5 px-[94px] mq1050:px-[47px] box-border max-w-full text-left text-lg text-anew-black font-work-sans mq750:px-5  ${className}`}>
    <div className="self-stretch bg-white w-full flex flex-row items-center justify-between py-0 box-border gap-[32px] max-w-full   mq750:gap-[16px]">
      <img
      onClick={(e)=>router.push("/")}
        className="h-10 w-40 object-cover"
        loading="lazy"
        alt="Logo"
        src="/logo.png"
      />
      <div className="mq750:hidden  gap-8 flex  flex-1 flex-row items-center justify-end py-0 px-6 box-border ">
        <a href="/" className="hover:text-new-1f no-underline  relative tracking-[-0.06em] leading-[87px] font-medium text-inherit whitespace-nowrap">
          Home
        </a>
        <a href="/sell-now" className="hover:text-new-1f no-underline  relative tracking-[-0.06em] leading-[87px] font-medium text-inherit whitespace-nowrap">
          Sell Now
        </a>
        <a href="/about-us" className="hover:text-new-1f no-underline relative tracking-[-0.06em] leading-[87px] font-medium text-inherit   whitespace-nowrap">
          About us
        </a>
        <a href="/contact-us" className="hover:text-new-1f no-underline relative tracking-[-0.06em] leading-[87px] font-medium text-inherit ">
          Contact us
        </a>
      </div>
      <div className="hidden mq750:flex  items-center">
    {
      isMobileMenuOpen? <FontAwesomeIcon icon={faXmark} className=" text-new-1f h-8 w-8" onClick={toggleMobileMenu} />:<FontAwesomeIcon icon={faBars} className=" text-new-1f h-8 w-8" onClick={toggleMobileMenu}/>
    }  
        
      </div>
    </div>
    <div className={` ${isMobileMenuOpen ? 'hidden mq750:flex flex-col gap-1 bg-white justify-start' : 'hidden'}`}>
    <a href="/" className="hover:text-new-1f no-underline  relative tracking-[-0.06em] leading-[87px] font-medium text-inherit whitespace-nowrap">
          Home
        </a>
        <a href="/sell-now" className="hover:text-new-1f no-underline  relative tracking-[-0.06em] leading-[87px] font-medium text-inherit whitespace-nowrap">
          Sell Now
        </a>
        <a href="/about-us" className="hover:text-new-1f no-underline relative tracking-[-0.06em] leading-[87px] font-medium text-inherit   whitespace-nowrap">
          About us
        </a>
        <a href="/contact-us" className="hover:text-new-1f no-underline relative tracking-[-0.06em] leading-[87px] font-medium text-inherit ">
          Contact us
        </a>
    </div>
  </header>

  
  );
};

export default Header;
