import React, { Fragment } from "react";
import { SingleProductCard } from ".";
import { storeCart } from "../api";

const Payment = ({ cart, setCart }) => {
  let totalPrice = 0;
  let idArray = [];
  let priceArray = [];

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
          await storeCart(idArray, priceArray);
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
