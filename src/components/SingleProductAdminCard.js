import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SingleProductAdminCard.css";
import { getUser } from "../auth";
import { getUserByUsername } from "../api";

const SingleProductAdminCard = ({ product }) => {
  const [admin, setAdmin] = useState(false);
  const username = getUser();

  const handleUser = async () => {
    const user = await getUserByUsername(username);

    if (user.admin) {
      setAdmin(true);
    }
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <div className="single-product-card-main-container">
      <Link to={`/single-product/${product.id}`}>
        <h1 className="single-product-card-name">{product.name}</h1>
      </Link>
      <h3 className="single-product-card-description">{product.description}</h3>
      <div className="single-product-card-inner-container">
        <p className="single-product-card-price">
          Price: $ {product.price / 100}
        </p>
        <p className="single-product-card-count">
          Items in stock: {product.count}
        </p>
        {admin ? <button>Delete Product</button> : null}
      </div>
    </div>
  );
};

export default SingleProductAdminCard;
