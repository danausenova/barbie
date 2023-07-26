import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import RegistrContext from "./contexts/RegistrContext";

import ToyContext from "./contexts/ToyContext";
import CartContext from "./contexts/CartContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<RegistrContext>
    <CartContext>
      <ToyContext>
        <App />
      </ToyContext>
    </CartContext>
    </RegistrContext>
  </BrowserRouter>
);
