import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent12Type = {
  className?: string;
  amsterdamOffice?: string;
  fredRoeskestraat100?: string;
  eDAmsterdam?: string;
  theNetherlands?: string;
  europe?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
  amsterdamOffice,
  fredRoeskestraat100,
  eDAmsterdam,
  theNetherlands,
  europe,
  propPadding,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 rounded-29xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.08),_rgba(255,_255,_255,_0)),_linear-gradient(130.02deg,_rgba(95,_46,_216,_0.01),_rgba(95,_46,_216,_0.01))] flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border gap-[12px] min-w-[196px] text-left text-lg text-new-1f font-work-sans ${className}`}
      style={frameDiv1Style}
    >
      <img
        className="h-[73px] w-[72px] relative rounded-mini object-contain"
        loading="lazy"
        alt=""
        src="/rectangle-346244001@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
        <div className="self-stretch relative tracking-[-0.06em] leading-[24px] font-semibold">
          {amsterdamOffice}
        </div>
        <div className="self-stretch relative">
          <p className="m-0">{fredRoeskestraat100}</p>
          <p className="m-0">{eDAmsterdam}</p>
          <p className="m-0">{theNetherlands}</p>
          <p className="m-0">{europe}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
