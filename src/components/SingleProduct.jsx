import React from "react";
import { useParams } from "react-router";
import "./SingleProduct.css";

const SingleProduct = ({ allInventory, setCart, cart }) => {
  const { id } = useParams();
  const product = allInventory.find((element) => element.id == id);

  return (
    <div className="single-product-main-container">
      <h1 className="single-product-name">{product.name}</h1>
      <h3 className="single-product-description">{product.description}</h3>
      <div className="single-product-inner-container">
        <p className="single-product-price">{product.price / 100}</p>
        <p className="single-product-count">{product.count}</p>
      </div>
      <button
        className="single-product-button"
        onClick={() => {
          setCart([product, ...cart]);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
