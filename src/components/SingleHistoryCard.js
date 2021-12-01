import React, { useState, useEffect } from "react";
import { SingleProductCard } from ".";
import { getInventoryById } from "../api";
import "./SingleHistoryCard.css";

const SingleHistoryCard = ({ history }) => {
  const [orderHistory, setOrderHistory] = useState({});
  const productArray = history.productArray;
  const priceArray = history.historicalPrice;

  const handleHistory = async () => {
    productArray.map(async (id) => {
      const product = await getInventoryById(id);
      setOrderHistory([product, ...orderHistory]);
    });
  };

  useEffect(() => {
    // handleHistory();
  }, []);

  //   console.log(orderHistory, "order history in history card");

  return <div className="history-main-container"></div>;
};

export default SingleHistoryCard;
