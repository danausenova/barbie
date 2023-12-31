import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AddToyPage from "../pages/AddToyPage";
import EditToyPage from "../pages/EditToyPage";
import RegistrPage from "../pages/RegistrPage";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";
import ToysDetailsPage from "../pages/ToysDetailsPage";
import FavoritePage from "../pages/FavoritePage";
import SecondLayout from "../layouts/SecondLayout";
import PaymentPage from "../pages/PaymentPage";
import OrderPage from "../pages/OrderPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/details/:id" element={<ToysDetailsPage />} />
      </Route>
      <Route element={<SecondLayout />}>
        <Route path="/auth" element={<RegistrPage />} />
        <Route path="/add" element={<AddToyPage />} />
        <Route path="/edit/:id" element={<EditToyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
