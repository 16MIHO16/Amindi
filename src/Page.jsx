import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

const PageComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageComponent;
