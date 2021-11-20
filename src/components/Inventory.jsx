import React, { useState } from "react";
import { SingleProductCard } from ".";
import { Fragment } from "react";

const Inventory = ({ allInventory }) => {
  return (
    <div>
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
