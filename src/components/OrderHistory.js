import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { getInventoryById } from "../api";
import { SingleProductCard } from "./";

const OrderHistory = ({ history }) => {
  const [orderHistory, setOrderHistory] = useState([]);
  const productArray = history.productArray;
  const priceArray = history.historicalPrice;

  const handleHistory = async () => {
    const myOrder = await Promise.all(
      productArray.map(async (id) => {
        const product = getInventoryById(id);
        return product;
      })
    );
    setOrderHistory(myOrder);
  };

  useEffect(() => {
    handleHistory();
  }, []);

  return (
    <div className="order-history-main-container">
      <p>Order</p>
      {orderHistory && orderHistory.length
        ? orderHistory.map((product) => {
            return (
              <SingleProductCard
                key={`order history key:${product.id} ${history.id}`}
                product={product}
              />
            );
          })
        : null}
    </div>
  );
};

export default OrderHistory;
