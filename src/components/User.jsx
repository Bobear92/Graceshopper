import React, { useEffect, useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./User.css";
import { SingleProductCard, OrderHistory } from ".";
import { getUserByUsername, history } from "../api";
import { getUser } from "../auth";

const User = ({ cart }) => {
  const [userId, setUserId] = useState(0);
  const [orderHistory, setOrderHistory] = useState([]);
  const username = getUser();

  const handleUser = async () => {
    const user = await getUserByUsername(username);
    setUserId(user.id);
  };
  const handleHistory = async () => {
    const orders = await history(userId);
    setOrderHistory(orders);
  };
  useEffect(() => {
    handleUser();
  }, []);
  useEffect(() => {
    handleHistory();
  }, [userId]);

  return (
    <>
      <div className="cart-main-container">
        <h1 className="cart-label">Cart</h1>

        <div className="cart-items-container">
          {cart.map((item, idx) => {
            return (
              <Fragment key={`items in cart: ${item.id}; ${idx} `}>
                <SingleProductCard product={item} />
              </Fragment>
            );
          })}
        </div>
        <NavLink className="nav-checkout-button" to="/payment">
          Checkout
        </NavLink>
      </div>
      <div className="history-main-container">
        <p>Order History</p>
        {orderHistory && orderHistory.length
          ? orderHistory.map((item, idx) => {
              return (
                <Fragment key={`history: ${item.id}; ${idx}; ${idx}`}>
                  <OrderHistory history={item} />
                </Fragment>
              );
            })
          : null}
      </div>
    </>
  );
};

export default User;
