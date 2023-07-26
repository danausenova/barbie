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
      {/* <header className="section-cart__header">
        <div className="container">
          <h1 className="title-1">Cart</h1>
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
                <button class="btn">
                  <div class="wrapper">
                    <p class="text">Order</p>

                    <div class="flower flower1">
                      <div class="petal one"></div>
                      <div class="petal two"></div>
                      <div class="petal three"></div>
                      <div class="petal four"></div>
                    </div>
                    <div class="flower flower2">
                      <div class="petal one"></div>
                      <div class="petal two"></div>
                      <div class="petal three"></div>
                      <div class="petal four"></div>
                    </div>
                    <div class="flower flower3">
                      <div class="petal one"></div>
                      <div class="petal two"></div>
                      <div class="petal three"></div>
                      <div class="petal four"></div>
                    </div>
                    <div class="flower flower4">
                      <div class="petal one"></div>
                      <div class="petal two"></div>
                      <div class="petal three"></div>
                      <div class="petal four"></div>
                    </div>
                    <div class="flower flower5">
                      <div class="petal one"></div>
                      <div class="petal two"></div>
                      <div class="petal three"></div>
                      <div class="petal four"></div>
                    </div>
                    <div class="flower flower6">
                      <div class="petal one"></div>
                      <div class="petal two"></div>
                      <div class="petal three"></div>
                      <div class="petal four"></div>
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
