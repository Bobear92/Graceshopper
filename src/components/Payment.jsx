import React, { useState, Fragment, useEffect } from "react";
import "./Payment.css";
import { SingleProductCard } from ".";
import { getUserByUsername, storeCart } from "../api";
import { getUser } from "../auth";

const Payment = ({ cart, setCart }) => {
  const [userId, setUserId] = useState(0);
  let totalPrice = 0;
  let idArray = [];
  let priceArray = [];
  const username = getUser();
  const completed = true;

  const handleUser = async () => {
    const user = await getUserByUsername(username);
    setUserId(user.id);
  };
  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className="payment-page-main-container">
      <p>Your order</p>
      {cart.map((item) => {
        totalPrice += item.price;
        idArray.push(item.id);
        priceArray.push(item.price);
        return (
          <Fragment key={`items in cart: ${item.id}`}>
            <SingleProductCard product={item} />
          </Fragment>
        );
      })}
      <div>
        <p>Total price</p>
        <p>{totalPrice / 100}</p>
      </div>
      <button
        className="payment-button"
        onClick={async (event) => {
          event.preventDefault();
          try {
            await storeCart(userId, idArray, completed, priceArray);
            setCart([]);
            totalPrice = 0;
            idArray = [];
            priceArray = [];
          } catch (error) {
            throw error;
          }
        }}
      >
        Pay
      </button>
    </div>
  );
};

export default Payment;
