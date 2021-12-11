import React, { useState } from "react";
import "./AddProduct.css";
import { createProduct } from "../api";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  return (
    <div className="add-product-main-component">
      <form
        id="add product"
        onSubmit={async (event) => {
          //   event.preventDefault();
          try {
            const data = await createProduct({
              name,
              description,
              price,
              count,
            });
            setName("");
            setDescription("");
            setPrice(0);
            setCount(0);
          } catch (error) {
            console.log(error.response.data.error);
            setError(error);
          }
        }}
      >
        <fieldset className="add-product-input">
          <label htmlFor="name">Name </label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </fieldset>

        <fieldset className="add-product-description-input">
          <label htmlFor="description">Description </label>
          <textarea
            id="description"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </fieldset>
        <fieldset className="add-product-input">
          <label htmlFor="price">Price </label>
          <input
            id="price"
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="add-product-input">
          <label htmlFor="count">Count </label>
          <input
            id="count"
            type="number"
            placeholder="Enter count"
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
          ></input>
        </fieldset>

        <div className="button-outer">
          <button type="submit" className="add-product-interface-button">
            Submit
          </button>
        </div>
        {error && <p>{error.response.data.error}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
