import type { NextPage } from "next";
import Header from "./header";

export type FrameComponent13Type = {
  className?: string;
};

const FrameComponent13: NextPage<FrameComponent13Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[130px] box-border max-w-full ${className}`}
    >
      <Header />
    </section>
  );
};

export default FrameComponent13;
