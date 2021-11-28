import React, { Fragment } from "react";
import { SingleProductCard } from ".";
import { getUserByUsername, storeCart } from "../api";
import { getUser } from "../auth";

const Payment = ({ cart, setCart }) => {
  let totalPrice = 0;
  let idArray = [];
  let priceArray = [];
  const username = getUser();
  const user = await getUserByUsername(username);
  const userId = user.id;
  const completed = true;
  console.log(user, "please!");

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
        onClick={() => {
          await storeCart(userId, idArray, completed, priceArray);
          setCart([]);
          totalPrice = 0;
          idArray = [];
          priceArray = [];
        }}
      >
        Pay
      </button>
    </div>
  );
};

export default Payment;
