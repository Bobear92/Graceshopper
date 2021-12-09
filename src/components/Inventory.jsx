import React, { Fragment } from "react";
import { SingleProductCard } from ".";
import "./Inventory.css";

const Inventory = ({ allInventory }) => {
  return (
    <div className="inventory-main-container">
      <div className="inventory-left-container"></div>
      <div className="inventory-product-container">
        {allInventory.map((product) => {
          return (
            <Fragment key={`products in inventory: ${product.id}`}>
              <SingleProductCard product={product} />
            </Fragment>
          );
        })}
      </div>
      <div className="inventory-right-container"></div>
    </div>
  );
};

export default Inventory;
