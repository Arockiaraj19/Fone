import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
  memberPhotos?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({
  className = "",
  memberPhotos,
}) => {
  return (
    <div
      className={`w-full rounded-29xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.08),_rgba(255,_255,_255,_0)),_linear-gradient(130.02deg,_rgba(95,_46,_216,_0.01),_rgba(95,_46,_216,_0.01))] flex flex-col items-start justify-center gap-[32px] text-left text-xl text-new-1f font-work-sans mq450:gap-[16px] ${className}`}
    >
      <img
        className="w-[263.3px] h-[266px] relative rounded-mini object-cover"
        loading="lazy"
        alt=""
        src={memberPhotos}
      />
      <div className="w-[200px] flex flex-col items-start justify-center gap-[8px]">
        <div className="self-stretch relative tracking-[-0.06em] leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
          SANDEEP SHETTY
        </div>
        <div className="relative leading-[28px] font-medium font-inter mq450:text-base mq450:leading-[22px]">
          Co-founder and CEO
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
