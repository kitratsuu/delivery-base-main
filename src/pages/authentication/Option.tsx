import React from "react";

export default function Option() {
  return (
    <>
      <div className="flex">
        <div className="h-screen w-screen justify-center items-center ">
          <div className="pt-[130px] text-center">
            <h1 className="font-sans text-5xl font-semibold ">
              Which one of these best
            </h1>
            <h1 className="font-sans text-5xl font-semibold pt-[10px]">
              describes you?
            </h1>
          </div>

          <div className="pt-[50px]">
            <p className="font-sans text-xl text-center">
              Let us know where you are in your commerce journey so that we can
              tailor your Woo
            </p>
            <p className="font-sans text-xl text-center">experience for you</p>
          </div>

          <div className="flex justify-center">
            <div className="h-[70px] w-[400px] border-2 border-purple-800 rounded mt-[50px] flex">
              <h1 className="border-2 border-purple-500 rounded-full h-[20px] w-[20px] mt-[22px] ml-[18px]">
                <p className="rounded-full h-[12px] w-[12px] bg-purple-800 m-[2px]"></p>
              </h1>

              <p className="font-sans text-base font-medium text-purple-800 pl-[20px] pt-[20px]">
                I'm just starting my business
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-[70px] w-[400px] border-2 border-gray-300 rounded mt-[17px] flex">
              <h1 className="border-2 border-gray-300 rounded-full h-[20px] w-[20px] mt-[22px] ml-[18px]"></h1>

              <p className="font-sans text-base font-medium pl-[20px] pt-[20px]">
                I'm already selling, but not online
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-[70px] w-[400px] border-2 border-gray-300 rounded mt-[17px] flex">
              <h1 className="border-2 border-gray-300 rounded-full h-[20px] w-[20px] mt-[22px] ml-[18px]"></h1>

              <p className="font-sans text-base font-medium pl-[20px] pt-[20px]">
                I'm already selling online
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-[35px]">
            <button className="h-[40px] w-[400px] bg-purple-700 hover:bg-purple-800 text-white rounded text-base font-medium">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
