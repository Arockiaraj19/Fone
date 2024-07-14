import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent9Type = {
  className?: string;

  /** Style props */
  frameDivMarginRight?: CSSProperties["marginRight"];
  frameDivMarginBottom?: CSSProperties["marginBottom"];
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({
  className = "",
  frameDivMarginRight,
  frameDivMarginBottom,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      marginRight: frameDivMarginRight,
      marginBottom: frameDivMarginBottom,
    };
  }, [frameDivMarginRight, frameDivMarginBottom]);

  return (
    <header
      className={`mr-[-6px] mb-[13px] self-stretch flex flex-col items-start justify-center py-1 px-[94px] box-border max-w-full text-left text-lg text-anew-black font-work-sans mq450:pl-5 mq450:pr-5 mq450:box-border mq1100:pl-[47px] mq1100:pr-[47px] mq1100:box-border ${className}`}
      style={frameHeaderStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[499px] pl-0 box-border gap-[32px] max-w-full mq450:pr-5 mq450:box-border mq750:gap-[16px] mq750:pr-[124px] mq750:box-border mq1275:pr-[249px] mq1275:box-border">
        <img
          className="h-[18.3px] w-[250px] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-128@2x.png"
        />
        <div className="flex-1 shadow-[0px_0px_180.9px_rgba(13,_3,_36,_0.19)_inset] [backdrop-filter:blur(107px)] rounded-10xl flex flex-row items-center justify-center py-0 px-6 box-border gap-[39px] max-w-full mq750:gap-[19px] mq1100:hidden">
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
        </div>
      </div>
    </header>
  );
};

export default FrameComponent9;
