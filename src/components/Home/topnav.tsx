import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Topnav() {
  const [servicesdropdowntoogle, setServicesdropdowntoogle] = useState(false);
  const [resourcesdropdowntoogle, setResourcesdropdowntoogle] = useState(false);
  const [dropdownstate, setDropdownstate] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`sticky w-full h-[10%] flex max-md:justify-between justify-around max-md:px-1 z-[20] items-end`}
    >
      <div
        className={`${
          dropdownstate ? "max-md:block opacity-0" : "max-md:block"
        } hidden `}
      >
        <button
          onClick={() => {
            setDropdownstate(!dropdownstate);
          }}
        >
          <img className="w-10 h-10" src="/3bars.svg" alt="" />
        </button>
      </div>
      <span className="font-josefin_slob text-4xl  font-extrabold">
        Delivery Base
      </span>
      <div
        className={`space-x-5 max-md:absolute max-md:inset-0 max-md:animate-menuanimationon  max-md:bg-slate-400 max-md:bg max-md:w-[60%] max-md:max-w-[300px] max-md:h-screen  ${
          dropdownstate ? "max-md:block" : "max-md:hidden"
        } md:flex lg:flex xl:flex space-y-3`}
      >
        <div className="relative z-20 max-md:block hidden w-full h-10">
          <button
            onClick={() => {
              setDropdownstate(false);
              setResourcesdropdowntoogle(false);
              setServicesdropdowntoogle(false);
            }}
            className="float-right hover:text-slate-400"
          >
            <img className="w-8 h-8" src="/crossicon.svg" alt="" />
          </button>
        </div>
        <div className="relative max-md:block hidden">
          <button className="w-full animate-wiggle flex justify-center">
            <span className="font-josefin_slob text-4xl font-extrabold">
              Delivery Base
            </span>
          </button>
        </div>
        <div className="">
          <div className="relative">
            <button
              onClick={() => {
                setServicesdropdowntoogle(!servicesdropdowntoogle);
              }}
              className={`flex items-center whitespace-nowrap rounded px-6 pt-2.5 pb-2 text-lg font-medium text-black  transition duration-150 ease-in-out active:bg-neutral-500  hover:bg-primary-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ${
                servicesdropdowntoogle
                  ? "bg-primary-900 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  : ""
              } focus:bg-primary-900 active:bg-none`}
              type="button"
              id="dropdownMenuButton1"
              aria-expanded="false"
            >
              Services
              <span className="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 max-md:-rotate-90"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <ul
              className={`absolute max-md:relative z-[1000] max-md:ml-[70px] max-md:mt-4 float-left m-0 ${
                servicesdropdowntoogle ? "block" : "hidden"
              } min-w-max list-none overflow-hidden rounded-lg space-y-3 border-none bg-slate-400 bg-clip-padding text-left text-base shadow-2xl mb-2  [&[data-te-dropdown-show]]:block`}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-black hover:bg-neutral-400 active:text-neutral-200 "
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-black hover:bg-neutral-400 active:text-neutral-200 "
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-black hover:bg-neutral-400 active:text-neutral-200 "
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <button
              onClick={() => {
                setResourcesdropdowntoogle(!resourcesdropdowntoogle);
              }}
              className={`flex items-center whitespace-nowrap rounded  px-6 pt-2.5 pb-2 text-lg font-medium text-black  transition duration-150 ease-in-out active:bg-neutral-500  hover:bg-primary-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ${
                resourcesdropdowntoogle
                  ? "bg-primary-900 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  : ""
              } focus:bg-primary-900 active:bg-none`}
              type="button"
              id="dropdownMenuButton1"
              aria-expanded="false"
            >
              Resources
              <span className="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 max-md:-rotate-90"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <ul
              className={`absolute max-md:relative z-[1000] max-md:ml-[70px] max-md:mt-4 float-left m-0 ${
                resourcesdropdowntoogle ? "block" : "hidden"
              } min-w-max list-none overflow-hidden border-none  bg-clip-padding mb-2 text-left text-base shadow-2xl rounded-lg space-y-3 bg-slate-400 [&[data-te-dropdown-show]]:block`}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-black hover:bg-neutral-400 active:text-neutral-200 "
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-black hover:bg-neutral-400 active:text-neutral-200 "
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-black hover:bg-neutral-400 active:text-neutral-200 "
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <button className="flex items-center whitespace-nowrap rounded  px-6 pt-2.5 pb-2 text-lg font-medium text-black  transition duration-150 ease-in-out active:bg-neutral-500  hover:bg-primary-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-900 active:bg-none">
            Contact us
          </button>
        </div>
        <div className="">
          <button className="flex items-center whitespace-nowrap rounded  px-6 pt-2.5 pb-2 text-lg font-medium text-black  transition duration-150 ease-in-out active:bg-neutral-500  hover:bg-primary-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-900 active:bg-none">
            About
          </button>
        </div>
      </div>
      <div className="mb-2">
        <button
          onClick={() => {
            navigate("login");
          }}
          className="inline-block py-1 active:bg-gray-900 text-xl text-white bg-gray-800 px-3 hover:bg-gray-700 rounded-xl"
        >
          Login
        </button>
      </div>
    </div>
  );
}
