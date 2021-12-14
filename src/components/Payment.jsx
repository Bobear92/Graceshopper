import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  let history = useHistory();

  const handleUser = async () => {
    const user = await getUserByUsername(username);
    setUserId(user.id);
  };
  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className="payment-outer">
      <div className="payment-title">
        <div className="payment-p">
          <h1>Your order</h1>
        </div>
      </div>
      <div className="grandmaster-container">
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
      </div>
      <div className="payment-price-outer">
        <div className="payment-price">
          <p>Total price</p>
          <p>$ {totalPrice / 100}</p>
        </div>
      </div>
      <div className="payment-button-outer">
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
              history.push("/");
            } catch (error) {
              throw error;
            }
          }}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
