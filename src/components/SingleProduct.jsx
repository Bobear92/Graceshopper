import React, { useState } from "react";
import { useParams } from "react-router";
import "./SingleProduct.css";

const SingleProduct = ({ allInventory }) => {
  const { id } = useParams();
  console.log(typeof id, allInventory, "!!!!!!!");
  // const product = allInventory.find((element) => {
  //   console.log(element, "<<<<<<<<<< This is the Element!!");
  //   console.log(element.id, "Context!!");
  //   if (element.id === id) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const product = allInventory.find((element) => element.id == id);

  console.log(product, "Line 20!");
  return (
    <div className="single-product-main-container">
      <h1 className="single-product-name">{product.name}</h1>
      <h3 className="single-product-description">{product.description}</h3>
      <div className="single-product-inner-container">
        <p className="single-product-price">{product.price}</p>
        <p className="single-product-count">{product.count}</p>
      </div>
      <button className="single-product-button">Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
