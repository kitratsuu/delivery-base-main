import { useRef, useState } from "react";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { Form, useRelicForm } from "../../components/relicforms/form";
import { Input } from "../../components/relicforms/inputfuncs";
export default function Signuppage() {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const fullname = useRef<HTMLInputElement>(null);
  const formhook = useRelicForm({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function displaydata(data: any) {
    const obj = {
      email: data.username,
      fname: data.fullname,
      uname: data.email,
      pass: data.password,
    };
    console.log(obj);
  }
  return (
    <div className="w-screen h-screen flex justify-center border-2 border-black items-center bg-black">
      <div className=" w-full max-w-[500px] max-sm:space-y-4 space-y-7 h-full bg-gray-100 rounded-lg flex flex-col items-center p-2">
        <h1 className=" mt-5 mb-8 font-josefin_slob text-3xl font-bold text-black">
          Delivery Base{" "}
        </h1>
        <div className=" flex items-center border space-x-6 p-3 rounded-3xl border-gray-500 bg-white">
          <BsApple size={23} />
          <p className=" text-gray-700 font-bold text-sm ">
            Sign Up With Apple
          </p>
        </div>

        <button className=" flex items-center border space-x-6 p-3 rounded-3xl border-gray-500 bg-white ">
          <FcGoogle size={23} />
          <p className="text-gray-700 font-bold text-sm">Sign Up With Google</p>
        </button>
        <div className="flex">
          <div className=" border-b-4 border-b-gray-300 w-[84px] "></div>
          <p className=" pl-1 pr-1 text-gray-600 font-bold text-xs">
            or sign up with Email
          </p>
          <div className="border-b-4 border-b-gray-300 w-[84px] "></div>
        </div>
        <Form
          formHookObj={formhook}
          onSubmit={displaydata}
          className="space-y-2 mx-5 flex flex-col"
        >
          <Input
            ref={formhook.fieldRefs.username}
            type="text"
            className=" border-2 rounded-3xl border-gray-400 bg-white pl-5  p-2 w-[300px] text-base hover:border-black"
            placeholder=" UserName "
          />
          <Input
            ref={formhook.fieldRefs.fullname}
            type="text"
            className=" border-2 rounded-3xl border-gray-400 bg-white pl-5  p-2 w-[300px] text-base hover:border-black"
            placeholder=" Fullname "
          />
          <Input
            ref={formhook.fieldRefs.email}
            type="email"
            className="border-2 rounded-3xl border-gray-400 bg-white pl-5 p-2 w-[300px] text-base hover:border-black"
            placeholder=" Email "
          />
          <Input
            ref={formhook.fieldRefs.password}
            type="password"
            className="border-2 rounded-3xl border-gray-400 bg-white pl-5 p-2 w-[300px] text-base hover:border-black "
            placeholder=" Password"
          />
          <p className="pl-6  text-gray-500 text-xs pt-1 ">
            *Minimum 8 characters required
          </p>
          <div className="flex">
            <Input type={"checkbox"} id="box" className="ml-3 " />
            <p className="ml-7 text-gray-700 font-bold"> I agree to the </p>
            <p className="ml-1 text-blue-500 font-bold"> Terms & Conditions</p>
          </div>
          <Input
            value="Sign up"
            type="submit"
            className=" mt-5 text-white bg-black font-bold rounded-3xl  w-[300px] text-xl text-center py-2 px-10 active:px-8 hover:bg-green-400 hover:text-black"
          />
        </Form>

        <button
          onClick={() => {
            navigate("/login");
          }}
          className="flex"
        >
          <p className=" text-gray-700 font-bold text">
            Already have an account?
          </p>
          <p className="ml-1 text-blue-500 font-bold">Sign In</p>
        </button>
        <p className="  text-blue-500 font-bold ">Forgot Password?</p>
        <div className="flex  mb-10">
          <p className=" text-gray-400 font-bold text-xs">
            © 2023 All Rights Reserved
          </p>
          <p className=" ml-1 text-gray-800 font-bold text-xs">Scaptor</p>
        </div>
      </div>
    </div>
  );
}
