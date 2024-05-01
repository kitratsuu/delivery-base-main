import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineWoman } from "react-icons/ai";

export default function () {
  return (
    <div className="flex">
      <div className="h-screen w-screen justify-center items-center ">
        <div className="pt-[130px] text-center">
          <h1 className="font-sans text-5xl font-semibold ">
            Tell us bit about your store
          </h1>
        </div>

        <div className="pt-[50px]">
          <p className="font-sans text-xl text-center">
            We'll use this information to help you set up payments, shipping,
            and taxes, as well as
          </p>
          <p className="font-sans text-xl text-center">
            recommending the best theme for your store
          </p>
        </div>

        <div>
          <h2 className="font-sans text-lg font-medium text-center text-gray-600 pr-[145px] pt-[50px]">
            Give your store a name (optional)
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="h-[50px] w-[420px] border-2 border-gray-300 rounded mt-[8px] flex">
            <p className="font-sans text-base font-medium pl-[20px] pt-[11px] text-gray-500">
              Ex. My awesome store
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-lg text-gray-500 pt-[14px] pl-[25px]">
            <AiOutlineWoman />
          </p>
          <p className="font-sans text-base font-medium pl-[6px] pt-[11px] text-gray-500 pr-[80px]">
            Don't worry - you can always change it later!
          </p>
        </div>

        <div>
          <h2 className="font-sans text-lg font-medium text-center text-gray-600 pr-[40px] pt-[15px]">
            Which industry is your business in? (optional)
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="h-[50px] w-[420px] border-2 border-gray-300 rounded mt-[8px] flex">
            <p className="font-sans text-base font-medium pl-[20px] pt-[11px] text-gray-500">
              Select an industry
            </p>
            <h1 className="text-lg pl-[225px] pt-[15.5px]">
              <AiOutlineDown />
            </h1>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-lg font-medium text-center text-gray-600 pr-[150px] pt-[20px]">
            Where is your business located?
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="h-[50px] w-[420px] border-2 border-gray-300 rounded mt-[8px] flex">
            <p className="font-sans text-base font-medium pl-[20px] pt-[11px] text-gray-700">
              India - Delhi
            </p>
            <h1 className="text-lg pl-[266px] pt-[15.5px]">
              <AiOutlineDown />
            </h1>
          </div>
        </div>

        <div className="flex justify-center mt-[35px]">
          <button className="h-[40px] w-[420px] bg-purple-700 hover:bg-purple-800 text-white rounded text-base font-medium">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
