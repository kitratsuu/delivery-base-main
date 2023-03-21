import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home-page";

export const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
};
