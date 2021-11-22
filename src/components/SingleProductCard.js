import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingleProductCard.css";
import { SingleProduct } from ".";

const SingleProductCard = ({ product }) => {
  console.log(product.price, "product price");
  const price = product.price / 100;

  return (
    <div className="single-product-card-main-container">
      <Link
        to={`/single-product/${product.id}`}
        onClick={() => {
          <SingleProduct />;
        }}
      >
        <h1 className="single-product-card-name">{product.name}</h1>
      </Link>
      <h3 className="single-product-card-description">{product.description}</h3>
      <div className="single-product-card-inner-container">
        <p className="single-product-card-price">Price: $ {price}</p>
        <p className="single-product-card-count">
          Items in stock: {product.count}
        </p>
      </div>
    </div>
  );
};

export default SingleProductCard;
