import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Animatescroll from "../functions/animate";
import Lastpage from "./lastpage";

export default function MainContent(props: {
  pagedata: {
    id: number;
    heading: string;
    text: string;
    images: string[];
    button: boolean;
    buttontext: string;
    imgopacity: string;
    imagewholebg: boolean;
    interobvcheck: boolean;
  };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <Animatescroll>
      <div
        className={`flex justify-center items-center max-sm:p-3 p-10 w-screen h-screen snap-center `}
      >
        {props.pagedata.id === 6 ? (
          <Lastpage />
        ) : (
          <div
            ref={ref}
            className="md:flex lg:flex xl:flex justify-around items-center w-full h-full"
          >
            <div className=" max-[900px]:h-[50%] h-full max-[900px]:w-full w-[60%] space-y-5 flex flex-col justify-center items-center text-center">
              <div className="">
                <span className="md:text-[50px] lg:text-[70px] xl:text-[90px] text-[30px] leading-tight">
                  {props.pagedata.heading}
                </span>
              </div>
              <div className="">
                <span className="md:text-[20px] lg:text-[20px] xl:text-[30px] text-[15px] font-extrabold">
                  {props.pagedata.text}
                </span>
              </div>
              {props.pagedata.button ? (
                <button
                  onClick={() => {
                    navigate("login");
                  }}
                  className="relative max-md:px-7 max-md:py-2 px-10 max-md:active:px-6 active:px-8 py-4 font-bold text-white rounded-lg group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen" />
                  <span className="relative text-lg">
                    {props.pagedata.buttontext}
                  </span>
                </button>
              ) : (
                ""
              )}
            </div>
            <div
              className={`max-sm:h-[30%] max-md:h-[40%] h-[50%] flex justify-center items-center max-md:w-full w-[60%] `}
            >
              <div
                className={`w-[80%] h-full flex ${
                  props.pagedata.images.length > 1
                    ? "overflow-x-clip scroll-width-none"
                    : ""
                }`}
              >
                {props.pagedata.images.length > 1 ? (
                  props.pagedata.images.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className=" animate-movetoleft flex-shrink-0 w-full max-w-[400px] h-full p-2"
                      >
                        <img
                          className="w-full h-full"
                          key={i}
                          src={"/" + e}
                          width={props.pagedata.images.length > 1 ? 300 : 600}
                          height={props.pagedata.images.length > 1 ? 300 : 600}
                          alt={e}
                        />
                      </div>
                    );
                  })
                ) : (
                  <img
                    src={"/" + props.pagedata.images[0]}
                    alt={props.pagedata.images[0]}
                    width={props.pagedata.images.length > 1 ? 300 : 600}
                    height={props.pagedata.images.length > 1 ? 300 : 600}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Animatescroll>
  );
}
