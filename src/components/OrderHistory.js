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
      {orderHistory && orderHistory.length
        ? orderHistory.map((product, idx) => {
            return (
              <SingleProductCard
                key={`order history key:${product.id} ${history.id}: ${idx}`}
                product={product}
              />
            );
          })
        : null}
    </div>
  );
};

export default OrderHistory;
