import React, { useState } from "react";
import "./SingleProduct.css";

const SingleProduct = ({ allInventory }) => {
  const { id } = useParams();
  const product = allInventory.find((element) => {
    if (element.id === id) {
      return true;
    } else {
      return false;
    }
  });
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
