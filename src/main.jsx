import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeatherProvider } from "./Context/WeatherContext.jsx";
import { BrowserRouter } from "react-router-dom";
import PageComponent from "./Page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WeatherProvider>
      <PageComponent />
    </WeatherProvider>
  </BrowserRouter>
);
