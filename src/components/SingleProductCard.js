import React from "react";
import { Link } from "react-router-dom";
import "./SingleProductCard.css";

const SingleProductCard = ({ product }) => {
  return (
    <div className="single-product-card-main-container">
      <Link to={`/single-product/${product.id}`}>
        <h1 className="single-product-card-name">{product.name}</h1>
      </Link>
      <div>
        <img src="https://rukminim1.flixcart.com/image/312/312/j2c6du80/ear-and-nose-plug/y/q/6/soundproof-earplugs-soft-protector-noise-reduction-travel-sleep-original-imaetzzwvbmsm2wc.jpeg?q=70"></img>
      </div>
      <h3 className="single-product-card-description">{product.description}</h3>
      <div className="single-product-card-inner-container">
        <p className="single-product-card-price">
          Price: $ {product.price / 100}
        </p>
        <p className="single-product-card-count">
          Items in stock: {product.count}
        </p>
      </div>
    </div>
  );
};

export default SingleProductCard;
