import React, { useEffect, useRef } from "react";
import { useElement } from "./scrollfunc";

export default function Animatescroll(props: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting, directiondown } = useElement(ref);

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`w-screen h-screen ${
        isIntersecting
          ? "opacity-100 translate-y-0 "
          : "opacity-0" +
            `${
              !directiondown
                ? "translate-y-0 max-sm:-translate-x-[200px] md:-translate-x-[300px] -translate-x-[300px]"
                : "translate-y-0 max-sm:translate-x-[200px] md:-translate-x-[300px] -translate-x-[300px]"
            }`
      } ease-in duration-[100ms] `}
    >
      {props.children}
    </div>
  );
}
