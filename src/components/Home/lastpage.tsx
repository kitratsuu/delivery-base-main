import React from "react";

export default function Lastpage() {
  return (
    <div className="grid max-md:grid-cols-2 grid-cols-4 font-josefin_slob backdrop-blur-md content-center text-center w-screen">
      <div className="w-full space-y-6">
        <span className="font-extrabold max-md:text-2xl text-4xl">Titify</span>
        <div className="flex flex-col space-y-3 max-md:text-base text-xl text-white/60">
          <button>About</button>
          <button>Contact us</button>
        </div>
      </div>
      <div className="w-full space-y-6">
        <span className="font-extrabold max-md:text-2xl text-4xl">Sell</span>
        <div className="flex flex-col space-y-3 max-md:text-base text-xl text-white/60">
          <button>Sell Online</button>
          <button>Payments</button>
          <button>Marketing</button>
          <button>Checkout</button>
          <button>Shipping</button>
        </div>
      </div>
      <div className="w-full space-y-6">
        <span className="font-extrabold max-md:text-2xl text-4xl">Build</span>
        <div className="flex flex-col space-y-3 max-md:text-base text-xl text-white/60">
          <button>For Developers</button>
          <button>Dev Resources</button>
        </div>
      </div>
      <div className="w-full space-y-6">
        <span className="font-extrabold max-md:text-2xl text-4xl">
          Resources
        </span>
        <div className="flex flex-col space-y-3 max-md:text-base text-xl text-white/60">
          <button>Blog</button>
          <button>Documentation</button>
          <button>Support</button>
          <button>Meetups</button>
          <button>Support Policy</button>
          <button>Contact Us</button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
