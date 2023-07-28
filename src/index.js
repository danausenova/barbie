import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import RegistrContext from "./contexts/RegistrContext";
import ToyContext from "./contexts/ToyContext";
import CartContext from "./contexts/CartContext";
import FavoriteContext from "./contexts/FavoriteContext";
import CommentContext from "./contexts/CommentContext";
import Toastify from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CommentContext>
      <CartContext>
        <RegistrContext>
          <FavoriteContext>
            <ToyContext>
              <Toastify />
              <App />
            </ToyContext>
          </FavoriteContext>
        </RegistrContext>
      </CartContext>
    </CommentContext>
  </BrowserRouter>
);
