import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./User.css";
import { SingleProductCard } from ".";

const User = ({ cart, setCart }) => {
  console.log(cart, "this is the cart!");

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
    </>
  );
};

export default User;
