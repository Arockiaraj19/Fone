import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

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

  return (
    <header
      className={`bg-white fixed z-20 flex-1 flex flex-col items-start justify-center py-1 px-[94px] box-border max-w-full text-left text-lg text-anew-black font-work-sans mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[47px] mq1050:pr-[47px] mq1050:box-border ${className}`}
      style={frameHeader1Style}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-start py-0 pr-[499px] pl-0 box-border gap-[32px] max-w-full lg:pr-[249px] lg:box-border mq450:pr-5 mq450:box-border mq750:gap-[16px] mq750:pr-[124px] mq750:box-border">
        <img
          className="h-10 w-40 relative object-cover"
          loading="lazy"
          alt=""
          src="/logo.png"
        />
        <div className="flex-1   flex flex-row items-center justify-center py-0 px-6 box-border gap-[39px] max-w-full mq750:gap-[19px] mq1050:hidden">
          <a href="/" className="hover:text-new-1f no-underline flex-1 relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] whitespace-nowrap">
            Home
          </a>
          <a  href="/sell-now" className="hover:text-new-1f no-underline flex-1 relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] whitespace-nowrap">
            Sell Now
          </a>
          <a href="/about-us" className="hover:text-new-1f no-underline relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] inline-block min-w-[72px] whitespace-nowrap">
            About us
          </a>
          <a href="/contact-us" className="hover:text-new-1f no-underline relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] whitespace-pre-wrap inline-block min-w-[92px] shrink-0">
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
