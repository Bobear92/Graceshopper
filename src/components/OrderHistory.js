import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { getInventoryById } from "../api";
import { SingleProductCard } from "./";

const OrderHistory = ({ history, allInventory }) => {
  //   console.log(history);
  //   const products = history.productArray;
  //   console.log(products, "products in order history");
  //   const prices = history.historicalPrice;
  //   const currentOrderInventory = products.map((id) => {
  //     console.log(id, "id in map");
  //     return allInventory.find((element) => {
  //       return (element.id = id);
  //     });
  //   });
  //   console.log(currentOrderInventory, "oder history 13");

  const [orderHistory, setOrderHistory] = useState([]);
  const productArray = history.productArray;
  const priceArray = history.historicalPrice;
  //   console.log(history.id, "history id");
  //   console.log(productArray, "product array");

  const handleHistory = async () => {
    // console.log("can i see this?");
    const myOrder = productArray.map(async (id) => {
      const product = await getInventoryById(id);
      console.log(product, "product in map");
      return product;
    });
    console.log(myOrder, "order inside of map in order history");
    setOrderHistory(myOrder);
  };

  useEffect(() => {
    handleHistory();
  }, []);

  //   console.log(orderHistory, "order history in order history outside of map");
  return (
    <div className="order-history-main-container">
      <p>Order</p>
      {orderHistory && orderHistory.length
        ? orderHistory.map((product) => {
            // console.log(product, "product in map in order history");
            return <SingleProductCard product={product} />;
          })
        : null}
    </div>
  );
};

export default OrderHistory;
