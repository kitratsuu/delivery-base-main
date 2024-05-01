import { useRef, useState } from "react";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const username = useRef<string>("");
  const password = useRef<string>("");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="w-full max-w-[500px] max-sm:space-y-4 space-y-7 rounded-lg h-full bg-gray-100 flex flex-col items-center justify-center ">
        <div className=" mt-5 text-4xl font-bold text-black">
          Delivery Base{" "}
        </div>
        <button className=" flex items-center border space-x-6 p-2 rounded-3xl border-gray-500 bg-white">
          <BsApple size={23} />

          <div className=" text-gray-700  font-bold text-sm  h-fit w-fit">
            Sign In With Apple
          </div>
        </button>

        <button className=" flex items-center border space-x-6 p-2 rounded-3xl border-gray-500 bg-white ">
          <FcGoogle size={23} />
          <div className="text-gray-700 font-bold text-sm h-fit w-fit">
            Sign In With Google
          </div>
        </button>
        <div className="flex">
          <div className=" border-b-4 border-b-gray-300 w-[84px] "></div>
          <p className=" pl-1 pr-1 text-gray-600 font-bold text-xs">
            or sign in with Email
          </p>
          <div className="border-b-4 border-b-gray-300 w-[84px] "></div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-4 flex flex-col"
        >
          <input
            onChange={(event) => {
              username.current = event.target.value;
            }}
            type="text"
            id="email"
            className="border-2 rounded-3xl border-gray-400 bg-white pl-5 p-2 h-[40px] w-[300px] text-lg hover:border-black"
            placeholder=" Email "
            required={true}
          />

          <input
            onChange={(event) => {
              password.current = event.target.value;
            }}
            type="password"
            id="password"
            className="border-2 rounded-3xl border-gray-400 bg-white pl-5 p-2 h-[40px] w-[300px] text-lg hover:border-black "
            placeholder=" Password"
            required={true}
          />

          <div className="pl-6  text-gray-500 text-xs pt-2 ">
            *Minimum 8 characters required
          </div>
          <div className="pt-2"></div>
          <input
            value="Sign In"
            type="submit"
            className="text-white text-center bg-black font-bold rounded-3xl  w-[300px] text-xl py-2 px-10 active:bg-green-700 hover:bg-green-400"
          />
        </form>

        <div className="flex">
          <div className=" text-gray-700 font-bold text">
            Don't have an account?
          </div>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="pl-1 text-blue-500 font-bold"
          >
            Sign Up
          </button>
        </div>
        <div className="  text-blue-500 font-bold ">Forgot Password?</div>
        <div className="flex">
          <div className=" text-gray-400 font-bold text-sm">
            © 2023 All Rights Reserved
          </div>
          <div className="  text-gray-800 font-bold text-sm">Scaptor</div>
        </div>
      </div>
    </div>
  );
}
