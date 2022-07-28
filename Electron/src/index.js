import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApplicationContextProvider } from "./contexts/ApplicationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApplicationContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApplicationContextProvider>
);
