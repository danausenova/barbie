import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();
export function useCartContext() {
  return useContext(cartContext);
}

const initState = { toys: [], totalPrice: 0 };

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = { toys: [], totalPrice: 0 };
  }
  return data;
}

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(initState);
  function getCart() {
    const data = getDataFromLS();
    setCart(data);
  }

  // function addToyToCart(toy) {
  //   const data = getDataFromLS();
  //   data.toys.push({ ...toy, count: 1, subPrice: toy.price });
  //   data.totalPrice = data.toys.reduce((acc, item) => acc + item.subPrice, 0);
  //   localStorage.setItem("cart", JSON.stringify(data));
  //   getCart();
  // }

  function addToyToCart(toy) {
    const data = getDataFromLS();
    if (!data.toys) {
      data.toys = []; // Инициализируем массив, если его нет
    }
    data.toys.push({ ...toy, count: 1, subPrice: toy.price });
    data.totalPrice = data.toys.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function deleteToyFromCart(id) {
    const data = getDataFromLS();
    data.toys = data.toys.filter((item) => item.id !== id);
    data.totalPrice = data.toys.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function increaseCount(id) {
    const data = getDataFromLS();
    data.toys = data.toys.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.subPrice += item.price;
      }
      return item;
    });
    data.totalPrice = data.toys.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function decreaseCount(id) {
    const data = getDataFromLS();
    data.toys = data.toys.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.subPrice -= item.price;
      }
      return item;
    });
    data.totalPrice = data.toys.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  // function isAlreadyInCart(id) {
  //   const data = getDataFromLS();
  //   let isInCart = false;
  //   if (data.toys.length > 0) {
  //     isInCart = data.toys.some((item) => item.id === id);
  //   }
  //   return isInCart;
  // }

  function isAlreadyInCart(id) {
    const data = getDataFromLS();
    if (!data.toys) {
      return false; // Возвращаем false, если корзина пуста или её данные отсутствуют
    }
    return data.toys.some((item) => item.id === id);
  }

  const value = {
    cart,
    getCart,
    addToyToCart,
    deleteToyFromCart,
    increaseCount,
    decreaseCount,
    isAlreadyInCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContext;
