import React, { useEffect, useState } from "react";
import Cross from "../components/picture/cross.svg";
import Down from "../components/picture/icon-down.svg";
import Up from "../components/picture/icon-up.svg";
import { useCartContext } from "../contexts/CartContext";

const CartPage = () => {
  const { cart, getCart, deleteToyFromCart, decreaseCount, increaseCount } =
    useCartContext();

  useEffect(() => {
    getCart();
  }, []);
  return (
    <section className="section-cart">
      {/* <header classNameName="section-cart__header">
        <div classNameName="container">
          <h1 classNameName="title-1">Cart</h1>
        </div>
      </header> */}
      <div className="section-cart__body">
        <div className="container">
          <section className="cart">
            <header className="cart-header">
              <div className="cart-header__title">Title</div>
              <div className="cart-header__count">Amount</div>
              <div className="cart-header__cost">Price</div>
              <div className="cart-header__cost">SubPrice</div>
            </header>
            {cart.toys.map((item) => (
              <section className="product" key={item.id}>
                <div className="product__img">
                  <img src={item.image1} alt="Apple MacBook Air 13" />
                </div>
                <div className="product__title">{item.title}</div>
                <div className="product__price">${item.price}</div>
                <div className="product__count">
                  <div className="count">
                    <div className="count__box">
                      <input
                        type="number"
                        className="count__input"
                        min="1"
                        max="100"
                        value={item.count}
                      />
                    </div>
                    <div className="count__controls">
                      <button
                        type="button"
                        className="count__up"
                        onClick={() => increaseCount(item.id)}
                      >
                        <img src={Up} alt="Increase" />
                      </button>
                      <button
                        type="button"
                        className="count__down"
                        onClick={() => {
                          if (item.count <= 1) {
                            return;
                          } else {
                            decreaseCount(item.id);
                          }
                        }}
                      >
                        <img src={Down} alt="Decrease" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product__price">${item.subPrice}</div>
                <div className="product__controls">
                  <button
                    type="button"
                    onClick={() => deleteToyFromCart(item.id)}
                  >
                    <img src={Cross} alt="Delete" />
                  </button>
                </div>
              </section>
            ))}

            <footer className="cart-footer">
              <div className="cart-footer__price">${cart.totalPrice}</div>
            </footer>
            <section>
              <div className="cart-order">
                <button className="btn">
                  <div className="wrapper">
                    <p className="text">Order</p>

                    <div className="flower flower1">
                      <div className="petal one"></div>
                      <div className="petal two"></div>
                      <div className="petal three"></div>
                      <div className="petal four"></div>
                    </div>
                    <div className="flower flower2">
                      <div className="petal one"></div>
                      <div className="petal two"></div>
                      <div className="petal three"></div>
                      <div className="petal four"></div>
                    </div>
                    <div className="flower flower3">
                      <div className="petal one"></div>
                      <div className="petal two"></div>
                      <div className="petal three"></div>
                      <div className="petal four"></div>
                    </div>
                    <div className="flower flower4">
                      <div className="petal one"></div>
                      <div className="petal two"></div>
                      <div className="petal three"></div>
                      <div className="petal four"></div>
                    </div>
                    <div className="flower flower5">
                      <div className="petal one"></div>
                      <div className="petal two"></div>
                      <div className="petal three"></div>
                      <div className="petal four"></div>
                    </div>
                    <div className="flower flower6">
                      <div className="petal one"></div>
                      <div className="petal two"></div>
                      <div className="petal three"></div>
                      <div className="petal four"></div>
                    </div>
                  </div>
                </button>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
