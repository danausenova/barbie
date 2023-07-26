import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ToyContext from "./contexts/ToyContext";
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContext>
      <ToyContext>
        <App />
      </ToyContext>
    </CartContext>
  </BrowserRouter>
);
