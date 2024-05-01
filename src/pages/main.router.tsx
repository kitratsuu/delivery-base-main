import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./authentication/login";
import Signuppage from "./authentication/signup";
import Homepage from "./homepage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={""} />} />

      <Route index element={<Homepage />} />
      <Route path="login" element={<Loginpage />} />
      <Route path="signup" element={<Signuppage />} />
    </Routes>
  );
};
