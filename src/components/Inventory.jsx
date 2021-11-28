import React from "react";
import { SingleProductCard } from ".";
import { Fragment } from "react";
import "./Inventory.css";

const Inventory = ({ allInventory }) => {
  return (
    <div className="inventory-main-container">
      {allInventory.map((product) => {
        return (
          <Fragment key={`products in inventory: ${product.id}`}>
            <SingleProductCard product={product} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Inventory;
