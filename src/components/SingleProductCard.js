import React, { useState } from "react";

const SingleProductCard = ({ product }) => {
  console.log(product, "invividual product");
  const price = String(product.price);
  const newPrice = price.splice(price.length - 2, 0, ".");
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.description}</h3>
      <div>
        <p>$ {newPrice}</p>
        <p>{product.count}</p>
      </div>
    </div>
  );
};

export default SingleProductCard;
