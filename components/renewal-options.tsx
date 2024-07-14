import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HeaderType = {
  className?: string;

  /** Style props */
  renewalOptionsBackgroundColor?: CSSProperties["backgroundColor"];
  renewalOptionsTop?: CSSProperties["top"];
  renewalOptionsPosition?: CSSProperties["position"];
};

const Header: NextPage<HeaderType> = ({
  className = "",
  renewalOptionsBackgroundColor,
  renewalOptionsTop,
  renewalOptionsPosition,
}) => {
  const renewalOptionsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: renewalOptionsBackgroundColor,
      top: renewalOptionsTop,
      position: renewalOptionsPosition,
    };
  }, [
    renewalOptionsBackgroundColor,
    renewalOptionsTop,
    renewalOptionsPosition,
  ]);

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-center py-1 px-[94px] box-border max-w-full mq1050:pl-[47px] mq1050:pr-[47px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={renewalOptionsStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[499px] pl-0 box-border gap-[32px] max-w-full lg:pr-[249px] lg:box-border mq450:pr-5 mq450:box-border mq750:gap-[16px] mq750:pr-[124px] mq750:box-border">
        <img
          className="h-[18.3px] w-[250px] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-128@2x.png"
        />
        <nav className="m-0 flex-1 shadow-[0px_0px_180.9px_rgba(13,_3,_36,_0.19)_inset] [backdrop-filter:blur(107px)] rounded-10xl flex flex-row items-center justify-center py-0 px-6 box-border gap-[39px] max-w-full text-left text-lg text-anew-black font-work-sans mq1050:hidden mq750:gap-[19px]">
          <a className="[text-decoration:none] flex-1 relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] whitespace-nowrap">
            Our 360° Platform
          </a>
          <a className="[text-decoration:none] flex-1 relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] whitespace-nowrap">
            Mobile Renewability
          </a>
          <a className="[text-decoration:none] relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] inline-block min-w-[72px] whitespace-nowrap">
            About us
          </a>
          <a className="[text-decoration:none] relative tracking-[-0.06em] leading-[87px] font-medium text-[inherit] whitespace-pre-wrap inline-block min-w-[92px] shrink-0">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
