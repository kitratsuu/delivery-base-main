import { getAuth, signOut } from "firebase/auth";
import React from "react";

export default function Userpage() {
  return (
    <div>
      <span>Userpage</span>
      <button
        onClick={() => {
          signOut(getAuth());
        }}
        className="absolute bottom-5 left-5 border-2 border-black bg-slate-400"
      >
        Log out
      </button>
    </div>
  );
}
