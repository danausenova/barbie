import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RegistrContext from "./contexts/RegistrContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RegistrContext>
      <App />
    </RegistrContext>
  </BrowserRouter>
);
