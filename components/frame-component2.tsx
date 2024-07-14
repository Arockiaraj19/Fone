import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  customerCountLabel?: string;
  customersServed?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  customerCountLabel,
  customersServed,
  propFlex,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`flex-1 flex flex-row items-end justify-start max-w-full text-left text-13xl text-new-1f font-work-sans ${className}`}
      style={frameDivStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
        <div className="rounded-25xl overflow-hidden flex flex-row items-center justify-start p-3">
          <img
            className="h-[37px] w-[63px] relative object-contain"
            loading="lazy"
            alt=""
            src="/image-125-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[198px]">
          <div className="relative tracking-[-0.06em] leading-[28px] font-medium mq800:text-7xl mq800:leading-[22px] mq450:text-lgi mq450:leading-[17px]">
            {customerCountLabel}
          </div>
          <div className="relative text-xl tracking-[-0.06em] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
            {customersServed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
