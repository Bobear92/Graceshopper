import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import "./SingleProduct.css";
import { updateProductCount } from "../api";

const SingleProduct = ({ allInventory, setCart, cart }) => {
  const { id } = useParams();
  const product = allInventory.find((element) => element.id == id);
  let history = useHistory();

  return (
    <div className="single-product-outer">
      <div className="single-product-main-container">
        <h1 className="single-product-card-name ">{product.name}</h1>
        <div>
          <img src="https://rukminim1.flixcart.com/image/312/312/j2c6du80/ear-and-nose-plug/y/q/6/soundproof-earplugs-soft-protector-noise-reduction-travel-sleep-original-imaetzzwvbmsm2wc.jpeg?q=70"></img>
        </div>
        <h3 className="single-product-card-description">
          {product.description}
        </h3>
        <div className="single-product-inner-container">
          <p className="single-product-card-price">{product.price / 100}</p>
          <p className="single-product-card-count">{product.count}</p>
        </div>
        <button
          className="single-product-button"
          onClick={async (event) => {
            event.preventDefault();
            try {
              setCart([product, ...cart]);
              await updateProductCount(product.id, product.count - 1);
              history.push("/products");
            } catch (error) {
              throw error;
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
