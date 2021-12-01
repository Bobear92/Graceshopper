import React, { useEffect, useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./User.css";
import { SingleProductCard, SingleHistoryCard } from ".";
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
    handleHistory();
  }, [userId]);

  console.log(orderHistory, "history in users");

  return (
    <>
      <div className="cart-main-container">Cart</div>
      {cart.map((item) => {
        return (
          <Fragment key={`items in cart: ${item.id}`}>
            <SingleProductCard product={item} />
          </Fragment>
        );
      })}
      <NavLink className="nav-checkout-button" to="/payment">
        Checkout
      </NavLink>
      <div className="history-main-container">
        <p>Order History</p>
        {orderHistory && orderHistory.length
          ? orderHistory.map((item) => {
              return (
                <Fragment key={`history: ${item.id}`}>
                  <SingleHistoryCard history={item} />
                </Fragment>
              );
            })
          : null}
      </div>
    </>
  );
};

export default User;
