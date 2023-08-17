import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/UI/MainPage";

// import "../styles/global.scss";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};
export default AppRouter;
